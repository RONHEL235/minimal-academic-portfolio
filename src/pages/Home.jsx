export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
            Ronee Helepi
          </h1>

          <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-400">
            My curiosity lives
            at the intersection of literature, research, and journalism, grounded
            by a pragmatic software engineering background used to build tools
            for organizing ideas, publishing work, and thinking clearly.
          </p>
        </div>

        {/* PROFILE IMAGE */}
        <div className="w-36 h-36 flex items-center justify-center text-sm
          border border-neutral-300 bg-neutral-200 text-neutral-500
        dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-600">
          Booked a photoshoot
        </div>
      </section>

      <div className="border-t border-neutral-300 dark:border-neutral-700"/>

      {/* APPROACH */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200">My Approach</h2>
        <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-400">
          I focus on clarity, context, and continuity. Software engineering and
          AI support this work quietly, helping me design workflows for reading,
          annotation, versioning, and publishing while interpretation and
          judgment remain human-led.
        </p>
      </section>

      <div className="border-t border-neutral-300 dark:border-neutral-700"/>

      {/* CORE FOCUS */}
      <section>
        <h2 className="font-medium text-neutral-700 dark:text-neutral-200">Core Focus Areas</h2>

        <ul className="space-y-8 mt-4 max-w-2xl text-neutral-700 dark:text-neutral-400">
          {[
            ["Web and Software Development", "Close reading with attention to structure, language, and historical context."],
            ["Research & Synthesis", "Extracting arguments, identifying gaps, and connecting ideas across fields."],
            ["Journalism & Essays", "Clear writing that preserves nuance while remaining accessible."],
            ["Software & Tools", "Minimal, purpose-built systems for research, note-taking, and publishing."],
          ].map(([title, desc]) => (
            <li key={title}>
              <div className="mt-4 max-w-2xl font-medium text-neutral-700 dark:text-neutral-400">{title}</div>
              <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-400">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-neutral-300 dark:border-neutral-700"/>

      {/* RECENT ACTIVITY */}
      <section>
        <h2 className="font-medium text-neutral-700 dark:text-neutral-200">Recent Activity</h2>

        <ul className="space-y-6 mt-4 max-w-2xl text-neutral-700 dark:text-neutral-400">
          {[
            "Current Read: Infinite Riches by Ben Okri",
            "Learning about prompt engineering and ",
            "Building small research-supporting software tools",
            "Exploring AI-assisted research workflows",
          ].map((item, i) => (
            <li key={i}>
              <div className="mt-4 max-w-2xl font-medium text-neutral-700 dark:text-neutral-400">{item}</div>
              <div className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-400">Ongoing</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
