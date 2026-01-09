import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="space-y-16">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-400">
          Bridging the gap between academic study and practical application by
          building and deploying full-stack software projects.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-neutral-300 dark:border-neutral-700" />

      {/* PROJECT LIST */}
      <section className="space-y-10">
        {[...Array(4)].map((_, index) => (
          <Link
            key={index}
            to={`/projects/project-${index + 1}`}
            className="block focus:outline-none"
          >
            <div
              className="
                flex flex-col md:flex-row
                gap-6 md:gap-8
                p-4 md:p-6
                rounded-lg
                border border-neutral-300 dark:border-neutral-800
                bg-neutral-100 dark:bg-neutral-900
                hover:bg-neutral-200 dark:hover:bg-neutral-800
                transition
              "
            >
              {/* IMAGE PLACEHOLDER */}
              <div
                className="
                  w-full md:w-64
                  h-40
                  border border-neutral-300 dark:border-neutral-700
                  bg-neutral-200 dark:bg-neutral-900
                  text-neutral-600 dark:text-neutral-500
                  flex items-center justify-center
                  text-sm
                  shrink-0
                "
              >
                Project Preview
              </div>

              {/* CONTENT */}
              <div className="flex-1 space-y-3">
                <h2 className="text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-200">
                  Project Title {index + 1}
                </h2>

                <p className="max-w-2xl text-sm md:text-base text-neutral-700 dark:text-neutral-400">
                  A short description of the project goes here. This project
                  demonstrates applied software engineering principles, clean
                  architecture, and practical problem-solving through code.
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Node.js",
                    "PostgreSQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2.5 py-1
                        text-xs md:text-sm
                        border border-neutral-300 dark:border-neutral-700
                        rounded-md
                        text-neutral-700 dark:text-neutral-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
