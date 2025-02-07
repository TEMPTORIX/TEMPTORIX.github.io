// Countdown Timer Logic
let countdownDate = new Date().getTime() + 86400000; // 24 horas desde ahora

function updateCountdown() {
  const now = new Date().getTime();
  let distance = countdownDate - now;

  if (distance <= 0) {
    // Reiniciar el temporizador
    countdownDate = new Date().getTime() + 86400000; // Reiniciar a 24 horas
    distance = countdownDate - now;
  }

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Llamada inicial