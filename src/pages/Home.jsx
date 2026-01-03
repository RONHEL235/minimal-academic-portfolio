export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section>
        <h1 className="text-2xl font-semibold text-neutral-200">
          Anton Morgunov
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-400">
          Researcher building and interrogating a new class of AI systems for
          direct retrosynthesis. My work accelerates the discovery of life-saving
          drugs and advanced materials by integrating synthetic feasibility
          directly into high-throughput molecular screening.
        </p>
      </section>

      <div className="border-t border-neutral-700" />

      {/* APPROACH */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-200">
          Anton Morgunov
        </h2>
        <h3 className="mt-4 font-medium text-neutral-300">My Approach</h3>
        <p className="mt-4 max-w-3xl text-neutral-400">
          I operate on a simple principle: a discovery is only as valuable as its
          ability to be used, scaled, and built upon. My research focuses on
          creating new AI models that address core bottlenecks in science, like
          quantifying the synthetic feasibility of computer-generated molecules.
          But a model is not a tool until it is in the hands of a chemist, so I
          engineer and deploy my work as robust, full-stack applications.
          Finally, progress compounds when knowledge is made durable.
        </p>
      </section>

      <div className="border-t border-neutral-700" />

      {/* CORE RESEARCH */}
      <section>
        <h3 className="font-medium text-neutral-300">
          Core Research Initiatives
        </h3>

        <ul className="mt-6 space-y-6 text-neutral-400">
          <li>
            <strong className="text-neutral-300">
              Direct Multistep Retrosynthesis
            </strong>
            <div className="text-sm text-neutral-500">In Progress</div>
            <p>
              Developing models that generate entire synthesis routes as coherent
              sequences, avoiding cascading errors.
            </p>
          </li>

          <li>
            <strong className="text-neutral-300">
              Active Learning for Drug Discovery
            </strong>
            <p>
              Designing AI strategies that explore chemical space to find novel
              drug candidates, validated by reproducing FDA-approved drugs.
            </p>
          </li>

          <li>
            <strong className="text-neutral-300">
              Efficient Quantum Prediction Methods
            </strong>
            <p>
              Composite methods predicting quantum properties with gold-standard
              accuracy at a fraction of the cost.
            </p>
          </li>

          <li>
            <strong className="text-neutral-300">
              Mechanistic Interrogation of AI Models
            </strong>
            <div className="text-sm text-neutral-500">In Progress</div>
            <p>
              Investigating internal reasoning of chemistry AI to improve trust
              and transparency.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
