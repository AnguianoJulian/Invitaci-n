/* ================= MUSICA ================= */
const audio = document.getElementById("audio");
let reproduciendo = false;

function toggleMusic() {
  if (!reproduciendo) {
    audio.play();
    reproduciendo = true;
  } else {
    audio.pause();
    reproduciendo = false;
  }
}

/* ================= CUENTA ATRÁS ================= */
const countdownEl = document.getElementById("countdown");

// FECHA DEL EVENTO (IMPORTANTE: mes empieza en 0)
const fechaEvento = new Date(2026, 2, 14, 15, 0, 0); 
// 14 marzo 2026 - 3:00 PM

function actualizarCuenta() {
  const ahora = new Date().getTime();
  const distancia = fechaEvento.getTime() - ahora;

  if (distancia <= 0) {
    countdownEl.innerHTML = "🎉 ¡Hoy es el gran día! 🎉";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor(
    (distancia % (1000 * 60 * 60)) / (1000 * 60)
  );
  const segundos = Math.floor(
    (distancia % (1000 * 60)) / 1000
  );

  countdownEl.innerHTML = `
    ⏳ Faltan ${dias} días ${horas}h ${minutos}m ${segundos}s
  `;
}

// ⏱️ ACTUALIZA CADA SEGUNDO (ESTO ES LO QUE FALTABA)
actualizarCuenta();
setInterval(actualizarCuenta, 1000);
