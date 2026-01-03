import { NavLink } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "CV", to: "/cv" },
    { name: "Publications", to: "/publications" },
    { name: "Projects", to: "/projects" },
    { name: "Writings", to: "/writings" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-700">
      <div className="w-full">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* NAME */}
            <div className="text-neutral-400 font-medium">
              Ronee Helepi{" "}
              <span className="text-neutral-500">| iswriter</span>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6 text-sm">
                {links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-neutral-300"
                        : "text-neutral-400 hover:text-neutral-300"
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <ThemeToggle />
            </div>

            {/* MOBILE RIGHT SIDE */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setOpen(!open)}
                className="text-neutral-400"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t border-neutral-700">
            <div className="max-w-5xl mx-auto px-4 py-4 space-y-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block font-semibold text-neutral-300"
                      : "block text-neutral-400"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
    