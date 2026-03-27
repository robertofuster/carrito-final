document.addEventListener("DOMContentLoaded", () => {

const nav = document.getElementById("navbar");
const token = localStorage.getItem("token");

// detectar si estamos en carpeta admin
const isAdmin = window.location.pathname.includes("/admin/");

// prefijo dinámico
const base = isAdmin ? "../" : "";

let menu = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

<div class="container">

<a class="navbar-brand" href="${base}index.html">Mi Tienda</a>

<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="menu">

<ul class="navbar-nav me-auto">

<li class="nav-item">
<a class="nav-link" href="${base}index.html">Inicio</a>
</li>
`;

if(token){

menu += `
<li class="nav-item">
<a class="nav-link" href="${base}admin/productos.html">Admin</a>
<a class="nav-link" href="${base}admin/usuarios.html">Usuarios</a>
</li>
`;

}

menu += `
</ul>

<ul class="navbar-nav">
`;

if(token){

menu += `
<li class="nav-item">
<button onclick="logout()" class="btn btn-danger btn-sm">Logout</button>
</li>
`;

}else{

menu += `
<li class="nav-item">
<a class="nav-link" href="${base}login.html">Login</a>
</li>

<li class="nav-item">
<a class="nav-link" href="${base}register.html">Registro</a>
</li>
`;

}

menu += `
</ul>

</div>
</div>
</nav>
`;

nav.innerHTML = menu;

});