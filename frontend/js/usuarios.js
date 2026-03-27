const API = "http://localhost:3000/api/users";

async function cargarUsuarios(){

const res = await fetch(API, {
headers:{
Authorization: localStorage.getItem("token")
}
});

const users = await res.json();

const tabla = document.getElementById("tablaUsuarios");
tabla.innerHTML = "";

users.forEach(u => {

tabla.innerHTML += `
<tr>
<td>${u.email}</td>
<td>${u.role}</td>
<td>
<button class="btn btn-warning btn-sm"
onclick="cambiarRol('${u._id}','${u.role}')">
Cambiar Rol
</button>
</td>
</tr>
`;

});

}

async function cambiarRol(id, role){

const nuevo = role === "admin" ? "user" : "admin";

await fetch(`${API}/${id}/role`, {

method:"PUT",

headers:{
  "Authorization": localStorage.getItem("token")
},

body: JSON.stringify({ role: nuevo })

});

alert("Rol actualizado");

cargarUsuarios();

}

cargarUsuarios();