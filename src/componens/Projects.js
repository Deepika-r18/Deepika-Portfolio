
import React from "react";

const projects = [
  {
    title: "Sales Analysis",
    category: "Excel Dashboard",
    number: "01",
    tools: ["Excel", "Pivot Tables", "Data Visualization"],
    description:
      "Analyzed retail sales data to identify weekly sales trends, evaluate holiday performance, and explore store-level business performance.",
    findings: [
      "Weekly sales performance",
      "Holiday vs. non-holiday sales",
      "Store-level comparisons",
    ],
    liveLink: "https://github.com/Deepika-r18/Deepika-Portfolio/blob/main/Sales%20Dashboard.xlsx",
    codeLink: "",
    animation: "rise",
  },
  {
    title: "Mental Health Insights",
    category: "Tableau Dashboard",
    number: "02",
    tools: ["Tableau", "Calculated Fields", "Data Visualization"],
    description:
      "Developed an interactive dashboard exploring demographic, workplace, lifestyle, and well-being patterns in a mental health dataset.",
    findings: [
      "Demographic patterns",
      "Workplace stress indicators",
      "Lifestyle and well-being trends",
    ],
    liveLink: "YOUR_TABLEAU_PUBLIC_LINK",
    codeLink: "",
    animation: "right",
  },
  {
    title: "Business Data Analysis",
    category: "SQL & Python",
    number: "03",
    tools: ["SQL", "MySQL", "Python", "Pandas"],
    description:
      "Explored structured business data using SQL and Python to perform data preparation, query datasets, and identify useful business insights.",
    findings: [
      "Data cleaning and preparation",
      "SQL queries and aggregations",
      "Business trend analysis",
    ],
    liveLink: "",
    codeLink: "YOUR_GITHUB_REPOSITORY_LINK",
    animation: "left",
  },
];

function ProjectCard({ project }) {
  return (
    <article
      className={`project-card project-${project.animation}
        flex h-full flex-col overflow-hidden border-t-2
        border-gray-200 bg-white p-6 md:p-7`}
    >
      {/* Project Number and Category */}
      <div className="mb-7 flex items-center justify-between gap-3">
        <span className="project-number text-3xl font-light text-pink-200">
          {project.number}
        </span>

        <span className="rounded-full border border-pink-100
          bg-pink-50 px-3 py-1.5 text-xs font-semibold text-pink-700">
          {project.category}
        </span>
      </div>

      {/* Project Details */}
      <h3 className="text-xl font-bold leading-snug text-gray-900">
        {project.title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
        {project.description}
      </p>

      {/* Key Highlights */}
      <div className="mt-7">
        <h4 className="text-xs font-semibold uppercase
          tracking-widest text-gray-400">
          Project Highlights
        </h4>

        <ul className="mt-4 space-y-3">
          {project.findings.map((item, index) => (
            <li
              key={item}
              className="project-finding flex items-start gap-3
                text-sm text-gray-700"
              style={{ "--item-index": index }}
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0
                rounded-full bg-pink-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="mt-7 border-t border-gray-100 pt-5">
        <p className="mb-3 text-xs font-semibold uppercase
          tracking-widest text-gray-400">
          Tools Used
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, index) => (
            <span
              key={tool}
              className="tool-chip rounded-md bg-gray-50
                px-2.5 py-1.5 text-xs font-medium text-gray-600"
              style={{ "--item-index": index }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Project Links */}
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm
              font-semibold text-pink-600 transition-colors
              duration-300 hover:text-pink-800"
          >
            View Live Project <span aria-hidden="true">↗</span>
          </a>
        )}

        {project.codeLink && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm
              font-semibold text-gray-700 transition-colors
              duration-300 hover:text-pink-600"
          >
            View Source Code <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>

      {/* Animated Bottom Accent */}
      <div className="project-accent mt-7 h-1 w-12 rounded-full bg-pink-400" />
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#fcfafb]
        px-5 py-20 font-hero-font md:px-12 md:py-24"
    >
      <style>{`
        @keyframes riseIn {
          from {
            opacity: 0;
            transform: translateY(45px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRightIn {
          from {
            opacity: 0;
            transform: translateX(45px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideLeftIn {
          from {
            opacity: 0;
            transform: translateX(-45px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes numberFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes accentMove {
          0%, 100% { width: 3rem; }
          50% { width: 5rem; }
        }

        .project-card {
          opacity: 0;
          animation-duration: 900ms;
          animation-timing-function: cubic-bezier(.2,.7,.2,1);
          animation-fill-mode: forwards;
        }

        .project-rise {
          animation-name: riseIn;
          animation-delay: 100ms;
        }

        .project-right {
          animation-name: slideRightIn;
          animation-delay: 350ms;
        }

        .project-left {
          animation-name: slideLeftIn;
          animation-delay: 600ms;
        }

        .project-number {
          animation: numberFloat 3s ease-in-out infinite;
        }

        .project-finding {
          opacity: 0;
          animation: riseIn 600ms ease-out forwards;
          animation-delay: calc(700ms + var(--item-index) * 150ms);
        }

        .tool-chip {
          opacity: 0;
          animation: riseIn 500ms ease-out forwards;
          animation-delay: calc(900ms + var(--item-index) * 100ms);
        }

        .project-accent {
          animation: accentMove 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .project-number,
          .project-finding,
          .tool-chip,
          .project-accent {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row
          md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase
              tracking-[0.2em] text-pink-600">
              My Work
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
              Projects<span className="text-pink-500"></span>
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-pink-500" />
          </div>

          <p className="max-w-lg text-sm leading-7 text-gray-600 md:text-base">
            A collection of analytical projects demonstrating data
            exploration, dashboard development, and practical
            problem-solving using modern analytics tools.
          </p>
        </div>

        {/* Animated Project Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-14 flex flex-col gap-4 border-t
          border-gray-200 pt-7 sm:flex-row sm:items-center
          sm:justify-between">
          <p className="text-sm text-gray-500">
            Always learning. Always analyzing.
          </p>

          <a
            href="#contact"
            className="w-fit text-sm font-semibold text-pink-600
              transition-colors duration-300 hover:text-pink-800"
          >
            Let's Connect <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
