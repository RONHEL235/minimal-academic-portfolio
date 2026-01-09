import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ExternalLink } from "lucide-react";

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

      <div className="border-t border-neutral-300 dark:border-neutral-700" />

      {/* PROJECT LIST */}
      <section className="space-y-10">
        {projects.map((project) => {
          const Wrapper = project.external ? "a" : Link;
          const wrapperProps = project.external
            ? {
                href: project.link,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : { to: project.link };

          return (
            <Wrapper
              key={project.id}
              {...wrapperProps}
              className="block focus:outline-none"
            >
              <div
                className="
                  flex flex-col md:flex-row items-start
                  gap-6 md:gap-8
                  p-4 md:p-6
                  rounded-lg
                  border border-neutral-300 dark:border-neutral-800
                  bg-neutral-100 dark:bg-neutral-900
                  hover:bg-neutral-200 dark:hover:bg-neutral-800
                  transition
                "
              >
                {/* IMAGE */}
                <div
                  className="
                    w-full md:w-64 h-40
                    border border-neutral-300 dark:border-neutral-700
                    bg-neutral-200 dark:bg-neutral-900
                    overflow-hidden
                    shrink-0
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-1 flex flex-col gap-3 -mt-1 md:-mt-0.5">
                  <h2 className="flex items-center gap-2 text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-200 leading-tight">
                  {project.title}
                  {project.external && (
                  <ExternalLink size={16} className="text-neutral-400 shrink-0" />
                  )}
                  </h2>


                  <p className="max-w-2xl text-sm md:text-base text-neutral-700 dark:text-neutral-400">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((tech) => (
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
            </Wrapper>
          );
        })}
      </section>
    </div>
  );
}
