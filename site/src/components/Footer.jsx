import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { GithubIcon } from "./SocialIcons.jsx";

const REPO_URL = "https://github.com/pablopozocamp/Lupa-App";

const columns = [
  {
    title: "Producto",
    links: [
      { label: "Funciones", to: "/features" },
      { label: "Descargar", to: "/download" },
      { label: "Documentación", to: "/docs" },
    ],
  },
  {
    title: "Proyecto",
    links: [
      { label: "Historial de versiones", href: `${REPO_URL}/releases` },
      { label: "Reportar un problema", href: `${REPO_URL}/issues` },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/70 bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo className="h-6 w-6" />
              <span className="text-base font-semibold tracking-tight text-mist-100">Lupa</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-400">
              Analizador y corrector de código fuente para quien empieza a programar. Proyecto de
              2º DAM, gratis.
            </p>
            <div className="mt-6 flex items-center gap-4 text-mist-400">
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-mist-100"
              >
                <GithubIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-mist-100">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) =>
                  link.to ? (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-mist-400 transition-colors hover:text-mist-100"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-mist-400 transition-colors hover:text-mist-100"
                      >
                        {link.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-700/70 pt-8 text-sm text-mist-400 sm:flex-row">
          <p>&copy; {currentYear} Lupa · IES Torre del Rey</p>
          <p>Proyecto académico de 2º DAM</p>
        </div>
      </div>
    </footer>
  );
}
