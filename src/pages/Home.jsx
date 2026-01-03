export default function Home() {
  return (
    <div className="space-y-16">

      {/* Hero / Intro Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Anton Morgunov</h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-400">
          Researcher building and interrogating a new class of AI systems for direct retrosynthesis. 
          My work accelerates the discovery of life-saving drugs and advanced materials by integrating 
          synthetic feasibility directly into high-throughput molecular screening.
        </p>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800" />

      {/* Approach Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">My Approach</h2>
        <p className="text-neutral-700 dark:text-neutral-400">
          I operate on a simple principle: a discovery is only as valuable as its ability to be used, scaled, 
          and built upon. My research focuses on creating new AI models that address core bottlenecks in science, 
          like quantifying the synthetic feasibility of computer-generated molecules. But a model is not a tool 
          until it is in the hands of a chemist, so I engineer and deploy my work as robust, full-stack applications. 
          Finally, progress compounds when knowledge is made durable. Through pedagogy and system-building, I work 
          to ensure today's frontier becomes tomorrow's reliable foundation.
        </p>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800" />

      {/* Core Research Initiatives */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Core Research Initiatives</h2>

        {/* Each Initiative */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Direct Multistep Retrosynthesis <span className="text-sm text-neutral-500 dark:text-neutral-400">In Progress</span></h3>
          <p className="text-neutral-700 dark:text-neutral-400">
            Developing models that generate entire synthesis routes as coherent sequences, avoiding the cascading errors of traditional iterative methods.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Active Learning for Drug Discovery</h3>
          <p className="text-neutral-700 dark:text-neutral-400">
            Designing AI strategies that strategically explore chemical space to find novel drug candidates, validated by reproducing known FDA-approved drugs.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Efficient Quantum Prediction Methods</h3>
          <p className="text-neutral-700 dark:text-neutral-400">
            Creating composite methods to predict quantum properties with gold-standard accuracy at a fraction of the computational cost.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Mechanistic Interrogation of AI Models <span className="text-sm text-neutral-500 dark:text-neutral-400">In Progress</span></h3>
          <p className="text-neutral-700 dark:text-neutral-400">
            Investigating the internal reasoning of chemistry AI to enhance transparency, reliability, and the industrial trust needed for real-world adoption.
          </p>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800" />

      {/* News Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">In the News</h2>
        <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-400 space-y-1">
          <li>Yale Chemists Go Retro with New AI-Based Model - <span className="text-neutral-500 dark:text-neutral-400">July 23, 2025</span></li>
          <li>Pregnancy, evolution, AI in chemistry, and quicker gene tests - <span className="text-neutral-500 dark:text-neutral-400">July 15, 2025</span></li>
        </ul>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800" />

      {/* Recent Work */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent Work</h2>
        <p className="text-neutral-700 dark:text-neutral-400">
          RetroCast and SynthArena: building the infrastructure for the next breakthrough in chemistry. 
          A breakdown of Procrustean Bed for AI-Driven Retrosynthesis: A Unified Framework for Reproducible Evaluation.
        </p>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800" />

      {/* Featured Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">SynthArena</h3>
          <p className="text-neutral-700 dark:text-neutral-400">
            A public leaderboard and visualization platform for AI retrosynthesis. Compare models side-by-side, inspect predicted routes, and see which ones generate sound chemistry versus chemical fiction.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">RetroCast</h3>
          <p className="text-neutral-700 dark:text-neutral-400">
            The engine that powers SynthArena. A Python toolkit that solves the babel of formats in AI retrosynthesis, providing a universal translation layer and a reproducible, cryptographically-verifiable pipeline for benchmarking any model.
          </p>
        </div>
      </section>

    </div>
  );
}
