export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="max-w-5xl mx-auto px-4 border-t border-neutral-300 dark:border-neutral-700">
        <div className="flex flex-wrap items-center justify-between h-20 text-sm">
          <div className="text-neutral-700 dark:text-neutral-400">
            © 2026 Ronee Helepi ♥
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              Email
            </a>
            <a
              href="#"
              className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
