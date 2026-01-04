export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="max-w-5xl mx-auto px-4 border-t border-neutral-700">
        <div className="flex flex-wrap items-center justify-between h-20 text-sm text-neutral-500">
          <div>© 2026 Ronee Helepi [Heart Emoji]</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300">
              Email
            </a>
            <a href="#" className="hover:text-neutral-300">
              GitHub
            </a>
            <a href="#" className="hover:text-neutral-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
