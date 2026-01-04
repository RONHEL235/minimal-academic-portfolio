export default function Publications() {
  return (
    <div className="space-y-16">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold text-neutral-200">
          Publications
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-400">
          A canonical list of my academic assignments, research-style reports,
          and software projects completed over the past two years at university.
          This page serves as a structured record of my technical and analytical
          work.
        </p>

        <div className="mt-6">
          <span className="text-neutral-500 text-sm">
            (Formal publications coming soon)
          </span>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-neutral-700" />

      {/* PLACEHOLDER LIST */}
      <section className="space-y-12">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="space-y-2">
            {/* TITLE */}
            <p className="text-neutral-300">
              <span className="font-semibold text-neutral-200">
                R. Helepi
              </span>
              . “University Assignment {index + 1}: Applied Computing and
              Software Systems”. Unpublished coursework, 202{index < 5 ? "4" : "5"}.
            </p>

            {/* META */}
            <p className="text-sm text-neutral-500">
              Module assignment · Software Engineering · Individual project
            </p>

            {/* LINKS */}
            <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
              <span className="hover:text-neutral-200 cursor-default">
                Report (PDF)
              </span>
              <span className="hover:text-neutral-200 cursor-default">
                Source Code
              </span>
              <span className="hover:text-neutral-200 cursor-default">
                My Summary
              </span>
              <span className="hover:text-neutral-200 cursor-default">
                Demo (if applicable)
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
