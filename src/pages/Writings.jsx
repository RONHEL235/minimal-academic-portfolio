
import { useState } from "react";
import { Link } from "react-router-dom";
import { Smile } from "lucide-react";
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
    <div className="space-y-10">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          Research & Writings
        </h1>

        {/* LITERARY QUOTATION */}
        <div className="mt-5 space-y-2">
          <h2 className="text-lg md:text-xl font-normal italic text-neutral-700 dark:text-neutral-300">
            “I actually need to start writing stuff.”
          </h2>

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            — Ronee Helepi,{" "}
            (2026)
          </p>
        </div>
      </section>

      {/* GREY DIVIDER */}
      <div className="border-t border-neutral-300 dark:border-neutral-700" />

      {/* TAG FILTER */}
      <section className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`
            flex items-center gap-2
            px-3 py-1 text-sm border rounded-md
            ${
              !activeTag
                ? "border-neutral-900 dark:border-neutral-200 text-neutral-900 dark:text-neutral-200"
                : "border-neutral-400 text-neutral-500"
            }
          `}
        >
          Coming Soon!

          <Smile
            size={16}
            strokeWidth={1.75}
            aria-hidden="true"
          />
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

      {/* WRITINGS LIST */}
      <section className="space-y-10">
        {filteredWritings.map((writing) => (
          <article
            key={writing.slug}
            className="space-y-3"
          >
            {/* DATE */}
            <p className="text-sm text-neutral-500">
              {writing.date}
            </p>

            {/* TITLE */}
            <h2 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
              <Link
                to={`/writings/${writing.slug}`}
                className="hover:underline"
              >
                {writing.title}
              </Link>
            </h2>

            {/* EXCERPT */}
            <p className="max-w-3xl text-neutral-700 dark:text-neutral-400">
              {writing.excerpt}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              {writing.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    px-3 py-1
                    text-sm
                    border border-neutral-700
                    rounded-md
                    text-neutral-500
                  "
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
