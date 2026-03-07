const API = "http://localhost:3000/api";

function obtenerIdProducto() {

    const params = new URLSearchParams(window.location.search);
    return params.get("id");

}

async function cargarProducto() {

    const id = obtenerIdProducto();

    const response = await fetch(`${API}/products`);
    const productos = await response.json();

    const producto = productos.find(p => p._id === id);

    const contenedor = document.getElementById("producto");

    contenedor.innerHTML = `
    
    <div class="col-md-6">

        <img src="http://localhost:3000${producto.image}" class="img-fluid">

    </div>

    <div class="col-md-6">

        <h2>${producto.name}</h2>

        <p class="text-muted">${producto.category.name}</p>

        <h3 class="text-primary">$${producto.price}</h3>

        <p>${producto.description || "Sin descripción disponible"}</p>

    </div>
    
    `;
}

cargarProducto();