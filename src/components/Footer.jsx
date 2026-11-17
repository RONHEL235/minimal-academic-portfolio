
import { Heart } from "lucide-react";

export default function Footer() {
  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ronee-helepi-5917b244a",
    },
    {
      label: "GitHub",
      href: "https://github.com/RONHEL235",
    },
    {
      label: "Substack",
      href: "https://substack.com/@veronicaaaaaaaaaaa?r=510ct5&utm_campaign=profile&utm_medium=profile-page",
    },
    {
      label: "Email",
      href: "mailto:roneehelepi70@gmail.com",
    },
  ];

  return (
    <footer className="mt-24">
      <div className="max-w-5xl mx-auto px-4 border-t border-neutral-300 dark:border-neutral-700">
        <div className="flex flex-col items-center gap-4 py-8 text-sm">

          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="
                  text-neutral-700 hover:text-neutral-900
                  dark:text-neutral-400 dark:hover:text-neutral-200
                  transition-colors
                "
              >
                {label}
              </a>
            ))}
          </div>

          {/* COPYRIGHT */}
          <div className="flex items-center justify-center gap-1.5 text-neutral-500 dark:text-neutral-500">
            <span>© 2026 Ronee Helepi</span>

            <Heart
              size={16}
              strokeWidth={1.75}
              className="fill-current"
              aria-label="Heart"
            />
          </div>

        </div>
      </div>
    </footer>
  );
}
