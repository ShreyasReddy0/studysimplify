import { Groq } from "groq-sdk";
const genAI = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const geminiModel = {
  generateContent: async (prompt: string) => {
    const response = await genAI.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
      max_tokens: 500,
      temperature: 0.7,
    });
    return {
      response: {
        text: () => response.choices[0]?.message?.content || ""
      }
    };
  }
};
