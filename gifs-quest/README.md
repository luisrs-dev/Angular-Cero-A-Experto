# Buscador de Gifs con Angular y la API de Giphy

Este proyecto es un buscador de gifs desarrollado con Angular y la API de Giphy. La aplicación permite a los usuarios buscar gifs utilizando palabras clave y mostrar los resultados de manera visualmente atractiva. A continuación, se detallan las características principales de cómo configurar y ejecutar el proyecto en tu máquina local.

## Características

- Búsqueda de gifs utilizando palabras clave.
- Visualización de los gifs encontrados.
- Interacción con la API de Giphy para obtener los resultados de búsqueda.

## Configuración

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clona el Repositorio:**
   ```
   git clone <URL del repositorio>
   ```

2. **Instala Dependencias:**
   - Asegúrate de tener Node.js y Angular CLI instalados.
   - Navega a la carpeta del proyecto y ejecuta:
     ```
     npm install
     ```

3. **Obtén una API Key de Giphy:**
   - Visita el sitio web de Giphy (https://developers.giphy.com/) y regístrate o inicia sesión en tu cuenta.
   - Crea una nueva aplicación para obtener tu API Key.

4. **Configura la API Key:**
   - En el archivo `src/environments/environment.ts`, reemplaza `'YOUR_API_KEY'` con tu API Key de Giphy.

5. **Ejecuta el Proyecto:**
   - Ejecuta el siguiente comando para iniciar el servidor de desarrollo:
     ```
     ng serve
     ```
   - Abre tu navegador y navega a `http://localhost:4200/` para ver la aplicación en funcionamiento.

## Uso

- Ingresa una palabra clave en el campo de búsqueda y presiona Enter o haz clic en el botón de búsqueda.
- Los gifs relacionados con la palabra clave se mostrarán en la interfaz.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir al proyecto, realiza un fork del repositorio, crea una rama para tus cambios y envía un pull request una vez que hayas finalizado.

## Contacto

Si tienes preguntas o comentarios, no dudes en ponerte en contacto.
