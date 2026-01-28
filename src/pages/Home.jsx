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
            Exploring the space between literature, research, and journalism, guided by software engineering principles that give shape to ideas and clarity to thought, letting structure and curiosity guide the way.
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
          I move through ideas with care for clarity and flow. I’m drawn to simple forms, thoughtful spaces, and the kind of work that unfolds slowly and with purpose. I value intention over excess, and I find meaning in what is left unsaid as much as in what is shown.
        </p>
      </section>

      <div className="border-t border-neutral-300 dark:border-neutral-700"/>

      {/* CORE FOCUS */}
      <section>
        <h2 className="font-medium text-neutral-700 dark:text-neutral-200">Core Focus Areas</h2>

        <ul className="space-y-8 mt-4 max-w-2xl text-neutral-700 dark:text-neutral-400">
          {[
            ["Digital Tools & Development", "Creating minimal systems and spaces where ideas can take shape and flow."],
            ["Research & Synthesis", "Tracing arguments, uncovering gaps, and weaving connections across disciplines."],
            ["Journalism & Essays", "Writing with clarity and care, letting nuance and meaning emerge naturally."],
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
            "Reading: The Philosopher in the Valley — Alex Karp",
            "Writing: Short-form reflections and essays",
            "Studying: How language shapes understanding",
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
