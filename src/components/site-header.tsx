import { profile } from "@/data/profile";

const navItems = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#projects", label: "Dự án" },
  { href: "#contact", label: "Liên hệ" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-8">
      <a
        href="#top"
        className="flex items-center gap-3 font-expanded text-xl font-extrabold no-underline"
      >
        <span
          aria-hidden="true"
          className="size-[30px] rounded-lg border-[2.5px] border-ink bg-accent"
        />
        {profile.name}
      </a>
      <nav aria-label="Điều hướng chính">
        <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="press flex min-h-11 items-center rounded-[10px] border-[2.5px] border-ink bg-white px-4 text-[15px] font-bold no-underline shadow-brutal-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
