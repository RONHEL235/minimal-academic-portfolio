export default function CV() {
  return (
    <div className="space-y-20">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold text-neutral-200">
          Ronee Helepi
        </h1>

        <p className="mt-4 max-w-3xl text-neutral-400">
          Avid reader, writer, and lifelong learner with a strong focus on literature, research, and journalism. My work is driven by careful reading, synthesis of ideas, and clear communication across disciplines. Alongside this, I have a background in software engineering, which I use pragmatically to build systems that support research, writing, knowledge organization, and digital publishing. I value clarity, context, and continuity in both intellectual work and the tools that enable it.
        </p>

        {/* LINKS */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-400">
          <a href="#" className="hover:text-neutral-200">GitHub</a>
          <a href="#" className="hover:text-neutral-200">LinkedIn</a>
          <a href="#" className="hover:text-neutral-200">Portfolio</a>
          <a href="#" className="hover:text-neutral-200">Email</a>
        </div>
      </section>

      <div className="border-t border-neutral-700" />

      {/* EDUCATION */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-200">
          Education
        </h2>

        <ul className="mt-6 space-y-6 text-neutral-400">
          <li>
            <div className="font-medium text-neutral-300">
              BSc IT (Software Engineering Specialization) – NQF 7
            </div>
            <div className="text-sm text-neutral-500">
              Eduvos · February 2024 – November 2026
            </div>
          </li>

          <li>
            <div className="font-medium text-neutral-300">
              Higher Certificate in Software Development – NQF 5
            </div>
            <div className="text-sm text-neutral-500">
              CodeSpace Academy · January 2023 – June 2023
            </div>
          </li>

          <li>
            <div className="font-medium text-neutral-300">
              BSc Geomatics (Geographical Information Systems)
            </div>
            <div className="text-sm text-neutral-500">
              University of Cape Town – Partially Completed
            </div>
          </li>

          <li>
            <div className="font-medium text-neutral-300">
              National Senior Certificate
            </div>
            <div className="text-sm text-neutral-500">
              Setjhaba Se Maketse Combined School
            </div>
          </li>
        </ul>
      </section>

      <div className="border-t border-neutral-700" />

      {/* EXPERIENCE */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-200">
          Research & Professional Experience
        </h2>

        <div className="mt-6 space-y-10 text-neutral-400">
          <div>
            <div className="font-medium text-neutral-300">
              Data Analyst Associate Intern
            </div>
            <div className="text-sm text-neutral-500">
              Excelerate · Remote · December 2024 – February 2025
            </div>

            <ul className="mt-3 list-disc list-inside space-y-2 max-w-3xl">
              <li>
                Worked with a globally distributed team to gather requirements
                and design visual dashboards using Google Data Studio.
              </li>
              <li>
                Transformed complex datasets into clear, engaging visual
                narratives to support leadership decision-making.
              </li>
              <li>
                Gained hands-on experience in data storytelling, dashboard
                design, and interpreting performance metrics.
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-neutral-300">
              AI Data Analyst Intern
            </div>
            <div className="text-sm text-neutral-500">
              Excelerate · Remote · October 2024 – November 2024
            </div>

            <ul className="mt-3 list-disc list-inside space-y-2 max-w-3xl">
              <li>
                Cleaned and preprocessed large signup datasets, handling missing
                values and feature engineering.
              </li>
              <li>
                Applied Python tools including Pandas, NumPy, TensorFlow,
                PyTorch, and Matplotlib to analyze trends and predict student
                churn.
              </li>
              <li>
                Contributed to a final analytical report and presented a
                recommendation prototype.
              </li>
              <li>
                Awarded <span className="text-neutral-300">Star Performer Badge</span>.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-700" />

      {/* LEADERSHIP */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-200">
          Leadership & Initiatives
        </h2>

        <ul className="mt-6 space-y-6 text-neutral-400">
          <li>
            <div className="font-medium text-neutral-300">
              SRC – Clubs and Societies Portfolio
            </div>
            <div className="text-sm text-neutral-500">
              Eduvos University
            </div>
            <div className="text-sm text-neutral-500">
              Student Representative Council · 2025
            </div>
          </li>

          <li>
            <div className="font-medium text-neutral-300">
              Golden Key International Honour Society
            </div>
            <div className="text-sm text-neutral-500">
              Eduvos University
            </div>
            <div className="text-sm text-neutral-500">
              Member · 2024
            </div>
          </li>
        </ul>
      </section>

      <div className="border-t border-neutral-700" />

      {/* SKILLS */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-200">
          Technical Skills
        </h2>

        <div className="mt-6 grid gap-8 md:grid-cols-2 text-neutral-400">
          <div>
            <div className="font-medium text-neutral-300">Languages</div>
            <p className="mt-2 text-sm">
              Python, JavaScript (ES6+), TypeScript, SQL
            </p>
          </div>

          <div>
            <div className="font-medium text-neutral-300">Web Development</div>
            <p className="mt-2 text-sm">
              React.js, Tailwind CSS, responsive UI development, user-centric
              interface design
            </p>
          </div>

          <div>
            <div className="font-medium text-neutral-300">
              Data & Machine Learning
            </div>
            <p className="mt-2 text-sm">
              Pandas, NumPy, TensorFlow, PyTorch, data cleaning, exploratory
              analysis, basic predictive modeling
            </p>
          </div>

          <div>
            <div className="font-medium text-neutral-300">
              Design & Analysis
            </div>
            <p className="mt-2 text-sm">
              Dashboard design, data storytelling, translating data into
              actionable insights
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-700" />

      {/* AWARDS */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-200">
          Awards & Recognition
        </h2>

        <ul className="mt-6 space-y-4 text-neutral-400">
          <li>
            Star Performer Badge – AI Data Analyst Internship · Excelerate, 2024
          </li>
          <li>
            Golden Key Society Membership · 2024
          </li>
          <li>
            Top 10 Student Eduvos Bloemfontein Campus · 2024
          </li>
        </ul>
      </section>

      <div className="border-t border-neutral-700" />

      {/* REFERENCES */}
      <section>
        <h2 className="text-xl font-semibold text-neutral-200">
          References
        </h2>
        <p className="mt-4 text-neutral-400">
          Available upon request.
        </p>
      </section>
    </div>
  );
}
