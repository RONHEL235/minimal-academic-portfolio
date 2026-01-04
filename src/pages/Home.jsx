export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="flex flex-col md:flex-row md:items-start gap-8">
        {/* TEXT */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-neutral-200">
            Ronee Helepi
          </h1>

          <p className="mt-4 max-w-2xl text-neutral-400">
            Researcher building and interrogating a new class of AI systems for
            direct retrosynthesis. My work accelerates the discovery of
            life-saving drugs and advanced materials by integrating synthetic
            feasibility directly into high-throughput molecular screening.
          </p>
        </div>

        {/* PROFILE IMAGE PLACEHOLDER */}
        <div className="w-36 h-36 border border-neutral-700 bg-neutral-900 flex items-center justify-center text-neutral-600 text-sm">
          Ronee Helepi
        </div>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-neutral-700" />

      {/* APPROACH */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-200">
          My Approach
        </h2>
        <p className="mt-4 max-w-3xl text-neutral-400">
          I operate on a simple principle: a discovery is only as valuable as its
          ability to be used, scaled, and built upon. My research focuses on
          creating new AI models that address core bottlenecks in science, like
          quantifying the synthetic feasibility of computer-generated molecules.
          But a model is not a tool until it is in the hands of a chemist, so I
          engineer and deploy my work as robust, full-stack applications.
          Finally, progress compounds when knowledge is made durable. Through
          pedagogy and system-building, I work to ensure today’s frontier becomes
          tomorrow’s reliable foundation.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-neutral-700" />

      {/* CORE RESEARCH */}
      <section>
        <h2 className="font-medium text-neutral-300">
          Core Research Initiatives
        </h2>

        <ul className="mt-6 space-y-8 text-neutral-400">
          <li>
            <div className="font-medium text-neutral-300">
              Direct Multistep Retrosynthesis
            </div>
            <div className="text-sm text-neutral-500">In Progress</div>
            <p className="mt-2 max-w-3xl">
              Developing models that generate entire synthesis routes as
              coherent sequences, avoiding the cascading errors of traditional
              iterative methods.
            </p>
          </li>

          <li>
            <div className="font-medium text-neutral-300">
              Active Learning for Drug Discovery
            </div>
            <p className="mt-2 max-w-3xl">
              Designing AI strategies that strategically explore chemical space
              to find novel drug candidates, validated by reproducing known
              FDA-approved drugs.
            </p>
          </li>

          <li>
            <div className="font-medium text-neutral-300">
              Efficient Quantum Prediction Methods
            </div>
            <p className="mt-2 max-w-3xl">
              Creating composite methods to predict quantum properties with
              gold-standard accuracy at a fraction of the computational cost.
            </p>
          </li>

          <li>
            <div className="font-medium text-neutral-300">
              Mechanistic Interrogation of AI Models
            </div>
            <div className="text-sm text-neutral-500">In Progress</div>
            <p className="mt-2 max-w-3xl">
              Investigating the internal reasoning of chemistry AI to enhance
              transparency, reliability, and the industrial trust needed for
              real-world adoption.
            </p>
          </li>
        </ul>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-neutral-700" />

      {/* NEWS */}
      <section>
        <h2 className="font-medium text-neutral-300">
          In the News
        </h2>

        <ul className="mt-6 space-y-4 text-neutral-400">
          <li>
            <div className="text-neutral-300">
              Yale Chemists Go Retro with New AI-Based Model
            </div>
            <div className="text-sm text-neutral-500">
              Yale Department of Chemistry · July 23, 2025
            </div>
          </li>

          <li>
            <div className="text-neutral-300">
              Pregnancy, evolution, AI in chemistry, and quicker gene tests
            </div>
            <div className="text-sm text-neutral-500">
              Yale News · July 15, 2025
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
