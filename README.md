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

### 0.67.4 (decimales de verdad)

Decimales de verdad: cuando el enunciado pide «con dos decimales», el resultado sale como 84.50 (f"{media:.2f}") y no 84.5. Vale para la media, la máxima, la mínima y la suma, cada una con los decimales que vienen detrás de ella, o para todos con «todos los resultados con 2 decimales». Además, con el examen de la telemetría de Fórmula 1: «debe detenerse cuando introduzca un número negativo» pide hasta un negativo, avisa si no se ha escrito ninguno (sin dividir entre 0), «el total de vueltas» es cuántas hay, dice en qué vuelta fue la máxima y hace la lista de vueltas por debajo de la media. Los enunciados pegados con # delante de cada línea también se leen bien.

Las versiones anteriores, con sus novedades y sus descargas, están en [Releases](https://github.com/pablopozocamp/Lupa-App/releases).

## Sobre este repositorio

Aquí están solo la web (carpeta [`site/`](site)) y las descargas. El código fuente de la aplicación es privado.

¿Has encontrado un fallo o echas algo en falta? Cuéntalo en [Issues](https://github.com/pablopozocamp/Lupa-App/issues).

© Lupa. La app se puede descargar y usar gratis. El código y los archivos de la aplicación no se pueden copiar, modificar ni redistribuir sin permiso del autor.
