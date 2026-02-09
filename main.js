document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("audio");
  let isPlaying = false;

  window.toggleMusic = function () {
    if (!isPlaying) {
      audio.play().catch(() => {});
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
  };

  const countdown = document.getElementById("countdown");
  const eventDate = new Date(2026, 2, 14, 15, 0, 0);

  function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      countdown.textContent = "🎉 ¡Hoy es el gran día! 🎉";
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor(diff / 3600000) % 24;
    const m = Math.floor(diff / 60000) % 60;
    const s = Math.floor(diff / 1000) % 60;

    countdown.textContent =
      `⏳ Faltan ${d} días ${h}h ${m}m ${s}s`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  const telefonoMama = "523331751485";
  const telefonoPapa = "523314449854";

  window.confirmarMama = function () {
    window.open(
      `https://wa.me/${telefonoMama}?text=` +
      encodeURIComponent("Hola 😊 Confirmo mi asistencia al Baby Shower de Meztli Jazmín 🐰💗"),
      "_blank"
    );
  };

  window.confirmarPapa = function () {
    window.open(
      `https://wa.me/${telefonoPapa}?text=` +
      encodeURIComponent("Hola 😊 Confirmo mi asistencia al Baby Shower de Meztli Jazmín 🐰💗"),
      "_blank"
    );
  };

});
