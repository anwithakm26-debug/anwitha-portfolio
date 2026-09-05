"use client";

import { useState } from "react";

export default function AnimatedCharacter() {
  const [isWaving, setIsWaving] = useState(true);

  return (
    <div
      className={`character-wrapper ${
        isWaving ? "character-waving" : ""
      }`}
      onMouseEnter={() => setIsWaving(true)}
      onMouseLeave={() => setIsWaving(false)}
    >
      {/* Glow */}
      <div className="character-glow" />

      {/* Floating particles */}
      <span className="particle particle-one">✦</span>
      <span className="particle particle-two">✧</span>
      <span className="particle particle-three">✦</span>

      {/* Character */}
      <img
        src="/public/avatar.png"
        alt="Anwitha animated character"
        className="character-image"
      />

      {/* Speech bubble */}
      <div className="character-bubble">
        <span>👋</span>
        Hi! Welcome to my portfolio!
      </div>
    </div>
  );
}