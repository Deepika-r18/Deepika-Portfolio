import React from "react";

export default function Hero() {
  const skills = ["Excel", "SQL", "Tableau", "Power BI", "Python"];
  const bars = [35, 55, 43, 72, 60, 88, 100];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fffdfd]
        px-5 py-4 font-hero-font md:px-12 md:py-6"
    >
      {/* Soft Background Shapes */}
      <div
        className="pointer-events-none absolute -right-20 top-24
          h-72 w-72 rounded-full bg-pink-100/70 blur-3xl"
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0
          h-64 w-64 rounded-full bg-rose-50 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center
        gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Left Content */}
        <div className="animate-[fadeUp_0.8s_ease-out_both]">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-pink-500" />
            <p className="text-sm font-semibold uppercase
              tracking-[0.2em] text-pink-600">
              Data Analyst Portfolio
            </p>
          </div>

          <p className="mb-2 text-lg text-gray-500">
            Hello, welcome to my portfolio.
          </p>

          <h1 className="text-5xl font-bold leading-[1.12]
            tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            Hi, I'm
            <br />
            <span className="relative inline-block text-pink-500">
              Deepika.
              <span className="absolute -bottom-1 left-0 h-1
                w-2/3 rounded-full bg-pink-200" />
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-medium text-gray-800
            md:text-3xl">
            Aspiring Data Analyst
          </h2>

          <p className="mt-4 max-w-xl text-base leading-8 text-gray-600
            md:text-lg">
            Turning raw data into meaningful insights through
            analysis, visualization, and interactive dashboards.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500
            md:text-base">
            With a background in Computer Applications and experience
            in Accounts Payable at Sutherland, I bring accuracy,
            attention to detail, and business understanding to
            my analytics journey.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3
                rounded-full bg-pink-500 px-7 py-3
                font-semibold text-white transition-all duration-300
                hover:-translate-y-1 hover:bg-pink-600
                hover:shadow-lg hover:shadow-pink-200"
            >
              View My Work
              <span className="transition-transform duration-300
                group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full
                border border-gray-300 px-7 py-3 font-semibold
                text-gray-800 transition-all duration-300
                hover:-translate-y-1 hover:border-pink-400
                hover:text-pink-600"
            >
              Contact Me <span>→</span>
            </a>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase
              tracking-[0.18em] text-gray-400">
              Tools I Work With
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="animate-[fadeUp_0.6s_ease-out_both]
                    text-sm font-medium text-gray-600
                    transition-colors duration-300 hover:text-pink-600"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-6">
            <a
              href="https://github.com/Deepika-r18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-600
                transition hover:text-pink-600"
            >
              GitHub ↗
            </a>

            <span className="h-4 w-px bg-gray-300" />

            <a
              href="https://www.linkedin.com/in/deepika-ravindran-727798281/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-600
                transition hover:text-pink-600"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Analytics Visual */}
        <div className="relative mx-auto w-full max-w-lg
          animate-[fadeUp_1s_ease-out_0.2s_both]">

          {/* Floating Label */}
          <div className="absolute -left-3 top-8 z-10
            animate-[float_4s_ease-in-out_infinite]
            rounded-xl border border-pink-100 bg-white
            px-4 py-3 shadow-lg shadow-pink-100/60 sm:-left-8">
            <p className="text-xs text-gray-500">Analytics</p>
            <p className="mt-1 font-semibold text-gray-800">
              Data → Insights
            </p>
          </div>

          {/* Main Card */}
          <div className="rounded-3xl border border-pink-100/80
            bg-white p-5 shadow-2xl shadow-pink-100/60 sm:p-8">

            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase
                  tracking-[0.18em] text-pink-500">
                  Dashboard Preview
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  Visualizing Data
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Find patterns. Understand trends.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center
                justify-center rounded-2xl bg-pink-50 text-pink-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 19V5m0 14h16M7 15l4-5 3 2 5-7"
                  />
                </svg>
              </div>
            </div>

            {/* Animated Chart */}
            <div className="mt-6 rounded-2xl bg-[#fdf8fb] p-4 sm:p-5">
              <div className="mb-5 flex items-center
                justify-between gap-2">
                <p className="text-sm font-semibold text-gray-700">
                  Sample Data Overview
                </p>

                <span className="rounded-full bg-pink-100
                  px-3 py-1 text-xs font-medium text-pink-700">
                  Preview
                </span>
              </div>

              <div className="flex h-40 items-end justify-between
                gap-3 border-b border-pink-100 pb-3 sm:h-48">
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 items-end"
                  >
                    <div
                      className="w-full origin-bottom rounded-t-md
                        bg-gradient-to-t from-pink-500 to-rose-300
                        animate-[growBar_1s_ease-out_both]"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-3 flex justify-between text-xs
                text-gray-400">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <span key={day}>{day}</span>
                  )
                )}
              </div>

              <p className="mt-3 text-xs text-gray-400">
                Illustrative visualization — not actual business data.
              </p>
            </div>

            {/* Bottom Skills Panel */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { title: "Excel", desc: "Analysis" },
                { title: "SQL", desc: "Querying" },
                { title: "BI Tools", desc: "Visualization" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 p-3
                    transition duration-300 hover:border-pink-200
                    hover:bg-pink-50/50"
                >
                  <p className="font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Insight Card */}
          <div className="absolute -bottom-3 right-3
            animate-[float_5s_ease-in-out_1s_infinite]
            rounded-2xl border border-pink-100 bg-white
            px-5 py-3 shadow-xl shadow-pink-100/60 sm:-right-5">
            <p className="text-xs text-gray-500">My approach</p>
            <p className="mt-1 text-sm font-semibold text-pink-600">
              Discover. Analyze. Improve.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes growBar {
          from {
            transform: scaleY(0);
            opacity: 0.4;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}