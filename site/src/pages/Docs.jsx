const shortcuts = [
  ["Ctrl+Intro", "Analizar el código"],
  ["Ctrl+E", "Explicar línea a línea"],
  ["Ctrl+K", "Paleta de comandos"],
  ["Ctrl+Mayús+J", "Abrir el modo ejercicios"],
  ["Ctrl+F5", "Ejecutar (los cinco lenguajes)"],
  ["Mayús+F5", "Paso a paso (los cinco lenguajes)"],
  ["Ctrl+P", "Exportar a PDF para entregarlo"],
  ["Ctrl+Alt+L", "Formatear código"],
  ["Ctrl+Mayús+T", "Cambiar de tema"],
  ["F11", "Modo presentación"],
];

const sections = [
  {
    id: "introduccion",
    title: "Introducción",
    body: (
      <>
        <p>
          Lupa es un analizador y corrector de código fuente para quien empieza a programar:
          aplicación de escritorio en Java 21 (Swing, FlatLaf, RSyntaxTextArea) y gratuita.
        </p>
        <p>
          Analiza Java, Python, JavaScript, C y SQL, marca los errores de sintaxis, los explica en
          español y propone la corrección. Esta guía cubre cómo ponerlo en marcha y los primeros
          pasos dentro del editor.
        </p>
      </>
    ),
  },
  {
    id: "instalar",
    title: "Instalar Lupa",
    body: (
      <>
        <ul>
          <li>
            <strong>Windows</strong>: descarga <code>Lupa-windows.zip</code>, descomprímelo y abre{" "}
            <code>Lupa.exe</code>. Lleva Java dentro y todo lo necesario para ejecutar Java, Python,
            JavaScript, C y SQL: no hay que instalar nada más.
          </li>
          <li>
            <strong>macOS o Linux</strong>: descarga <code>Lupa.jar</code> y ábrelo con{" "}
            <code>java -jar Lupa.jar</code>. Necesitas Java 21 o más nuevo (por ejemplo, Eclipse
            Temurin).
          </li>
        </ul>
        <p>
          Si Windows avisa con «Windows protegió su PC», pulsa «Más información» y «Ejecutar de
          todas formas»: la app aún no está firmada digitalmente.
        </p>
      </>
    ),
  },
  {
    id: "primeros-pasos",
    title: "Primeros pasos en el editor",
    body: (
      <>
        <p>
          Pega o escribe código y pulsa <strong>Analizar</strong> (<code>Ctrl+Intro</code>). Si hay
          un error, aparece en la lista de problemas con su línea, su explicación y, cuando es
          posible, el botón <strong>Corregible</strong>.
        </p>
        <pre>
          <code>{`public class Hola {
    public static void main(String[] args) {
        System.out.println("Hola")
    }
}`}</code>
        </pre>
        <p>
          Pulsa <strong>Ver corrección</strong> para ver el cambio propuesto (el punto y coma que
          falta, en verde) y <strong>Aplicar</strong> para aplicarlo. Un <code>Ctrl+Z</code> lo
          deshace.
        </p>
      </>
    ),
  },
  {
    id: "ejercicios",
    title: "Modo ejercicios",
    body: (
      <>
        <p>
          Abre <code>Ctrl+Mayús+J</code> y elige un ejercicio por lenguaje y dificultad. Al pulsar{" "}
          <strong>Empezar en una pestaña nueva</strong> se abre el código de partida, y la lista de
          requisitos se marca sola mientras escribes. Lupa no ejecuta tu código: analiza cómo está
          escrito. Si te atascas, el botón <strong>Pista</strong> revela una pista a la vez.
        </p>
      </>
    ),
  },
  {
    id: "atajos",
    title: "Atajos útiles",
    body: (
      <table>
        <tbody>
          {shortcuts.map(([combo, action]) => (
            <tr key={combo}>
              <td>
                <code>{combo}</code>
              </td>
              <td>{action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
];

export default function Docs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-mist-400">
              Primeros pasos
            </h2>
            <nav className="mt-4 flex flex-col gap-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-md px-3 py-1.5 text-sm text-mist-400 transition-colors hover:bg-ink-900 hover:text-mist-100"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div>
          <header className="mb-10 border-b border-ink-700/70 pb-10">
            <span className="text-sm font-medium text-cyan-glow">Documentación</span>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-mist-100">
              Guía de inicio
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-mist-400">
              Cómo poner Lupa en marcha en tu equipo y dar los primeros pasos en el editor.
            </p>
          </header>

          <div className="space-y-14">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-mist-100">
                  {section.title}
                </h2>
                <div className="prose-docs mt-4 space-y-4 text-base leading-relaxed text-mist-300">
                  {section.body}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
