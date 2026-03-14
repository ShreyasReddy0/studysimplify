"use client";

import { useState } from "react";

interface TopicInputProps {
  onExplain: (topic: string) => void;
  loading: boolean;
}

export default function TopicInput({ onExplain, loading }: TopicInputProps) {
  const [topic, setTopic] = useState("");

  const handleSubmit = () => {
    if (!topic.trim()) {
      alert("Please enter a topic first!"); // Simple validation
      return;
    }
    onExplain(topic);
  };

  // Human touch: Allow pressing "Enter" to submit
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="w-full">
      <input
        type="text"
        value={topic}
        onKeyDown={handleKeyDown}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic (e.g., Photosynthesis)"
        className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-400 shadow-sm"
      />

      <button
        onClick={handleSubmit}
        disabled={loading || !topic.trim()}
        className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-all active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Analyzing Topic...
          </span>
        ) : (
          "Explain Topic"
        )}
      </button>
    </div>
  );
}