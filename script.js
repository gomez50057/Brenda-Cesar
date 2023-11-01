function actualizarTemporizador() {
    const fechaFinal = new Date('2023-12-23T15:00:00').getTime();
    const ahora = new Date().getTime();
    const tiempoRestante = fechaFinal - ahora;

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias < 10 ? '0' + dias : dias;
    document.getElementById('horas').textContent = horas < 10 ? '0' + horas : horas;
    document.getElementById('minutos').textContent = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById('segundos').textContent = segundos < 10 ? '0' + segundos : segundos;
}

setInterval(actualizarTemporizador, 1000); // Actualiza el temporizador cada segundo


// Agregar un controlador de eventos para detectar el desplazamiento
window.addEventListener("scroll", function() {
    const elementosAnimados = document.querySelectorAll(".animate__backInRight");
  
    elementosAnimados.forEach(function(elemento) {
      // Obtener la posición del elemento en la ventana
      const elementoPosicion = elemento.getBoundingClientRect();
  
      if (elementoPosicion.top >= 0 && elementoPosicion.bottom <= window.innerHeight) {
        // El elemento está completamente dentro de la ventana
        elemento.classList.add("wow");
        elemento.style.animation = "none"; // Desactivar temporalmente la animación
      } else {
        // El elemento no está en la ventana
        elemento.classList.remove("wow");
        elemento.style.animation = ""; // Restablecer la animación
      }
    });
  });
  