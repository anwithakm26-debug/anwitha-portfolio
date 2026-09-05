"use client";

import React, { useState } from "react";
import AnimatedCharacter from "./AnimatedCharacter";

export default function IntroExperience() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isWaving, setIsWaving] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="text-center z-10 max-w-xl">
        {/* Character */}
       interface AvatarProps {
  isSpeaking?: boolean;
  isWaving?: boolean;
  isSmiling?: boolean;
}

const AvatarComponent = ({ isSpeaking, isWaving, isSmiling }: AvatarProps) => {
  // ...
};
        <div className="mt-8 space-y-4">
          <p className="text-xl text-purple-200 font-medium">
            Stage 1 & 2 Preview: Character Idle + Blink + Wave State
          </p>

          <div className="flex gap-4 justify-center pt-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}