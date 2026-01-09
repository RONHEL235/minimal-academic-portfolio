import { ExternalLink } from "lucide-react";

export default function Writings() {
  return (
    <div className="space-y-16">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          Research & Writings
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-400">
          Summaries of my academic work, long-form articles, tutorials, and
          miscellaneous notes. Filterable by topic.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-neutral-300 dark:border-neutral-700"/>

      {/* RESEARCH */}
      <section className="space-y-12">
        <h2 className="text-xl font-medium text-neutral-700 dark:text-neutral-200">Research</h2>

        {/* ITEM */}
        <article className="space-y-3">
          <p className="text-sm text-neutral-700 dark:text-neutral-400">December 14, 2025</p>

          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
            text-neutral-700 dark:text-neutral-200
              hover:underline"
            >
              RetroCast and SynthArena: building the infrastructure for the next
              breakthrough in chemistry
              <ExternalLink size={16} className="text-neutral-600" />
            </a>
          </h3>

          <p className="text-neutral-700 dark:text-neutral-400 max-w-3xl">
            A breakdown of Procrustean Bed for AI-Driven Retrosynthesis: A Unified
            Framework for Reproducible Evaluation. A deep dive into how the
            metrics for AI chemical synthesis are broken, rewarding models for
            “solving” routes with impossible, hallucinatory chemistry.
          </p>

          <div className="flex flex-wrap gap-2">
            {["research", "ML", "retrosynthesis", "infrastructure", "evals"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm border border-neutral-700 rounded-md text-neutral-500"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </article>

        {/* ITEM */}
        <article className="space-y-3">
          <p className="text-sm text-neutral-700 dark:text-neutral-400">
            September 25, 2025 · J. Chem. Inf. Model.
          </p>

          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
            text-neutral-700 dark:text-neutral-200
              hover:underline"
            >
              Upsampling the Signal: Active Learning with Proxy Spaces
              <ExternalLink size={16} className="text-neutral-600" />
            </a>
          </h3>

          <p className="text-neutral-700 dark:text-neutral-400 max-w-3xl">
            A breakdown of ChemSpaceAL: An Efficient Active Learning Methodology
            Applied to Protein-Specific Molecular Generation. We built an AI
            steering system for molecular design that efficiently guides a
            generative model to invent potent, protein-specific molecules.
          </p>

          <div className="flex flex-wrap gap-2">
            {["research", "ML", "generative-models", "drug-design"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm border border-neutral-700 rounded-md text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* ITEM */}
        <article className="space-y-3">
          <p className="text-sm text-neutral-700 dark:text-neutral-400">
            September 22, 2025 · J. Phys. Chem. A
          </p>

          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
            text-neutral-700 dark:text-neutral-200
              hover:underline"
            >
              Getting Coupled-Cluster Accuracy for the Price of MP2
              <ExternalLink size={16} className="text-neutral-600" />
            </a>
          </h3>

          <p className="text-neutral-700 dark:text-neutral-400 max-w-3xl">
            A breakdown of MP2-Based Composite Extrapolation Schemes Can Predict
            Core-Ionization Energies for First-Row Elements with Coupled-Cluster
            Level Accuracy. A computational shortcut enabling gold-standard
            predictions at a fraction of the cost.
          </p>

          <div className="flex flex-wrap gap-2">
            {["research", "electronic-structure"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm border border-neutral-700 rounded-md text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-neutral-300 dark:border-neutral-700"/>

      {/* LONG FORM */}
      <section className="space-y-12">
        <h2 className="text-xl font-medium text-neutral-700 dark:text-neutral-200">Long Form</h2>

        <article className="space-y-3">
          <p className="text-sm text-neutral-700 dark:text-neutral-400">January 1, 2026</p>

          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
            text-neutral-700 dark:text-neutral-200
              hover:underline"
            >
              Vibe coding killed Cursor
              <ExternalLink size={16} className="text-neutral-600" />
            </a>
          </h3>

          <p className="text-neutral-700 dark:text-neutral-400 max-w-3xl">
            Cursor is dying because cost-optimization forces models into tunnel
            vision. RAG agents fail because they only see what they search for.
            The superior workflow for 2026 is massive context windows and manual
            control.
          </p>

          <div className="flex flex-wrap gap-2">
            {["opinion", "AI"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm border border-neutral-700 rounded-md text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        <article className="space-y-3">
          <p className="text-sm text-neutral-700 dark:text-neutral-400">December 13, 2025</p>

          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
            text-neutral-700 dark:text-neutral-200
              hover:underline"
            >
              AI will transform science. Just not the way you think.
              <ExternalLink size={16} className="text-neutral-600" />
            </a>
          </h3>

          <p className="text-neutral-700 dark:text-neutral-400 max-w-3xl">
            Science is infrastructure-constrained, not ideas-constrained. An
            argument on why better tooling, not smarter models, is the missing
            link in the AI for Science revolution.
          </p>

          <div className="flex flex-wrap gap-2">
            {["opinion", "AI"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm border border-neutral-700 rounded-md text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        <article className="space-y-3">
          <p className="text-sm text-neutral-700 dark:text-neutral-400">October 2, 2023</p>

          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
            text-neutral-700 dark:text-neutral-200
              hover:underline"
            >
              How Oppenheimer saved chemistry from quantum mechanics?
              <ExternalLink size={16} className="text-neutral-600" />
            </a>
          </h3>

          <p className="text-neutral-700 dark:text-neutral-400 max-w-3xl">
            We explore why chemistry could not exist as a science without the
            Born–Oppenheimer approximation and what career paths that
            approximation enables.
          </p>

          <div className="flex flex-wrap gap-2">
            {["explanatory", "quantum-chemistry"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm border border-neutral-700 rounded-md text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
