import { Download as DownloadIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { GithubIcon } from "./SocialIcons.jsx";

const REPO_URL = "https://github.com/pablopozocamp/Lupa-App";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/features", label: "Funciones" },
  { to: "/docs", label: "Docs" },
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors ${
          isActive ? "text-mist-100" : "text-mist-400 hover:text-mist-100"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700/70 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2.5">
          <Logo className="h-6 w-6" />
          <span className="text-base font-semibold tracking-tight text-mist-100">Lupa</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-mist-400 transition-colors hover:text-mist-100"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <NavLink
            to="/download"
            className="inline-flex items-center gap-2 rounded-full bg-mist-100 px-4 py-2 text-sm font-semibold text-ink-950 transition-opacity hover:opacity-90"
          >
            <DownloadIcon size={16} />
            Descargar
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-mist-200 md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-700/70 px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <NavItem key={link.to} {...link} onClick={() => setOpen(false)} />
            ))}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-mist-400"
            >
              GitHub
            </a>
            <NavLink
              to="/download"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-mist-100 px-4 py-2 text-sm font-semibold text-ink-950"
            >
              <DownloadIcon size={16} />
              Descargar
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
