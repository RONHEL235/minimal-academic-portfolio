import { useEffect, useState, useRef } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Apply theme safely
  const applyTheme = (mode) => {
    setTheme(mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", mode);
  };

  // Load theme on first mount
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    applyTheme(saved);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Theme options"
        className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-700 hover:bg-neutral-800 text-neutral-400"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 w-28 rounded-md border border-neutral-700 bg-neutral-900 shadow-lg z-50">
          <button
            onClick={() => {
              applyTheme("light");
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-800"
          >
            ☀️ Light
          </button>

          <button
            onClick={() => {
              applyTheme("dark");
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-800"
          >
            🌙 Dark
          </button>
        </div>
      )}
    </div>
  );
}
