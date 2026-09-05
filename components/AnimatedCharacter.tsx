"use client";

import { useEffect, useState } from "react";

interface AnimatedCharacterProps {
  isSpeaking?: boolean;
  isWaving?: boolean;
  isSmiling?: boolean;
}

export default function AnimatedCharacter({
  isSpeaking = false,
  isWaving = true,
  isSmiling = true,
}: AnimatedCharacterProps) {
  const [isBlinking, setIsBlinking] = useState(false);

  // Automatic blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);

      setTimeout(() => {
        setIsBlinking(false);
      }, 150);
    }, 3500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div
      className={`character-wrapper ${
        isWaving ? "character-waving" : ""
      }`}
    >
      {/* Glow */}
      <div className="character-glow" />

      {/* Floating particles */}
      <span className="particle particle-one">✦</span>
      <span className="particle particle-two">✧</span>
      <span className="particle particle-three">✦</span>

      {/* Character */}
      <div className="relative">
        <img
          src="/avatar.png"
          alt="Anwitha animated character"
          className="character-image"
        />

        {/* Speaking indicator */}
        {isSpeaking && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-bounce" />
            <span className="h-3 w-2 rounded-full bg-purple-500 animate-bounce [animation-delay:100ms]" />
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-bounce [animation-delay:200ms]" />
          </div>
        )}

        {/* Smile indicator */}
        {isSmiling && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl">
            😊
          </div>
        )}

        {/* Blink indicator */}
        {isBlinking && (
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-sm">
            ✨
          </div>
        )}
      </div>

      {/* Speech bubble */}
      <div className="character-bubble">
        <span>👋</span>
        Hi! Welcome to my portfolio!
      </div>
    </div>
  );
}