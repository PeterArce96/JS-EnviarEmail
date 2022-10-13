
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
            console.log('Vacío');
        } else {
            console.log('Hay algo');
        }
    }
    
});