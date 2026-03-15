"use client";

import { useState, useEffect } from "react";

interface TopicInputProps {
  onExplain: (topic: string) => void;
  loading: boolean;
}

export default function TopicInput({ onExplain, loading }: TopicInputProps) {
  const [topic, setTopic] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const examples = ["Photosynthesis", "Newton’s Laws", "Binary Search", "World War II"];
  const [exampleIndex, setExampleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = examples[exampleIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting
    const delayBetweenWords = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentFullText.length) {
        // Typing
        setPlaceholder(currentFullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setPlaceholder(currentFullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentFullText.length) {
        // Pause at the end of the word before deleting
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        setIsDeleting(false);
        setExampleIndex((prev) => (prev + 1) % examples.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, exampleIndex]);

  const handleSubmit = () => {
    if (!topic.trim()) {
      alert("Please enter a topic first!");
      return;
    }
    onExplain(topic);
  };

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
        placeholder={`Enter a topic (e.g., ${placeholder})`}
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
