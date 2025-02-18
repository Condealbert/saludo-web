document.getElementById('saludarBtn').addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value;
    const mensajeElement = document.getElementById('mensaje');

    if (nombre.trim() === "") {
        mensajeElement.textContent = "Por favor, introduce un nombre.";
        mensajeElement.style.color = "red";
    } else {
        mensajeElement.textContent = `¡Hola, ${nombre}! Bienvenido a nuestra página.`;
        mensajeElement.style.color = "green";
    }
});