import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth";
import { getServerSideConfig } from "@/app/config/server";
import { GEMINI_BASE_URL, Google, ModelProvider } from "@/app/constant";

async function handle(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  console.log("[Together Route] params ", params);

  if (req.method === "OPTIONS") {
    return NextResponse.json({ body: "OK" }, { status: 200 });
  }

  const controller = new AbortController();

  let baseUrl = "https://api.together.xyz";

  if (!baseUrl.startsWith("http")) {
    baseUrl = `https://${baseUrl}`;
  }

  if (baseUrl.endsWith("/")) {
    baseUrl = baseUrl.slice(0, -1);
  }

  let path = `${req.nextUrl.pathname}`.replaceAll("/api/together/", "");

  console.log("[Together Proxy] ", path);
  console.log("[Together Base Url]", baseUrl);

  const timeoutId = setTimeout(
    () => {
      controller.abort();
    },
    10 * 60 * 1000,
  );

  const bearToken = req.headers.get("Authorization") ?? "";

  if (!bearToken) {
    return NextResponse.json(
      {
        error: true,
        message: `missing TOGETHER_API_KEY in server env vars`,
      },
      {
        status: 401,
      },
    );
  }

  const fetchUrl = `${baseUrl}/${path}`;
  console.log("[Together Fetch] ", fetchUrl);
  const fetchOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      Authorization: `Bearer 329d666e26c1e16f75e36726f09eb69701ab07b739b1974a7d328eee6de26ddc`,
    },

    method: req.method,
    body: req.body,
    // to fix #2485: https://stackoverflow.com/questions/55920957/cloudflare-worker-typeerror-one-time-use-body
    redirect: "manual",
    // @ts-ignore
    duplex: "half",
    signal: controller.signal,
  };

  try {
    const clonedBody = await req.text();
    fetchOptions.body = clonedBody;
    const jsonBody = JSON.parse(clonedBody) as { model?: string };
    console.log("[Together Fetch Options] ", jsonBody);

    const res = await fetch(fetchUrl, fetchOptions);
    // to prevent browser prompt for credentials
    const newHeaders = new Headers(res.headers);
    newHeaders.delete("www-authenticate");
    // to disable nginx buffering
    newHeaders.set("X-Accel-Buffering", "no");

    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers: newHeaders,
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
export const preferredRegion = [
  "bom1",
  "cle1",
  "cpt1",
  "gru1",
  "hnd1",
  "iad1",
  "icn1",
  "kix1",
  "pdx1",
  "sfo1",
  "sin1",
  "syd1",
];
