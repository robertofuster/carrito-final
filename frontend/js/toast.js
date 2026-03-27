function mostrarToast(mensaje, tipo = "success") {

const toast = document.getElementById("toastGlobal");
const texto = document.getElementById("toastMensaje");

if(!toast || !texto) return; // evita error si no existe

toast.classList.remove(
"text-bg-success",
"text-bg-danger",
"text-bg-warning",
"text-bg-info"
);

if (tipo === "error") {
toast.classList.add("text-bg-danger");
} else if (tipo === "warning") {
toast.classList.add("text-bg-warning");
} else if (tipo === "info") {
toast.classList.add("text-bg-info");
} else {
toast.classList.add("text-bg-success");
}

texto.innerText = mensaje;

// 👇 duración personalizada
const toastBootstrap = new bootstrap.Toast(toast, {
delay: 4000 // 4 segundos
});

toastBootstrap.show();

}