export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const DEFAULT_CORS_HOST = "https://a.nextweb.fun";
export const DEFAULT_API_HOST = `${DEFAULT_CORS_HOST}/api/proxy`;
export const OPENAI_BASE_URL = "https://api.openai.com";

export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum ApiPath {
  Cors = "/api/cors",
  OpenAI = "/api/openai",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
  Google = "Google",
  Anyscale = "Anyscale",
  Togeter = "Togeter",
}

export enum ModelProvider {
  GPT = "GPT",
  OpenAi = "OpenAi",
  ANYSCALE = "Anyscale",
  Togeter = "Togeter",
  GeminiPro = "GeminiPro",
  CLAUDE = "Claude",
}

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Azure = {
  ExampleEndpoint: "https://{resource-url}/openai/deployments/{deploy-id}",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  ChatPath: "v1beta/models/gemini-pro:generateContent",

  // /api/openai/v1/chat/completions
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = ``;
// export const DEFAULT_SYSTEM_TEMPLATE = `
// You are ChatGPT, a large language model trained by OpenAI.
// Knowledge cutoff: {{cutoff}}
// Current model: {{model}}
// Current time: {{time}}
// Latex inline: $x^2$
// Latex block: $$e=mc^2$$
// `;

export const SUMMARIZE_MODEL = "gpt-3.5-turbo";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  "gpt-4-turbo-preview": "2023-04",
  "gpt-4-1106-preview": "2023-04",
  "gpt-4-0125-preview": "2023-04",
  "gpt-4-vision-preview": "2023-04",
};

const openaiModels = [
  "gpt-3.5-turbo",
  "gpt-3.5-turbo-0301",
  "gpt-3.5-turbo-0613",
  "gpt-3.5-turbo-1106",
  "gpt-3.5-turbo-0125",
  "gpt-3.5-turbo-16k",
  "gpt-3.5-turbo-16k-0613",
  "gpt-4",
  "gpt-4-0314",
  "gpt-4-0613",
  "gpt-4-1106-preview",
  "gpt-4-0125-preview",
  "gpt-4-32k",
  "gpt-4-32k-0314",
  "gpt-4-32k-0613",
  "gpt-4-turbo",
  "gpt-4-turbo-preview",
  "gpt-4-vision-preview",
  "gpt-4-turbo-2024-04-09",
];

const anyscaleModels = [
  "meta-llama/Llama-3-70b-chat-hf",
  "meta-llama/Llama-2-70b-chat-hf",
];

const togeterModels = [
  "Gryphe/MythoMax-L2-13b",
  "NousResearch/Nous-Hermes-2-Mistral-7B-DPO",
  "teknium/OpenHermes-2p5-Mistral-7B",
  "upstage/SOLAR-10.7B-Instruct-v1.0",
  "WizardLM/WizardLM-13B-V1.2",
];

const anthropicModels = [
  "claude-3-sonnet-20240229",
  "claude-3-opus-20240229",
  "claude-3-haiku-20240307",
];

export const DEFAULT_MODELS = [
  ...openaiModels.map((name) => ({
    name,
    available: true,
    provider: {
      id: "openai",
      providerName: ModelProvider.OpenAi,
      providerType: "openai",
    },
  })),
  ...togeterModels.map((name) => ({
    name,
    available: true,
    provider: {
      id: "togeter",
      providerName: ModelProvider.Togeter,
      providerType: "togeter",
    },
  })),
  ...anyscaleModels.map((name) => ({
    name,
    available: true,
    provider: {
      id: "anyscale",
      providerName: ModelProvider.ANYSCALE,
      providerType: "anyscale",
    },
  })),
  ...anthropicModels.map((name) => ({
    name,
    available: true,
    provider: {
      id: "anthropic",
      providerName: ModelProvider.CLAUDE,
      providerType: "anthropic",
    },
  })),
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;
