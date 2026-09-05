"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Waving / Saying Hi Avatar SVG
const WavingAvatarSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    className="w-full h-full drop-shadow-xl"
  >
    <defs>
      {/* Outer Gradient Ring */}
      <linearGradient id="outerRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>

      {/* Inner Background */}
      <linearGradient id="innerBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f3e8ff" />
        <stop offset="100%" stopColor="#e9d5ff" />
      </linearGradient>
    </defs>

    {/* Outer Gradient Circle Frame */}
    <circle cx="150" cy="150" r="140" fill="url(#outerRing)" />

    {/* Inner Background Circle */}
    <circle cx="150" cy="150" r="115" fill="url(#innerBg)" />

    {/* Chair Back */}
    <rect x="105" y="105" width="90" height="100" rx="20" fill="#581c87" />

    {/* Torso / Shirt */}
    <path
      d="M 120 200 L 120 152 C 120 138, 180 138, 180 152 L 180 200 Z"
      fill="#9333ea"
    />

    {/* Left Arm Rested on Desk */}
    <path
      d="M 120 160 Q 105 180 115 198"
      stroke="#9333ea"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
    />

    {/* Right Arm Raised for Wave */}
    <path
      d="M 175 158 C 190 145, 195 130, 198 118"
      stroke="#9333ea"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
    />

    {/* Raised Hand */}
    <circle cx="200" cy="112" r="9" fill="#fbcfe8" />
    <path
      d="M 194 104 C 196 98, 202 98, 202 104"
      stroke="#fbcfe8"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 200 102 C 203 96, 208 97, 207 103"
      stroke="#fbcfe8"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />

    {/* Motion Wave Lines */}
    <path
      d="M 212 105 C 216 110, 216 116, 212 121"
      stroke="#ec4899"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 218 108 C 221 111, 221 114, 218 117"
      stroke="#8b5cf6"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Neck */}
    <rect x="142" y="132" width="16" height="18" fill="#fbcfe8" rx="2" />

    {/* Head */}
    <circle cx="150" cy="115" r="28" fill="#fbcfe8" />

    {/* Hair */}
    <path
      d="M 122 118 C 120 85, 180 85, 178 118 C 174 100, 126 100, 122 118 Z"
      fill="#3b0764"
    />

    {/* Glasses */}
    <rect
      x="128"
      y="108"
      width="18"
      height="15"
      rx="4"
      stroke="#7e22ce"
      strokeWidth="2.5"
      fill="none"
    />
    <rect
      x="154"
      y="108"
      width="18"
      height="15"
      rx="4"
      stroke="#7e22ce"
      strokeWidth="2.5"
      fill="none"
    />
    <line
      x1="146"
      y1="115"
      x2="154"
      y2="115"
      stroke="#7e22ce"
      strokeWidth="2.5"
    />

    {/* Eyes */}
    <circle cx="137" cy="115" r="2" fill="#1e1b4b" />
    <circle cx="163" cy="115" r="2" fill="#1e1b4b" />

    {/* Smile */}
    <path
      d="M 143 127 Q 150 133 157 127"
      stroke="#e11d48"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />

    {/* Desk */}
    <rect x="65" y="198" width="170" height="10" rx="5" fill="#64748b" />

    {/* Open Book / Laptop on Desk */}
    <path
      d="M 115 186 Q 132 182 150 188 L 150 198 Q 132 192 115 197 Z"
      fill="#ffffff"
    />
    <path
      d="M 185 186 Q 168 182 150 188 L 150 198 Q 168 192 185 197 Z"
      fill="#f8fafc"
    />
    <path
      d="M 112 188 Q 132 184 150 190 Q 168 184 188 188 L 188 199 Q 168 195 150 200 Q 132 195 112 199 Z"
      fill="#db2777"
    />

    {/* Speech Bubble saying "Hi! 👋" */}
    <g transform="translate(68, 62)">
      <rect
        x="0"
        y="0"
        width="48"
        height="28"
        rx="12"
        fill="#ffffff"
        stroke="#c084fc"
        strokeWidth="2"
      />
      <path d="M 32 28 L 38 35 L 24 28 Z" fill="#ffffff" />
      <path d="M 32 28 L 38 35" stroke="#c084fc" strokeWidth="2" />
      <text
        x="24"
        y="18"
        fontSize="13"
        fontWeight="bold"
        fontFamily="sans-serif"
        fill="#7e22ce"
        textAnchor="middle"
      >
        Hi! 👋
      </text>
    </g>
  </svg>
);

// Reading Avatar SVG (used in Education section)
const ReadingAvatarSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    className="w-full h-full drop-shadow-xl"
  >
    <defs>
      <linearGradient id="outerRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="50%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>

      <linearGradient id="innerBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f3e8ff" />
        <stop offset="100%" stopColor="#e9d5ff" />
      </linearGradient>
    </defs>

    <circle cx="150" cy="150" r="140" fill="url(#outerRing)" />
    <circle cx="150" cy="150" r="115" fill="url(#innerBg)" />
    <rect x="105" y="95" width="90" height="110" rx="20" fill="#581c87" />
    <path
      d="M 120 200 L 120 148 C 120 132, 180 132, 180 148 L 180 200 Z"
      fill="#9333ea"
    />
    <rect x="142" y="132" width="16" height="18" fill="#fbcfe8" rx="2" />
    <circle cx="150" cy="115" r="28" fill="#fbcfe8" />
    <path
      d="M 124 105 C 135 93, 165 93, 176 105 C 165 98, 135 98, 124 105 Z"
      fill="#3b0764"
    />
    <rect
      x="128"
      y="106"
      width="18"
      height="15"
      rx="4"
      stroke="#7e22ce"
      strokeWidth="2.5"
      fill="none"
    />
    <rect
      x="154"
      y="106"
      width="18"
      height="15"
      rx="4"
      stroke="#7e22ce"
      strokeWidth="2.5"
      fill="none"
    />
    <line
      x1="146"
      y1="113"
      x2="154"
      y2="113"
      stroke="#7e22ce"
      strokeWidth="2.5"
    />
    <circle cx="137" cy="113" r="2" fill="#1e1b4b" />
    <circle cx="163" cy="113" r="2" fill="#1e1b4b" />
    <path
      d="M 144 126 Q 150 131 156 126"
      stroke="#e11d48"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <rect x="65" y="200" width="170" height="10" rx="5" fill="#64748b" />
    <g id="open-book">
      <path
        d="M 110 185 Q 130 180 150 186 L 150 200 Q 130 194 110 199 Z"
        fill="#ffffff"
      />
      <path
        d="M 190 185 Q 170 180 150 186 L 150 200 Q 170 194 190 199 Z"
        fill="#f8fafc"
      />
      <path
        d="M 107 187 Q 130 182 150 188 Q 170 182 193 187 L 193 201 Q 170 196 150 202 Q 130 196 107 201 Z"
        fill="#db2777"
      />
      <line
        x1="118"
        y1="189"
        x2="142"
        y2="187"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="118"
        y1="193"
        x2="140"
        y2="191"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="158"
        y1="187"
        x2="182"
        y2="189"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="158"
        y1="191"
        x2="180"
        y2="193"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
    <rect x="78" y="193" width="22" height="4" rx="1" fill="#0284c7" />
    <rect x="76" y="197" width="25" height="4" rx="1" fill="#9333ea" />
  </svg>
);

// Custom "About Me" Themed Illustration SVG
const AboutIllustrationSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 280"
    className="w-full h-full drop-shadow-md"
  >
    <defs>
      <linearGradient id="aboutBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3e8ff" />
        <stop offset="100%" stopColor="#fae8ff" />
      </linearGradient>
      <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333ea" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>
    </defs>

    {/* Background Card */}
    <rect x="30" y="20" width="260" height="240" rx="24" fill="url(#aboutBg)" />

    {/* Floating Tech Badges */}
    <rect
      x="45"
      y="45"
      width="55"
      height="28"
      rx="8"
      fill="#ffffff"
      stroke="#e9d5ff"
      strokeWidth="1.5"
    />
    <text
      x="72.5"
      y="63"
      fontSize="11"
      fontFamily="monospace"
      fontWeight="bold"
      fill="#7e22ce"
      textAnchor="middle"
    >
      &lt;/&gt;
    </text>

    <circle cx="265" cy="65" r="18" fill="#fef08a" />
    <path
      d="M 265 55 C 259 55, 256 60, 259 66 L 271 66 C 274 60, 271 55, 265 55 Z"
      fill="#ca8a04"
    />
    <rect x="261" y="68" width="8" height="4" rx="1" fill="#854d0e" />

    <circle cx="255" cy="220" r="16" fill="#e0e7ff" />
    <path
      d="M 255 208 L 255 232 M 243 220 L 267 220 M 246 211 L 264 229 M 246 229 L 264 211"
      stroke="#4f46e5"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="255" cy="220" r="6" fill="#ffffff" />

    {/* Person Figure */}
    <rect x="120" y="110" width="80" height="110" rx="16" fill="#3b0764" />
    <path
      d="M 130 210 L 130 160 C 130 148, 190 148, 190 160 L 190 210 Z"
      fill="url(#purpleGrad)"
    />

    <circle cx="160" cy="125" r="24" fill="#fbcfe8" />
    <path
      d="M 138 118 C 148 108, 172 108, 182 118 C 172 112, 148 112, 138 118 Z"
      fill="#3b0764"
    />
    <rect
      x="142"
      y="118"
      width="14"
      height="12"
      rx="3"
      stroke="#6b21a8"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="164"
      y="118"
      width="14"
      height="12"
      rx="3"
      stroke="#6b21a8"
      strokeWidth="2"
      fill="none"
    />
    <line
      x1="156"
      y1="124"
      x2="164"
      y2="124"
      stroke="#6b21a8"
      strokeWidth="2"
    />

    {/* Desk & Laptop */}
    <rect x="70" y="195" width="180" height="10" rx="4" fill="#64748b" />
    <path d="M 130 178 L 190 178 L 185 195 L 135 195 Z" fill="#1e293b" />
    <rect
      x="135"
      y="150"
      width="50"
      height="30"
      rx="4"
      fill="#0f172a"
      stroke="#475569"
      strokeWidth="2"
    />
    <rect x="142" y="156" width="22" height="3" rx="1" fill="#a855f7" />
    <rect x="142" y="162" width="34" height="3" rx="1" fill="#38bdf8" />
    <rect x="142" y="168" width="16" height="3" rx="1" fill="#34d399" />

    <rect x="82" y="183" width="28" height="5" rx="1" fill="#ec4899" />
    <rect x="80" y="188" width="32" height="5" rx="1" fill="#a855f7" />
  </svg>
);

export default function Home() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen font-sans selection:bg-purple-600 selection:text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 flex justify-between items-center shadow-sm">
        <span className="font-bold text-xl tracking-wide bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Anwitha K M
        </span>
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-purple-600 transition">
            About
          </a>
          <a href="#education" className="hover:text-purple-600 transition">
            Education
          </a>
          <a href="#work" className="hover:text-purple-600 transition">
            Work
          </a>
          <a href="#contact" className="hover:text-purple-600 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-28 pb-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-5"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Anwitha K M 👋
            </span>
          </h1>

          <div className="inline-block px-3.5 py-1 bg-purple-100 border border-purple-200 rounded-full text-purple-700 text-xs font-semibold uppercase tracking-wider">
            BCA Graduate | Aspiring Software Developer
          </div>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
            I'm passionate about building modern, responsive, and interactive
            web applications while continuously developing my problem-solving
            and programming skills.
          </p>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            I work with{" "}
            <span className="font-semibold text-slate-800">
              HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS,
              PHP,
            </span>{" "}
            and{" "}
            <span className="font-semibold text-slate-800">MySQL</span>, and
            have programming knowledge in{" "}
            <span className="font-semibold text-slate-800">
              Python, Java, C,
            </span>{" "}
            and <span className="font-semibold text-slate-800">C++</span> along
            with <span className="font-semibold text-slate-800">SQL</span> and{" "}
            <span className="font-semibold text-slate-800">
              Data Structures & Algorithms
            </span>
            .
          </p>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            I enjoy solving problems, learning new technologies, and turning
            ideas into practical solutions. I'm currently focused on
            strengthening my full-stack development skills and growing as a
            versatile software professional.
          </p>

          <div className="flex items-center gap-4 pt-3 flex-wrap">
            <a
              href="#work"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition shadow-lg shadow-purple-600/20"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white border border-slate-300 hover:border-purple-500 text-slate-700 font-medium rounded-xl transition shadow-sm"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>

        {/* Hero Waving SVG Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center items-center relative"
        >
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1 left-8 z-10 px-3 py-1 bg-white border border-purple-200 rounded-full text-xs font-mono text-purple-600 shadow-md"
          >
            &lt;Code /&gt;
          </motion.div>

          <div className="w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
            <WavingAvatarSVG />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-200"
      >
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* About Text Content */}
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-3xl font-bold text-purple-700 mb-2">ABOUT ME</h2>

            <p className="text-slate-700 text-base leading-relaxed">
              I'm a BCA graduate and an aspiring Software Developer with a
              strong interest in web development, programming, and
              problem-solving.
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              My development experience includes{" "}
              <span className="font-semibold text-slate-900">
                HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS,
                PHP,
              </span>{" "}
              and <span className="font-semibold text-slate-900">MySQL</span>. I
              also have programming knowledge in{" "}
              <span className="font-semibold text-slate-900">
                Python, Java, C,
              </span>{" "}
              and <span className="font-semibold text-slate-900">C++</span>,
              along with{" "}
              <span className="font-semibold text-slate-900">
                SQL, Data Structures & Algorithms,
              </span>{" "}
              and{" "}
              <span className="font-semibold text-slate-900">
                object-oriented programming concepts
              </span>
              .
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              I enjoy building responsive and interactive applications,
              understanding how systems work, and solving technical problems
              through code.
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              My goal is to build a strong career in the software industry
              where I can apply my technical knowledge, learn from experienced
              professionals, and contribute to real-world projects.
            </p>

            {/* Information Badges */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-purple-700 font-semibold text-sm mb-1">
                  Languages
                </h3>
                <p className="text-xs text-slate-600 leading-snug">
                  English (Professional), Kannada (Native), Tulu (Native)
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-purple-700 font-semibold text-sm mb-1">
                  Location
                </h3>
                <p className="text-xs text-slate-600 leading-snug">
                  Puttur / Mangalore, Karnataka
                </p>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-purple-700 font-semibold text-sm mb-1">
                  Academic Standing
                </h3>
                <p className="text-xs text-slate-600 leading-snug">
                  BCA 9.4 CGPA | PUC 95.1% | SSLC 91.65%
                </p>
              </div>
            </div>
          </div>

          {/* About Illustration SVG */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 flex justify-center items-center"
          >
            <div className="w-72 h-72 md:w-80 md:h-80">
              <AboutIllustrationSVG />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-200"
      >
        <h2 className="text-3xl font-bold mb-10 text-purple-700">
          Education & Achievements
        </h2>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Timeline */}
          <div className="md:col-span-7 space-y-8 border-l-2 border-purple-300 pl-6">
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-[#f8fafc]"></div>
              <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                2023 – 2026
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-slate-600">
                Vivekananda College (Autonomous), Puttur
              </p>
              <p className="text-purple-700 font-semibold text-sm mt-1">
                CGPA: 9.4
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-400 border-4 border-[#f8fafc]"></div>
              <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                2021 – 2023
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Pre-University Course (PUC - SCBA)
              </h3>
              <p className="text-slate-600">Vivekananda Pre-University College</p>
              <p className="text-purple-700 font-semibold text-sm mt-1">
                Percentage: 95.1%
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-300 border-4 border-[#f8fafc]"></div>
              <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                2020 – 2021
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">SSLC</h3>
              <p className="text-slate-600">SDM English Medium School</p>
              <p className="text-purple-700 font-semibold text-sm mt-1">
                Percentage: 91.65%
              </p>
            </div>
          </div>

          {/* Education Reading Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 flex justify-center items-center"
          >
            <div className="w-64 h-64 md:w-72 md:h-72">
              <ReadingAvatarSVG />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="work"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-200"
      >
        <h2 className="text-3xl font-bold mb-10 text-purple-700">
          MY WORK & PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-purple-400 transition shadow-sm">
            <div>
              <span className="text-xs font-mono text-purple-600">
                01 / FEATURED PROJECT
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                NovaLab
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                Virtual Science Laboratory Platform built with interactive
                modules for Chemistry, Physics, and Biology.
              </p>
            </div>
            <a
              href="https://novalab-virtual-science-lab.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-800"
            >
              Visit NovaLab Demo →
            </a>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-purple-400 transition shadow-sm">
            <div>
              <span className="text-xs font-mono text-purple-600">
                02 / WEB APPLICATION
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Puttur Bus Time Management System
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                Web-based bus route management system providing real-time local
                route and timing schedules for commuters.
              </p>
            </div>
            <a
              href="https://puttur-bus-time-management.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-800"
            >
              Visit Bus Management System →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-200 text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Let's Connect & Build Together
        </h2>
        <p className="text-slate-600 max-w-md mx-auto mb-8">
          Open to entry-level software engineering, web development, and data
          roles.
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <a
            href="mailto:anwithakm26@gmail.com"
            className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-purple-50 hover:border-purple-300 transition text-slate-700 font-medium shadow-sm"
          >
            Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-purple-50 hover:border-purple-300 transition text-slate-700 font-medium shadow-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anwitha-k-m-33511429b/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-purple-50 hover:border-purple-300 transition text-slate-700 font-medium shadow-sm"
          >
            LinkedIn
          </a>
          <button
            onClick={() => setShowPhone(!showPhone)}
            className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-purple-50 hover:border-purple-300 transition text-slate-700 font-medium shadow-sm"
          >
            Phone
          </button>
        </div>

        {showPhone && (
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-slate-200 p-4 rounded-2xl shadow-md">
            <span className="font-mono text-lg text-purple-700 font-semibold tracking-wider">
              +91 87625 53571
            </span>
            <a
              href="tel:+918762553571"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded-lg transition"
            >
              Call Now
            </a>
          </div>
        )}
      </section>
    </div>
  );
}