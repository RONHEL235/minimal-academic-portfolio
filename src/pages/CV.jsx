export default function CV() {
  return (
    <div className="space-y-20">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          Ronee Helepi
        </h1>

        <p className="mt-4 max-w-3xl text-neutral-700 dark:text-neutral-400">
          Avid reader, writer, and lifelong learner focused on literature,
          research, and journalism. My work centers on careful reading,
          synthesis of ideas, and clear communication across disciplines,
          supported by a pragmatic software engineering background.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {["GitHub", "LinkedIn", "Email"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      <div className="border-t border-neutral-300 dark:border-neutral-700"/>

      {/* EDUCATION */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200">
          Education
        </h2>

        <ul className="mt-6 space-y-6">
          {[
            [
              "BSc IT (Software Engineering Specialization)",
              "Eduvos · 2024 – 2026",
            ],
            [
              "Higher Certificate in Software Development",
              "CodeSpace Academy · 2023",
            ],
            [
              "BSc Geomatics (Geographical Information Systems)",
              "University of Cape Town · Partially Completed",
            ],
            ["National Senior Certificate", "Setjhaba Se Maketse"],
          ].map(([title, meta]) => (
            <li key={title}>
              <div className="font-medium text-neutral-700 dark:text-neutral-400">
                {title}
              </div>
              <div className="text-sm text-neutral-700 dark:text-neutral-400">{meta}</div>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-neutral-300 dark:border-neutral-700"/>

      {/* EXPERIENCE */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200">
          Research & Professional Experience
        </h2>

        <div className="mt-6 space-y-10">
          <Experience
            title="Data Analyst Associate Intern"
            meta="Excelerate · Remote · Dec 2024 – Feb 2025"
            items={[
              "Designed visual dashboards using Google Data Studio.",
              "Translated complex datasets into decision-ready visuals.",
              "Developed skills in data storytelling and KPI analysis.",
            ]}
          />

          <Experience
            title="AI Data Analyst Intern"
            meta="Excelerate · Remote · Oct 2024 – Nov 2024"
            items={[
              "Cleaned and engineered features from large datasets.",
              "Used Pandas, NumPy, TensorFlow, PyTorch for analysis.",
              "Awarded Star Performer Badge.",
            ]}
          />
        </div>
      </section>

      <div className="border-t border-neutral-300 dark:border-neutral-700"/>

      {/* SKILLS */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200">
          Technical Skills
        </h2>

        <div className="mt-6 grid gap-8 md:grid-cols-2 text-sm">
          <Skill title="Languages" text="Python, JavaScript, TypeScript, SQL" />
          <Skill title="Web" text="React, Tailwind CSS, responsive UI" />
          <Skill title="Data & ML" text="Pandas, NumPy, PyTorch, TensorFlow" />
          <Skill title="Analysis" text="Dashboards, data storytelling" />
        </div>
      </section>
    </div>
  );
}

function Experience({ title, meta, items }) {
  return (
    <div>
      <div className="font-medium text-neutral-700 dark:text-neutral-400">
        {title}
      </div>
      <div className="text-sm text-neutral-700 dark:text-neutral-400">{meta}</div>
      <ul className="mt-3 list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-400">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function Skill({ title, text }) {
  return (
    <div>
      <div className="font-semibold text-neutral-700 dark:text-neutral-400">
        {title}
      </div>
      <p className="mt-1 text-neutral-700 dark:text-neutral-400">{text}</p>
    </div>
  );
}
