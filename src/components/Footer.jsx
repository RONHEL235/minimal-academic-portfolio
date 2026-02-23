export default function Footer() {
  const links = [
    {
      label: "GitHub",
      href: "https://github.com/RONHEL235",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ronee-helepi-a25407343/",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=roneehelepi70@gmail.com",
    },
  ];

  return (
    <footer className="mt-24">
      <div className="max-w-5xl mx-auto px-4 border-t border-neutral-300 dark:border-neutral-700">
        <div className="flex flex-wrap items-center justify-between h-20 text-sm">
          <div className="text-neutral-700 dark:text-neutral-400">
            © 2025 Ronee Helepi [Heart emoji]
          </div>

          <div className="flex gap-6">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
