import { NextRequest, NextResponse } from "next/server";

export type StrorageMessage = {
  input: string;
  output?: string;
  tokens?: string;
  history: string;
  model_config?: string;
  access_token?: string;
};

async function handle(req: NextRequest) {
  //await new Promise(r => setTimeout(r, 5000));

  const bodyText = await req.text();
  const data = JSON.parse(bodyText);

  //const history = JSON.stringify(data.history)
  const history = null;
  const model_config = JSON.stringify(data.model_config);
  const access_token = data.access_token;

  try {
    //await sql`INSERT INTO message (input, output, tokens,history,model_config,access_token) VALUES (${data.input}, ${data.output}, ${data.tokens}, ${history},${model_config}, ${access_token});`;
  } catch (error) {
    console.log([bodyText, error]);
  }
  return NextResponse.json({ status: "ok" });
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
