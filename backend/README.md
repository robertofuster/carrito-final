# Backend - Catalogo Online

## Tecnologías
- Instalacion de todas las dependencias
- Node.js
- Express
- MongoDB Atlas
- Mongoose

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
        mongodb+srv://catalogoUser:Catalogo_2026@cluster0.o7wzzho.mongodb.net/catalogoDB?appName=Cluster0
        catalogoUser - Catalogo_2026
- Servidor funcionanado y conectado a Mongo
- Middleware propio
- Control de acceso
- Uso de variables de entorno


## Resguardo GIT
A. Crear repositorio en GIT
B. 
C. Clonar repositorio

git --version



echo "# catalogo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/robertofuster/catalogo.git
git push -u origin main



## Modelo de pruebas
- Instalacion de Postman local
    prueba de Get y Post de "Categorias"
    Prueba de Get y Post de "Producto" (_id: 69a5067a1c3769b3c7d74127)
    Prueba de Middleware propio -> al crear la Key usuario funciona ok
