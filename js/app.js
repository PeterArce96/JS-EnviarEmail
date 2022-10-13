
document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar los elementoss del interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Asignar eventos
    // inputEmail.addEventListener('blur', function(e) {
    //     console.log(e.target.value); //acceder a lo que se escribe dentro del input
    // });

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if (e.target.value.trim() === '') { //trim()-para eliminar espacios en blanco
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`);
        } else {
            console.log('Hay algo');
        }
    }

    function mostrarAlerta(mensaje) {
        // Generar alerta en HTML
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'rounded-lg');

        // Inyectar el error al formulario
        formulario.appendChild(error);
    }
    
});