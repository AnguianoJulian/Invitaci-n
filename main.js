document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     🎵 MÚSICA
  ============================== */

  const audio = document.getElementById("audio");
  const icono = document.getElementById("icono-musica");
  let musicStarted = false;

  // 🔥 Iniciar música al primer toque en cualquier parte
  function iniciarMusica() {
    if (!musicStarted) {
      audio.currentTime = 4; // Empieza en el segundo 4
      audio.play().then(() => {
        icono.classList.remove("bi-play-circle-fill");
        icono.classList.add("bi-pause-circle-fill");
      }).catch(() => {});
      musicStarted = true;
    }
  }

  document.addEventListener("click", iniciarMusica);
  document.addEventListener("touchstart", iniciarMusica);

  // Botón play / pause
  window.toggleMusic = function () {

    if (audio.paused) {
      audio.play();
      icono.classList.remove("bi-play-circle-fill");
      icono.classList.add("bi-pause-circle-fill");
    } else {
      audio.pause();
      icono.classList.remove("bi-pause-circle-fill");
      icono.classList.add("bi-play-circle-fill");
    }
  };


  /* ===============================
     ⏳ CUENTA REGRESIVA
  ============================== */

  const countdown = document.getElementById("countdown");
  const eventDate = new Date(2026, 2, 14, 15, 0, 0);

  function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      countdown.textContent = "🎉 ¡Hoy es el gran día! 🎉";
      return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    countdown.textContent =
      `Faltan ${dias} días ${horas}h ${minutos}m ${segundos}s`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();


  /* ===============================
     📲 CONFIRMACIONES WHATSAPP
  ============================== */

  const telefonoMama = "523317143479";
  const telefonoPapa = "523314821153";

  window.confirmarMama = function () {
    const mensaje = "Hola 😊 Confirmo mi asistencia al Baby Shower de Meztli Jazmín 🐰💗";
    window.open(
      `https://wa.me/${telefonoMama}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  window.confirmarPapa = function () {
    const mensaje = "Hola 😊 Confirmo mi asistencia al Baby Shower de Meztli Jazmín 🐰💗";
    window.open(
      `https://wa.me/${telefonoPapa}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

});
