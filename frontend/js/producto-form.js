document.addEventListener("DOMContentLoaded", () => {

const API = "http://localhost:3000/api";

const form = document.getElementById("formProducto");
const select = document.getElementById("category");
const preview = document.getElementById("preview");

// =======================
// CARGAR CATEGORIAS
// =======================

async function cargarCategorias(){

try{

const res = await fetch(`${API}/categories`);
const data = await res.json();

select.innerHTML = "";

data.forEach(c => {

select.innerHTML += `
<option value="${c._id}">
${c.name}
</option>
`;

});

}catch(e){
console.error(e);
mostrarToast("Error cargando categorías","error");
}

}


// =======================
// PREVIEW IMAGEN
// =======================

document.getElementById("image").addEventListener("change", function(){

const file = this.files[0];

if(file){

preview.src = URL.createObjectURL(file);
preview.style.display = "block";

}

});


// =======================
// GUARDAR PRODUCTO
// =======================

form.addEventListener("submit", async (e) => {

e.preventDefault();

const name = document.getElementById("name").value;
const price = document.getElementById("price").value;
const category = document.getElementById("category").value;
const image = document.getElementById("image").files[0];

if(!name || !price || !category){

mostrarToast("Completar todos los campos","warning");
return;

}

const formData = new FormData();

formData.append("name", name);
formData.append("price", price);
formData.append("category", category);

if(image){
formData.append("image", image);
}

try{

showLoader();

const res = await fetch(`${API}/products`, {

method: "POST",

headers:{
  "Authorization": localStorage.getItem("token")
},

body: formData

});

hideLoader();

const data = await res.json();

if(res.ok){

mostrarToast("Producto creado");

setTimeout(()=>{
window.location.href = "productos.html";
},1000);

}else{

mostrarToast(data.message || "Error","error");

}

}catch(e){

hideLoader();
mostrarToast("Error conexión","error");

}

});


// INIT
cargarCategorias();

});