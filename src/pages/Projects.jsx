export default function Projects() {
  return (
    <div className="space-y-16">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold text-neutral-200">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-400">
          Bridging the gap between academic study and practical application by
          building and deploying full-stack software projects.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-neutral-700" />

      {/* PROJECT LIST */}
      <section className="space-y-20">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8"
          >
            {/* IMAGE PLACEHOLDER */}
            <div className="w-full md:w-64 h-40 border border-neutral-700 bg-neutral-900 flex items-center justify-center text-neutral-600 text-sm shrink-0">
              Project Preview
            </div>

            {/* CONTENT */}
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-medium text-neutral-200">
                Project Title {index + 1}
              </h2>

              <p className="max-w-2xl text-neutral-400">
                A short description of the project goes here. This project
                demonstrates applied software engineering principles, clean
                architecture, and practical problem-solving through code.
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Node.js",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm border border-neutral-700 rounded-md text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
