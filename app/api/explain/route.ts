import { NextResponse } from "next/server";
import { groq } from "@/lib/aiClient";

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    if (!topic || topic.trim() === "") {
      return NextResponse.json(
        { error: "Please enter a topic to continue." },
        { status: 400 }
      );
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an expert academic tutor. 
          Explain the user's topic clearly for a student.
          
          STRICT FORMATTING RULES:
          1. Use clear section headers: "Definition:", "The Analogy:", and "Must-know Facts:".
          2. Use DOUBLE NEW LINES between every section.
          3. Use a bulleted list (starting with "-") for the facts.
          4. Keep the tone encouraging but professional.`
        },
        {
          role: "user",
          content: `Explain the topic: ${topic}`
        }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5, 
      max_tokens: 600,
    });

    const explanation = completion.choices[0]?.message?.content;

    if (!explanation) {
      throw new Error("No explanation generated");
    }

    return NextResponse.json({
      explanation: explanation,
    });

  } catch (error: any) {
    console.error("Groq API Error:", error);
    return NextResponse.json(
      { error: "The AI tutor is briefly unavailable. Please try again in a moment." },
      { status: 500 }
    );
  }
}