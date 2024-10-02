# Proyecto API con Express

## Descripción

Este proyecto es una API simple creada con Express que permite recibir cookies desde el cliente. Utiliza CORS para permitir solicitudes desde diferentes orígenes y dotenv para gestionar variables de entorno.

## Características

- Endpoint GET para verificar que la API está funcionando.
- Endpoint POST para recibir una cookie (MoodleSession) y enviar una respuesta de éxito.

## Instalación

1. Clona el repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Configura las variables de entorno en un archivo `.env`.
5. Inicia el servidor con `node index.js` o `npm start`.

## Uso

- **GET /**: Devuelve un mensaje indicando que la API está funcionando.
- **POST /cookie**: Envía un JSON con la cookie `MoodleSession` y recibe una respuesta de éxito.

## Ejemplo de uso desde el navegador

Puedes probar la API utilizando el siguiente script en la consola del navegador:

```javascript
const getCookies = () => {
  return document.cookie.split(";");
};

fetch("http://localhost:8000/cookie", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ MoodleSession: getCookies() }),
});
```

```bash
curl -X POST http://localhost:8000/cookie -H "Content-Type: application/json" -d "{\"MoodleSession\":\"Cookie de ejemplo\"}"
```

## Autor

**Iván L. Álvarez**  
- GitHub: [ivanlalvarez22](https://github.com/ivanlalvarez22)  
- Portafolio: [ivanalvarez-contacto.vercel.app](https://ivanalvarez-contacto.vercel.app/)
