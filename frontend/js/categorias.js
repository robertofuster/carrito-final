const API = "http://localhost:3000/api/categories";

async function cargarCategorias(){

const res = await fetch(API);
const data = await res.json();

console.log(data);

}