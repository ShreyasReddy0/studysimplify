import Groq from "groq-sdk";

// We use 'as string' to tell TypeScript we've got this handled
const apiKey = process.env.GROQ_API_KEY as string;

if (!apiKey) {
  console.warn("⚠️ GROQ_API_KEY is not set in .env.local");
}

export const groq = new Groq({
  apiKey: apiKey,
});