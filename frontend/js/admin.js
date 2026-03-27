const API = "http://localhost:3000/api/products";

async function cargarProductos(){

const response = await fetch(API);
const productos = await response.json();

const tabla = document.getElementById("tablaProductos");

tabla.innerHTML = "";

productos.forEach(p => {

tabla.innerHTML += `
<tr>

<td>
<img src="http://localhost:3000${p.image}" width="50">
</td>

<td>${p.name}</td>

<td>$${p.price}</td>

<td>${p.category.name}</td>

<td>

<button class="btn btn-warning btn-sm"
onclick="editarProducto('${p._id}')">
Editar
</button>

<button class="btn btn-danger btn-sm"
onclick="eliminarProducto('${p._id}')">
Eliminar
</button>

</td>

</tr>
`;

});

}


function editarProducto(id){

window.location.href = `producto-form.html?id=${id}`;

}


async function eliminarProducto(id){

if(!confirm("Eliminar producto?")) return;

await fetch(`${API}/${id}`, {
method: "DELETE",
headers:{
  "Authorization": localStorage.getItem("token")
}

});

mostrarToast("Producto eliminado correctamente");

cargarProductos();

}


function mostrarToast(mensaje){

const toastEl = document.getElementById("toastMensaje");

document.getElementById("toastTexto").innerText = mensaje;

const toast = new bootstrap.Toast(toastEl);

toast.show();

}


cargarProductos();