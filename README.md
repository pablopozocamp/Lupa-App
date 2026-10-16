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

### 0.67.2 (más exámenes con funciones)

Arreglo con otro examen de funciones (el de las temperaturas del rack). Lupa entiende el enunciado aunque esté pegado como comentarios (# …) y con subapartados numerados; una función que «recorra el vector una sola vez y devuelva tres valores» sale con un solo bucle y return maximo, minimo, media; «un nuevo vector con las horas (las posiciones) en las que superó los 35» guarda las posiciones; y la lista de prueba que da el programa principal (datos_dia = [...]) es la que se usa en el if __name__ == "__main__".

Las versiones anteriores, con sus novedades y sus descargas, están en [Releases](https://github.com/pablopozocamp/Lupa-App/releases).

## Sobre este repositorio

Aquí están solo la web (carpeta [`site/`](site)) y las descargas. El código fuente de la aplicación es privado.

¿Has encontrado un fallo o echas algo en falta? Cuéntalo en [Issues](https://github.com/pablopozocamp/Lupa-App/issues).

© Lupa. La app se puede descargar y usar gratis. El código y los archivos de la aplicación no se pueden copiar, modificar ni redistribuir sin permiso del autor.
