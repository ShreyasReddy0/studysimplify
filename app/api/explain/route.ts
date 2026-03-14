import { NextResponse } from "next/server";
import { geminiModel } from "@/lib/aiClient";

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    if (!topic || topic.trim() === "") {
      return NextResponse.json(
        { error: "Please enter a topic to continue." },
        { status: 400 }
      );
    }

    const prompt = `You are an expert academic tutor. 
    Explain the topic: ${topic} clearly for a student.
    
    STRICT FORMATTING RULES:
    1. Use clear section headers: "Definition:", "The Analogy:", and "Must-know Facts:".
    2. Use DOUBLE NEW LINES between every section.
    3. Use a bulleted list (starting with "-") for the facts.
    4. Keep the tone encouraging but professional.`;

    const result = await geminiModel.generateContent(prompt);
    const explanation = result.response.text();

    if (!explanation) {
      throw new Error("No explanation generated");
    }

    return NextResponse.json({
      explanation: explanation,
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: "The Gemini tutor is briefly unavailable. Please try again in a moment." },
      { status: 500 }
    );
  }
}
