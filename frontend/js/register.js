document.addEventListener("DOMContentLoaded", () => {

const API = "http://localhost:3000/api/users";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

// validación simple
if(!email || !password){

mostrarToast("Completar todos los campos","warning");
return;

}

try {

const response = await fetch(`${API}/register`, {

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({ email, password })

});

const data = await response.json();

if(response.ok){

mostrarToast("Usuario registrado correctamente");

setTimeout(()=>{
window.location.href="login.html";
},1000);

}else{

mostrarToast(data.message || "Error en registro","error");

}

} catch (error) {

mostrarToast("Error de conexión","error");

}

});

});