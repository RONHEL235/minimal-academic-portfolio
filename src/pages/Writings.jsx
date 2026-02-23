import { useState } from "react";
import { Link } from "react-router-dom";
import { writings } from "../data/writings";

export default function Writings() {
  const [activeTag, setActiveTag] = useState(null);

  const allTags = Array.from(
    new Set(writings.flatMap((w) => w.tags))
  ).sort();

  const filteredWritings = activeTag
    ? writings.filter((w) => w.tags.includes(activeTag))
    : writings;

  return (
    <div className="space-y-16">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          Research & Writings
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-400">
          Research, long-form writing, and personal commentary.
        </p>
      </section>

      {/* TAG FILTER */}
      <section className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-3 py-1 text-sm border rounded-md ${
            !activeTag
              ? "border-neutral-900 dark:border-neutral-200 text-neutral-900 dark:text-neutral-200"
              : "border-neutral-400 text-neutral-500"
          }`}
        >
          All
        </button>

        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1 text-sm border rounded-md ${
              activeTag === tag
                ? "border-neutral-900 dark:border-neutral-200 text-neutral-900 dark:text-neutral-200"
                : "border-neutral-400 text-neutral-500"
            }`}
          >
            {tag}
          </button>
        ))}
      </section>

      {/* LIST */}
      <section className="space-y-10">
        {filteredWritings.map((writing) => (
          <article key={writing.slug} className="space-y-3">
            <p className="text-sm text-neutral-500">{writing.date}</p>

            <h2 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
              <Link
                to={`/writings/${writing.slug}`}
                className="hover:underline"
              >
                {writing.title}
              </Link>
            </h2>

            <p className="max-w-3xl text-neutral-700 dark:text-neutral-400">
              {writing.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {writing.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm border border-neutral-700 rounded-md text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
