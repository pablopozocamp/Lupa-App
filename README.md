# Lupa

Analizador y corrector de código para quien empieza a programar: marca los errores de Java, Python, JavaScript, C y SQL, los explica en español, propone la corrección, ejecuta el código, tiene ejercicios que se comprueban solos y un paso a paso para ver cómo cambian las variables. Proyecto de 2º DAM (IES Torre del Rey).

**Web:** [pablopozocamp.github.io/Lupa-App](https://pablopozocamp.github.io/Lupa-App/)

## Descargar

En [Releases](https://github.com/pablopozocamp/Lupa-App/releases/latest):

- **Windows:** `Lupa-Instalar.exe`. Ábrelo y Lupa se instala (sin administrador) y se abre; deja su acceso en el menú Inicio y en el escritorio, y luego se actualiza sola. Lleva Java dentro. Si la quieres portátil, sin instalar: `Lupa-windows.zip`, descomprímelo y abre `Lupa.exe`.
- **macOS o Linux:** `Lupa.jar`. Necesitas Java 21 o más nuevo: `java -jar Lupa.jar`.

Si Windows avisa con «Windows protegió su PC», pulsa «Más información» y «Ejecutar de todas formas» (la app aún no está firmada).

Desde la 0.40.0, Lupa se actualiza sola: cuando hay una versión nueva, «Actualizar y reiniciar» descarga solo lo que cambia y la vuelve a abrir ya actualizada. El zip solo hace falta la primera vez.

## Versión actual

### 0.67.5 (comentarios con varios pasos)

Comentarios con varios pasos: «# crea una lista y mete 6 numeros en ella y muestra la suma» ya no se queda en la primera parte. El comentario se parte en pasos (por «y», «luego», «después» o comas delante de un verbo) y cada paso sale con su código, uno detrás de otro. «Mete 6 números en la lista» pide los 6 con un bucle (o los genera al azar si dices «aleatorios»), en vez de lista.append(6), y «ordénalas y muéstralas» se refiere a la lista. Lo que no entiende queda como «# Falta: …».

Las versiones anteriores, con sus novedades y sus descargas, están en [Releases](https://github.com/pablopozocamp/Lupa-App/releases).

## Sobre este repositorio

Aquí están solo la web (carpeta [`site/`](site)) y las descargas. El código fuente de la aplicación es privado.

¿Has encontrado un fallo o echas algo en falta? Cuéntalo en [Issues](https://github.com/pablopozocamp/Lupa-App/issues).

© Lupa. La app se puede descargar y usar gratis. El código y los archivos de la aplicación no se pueden copiar, modificar ni redistribuir sin permiso del autor.
