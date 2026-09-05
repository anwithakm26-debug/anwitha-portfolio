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

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);

      setTimeout(() => {
        setIsBlinking(false);
      }, 150);
    }, 3500);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div
      className={`character-wrapper ${
        isWaving ? "character-waving" : ""
      }`}
    >
      <div className="character-glow" />

      <span className="particle particle-one">✦</span>
      <span className="particle particle-two">✧</span>
      <span className="particle particle-three">✦</span>

      <div className="relative">
        <img
          src="/avatar.png"
          alt="Anwitha animated character"
          className="character-image"
        />

        {isSpeaking && (
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-1">
            <span className="h-2 w-2 animate-bounce rounded-full bg-purple-500" />
            <span className="h-3 w-2 animate-bounce rounded-full bg-purple-500 [animation-delay:100ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-purple-500 [animation-delay:200ms]" />
          </div>
        )}

        {isSmiling && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl">
            😊
          </div>
        )}

        {isBlinking && (
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 text-sm">
            ✨
          </div>
        )}
      </div>

      <div className="character-bubble">
        <span>👋</span>
        Hi! Welcome to my portfolio!
      </div>
    </div>
  );
}