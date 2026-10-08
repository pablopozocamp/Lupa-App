import { Download as DownloadIcon, FileArchive } from "lucide-react";

const REPO_URL = "https://github.com/pablopozocamp/Lupa-App";
const LATEST_RELEASE_URL = `${REPO_URL}/releases/latest`;
const LATEST_DOWNLOAD = (file) => `${REPO_URL}/releases/latest/download/${file}`;

const downloads = [
  {
    icon: DownloadIcon,
    title: "Windows",
    detail: "Lupa-windows.zip · ~82 MB",
    description: "Lleva Java incluido: descomprime y abre Lupa.exe. No hace falta instalar nada.",
    href: LATEST_DOWNLOAD("Lupa-windows.zip"),
    cta: "Descargar para Windows",
  },
  {
    icon: FileArchive,
    title: "Windows, macOS o Linux",
    detail: "Lupa.jar · ~32 MB",
    description: "Necesitas Java 21 o más nuevo instalado. Ábrelo con doble clic o java -jar Lupa.jar.",
    href: LATEST_DOWNLOAD("Lupa.jar"),
    cta: "Descargar Lupa.jar",
  },
];

const requirements = [
  { label: "Versión", value: "v0.51.1" },
  { label: "Java", value: "Incluido (zip) o JDK 21 (.jar)" },
  { label: "Sistema", value: "Windows, macOS o Linux" },
  { label: "Precio", value: "Gratis" },
];

const faqs = [
  {
    q: "Windows dice «Windows protegió su PC», ¿es seguro?",
    a: "Sí. Lupa.exe aún no está firmado digitalmente (la firma de código cuesta dinero y es un proyecto académico), así que Windows SmartScreen avisa por precaución. Pulsa «Más información» y luego «Ejecutar de todas formas».",
  },
  {
    q: "¿Necesito instalar Java para usar el .zip de Windows?",
    a: "No. Lupa-windows.zip lleva su propio Java empaquetado dentro, así que basta con descomprimirlo y abrir Lupa.exe.",
  },
  {
    q: "¿Y si no uso Windows?",
    a: "Descarga Lupa.jar. Necesitas tener instalado Java 21 o más nuevo, y luego lo abres con doble clic o con java -jar Lupa.jar desde la terminal.",
  },
  {
    q: "¿Necesito internet para usarlo?",
    a: "No. El análisis, la corrección, el autocompletado y la explicación funcionan sin conexión. Ejecutar tampoco la necesita, y en Windows no hay que instalar nada más: Lupa lleva dentro Python, un compilador de C, JavaScript y SQL. Lo único que usa internet, si lo hay, es mirar una vez al día si hay versión nueva (se puede quitar en Ayuda).",
  },
  {
    q: "¿Qué licencia tiene?",
    a: "Es un proyecto académico de 2º DAM (IES Torre del Rey). La app es gratuita para usarla; el código fuente es privado y no se puede copiar ni redistribuir sin permiso.",
  },
];

export default function Download() {
  return (
    <>
      <section className="bg-grid border-b border-ink-700/70">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-3 py-1 text-xs font-medium text-mist-300">
            v0.51.1
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-mist-100 sm:text-5xl">
            Descarga <span className="text-gradient">Lupa</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-mist-400">
            Gratis. Elige tu sistema, no hace falta registrarte en ningún sitio.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {downloads.map((dl) => (
              <div
                key={dl.title}
                className="glow-border flex flex-col rounded-2xl border border-ink-700 bg-ink-900/60 p-8 text-left"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-glow/10 text-violet-glow">
                  <dl.icon size={20} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-mist-100">{dl.title}</h2>
                <p className="mt-1 text-xs font-medium text-mist-400">{dl.detail}</p>
                <p className="mt-3 text-sm leading-relaxed text-mist-400">{dl.description}</p>
                <a
                  href={dl.href}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-mist-100 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-opacity hover:opacity-90"
                >
                  <DownloadIcon size={16} />
                  {dl.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm text-mist-400">
            Windows puede avisar con «Windows protegió su PC» porque la app aún no está firmada:
            pulsa «Más información» → «Ejecutar de todas formas».
          </p>

          <a
            href={LATEST_RELEASE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-medium text-cyan-glow hover:underline"
          >
            Ver las notas de la versión en GitHub →
          </a>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {requirements.map((req) => (
              <div key={req.label} className="rounded-xl border border-ink-700 bg-ink-900/40 p-4">
                <div className="text-xs font-medium uppercase tracking-wide text-mist-400">
                  {req.label}
                </div>
                <div className="mt-1 text-sm font-semibold text-mist-100">{req.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-700/70 bg-ink-900/30">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-mist-100">
            Preguntas frecuentes
          </h2>

          <div className="mt-12 divide-y divide-ink-700">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-base font-semibold text-mist-100">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
