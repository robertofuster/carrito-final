const API = "http://localhost:3000/api";

let listaProductos = [];


// ==============================
// CARGAR CATEGORIAS
// ==============================

async function cargarCategorias(){

    const response = await fetch(`${API}/categories`);
    const categorias = await response.json();

    const contenedor = document.getElementById("categorias");
    contenedor.innerHTML = "";

    categorias.forEach(cat => {

        const boton = document.createElement("button");

        boton.className = "btn btn-outline-primary me-2 mb-2";
        boton.textContent = cat.name;

        boton.onclick = () => {
            cargarProductosPorCategoria(cat._id);
        };

        contenedor.appendChild(boton);

    });

}


// ==============================
// CARGAR TODOS LOS PRODUCTOS
// ==============================

async function cargarProductos(){

    const response = await fetch(`${API}/products`);
    listaProductos = await response.json();

    mostrarProductos(listaProductos);

}


// ==============================
// CARGAR PRODUCTOS POR CATEGORIA
// ==============================

async function cargarProductosPorCategoria(id){

    const response = await fetch(`${API}/products/category/${id}`);
    const productos = await response.json();

    mostrarProductos(productos);

}


// ==============================
// MOSTRAR PRODUCTOS
// ==============================

function mostrarProductos(productos){

    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

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


// ==============================
// BUSCADOR DE PRODUCTOS
// ==============================

document.getElementById("buscador").addEventListener("keyup", function(){

    const texto = this.value.toLowerCase();

    const filtrados = listaProductos.filter(p =>
        p.name.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);

});


// ==============================
// VER PRODUCTO
// ==============================

function verProducto(id){

    window.location.href = `producto.html?id=${id}`;

}


// ==============================
// COTIZACION DEL DOLAR
// ==============================

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


// ==============================
// INICIAR APP
// ==============================

cargarCategorias();
cargarProductos();
cargarDolar();