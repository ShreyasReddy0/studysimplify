interface ExplanationCardProps {
  topic: string;
  explanation: string;
}

export default function ExplanationCard({ topic, explanation }: ExplanationCardProps) {
  if (!explanation) return null;

  return (
    <div className="mt-8 p-[2px] relative rounded-2xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 h-full w-full bg-[conic-gradient(#3b82f6_20deg,transparent_120deg)] animate-[spin_6s_linear_infinite]" />
      <div className="relative p-8 bg-white rounded-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-blue-600 rounded-full" />
          <h2 className="text-xl font-bold text-gray-900">
            Understanding {topic}
          </h2>
        </div> 
        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-[16px] font-normal">
          {explanation}
        </div>
        <div className="mt-8 pt-4 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400">
          <span>Simplified by StudySimplify AI</span>
          <span className="bg-gray-50 px-2 py-1 rounded">Gemini 1.5 Flash</span>
        </div>
      </div>
    </div>
  );
}
