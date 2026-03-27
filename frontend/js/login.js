document.addEventListener("DOMContentLoaded", () => {

const API = "http://localhost:3000/api/users";

const form = document.getElementById("loginForm");

if(!form){
console.error("No se encontró loginForm");
return;
}

form.addEventListener("submit", async (e) => {

e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if(!email || !password){
mostrarToast("Completar email y contraseña","warning");
return;
}

try {

const response = await fetch(`${API}/login`, {

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({ email, password })

});

const data = await response.json();

console.log(data); // DEBUG

if(response.ok && data.token){

localStorage.setItem("token", data.token);

mostrarToast("Login correcto");

setTimeout(()=>{
window.location.href="admin/productos.html";
},1200);

}else{

mostrarToast(data.message || "Error en login","error");

}

} catch (error) {

mostrarToast("Error de conexión","error");

}

});

});