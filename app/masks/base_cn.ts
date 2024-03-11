import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    avatar: "2328-fe0f",
    name: "gpt-3.5-turbo",
    context: [],
    modelConfig: {
      model: "gpt-3.5-turbo",
      provider: "openai",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480510,
  },
  {
    avatar: "1f60e",
    name: "gpt-4-turbo-preview",
    context: [],
    modelConfig: {
      model: "gpt-4-turbo-preview",
      provider: "openai",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480510,
  },
  {
    avatar: "1f60e",
    name: "llama2",
    context: [],
    modelConfig: {
      model: "meta-llama/Llama-2-70b-chat-hf",
      provider: "anyscale",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1700713360000,
  },
  {
    avatar: "1f60e",
    name: "Claude",
    context: [],
    modelConfig: {
      model: "claude-3-opus-20240229",
      provider: "claude",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1700713360000,
  },
];
