
PROYECTO FINAL - CATÁLOGO ONLINE

---

DESCRIPCIÓN

Aplicación web fullstack desarrollada con Node.js, Express y MongoDB, que permite gestionar un catálogo de productos con autenticación de usuarios y control de roles.
El sistema cuenta con un frontend dinámico en HTML, CSS y JavaScript, y un backend API REST conectado a MongoDB Atlas.

---

FUNCIONALIDADES

USUARIOS

* Registro de usuarios
* Login con JWT
* Roles: user (Solo consultar) y admin (administrar articulos y usuarios)
* Cambio de rol desde panel admin

PRODUCTOS

* Listado de productos
* Filtro por categoría
* Búsqueda en tiempo real
* Alta de productos (solo admin)
* Eliminación de productos (solo admin)
* Con subida de imágenes

CATEGORÍAS

* Listado dinámico
* Altas de categorias
* Filtro de productos por categoría

SEGURIDAD

* Autenticación con JWT
* Middleware de autorización
* Protección de rutas
* Control de acceso por rol

API EXTERNA

* Cotización del dólar integrada (Oficial y Blue)

---

TECNOLOGÍAS

BACKEND

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* bcrypt
* multer
* express-validator

FRONTEND

* HTML5
* CSS3
* Bootstrap 5
* JavaScript

---

ESTRUCTURA DEL PROYECTO

proyecto/

backend/
        src/
        controllers/
        models/
        routes/
        middlewares/
app.js
server.js

.env

frontend/
        index.html
        login.html
        register.html
        producto.html
                admin/
                        productos.html
                        producto-form.html
                        usuarios.html
                        categorias.html
        js/
        css/

---

INSTALACIÓN

1. Clonar repositorio

git clone https://github.com/tuusuario/carrito-final.git

2. Backend

cd backend
npm run dev

3. Configurar variables de entorno (.env)

PORT=3000
MONGO_URI=tu_conexion_mongodb
JWT_SECRET=secreto_super_seguro

4. Frontend

Abrir:
frontend/index.html

---

USUARIO ADMIN

1. Registrar usuario desde frontend
2. Cambiar roles a "admin" o a "user"

---

ENDPOINTS PRINCIPALES

USUARIOS
POST /api/users/register
POST /api/users/login
GET /api/users (admin)
PUT /api/users/:id/role (admin)

PRODUCTOS
GET /api/products
POST /api/products (admin)
DELETE /api/products/:id (admin)
GET /api/products/category/:id

---

ESTADO DEL PROYECTO

* Funcional
* Seguro (JWT + roles)
* Escalable
* Listo para mejoras (mucho para agregar)

---

AUTOR : Roberto Fuster

---

CHECKLIST FINAL

SEGURIDAD
[X] Login funciona
[X] Registro funciona
[X] Token se guarda
[X] Logout elimina token
[X] No acceso a admin sin login
[X] Usuario "user" no puede crear productos
[X] Usuario "admin" sí puede crear productos

PRODUCTOS
[X] Lista carga
[X] Crear producto
[X] Eliminar producto
[X] Subida de imagen OK
[X] Filtro categoría
[X] Buscador OK

USUARIOS
[X] Lista usuarios
[X] Cambio de rol
[X] Login actualizado tras cambio

API
[X] /products responde
[X] /categories responde
[X] /external/dolar funciona

NAVEGACIÓN
[X] Navbar funciona
[X] Links OK
[X] Logout correcto

UX
[X] Diseño consistente
[X] Toast funcionando
[X] Formularios claros

BACKEND
[X] Sin errores consola
[X] Mongo conectado
[X] Middleware OK

PRUEBAS
[X] Login incorrecto
[X] Sin token
[X] Token eliminado
[X] ID inválido
[X] MongoDB desconectada

---

NOTA FINAL : Considero que todas las consignas fueron logradas: El sistema implementa autenticación con JWT y control de roles para proteger las operaciones sensibles como la creación y eliminación de productos.

---

Marzo 2026

---