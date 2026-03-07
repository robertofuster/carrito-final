# Backend - Catalogo Online

## Tecnologías
- Instalacion de todas las dependencias
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- multer

## Puerto
3000

## Archivo .env



## Instancias del Catalogo
- Categorias - OK
- Productos - OK

## Estado paso a paso
- Estructura base creada
- Conexión Mongo configurada
        mongodb+srv://catalogoUser:<db_password>@cluster0.o7wzzho.mongodb.net/?appName=Cluster0
- Servidor funcionanado y conectado a Mongo
- Middleware propio
- Control de acceso
- Uso de variables de entorno


## Resguardo GIT
A. Crear repositorio en GIT
B. Crear los .gitignore
C. Clonar repositorio

git add .
git commit -m "mensaje claro"
git pull origin main --rebase
git push


## Modelo de pruebas
- Instalacion de Postman local
    prueba de Get y Post de "Categorias"
    Prueba de Get y Post de "Producto" (_id: 69a5067a1c3769b3c7d74127)
    Prueba de Middleware propio -> al crear la Key usuario funciona ok
    Prueba de subida de imagen
