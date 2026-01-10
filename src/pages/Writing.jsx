import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { writings } from "../data/writings";



export default function Writing() {
  const { slug } = useParams();
  const writing = writings.find((w) => w.slug === slug);

  if (!writing) {
    return <p className="text-neutral-500">Article not found.</p>;
  }

  const headings = writing.content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", ""));

  return (
    <article className="max-w-3xl space-y-12">
      {/* BACK */}
      <Link
        to="/writings"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
      >
        <ArrowLeft size={16} />
        All writings
      </Link>

      {/* HEADER */}
      <header className="space-y-3">
        <p className="text-sm text-neutral-500">{writing.date}</p>
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
          {writing.title}
        </h1>
      </header>

      {/* TOC */}
      {headings.length > 1 && (
        <aside
        className="
        border-l border-neutral-300 dark:border-neutral-700
        pl-4 space-y-2
        sticky top-28
        self-start
        "
        >
          <p className="text-sm font-medium text-neutral-600">Contents</p>
          {headings.map((h) => (
            <a
              key={h}
              href={`#${h.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-sm text-neutral-500 hover:underline"
            >
              {h}
            </a>
          ))}
        </aside>
      )}

      {/* CONTENT */}
      <section className="prose prose-neutral dark:prose-invert max-w-none">
        {writing.content.split("\n\n").map((block, i) => {
          if (block.startsWith("## ")) {
            const id = block
              .replace("## ", "")
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <h2 key={i} id={id}>
                {block.replace("## ", "")}
              </h2>
            );
          }

          return <p key={i}>{block}</p>;
        })}
      </section>
    </article>
  );
}
