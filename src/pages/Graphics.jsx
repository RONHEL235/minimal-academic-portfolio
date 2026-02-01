export default function Graphics() {
  return (
    <section className="max-w-5xl mx-auto space-y-12">
      {/* HEADER */}
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
          Graphics
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl">
          A selection of visual experiments, layouts, and graphic work.
        </p>
      </header>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {graphics.map((item) => (
          <div
            key={item.id}
            className="
              group
              border border-neutral-300 dark:border-neutral-700
              bg-neutral-100 dark:bg-neutral-900
              overflow-hidden
            "
          >
            <div className="aspect-square bg-neutral-200 dark:bg-neutral-800">
              <img
                src={item.image}
                alt={item.title}
                className="
                  h-full w-full object-cover
                  group-hover:scale-105
                  transition-transform duration-300
                "
              />
            </div>

            <div className="p-3 space-y-1">
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                {item.title}
              </p>
              <p className="text-xs text-neutral-500">
                {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* TEMP DATA */
const graphics = [
  {
    id: "g1",
    title: "Untitled Poster Study",
    year: "2024",
    image: "/graphics/sample-1.jpg",
  },
  {
    id: "g2",
    title: "Typography Experiment",
    year: "2025",
    image: "/graphics/sample-2.jpg",
  },
  {
    id: "g3",
    title: "Editorial Layout",
    year: "2025",
    image: "/graphics/sample-3.jpg",
  },
];
