import React from "react";

const skillCategories = [
  {
    title: "Data Analysis",
    subtitle: "Data preparation and querying",
    number: "01",
    skills: [
      "Microsoft Excel",
      "SQL",
      "MySQL",
      "Python",
    ],
  },
  {
    title: "Data Visualization",
    subtitle: "Dashboard design and reporting",
    number: "02",
    skills: [
      "Tableau",
      "Power BI",
      "Excel Dashboards",
      "Data Visualization",
    ],
  },
  {
    title: "Tools & Business Skills",
    subtitle: "Technical tools and business knowledge",
    number: "03",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Data Accuracy",
      "Business Process Analysis",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#fff8fb]
        px-5 py-24 font-hero-font md:px-12 md:py-28"
    >
      {/* Background Decorations */}
      <div
        className="pointer-events-none absolute -right-20 top-10
        h-64 w-64 rounded-full bg-pink-100/70 blur-3xl"
      />

      <div
        className="pointer-events-none absolute -bottom-20 left-1/4
        h-56 w-56 rounded-full bg-rose-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 animate-[fadeUp_0.7s_ease-out_both]">
          <p className="mb-4 flex items-center gap-3 text-sm
            font-semibold uppercase tracking-[0.2em] text-pink-600">
            <span className="h-px w-9 bg-pink-500" />
            Technical Expertise
          </p>

          <h2 className="text-4xl font-bold leading-tight
            tracking-tight text-gray-900 md:text-6xl">
            Skills & <span className="text-pink-500">Tools</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600
            md:text-lg">
            The technologies and professional capabilities I use to
            explore data, build dashboards, and uncover meaningful
            business insights.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2
          lg:grid-cols-3">

          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl
                border border-pink-100 bg-white p-6 shadow-sm
                shadow-pink-100/30 transition-all duration-500
                hover:-translate-y-2 hover:border-pink-300
                hover:shadow-xl hover:shadow-pink-100/70
                animate-[fadeUp_0.7s_ease-out_both]"
              style={{ animationDelay: `${index * 180}ms` }}
            >
              {/* Decorative Number */}
              <span className="pointer-events-none absolute -right-2
                -top-6 text-8xl font-bold text-pink-50
                transition-all duration-500
                group-hover:-translate-y-2 group-hover:text-pink-100">
                {category.number}
              </span>

              {/* Card Header */}
              <div className="relative mb-7 border-b border-gray-100 pb-6">
                <div className="mb-5 flex h-12 w-12 items-center
                  justify-center rounded-xl bg-pink-50 text-pink-600
                  transition-all duration-300 group-hover:bg-pink-500
                  group-hover:text-white group-hover:rotate-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    {index === 0 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 19V5m0 14h16M7 15l4-5 3 2 4-6"
                      />
                    )}

                    {index === 1 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 19V5m0 14h16M7 15h2v-4H7zm4 0h2V8h-2zm4 0h2V5h-2z"
                      />
                    )}

                    {index === 2 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12M8 8h8v8H8z"
                      />
                    )}
                  </svg>
                </div>

                <h3 className="relative text-xl font-bold text-gray-900
                  transition-colors duration-300
                  group-hover:text-pink-600">
                  {category.title}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-gray-500">
                  {category.subtitle}
                </p>
              </div>

              {/* Skills List */}
              <div className="relative space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 rounded-lg
                      border border-transparent px-3 py-3
                      transition-all duration-300
                      hover:translate-x-1 hover:border-pink-100
                      hover:bg-pink-50/80"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center
                      justify-center rounded-full bg-pink-100
                      text-xs text-pink-600 transition-colors
                      duration-300 group-hover:bg-pink-200">
                      ✓
                    </span>

                    <span className="text-sm font-medium text-gray-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0
                rounded-full bg-pink-500 transition-all duration-500
                group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-14 flex items-start gap-4 rounded-2xl
          border border-pink-100 bg-white/80 p-6
          animate-[fadeUp_0.8s_ease-out_0.4s_both] md:p-8">
          <div className="flex h-10 w-10 shrink-0 items-center
            justify-center rounded-full bg-pink-100 text-pink-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12"
              />
            </svg>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Always Learning, Always Improving
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-600 md:text-base">
              Continuously developing analytical and technical skills
              to solve business problems through data-driven insights
              and effective visualization.
            </p>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
