import {
  ArrowRight,
  Command,
  Keyboard,
  Moon,
  Presentation,
  RotateCcw,
  Volume2,
} from "lucide-react";
import Screenshot from "../components/Screenshot.jsx";
import { GithubIcon } from "../components/SocialIcons.jsx";
import autocompletado from "../assets/screenshots/autocompletado.png";
import correccion from "../assets/screenshots/correccion.png";
import ejercicios from "../assets/screenshots/ejercicios.png";
import explicacion from "../assets/screenshots/explicacion.png";
import metricas from "../assets/screenshots/metricas.png";
import terminal from "../assets/screenshots/sql.png";

const REPO_URL = "https://github.com/pablopozocamp/Lupa-App";

const sections = [
  {
    title: "Detecta y corrige errores de sintaxis",
    description:
      "Lupa analiza tu código en Java, Python, JavaScript, C y SQL, y marca cada error con su línea, su columna y una explicación de por qué falla. Cuando hay corrección posible, la propone con una vista de cambios antes de aplicarla, y un solo Ctrl+Z la deshace.",
    bullets: [
      '"Corregir todo" aplica todas las correcciones de una vez',
      "Vista de cambios con lo que se añade en verde antes de aplicar nada",
      "El análisis se hace en un hilo aparte: el editor nunca se congela",
    ],
    image: correccion,
    alt: "Lupa marcando un error de sintaxis (falta un punto y coma) con su explicación y el botón Corregible",
  },
  {
    title: "Explica el código línea a línea",
    description:
      "Cada variable, bucle, condición o llamada se explica en español, pensado para quien todavía no tiene el vocabulario de un programador con experiencia. También se puede escuchar: el botón de leer en voz alta usa el sintetizador del sistema, sin conexión.",
    bullets: [
      "Una tarjeta por línea, agrupadas en bloques expandibles",
      "Leer en voz alta (Ctrl+Mayús+L), sin conexión a internet",
      "Funciona con el código seleccionado o con el archivo entero",
    ],
    image: explicacion,
    alt: "Panel de explicación línea a línea de Lupa mostrando qué hace cada variable y el bucle for de un programa",
  },
  {
    title: "Autocompletado por comentarios, sin IA",
    description:
      "Escribe un comentario con lo que quieres hacer, pulsa Intro, y Lupa propone el código en gris para aceptarlo con Tab. No usa modelos de lenguaje ni conexión a internet: reconoce patrones en español e inglés sobre un catálogo de más de 60 intenciones por lenguaje.",
    bullets: [
      "60 intenciones: bucles, funciones, lectura de archivos, SQL…",
      "Usa los nombres que ya tienes en tu código y en tu comentario",
      "Añade las importaciones que falten automáticamente",
    ],
    image: autocompletado,
    alt: "Lupa sugiriendo el código para 'calcular la media de las notas' a partir de un comentario, en gris, listo para aceptar con Tab",
  },
  {
    title: "Modo ejercicios con pistas",
    description:
      "23 ejercicios con enunciado (Java, Python, JavaScript, C y SQL), de una a tres estrellas de dificultad. Lupa no ejecuta tu código: mira cómo está escrito y marca en vivo qué requisitos ya cumples, con pistas que se revelan una a una si te atascas.",
    bullets: [
      "La lista de requisitos se marca sola mientras escribes",
      "Pistas progresivas, nunca la solución completa",
      "El progreso se recuerda entre sesiones",
    ],
    image: ejercicios,
    alt: "Ventana de ejercicios de Lupa con la lista de requisitos marcados y dos pistas disponibles",
  },
  {
    title: "Métricas y formateo de código",
    description:
      "La pestaña Métricas calcula líneas de código, porcentaje de comentarios, número de funciones y complejidad ciclomática de McCabe, con consejos concretos sobre qué conviene mejorar. Formatear código (Ctrl+Alt+L) arregla la sangría sin tocar lo que hace el programa.",
    bullets: [
      "Complejidad por función, de la más a la menos compleja",
      "Se actualiza sola medio segundo después de dejar de escribir",
      "Formatear solo la selección, o todo el archivo al guardar",
    ],
    image: metricas,
    alt: "Pestaña de métricas de Lupa con tarjetas de código, comentarios, funciones y complejidad, y consejos de mejora",
  },
  {
    title: "Ejecuta los cinco lenguajes",
    description:
      "El botón Ejecutar (Ctrl+F5) abre una terminal integrada y lanza tu programa de verdad, en Java, Python, JavaScript, C o SQL. Lo que escribes se manda al programa, los errores salen en rojo, y Lupa lo para sola si tarda más de 60 segundos o si entra en un bucle infinito.",
    bullets: [
      "Java, Python, JavaScript y C, con entrada por teclado",
      "Nada que instalar: Lupa lleva dentro Python, el compilador de C, JavaScript y SQL",
            "Parada automática ante bucles infinitos o cuelgues",
    ],
    image: terminal,
    alt: "Terminal integrada de Lupa ejecutando un script de SQL y enseñando el resultado como una tabla",
  },
];

const extras = [
  {
    icon: Command,
    title: "Paleta de comandos",
    description: "Ctrl+K abre un buscador flotante con cualquier acción, al estilo Spotlight.",
  },
  {
    icon: Moon,
    title: "Tema claro y oscuro",
    description: "Cambia con un clic o Ctrl+Mayús+T. El editor sigue al tema de la interfaz.",
  },
  {
    icon: Presentation,
    title: "Modo presentación",
    description: "F11 agranda toda la letra y simplifica la interfaz para dar clase.",
  },
  {
    icon: RotateCcw,
    title: "Recuperación automática",
    description: "Si Lupa se cierra de golpe, ofrece recuperar lo que no se había guardado.",
  },
  {
    icon: Volume2,
    title: "Leer en voz alta",
    description: "Explica un error en voz alta con el sintetizador del sistema, sin conexión.",
  },
  {
    icon: Keyboard,
    title: "Atajos de IntelliJ",
    description: "Duplicar línea, mover línea, renombrar, plegar bloques: como ya los conoces.",
  },
];

export default function Features() {
  return (
    <>
      <section className="bg-grid border-b border-ink-700/70">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-mist-100 sm:text-5xl">
            Todo corre <span className="text-gradient">en tu equipo</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-mist-400">
            Sin servidores, sin cuentas, sin modelos de IA en la nube. Cada función de Lupa
            analiza, explica o corrige tu código localmente.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="space-y-24">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-mist-100 sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-mist-400">
                  {section.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-mist-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <Screenshot src={section.image} alt={section.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-700/70 bg-ink-900/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
            Y también incluye
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((extra) => (
              <div
                key={extra.title}
                className="rounded-xl border border-ink-700 bg-ink-900/40 p-6 transition-colors hover:border-ink-600"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-glow/10 text-cyan-glow">
                  <extra.icon size={20} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-mist-100">{extra.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{extra.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="glow-border relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/60 px-8 py-16 text-center">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-glow/10 blur-[100px]" />
          <h2 className="text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
            ¿Has encontrado un fallo o echas algo en falta?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-mist-400">
            Lupa es un proyecto académico de 2º DAM. Cuéntalo en GitHub y lo tendremos en cuenta
            para las próximas versiones.
          </p>
          <a
            href={`${REPO_URL}/issues`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-mist-100 px-6 py-3 text-sm font-semibold text-ink-950 transition-opacity hover:opacity-90"
          >
            <GithubIcon className="h-4 w-4" />
            Escribir en GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
