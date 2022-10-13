
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
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }
        if ( e.target.id ==='email' && !validarEmail(e.target.value) ) { //cuando sea false, cuando no se cumpla
            mostrarAlerta('El email no es válido', e.target.parentElement);
            return;
        }
        limpiarAlerta(e.target.parentElement);
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'rounded-lg');

        // Inyectar el error al formulario
        referencia.appendChild(error);
    }
    
    function limpiarAlerta(referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        // Expresión regular
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email); //test() --> método para expresión regular, true o false
        return resultado;
    }
});