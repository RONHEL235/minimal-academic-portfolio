export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
            Ronee Helepi
          </h1>

          <p className="mt-4 max-w-2xl text-neutral-700">
            I spend most of my time reading, writing, and learning. My work lives
            at the intersection of literature, research, and journalism, grounded
            by a pragmatic software engineering background used to build tools
            for organizing ideas, publishing work, and thinking clearly.
          </p>
        </div>

        {/* PROFILE IMAGE */}
        <div className="w-36 h-36 shrink-0 border border-neutral-700 bg-neutral-900 flex items-center justify-center text-neutral-600 text-sm">
          Profile image
        </div>
      </section>

      <div className="border-t border-neutral-700" />

      {/* APPROACH */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-200">My Approach</h2>
        <p className="mt-4 max-w-3xl text-neutral-400">
          I focus on clarity, context, and continuity. Software engineering and
          AI support this work quietly—helping me design workflows for reading,
          annotation, versioning, and publishing—while interpretation and
          judgment remain human-led.
        </p>
      </section>

      <div className="border-t border-neutral-700" />

      {/* CORE FOCUS */}
      <section>
        <h2 className="font-medium text-neutral-300">Core Focus Areas</h2>

        <ul className="mt-6 space-y-8 text-neutral-400">
          {[
            ["Books & Literature", "Close reading with attention to structure, language, and historical context."],
            ["Research & Synthesis", "Extracting arguments, identifying gaps, and connecting ideas across fields."],
            ["Journalism & Essays", "Clear writing that preserves nuance while remaining accessible."],
            ["Software & Tools", "Minimal, purpose-built systems for research, note-taking, and publishing."],
          ].map(([title, desc]) => (
            <li key={title}>
              <div className="font-medium text-neutral-300">{title}</div>
              <p className="mt-2 max-w-3xl">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-neutral-700" />

      {/* RECENT ACTIVITY */}
      <section>
        <h2 className="font-medium text-neutral-300">Recent Activity</h2>

        <ul className="mt-6 space-y-4 text-neutral-400">
          {[
            "Reading and annotating academic and literary texts",
            "Writing analytical notes and short essays",
            "Building small research-supporting software tools",
            "Exploring AI-assisted research workflows",
          ].map((item, i) => (
            <li key={i}>
              <div className="text-neutral-300">{item}</div>
              <div className="text-sm text-neutral-500">Ongoing</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
