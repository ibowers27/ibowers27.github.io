import type { Theme } from "../hooks/useTheme";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="site-header">
      <a href="#top" className="logo">
        Ivy Bowers
      </a>
      <nav className="nav" aria-label="Main">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label="Toggle color theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
}

export default Header;
