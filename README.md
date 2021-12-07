# Product Handling

Sistema CRUD de productos independientes por usuario con sistema de logueo y registro.

## Requisitos

Debe instalar MongoDB y Node.js para la ejecución del proyecto.

## Instalación

Crea el archivo .env y agregar las siguientes variables de entorno necesarias para el desarrollo.

```bash
DB_URL=mongodb://localhost:27017/product-handling
HOST=localhost
PORT=3002
TOKEN_SECRET=dev_token
```

Usa el gestor de paquetes [npm](https://www.npmjs.com/) para instalar las dependencias.

```bash
npm install
```

## Uso

Ejecute el servidor.

```bash
npm run dev
```

Ejecute el empaquetador de desarrollo de archivos para ingresar vía web.

```bash
npm run webpack-dev
```

## Desarrollador

[Sebastian Sossa](https://www.facebook.com/sebssos/)