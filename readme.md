# Node.js Backend - Prueba técnica backend

Este proyecto es un backend desarrollado con **Node.js** y **Express**. Funciona como una API para autenticación, listado y creación de usuarios.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- npm (se instala con Node.js)

## Instalación y Configuración

1. **Clonar el repositorio**

   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd prueba-tecnica-backend
   ```

2. **Instalar dependencias**

   ```sh
   npm install
   ```

3. **Iniciar el servidor**
   ```sh
   node server.js
   ```
   El backend estará corriendo en `http://localhost:5005`.

## Endpoints Disponibles

### Autenticación

- **POST** `/login` → Verifica credenciales
  ```json
  {
    "email": "admin@test.com",
    "password": "123456"
  }
  ```
  Respuesta exitosa:
  ```json
  {
    "success": true
  }
  ```

### Usuarios

- **GET** `/users` → Devuelve la lista de usuarios
- **POST** `/users` → Crea un usuario nuevo
  ```json
  {
    "name": "Nuevo Usuario",
    "email": "nuevo@usuario.com"
  }
  ```
  Respuesta:
  ```json
  {
    "id": 4,
    "name": "Nuevo Usuario",
    "email": "nuevo@usuario.com"
  }
  ```

## Tecnologías Usadas

- Node.js
- Express
- CORS
- Body-parser

---

## Troubleshooting

Si tienes problemas:

- Asegúrate de que `node_modules` está instalado: `npm install`
- Verifica que el puerto `5005` esté libre y que el servidor se haya iniciado correctamente
- Si hay errores en las peticiones, revisa la consola donde corre `node server.js`
