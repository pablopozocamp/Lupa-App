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

### 0.67.1 (exámenes con funciones llamadas)

Arreglo de la 0.67.0 con un examen de funciones: «Escribe una función llamada generar_temperaturas() que…» ahora sale bien. Lupa entiende las viñetas de debajo de cada función, una función que hace varias cosas a la vez (máximo y su día, mínimo y su día, media), los aleatorios con decimales en un rango («de 10.0 a 35.0»), filtrar con un parámetro («que superen dicho umbral») y el bloque if __name__ == "__main__" del programa principal.

Las versiones anteriores, con sus novedades y sus descargas, están en [Releases](https://github.com/pablopozocamp/Lupa-App/releases).

## Sobre este repositorio

Aquí están solo la web (carpeta [`site/`](site)) y las descargas. El código fuente de la aplicación es privado.

¿Has encontrado un fallo o echas algo en falta? Cuéntalo en [Issues](https://github.com/pablopozocamp/Lupa-App/issues).

© Lupa. La app se puede descargar y usar gratis. El código y los archivos de la aplicación no se pueden copiar, modificar ni redistribuir sin permiso del autor.
