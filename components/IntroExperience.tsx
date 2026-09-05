"use client";

import { useState } from "react";
import AnimatedCharacter from "./AnimatedCharacter";

export default function IntroExperience() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isWaving, setIsWaving] = useState(true);
  const [isSmiling, setIsSmiling] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="text-center z-10 max-w-xl">

        <AnimatedCharacter
          isSpeaking={isSpeaking}
          isWaving={isWaving}
          isSmiling={isSmiling}
        />

        <div className="mt-8 space-y-4">
          <p className="text-xl text-purple-200 font-medium">
            Welcome to my portfolio
          </p>

          <p className="text-gray-300">
            I&apos;m Anwitha, a passionate developer who loves creating
            modern and interactive web experiences.
          </p>

          <div className="flex gap-4 justify-center pt-4 flex-wrap">
            <button
              onClick={() => setIsWaving(!isWaving)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition"
            >
              Toggle Wave ({isWaving ? "ON" : "OFF"})
            </button>

            <button
              onClick={() => setIsSpeaking(!isSpeaking)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition"
            >
              Toggle Mouth Sync ({isSpeaking ? "ON" : "OFF"})
            </button>

            <button
              onClick={() => setIsSmiling(!isSmiling)}
              className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition"
            >
              Toggle Smile ({isSmiling ? "ON" : "OFF"})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}