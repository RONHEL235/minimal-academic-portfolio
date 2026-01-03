import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Home", path: "/" },
  { name: "CV", path: "/cv" },
  { name: "Publications", path: "/publications" },
  { name: "Projects", path: "/projects" },
  { name: "Writings", path: "/writings" }
];

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex gap-6">
          {links.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium"
                  : "text-gray-600 dark:text-gray-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Far right */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
