import {
  Download as DownloadIcon,
  Gauge,
  LayoutTemplate,
  MessageSquareText,
  SpellCheck2,
  TerminalSquare,
  Wand2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon } from "../components/SocialIcons.jsx";
import Screenshot from "../components/Screenshot.jsx";
import terminal from "../assets/screenshots/terminal.png";

const REPO_URL = "https://github.com/pablopozocamp/Lupa-App";

const stats = [
  { value: "5", label: "lenguajes: Java, Python, JS, C y SQL" },
  { value: "23", label: "ejercicios guiados con pistas" },
  { value: "1221", label: "pruebas automáticas en verde" },
  { value: "100%", label: "gratis, sin anuncios ni registro" },
];

const features = [
  {
    icon: SpellCheck2,
    title: "Detecta y corrige errores",
    description:
      "Analiza tu código, marca cada error de sintaxis y propone la corrección exacta, con una vista de cambios antes de aplicarla.",
  },
  {
    icon: MessageSquareText,
    title: "Explica línea a línea",
    description:
      "Cada variable, bucle o condición se explica en español, pensado para quien está aprendiendo a programar.",
  },
  {
    icon: Wand2,
    title: "Autocompletado por comentarios",
    description:
      "Escribe un comentario con lo que quieres hacer y Lupa propone el código. Sin IA y sin conexión a internet.",
  },
  {
    icon: LayoutTemplate,
    title: "Modo ejercicios",
    description:
      "23 ejercicios de Java, Python, JavaScript, C y SQL que marcan en vivo lo que ya cumple tu código, con pistas progresivas.",
  },
  {
    icon: Gauge,
    title: "Métricas de código",
    description:
      "Líneas, comentarios, funciones y complejidad ciclomática, con consejos concretos sobre qué mejorar.",
  },
  {
    icon: TerminalSquare,
    title: "Ejecuta los cinco lenguajes",
    description: "Java, Python, JavaScript, C y SQL en una terminal integrada que muestra los errores en rojo y para sola si se cuelga.",
  },
];

const steps = [
  {
    n: "01",
    title: "Pega o abre tu código",
    description: "Java, Python, JavaScript, C o SQL. Lupa detecta el lenguaje sola.",
  },
  {
    n: "02",
    title: "Analiza y lee la explicación",
    description: "Cada error marcado señala qué falla, por qué, y cómo corregirlo.",
  },
  {
    n: "03",
    title: "Corrige o aprende por qué",
    description: "Aplica la corrección con un clic, o entiende el error y arréglalo tú mismo.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <div className="pointer-events-none absolute left-1/2 top-[-10rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet-glow/15 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 lg:pb-28 lg:pt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-3 py-1 text-xs font-medium text-mist-300">
              v0.26.0 ya disponible para descargar
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-mist-100 sm:text-5xl lg:text-[3.4rem]">
              El editor que te explica <span className="text-gradient">por qué falla</span> tu
              código
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist-400">
              Lupa analiza tu código en Java, Python, JavaScript, C y SQL, te explica cada error en
              español y te propone la corrección exacta. Aplicación de escritorio y gratuita.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/download"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-mist-100 px-6 py-3 text-sm font-semibold text-ink-950 transition-opacity hover:opacity-90"
              >
                <DownloadIcon size={16} />
                Descargar Lupa
              </Link>
              <a
                href={`${REPO_URL}/releases`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-600 px-6 py-3 text-sm font-semibold text-mist-100 transition-colors hover:border-ink-500 hover:bg-ink-900"
              >
                <GithubIcon className="h-4 w-4" />
                Novedades de cada versión
              </a>
            </div>

            <p className="mt-5 text-sm text-mist-400">
              Gratis, v0.26.0 · Windows y cualquier sistema con Java 21
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl">
            <Screenshot
              src={terminal}
              alt="Lupa analizando y ejecutando un programa de Java, con la terminal integrada abierta debajo del editor"
            />
          </div>
        </div>

        <div className="relative border-t border-ink-700/70 bg-ink-900/40">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl font-bold text-mist-100 sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-mist-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
            Hecho para quien empieza a programar
          </h2>
          <p className="mt-4 text-lg text-mist-400">
            Nada de IA en la nube ni cuentas en servidores ajenos: Lupa analiza, explica y corrige
            todo en local.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-ink-700 bg-ink-900/40 p-6 transition-colors hover:border-ink-600"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-glow/10 text-violet-glow">
                <feature.icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-mist-100">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-ink-700/70 bg-ink-900/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
            Cómo funciona
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                <span className="text-5xl font-bold text-ink-700">{step.n}</span>
                <h3 className="mt-4 text-lg font-semibold text-mist-100">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="glow-border relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/60 px-8 py-16 text-center">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow/10 blur-[100px]" />
          <h2 className="text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
            Pruébalo en tu equipo
          </h2>
          <p className="mx-auto mt-4 max-w-md text-mist-400">
            Descarga la versión para Windows o el .jar para cualquier sistema con Java 21.
          </p>
          <Link
            to="/download"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-mist-100 px-6 py-3 text-sm font-semibold text-ink-950 transition-opacity hover:opacity-90"
          >
            <DownloadIcon size={16} />
            Descargar Lupa
          </Link>
        </div>
      </section>
    </>
  );
}
