/* ===============================
   AUDIO
================================ */
const audio = document.getElementById("audio");
let isPlaying = false;

function toggleMusic() {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  } else {
    audio.pause();
    isPlaying = false;
  }
}

/* ===============================
   CUENTA REGRESIVA
================================ */
const countdown = document.getElementById("countdown");

// FECHA DEL EVENTO (AÑO, MES-1, DÍA, HORA, MIN)
const eventDate = new Date(2026, 2, 14, 15, 0, 0);

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "🎉 ¡Hoy es el gran día! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `
    ⏳ Faltan ${days} días ${hours}h ${minutes}m ${seconds}s
  `;
}

// ACTUALIZA CADA SEGUNDO
setInterval(updateCountdown, 1000);
updateCountdown();

/* ===============================
   CONFIRMACIÓN WHATSAPP
================================ */

// CAMBIA LOS NÚMEROS 👇 (con LADA +52)
const telefonoMama = "523331751485";
const telefonoPapa = "523314449854";

function confirmarMama() {
  const mensaje = encodeURIComponent(
    "Hola 😊 Confirmo mi asistencia al Baby Shower de Meztli Jazmín 🐰💗"
  );
  window.open(`https://wa.me/${telefonoMama}?text=${mensaje}`, "_blank");
}

function confirmarPapa() {
  const mensaje = encodeURIComponent(
    "Hola 😊 Confirmo mi asistencia al Baby Shower de Meztli Jazmín 🐰💗"
  );
  window.open(`https://wa.me/${telefonoPapa}?text=${mensaje}`, "_blank");
}
