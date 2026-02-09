// ====== MÚSICA ======
const audio = document.getElementById("audio");
let reproduciendo = false;

function toggleMusic() {
  if (reproduciendo) {
    audio.pause();
  } else {
    audio.play();
  }
  reproduciendo = !reproduciendo;
}

// ====== CUENTA REGRESIVA ======
const evento = new Date("March 14, 2026 15:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = evento - ahora;

  if (diferencia <= 0) {
    countdown.innerHTML = "🎉 ¡Hoy es el gran día!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  countdown.innerHTML = `⏳ Faltan ${dias} días ${horas}h ${minutos}m`;
}, 1000);

// ====== CONFIRMACIÓN WHATSAPP ======
function confirmarAsistencia(tipo) {

  // CAMBIA ESTOS NÚMEROS (con código de país)
  const telefonoMama = "523331751485"; // Jazmín
  const telefonoPapa = "523314449854"; // Luis

  let telefono = "";
  let mensaje = "";

  if (tipo === "mama") {
    telefono = telefonoMama;
    mensaje = "Hola Jazmín 💗, confirmo mi asistencia al baby shower de Meztli 🐰✨";
  }

  if (tipo === "papa") {
    telefono = telefonoPapa;
    mensaje = "Hola Luis 💙, confirmo mi asistencia al baby shower de Meztli 🐰✨";
  }

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
