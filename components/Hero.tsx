```tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7f4ed]"
    >
      {/* Background decorative elements */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* LEFT SIDE — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Welcome to my portfolio
            </p>

            <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-6xl lg:text-7xl">
              Hi, I’m{" "}
              <span className="text-orange-500">
                Anwitha
              </span>
              <span className="block">
                Full Stack Developer.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              I create modern, interactive and user-friendly web experiences
              using technologies like React, Next.js, JavaScript and more.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gray-900 px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-500"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border-2 border-gray-900 px-7 py-3 font-semibold text-gray-900 transition hover:-translate-y-1 hover:bg-gray-900 hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE — CHARACTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
            }}
            className="relative flex min-h-[500px] items-center justify-center"
          >
            {/* Character glow/background */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-80 w-80 rounded-full bg-orange-200/50 blur-2xl"
            />

            {/* Character placeholder */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-[420px] w-[300px] items-center justify-center rounded-[45%] bg-gradient-to-b from-orange-100 to-orange-200 shadow-2xl"
            >
              <div className="text-center">
                <div className="text-8xl">👩🏻‍💻</div>

                <p className="mt-4 font-bold text-gray-800">
                  Anwitha
                </p>

                <p className="text-sm text-gray-600">
                  Developer
                </p>
              </div>
            </motion.div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-16 z-20 rounded-2xl bg-white px-5 py-3 shadow-xl"
            >
              <span className="text-sm font-semibold">
                💻 Coding
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 left-0 z-20 rounded-2xl bg-white px-5 py-3 shadow-xl"
            >
              <span className="text-sm font-semibold">
                ✨ Creative
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500"
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  );
}
```
