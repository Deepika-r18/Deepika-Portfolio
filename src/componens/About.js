import React from "react";

const About = () => {
  const skills = [
    "Microsoft Excel",
    "SQL & MySQL",
    "Tableau",
    "Power BI",
    "Python",
    "Data Visualization",
  ];

  const details = [
    {
      label: "Current Position",
      value: "Accounts Payable Representative",
      number: "01",
    },
    {
      label: "Education",
      value: "Master of Computer Applications (MCA)",
      number: "02",
    },
    {
      label: "Career Focus",
      value: "Data Analytics & Business Intelligence",
      number: "03",
    },
  ];

  const journey = [
    {
      number: "01",
      title: "My Journey",
      description:
        "With a Master's degree in Computer Applications and professional experience in financial operations at Sutherland, my career has revolved around structured data and accuracy. Managing Accounts Payable has taught me the importance of data reconciliation, process auditing, and understanding business workflows.",
    },
    {
      number: "02",
      title: "Transitioning to Analytics",
      description:
        "Driven by a passion for uncovering patterns and telling stories through data, I have been expanding my technical skills across the analytics lifecycle. From data cleaning and database querying to interactive dashboard design, I use Excel, SQL, Tableau, Power BI, and Python to explore data and solve analytical problems.",
    },
    {
      number: "03",
      title: "What I Bring to the Table",
      description:
        "I aim to go beyond generating reports by delivering insights that improve efficiency and support business decisions. My focus is on helping teams understand complex information through clear, reliable data visualizations and meaningful analytical insights.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fffdfd] px-5 py-10 font-hero-font md:px-12 md:py-12"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -left-24 bottom-10 h-56 w-56 rounded-full bg-rose-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 animate-[fadeUp_0.7s_ease-out_both]">
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
            <span className="h-px w-8 bg-pink-500" />
            About Me
          </p>

          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            Professional <span className="text-pink-500">Profile</span>
          </h2>

          <h3 className="mt-3 max-w-2xl text-lg font-medium leading-relaxed text-gray-600 md:text-xl">
            Bridging Financial Precision with Data Analytics
          </h3>
        </div>

        {/* Main Layout */}
        <div className="grid items-start gap-10 lg:grid-cols-5">
          {/* Journey Timeline */}
          <div className="space-y-7 lg:col-span-3">
            {journey.map((item, index) => (
              <div
                key={item.number}
                className="group relative flex gap-4 animate-[fadeUp_0.7s_ease-out_both]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Number */}
                <div className="relative flex shrink-0 flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-200 bg-white text-xs font-semibold text-pink-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white">
                    {item.number}
                  </div>

                  {index !== journey.length - 1 && (
                    <div className="mt-2 min-h-12 w-px flex-1 bg-gradient-to-b from-pink-300 to-pink-100" />
                  )}
                </div>

                {/* Journey Content */}
                <div className="pb-1">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-pink-600 md:text-xl">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Snapshot */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl border border-pink-100 bg-white p-5 shadow-lg shadow-pink-100/40 transition-transform duration-500 hover:-translate-y-1 md:p-7">
              <div className="absolute right-5 top-5 h-10 w-10 rounded-full bg-pink-50" />

              <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">
                Professional Snapshot
              </p>

              <h3 className="relative mt-3 text-xl font-bold leading-snug text-gray-900 md:text-2xl">
                Experience, education & direction.
              </h3>

              <div className="my-5 h-px bg-gray-100" />

              <div className="space-y-5">
                {details.map((item) => (
                  <div key={item.label} className="group flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-xs font-semibold text-pink-600 transition-colors duration-300 group-hover:bg-pink-500 group-hover:text-white">
                      {item.number}
                    </span>

                    <div>
                      <p className="mb-1 text-sm text-gray-500">
                        {item.label}
                      </p>

                      <p className="text-sm font-semibold leading-6 text-gray-800 md:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#projects"
                className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-200"
              >
                Explore My Projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <p className="mt-3 text-center text-xs text-gray-400">
                Turning business knowledge into data insights.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Technical Expertise
            </p>

            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Tools & Technologies
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
              Technologies I use to explore data, build dashboards, and develop analytical projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="animate-[fadeUp_0.6s_ease-out_both] rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;