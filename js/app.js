
document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar los elementoss del interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // Asignar eventos
    // inputEmail.addEventListener('blur', function(e) {
    //     console.log(e.target.value); //acceder a lo que se escribe dentro del input
    // });

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if (e.target.value.trim() === '') { //trim()-para eliminar espacios en blanco
            mostrarAlerta();
        } else {
            console.log('Hay algo');
        }
    }

    function mostrarAlerta() {
        // Generar alerta en HTML
        const error = document.createElement('p');
        error.textContent = 'Hubo un error';
        console.log(error);
    }
    
});