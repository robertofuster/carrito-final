document.addEventListener("DOMContentLoaded", () => {

const API = "http://localhost:3000/api";

let listaProductos = [];


// =============================
// CARGAR CATEGORIAS
// =============================

async function cargarCategorias(){

    const response = await fetch(`${API}/categories`);
    const categorias = await response.json();

    const contenedor = document.getElementById("categorias");
    contenedor.innerHTML = "";

    const botonTodos = document.createElement("button");
    botonTodos.className = "btn btn-secondary me-2 mb-2";
    botonTodos.textContent = "Todos";

    botonTodos.onclick = () => {
        mostrarProductos(listaProductos);
    };

    contenedor.appendChild(botonTodos);

    categorias.forEach(cat => {

        const boton = document.createElement("button");

        boton.className = "btn btn-primary me-2 mb-2";
        boton.textContent = cat.name;

        boton.onclick = () => {
            cargarProductosPorCategoria(cat._id);
        };

        contenedor.appendChild(boton);

    });

}


// =============================
// CARGAR PRODUCTOS
// =============================

async function cargarProductos(){

    const response = await fetch(`${API}/products`);
    listaProductos = await response.json();

    mostrarProductos(listaProductos);

}


// =============================
// PRODUCTOS POR CATEGORIA
// =============================

async function cargarProductosPorCategoria(id){

    const response = await fetch(`${API}/products/category/${id}`);
    const productos = await response.json();

    mostrarProductos(productos);

}


// =============================
// MOSTRAR PRODUCTOS
// =============================

function mostrarProductos(productos){

    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    if(productos.length === 0){

        contenedor.innerHTML = `
        <div class="col-12">
            <div class="alert alert-warning">
                No hay productos para mostrar
            </div>
        </div>
        `;

        return;
    }

    productos.forEach(p => {

        const card = document.createElement("div");
        card.className = "col-md-3 mb-4";

        card.innerHTML = `
        <div class="card h-100 shadow-sm">

            <img src="http://localhost:3000${p.image}" class="card-img-top">

            <div class="card-body">

                <h5 class="card-title">${p.name}</h5>

                <p class="card-text fw-bold">$${p.price}</p>

                <small class="text-muted">${p.category.name}</small>

                <div class="mt-3">
                    <button class="btn btn-primary btn-sm"
                    onclick="verProducto('${p._id}')">
                    Ver producto
                    </button>
                </div>

            </div>

        </div>
        `;

        contenedor.appendChild(card);

    });

}


// =============================
// BUSCADOR
// =============================

document.getElementById("buscador").addEventListener("keyup", function(){

    const texto = this.value.toLowerCase();

    const filtrados = listaProductos.filter(p =>
        p.name.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);

});


// =============================
// VER PRODUCTO
// =============================

window.verProducto = function(id){

    window.location.href = `producto.html?id=${id}`;

}


// =============================
// COTIZACION DOLAR
// =============================

async function cargarDolar(){

    const response = await fetch(`${API}/external/dolar`);
    const dolar = await response.json();

    const contenedor = document.getElementById("dolar");

    contenedor.innerHTML = `
        <strong>Dólar (${dolar.fecha})</strong>
        Oficial: ${dolar.oficial.venta} |
        Blue: ${dolar.blue.venta}
    `;

}


// =============================
// INICIAR APP
// =============================

cargarCategorias();
cargarProductos();
cargarDolar();

});