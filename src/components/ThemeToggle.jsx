import { useEffect, useState, useRef } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const applyTheme = (mode) => {
    setTheme(mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", mode);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    applyTheme(saved);
  }, []);

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
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Theme toggle"
        className="w-8 h-8 flex items-center justify-center rounded-md
  border border-neutral-300 dark:border-neutral-700
  bg-neutral-100 dark:bg-neutral-950
  hover:bg-neutral-200 dark:hover:bg-neutral-800"

      >
        {theme === "dark" ? (
          <Moon size={16} className="text-neutral-600 dark:text-neutral-400" />
        ) : (
          <Sun size={16} className="text-neutral-600 dark:text-neutral-400" />
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-32 rounded-md border border-neutral-700 bg-neutral-100 dark:bg-neutral-900 shadow-lg z-50">
          <button
            onClick={() => {
              applyTheme("light");
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <Sun size={14} /> Light
          </button>

          <button
            onClick={() => {
              applyTheme("dark");
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <Moon size={14} /> Dark
          </button>
        </div>
      )}
    </div>
  );
}
