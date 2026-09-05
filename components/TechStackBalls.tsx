"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const SKILLS = [
  { name: "Python", bg: "#3776AB", text: "#FFFFFF" },
  { name: "Java", bg: "#007396", text: "#FFFFFF" },
  { name: "C++", bg: "#00599C", text: "#FFFFFF" },
  { name: "SQL", bg: "#4479A1", text: "#FFFFFF" },
  { name: "HTML", bg: "#E34F26", text: "#FFFFFF" },
  { name: "CSS", bg: "#1572B6", text: "#FFFFFF" },
  { name: "JavaScript", bg: "#F7DF1E", text: "#000000" },
  { name: "React", bg: "#61DAFB", text: "#000000" },
  { name: "Next.js", bg: "#000000", text: "#FFFFFF" },
  { name: "DBMS", bg: "#336791", text: "#FFFFFF" },
  { name: "Git", bg: "#F05032", text: "#FFFFFF" },
  { name: "Firebase", bg: "#FFCA28", text: "#000000" },
];

export default function TechStackBalls() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const width = sceneRef.current.clientWidth;
    const height = 400;

    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    // Boundaries
    const ground = Matter.Bodies.rectangle(width / 2, height + 20, width, 40, { isStatic: true });
    const leftWall = Matter.Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true });

    // Spawn skill balls
    const balls = SKILLS.map((skill, index) => {
      const radius = 38;
      const x = (index % 4) * 80 + 100;
      const y = Math.floor(index / 4) * -60 - 50;

      return Matter.Bodies.circle(x, y, radius, {
        restitution: 0.7,
        friction: 0.1,
        render: {
          fillStyle: skill.bg,
          strokeStyle: "#FFFFFF",
          lineWidth: 2,
        },
      });
    });

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.Composite.add(engine.world, [ground, leftWall, rightWall, ...balls, mouseConstraint]);
    Matter.Runner.run(engine);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div className="w-full relative overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-800 p-4">
      <h3 className="text-2xl font-bold text-center mb-2 text-white">MY TECHSTACK</h3>
      <p className="text-center text-slate-400 text-sm mb-4">Interactive physics — Drag or toss the skill spheres!</p>
      <div ref={sceneRef} className="w-full h-[400px] cursor-grab active:cursor-grabbing flex justify-center" />
    </div>
  );
}