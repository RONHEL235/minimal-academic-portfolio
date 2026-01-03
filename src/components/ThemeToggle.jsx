import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-sm text-gray-600 dark:text-gray-300"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
