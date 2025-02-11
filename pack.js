// Obtener todos los botones que abren modales
const buttons = document.querySelectorAll('.packs-btn, .subscribe-btn');

// Agregar evento a cada botón
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetModalId = button.getAttribute('data-target'); // Obtener el ID del modal
    const modal = document.getElementById(targetModalId); // Encontrar el modal correspondiente
    modal.style.display = 'flex'; // Mostrar el modal
  });
});

// Cerrar el modal al hacer clic en el botón de cierre
document.querySelectorAll('.close-btn').forEach(closeButton => {
  closeButton.addEventListener('click', () => {
    const modal = closeButton.closest('.modal'); // Encontrar el modal más cercano
    modal.style.display = 'none'; // Ocultar el modal
  });
});

// Cerrar el modal al hacer clic fuera del contenido
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none'; // Ocultar el modal si se hace clic fuera
    }
  });
});