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
            I spend most of my time reading, writing, and learning something new
            every day. My work sits at the intersection of literature, research,
            and journalism, supported by a background in software engineering
            that helps me build systems for organizing ideas, publishing work,
            and thinking clearly in a digital world.
          </p>
        </div>

        {/* PROFILE IMAGE PLACEHOLDER */}
        <div className="w-36 h-36 border border-neutral-700 bg-neutral-900 flex items-center justify-center text-neutral-600 text-sm">
          Ronee Helepi smiling.
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
          Whether I am engaging with literature, academic research, or
          current affairs, my focus is on clarity, context, and continuity.
          Research, to me, is an act of careful synthesis: connecting ideas
          across disciplines and time. Software engineering and modern tools,
          including AI, play a quiet but important role in this process by
          helping me build workflows for reading, annotation, versioning, and
          publication, while keeping interpretation and judgment firmly human.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-neutral-700" />

      {/* CORE FOCUS AREAS */}
      <section>
        <h2 className="font-medium text-neutral-300">
          Core Focus Areas
        </h2>

        <ul className="mt-6 space-y-8 text-neutral-400">
          <li>
            <div className="font-medium text-neutral-300">
              Books & Literature
            </div>
            <p className="mt-2 max-w-3xl">
              Close reading of fiction and non-fiction, with attention to
              narrative structure, language, and the historical and social
              contexts in which texts are written and read.
            </p>
          </li>

          <li>
            <div className="font-medium text-neutral-300">
              Research & Knowledge Synthesis
            </div>
            <p className="mt-2 max-w-3xl">
              Working through academic literature and long-form writing to
              extract core arguments, identify gaps, and connect insights across
              fields.
            </p>
          </li>

          <li>
            <div className="font-medium text-neutral-300">
              Journalism & Essay Writing
            </div>
            <p className="mt-2 max-w-3xl">
              Writing clear, grounded pieces that translate complex ideas into
              accessible language without sacrificing nuance or depth.
            </p>
          </li>

          <li>
            <div className="font-medium text-neutral-300">
              Software & Tools for Thinking
            </div>
            <p className="mt-2 max-w-3xl">
              Designing and using software systems to support reading,
              note-taking, research organization, and publishing, with a
              pragmatic and minimalist engineering mindset.
            </p>
          </li>
        </ul>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-neutral-700" />

      {/* RECENT ACTIVITY */}
      <section>
        <h2 className="font-medium text-neutral-300">
          Recent Activity
        </h2>

        <ul className="mt-6 space-y-4 text-neutral-400">
          <li>
            <div className="text-neutral-300">
              Reading and annotating works across literature, history, and
              contemporary research
            </div>
            <div className="text-sm text-neutral-500">
              Independent study · Ongoing
            </div>
          </li>

          <li>
            <div className="text-neutral-300">
              Writing analytical notes and short essays on books and current
              affairs
            </div>
            <div className="text-sm text-neutral-500">
              Independent writing · Ongoing
            </div>
          </li>

          <li>
            <div className="text-neutral-300">
              Building small software tools to support reading, note-taking, and
              content organization
            </div>
            <div className="text-sm text-neutral-500">
              Personal projects · Ongoing
            </div>
          </li>

          <li>
            <div className="text-neutral-300">
              Experimenting with AI-assisted workflows for research and writing,
              with a critical and human-centered approach
            </div>
            <div className="text-sm text-neutral-500">
              Exploratory work · Ongoing
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
