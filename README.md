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

### 0.66.3 (más formas de pedir las cosas)

Novedades de la 0.66.3, probadas con veinte enunciados nuevos redactados como en los exámenes (antes salían bien 2 de 20, ahora los 20): listas dadas con su nombre, también de textos («nombres = ["Ana", …]»); cambios con condición («sube un punto a las notas menores que 5», «sustituye los negativos por 0», «multiplica por 2 los pares»); «bajo cero»; la diferencia entre el mayor y el menor; «los 3 mayores»; cuántos están entre dos valores o tienen más de N letras; intercambiar el primero y el último; la media de solo algunos («de los mayores de edad»); el máximo y cuántas veces aparece; cuántas veces y en qué posiciones; mostrar del último al primero sin cambiar la lista o en una lista nueva; validar que sean positivos; preguntar cuántos datos hay; y dos listas dadas (el importe de una factura o unirlas).

1492 pruebas en verde (20 nuevas: los veinte enunciados, ejecutados).

Las versiones anteriores, con sus novedades y sus descargas, están en [Releases](https://github.com/pablopozocamp/Lupa-App/releases).

## Sobre este repositorio

Aquí están solo la web (carpeta [`site/`](site)) y las descargas. El código fuente de la aplicación es privado.

¿Has encontrado un fallo o echas algo en falta? Cuéntalo en [Issues](https://github.com/pablopozocamp/Lupa-App/issues).

© Lupa. La app se puede descargar y usar gratis. El código y los archivos de la aplicación no se pueden copiar, modificar ni redistribuir sin permiso del autor.
