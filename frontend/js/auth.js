function verificarAuth(){

const token = localStorage.getItem("token");
if(!token){
window.location.href = "../login.html";
}
}

function logout(){

  localStorage.removeItem("token");

  // detectar si estamos en admin
  if(window.location.pathname.includes("/admin/")){
    window.location.href = "../index.html";
  }else{
    window.location.href = "index.html";
  }

}