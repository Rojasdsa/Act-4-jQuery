'use strict'

$(document).ready(function () {
    // Generar números aleatorios y mostrarlos en el captcha
    function generarCaptcha() {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        let resultado = num1 + num2;

        $('#captchaContainer').text(num1 + ' + ' + num2 + ' =');
        $('#captchaResult').data('resultado', resultado);
    }

    // Verificar el resultado del captcha al escribir
    $('#captchaInput').on('input', function () {
        let resultadoUsuario = parseInt($(this).val());
        let resultadoReal = $('#captchaResult').data('resultado');

        if (isNaN(resultadoUsuario) || resultadoUsuario !== resultadoReal) {
            $('#captchaResult').html('<i class="fas fa-times" style="color: red;"></i>');
        } else {
            $('#captchaResult').html('<i class="fas fa-check" style="color: green;"></i>');
        }
    });

    // Generar el captcha al cargar la página
    generarCaptcha();

    // Cambiar el captcha al hacer clic en el botón "Enviar"
    $('#enviarBtn').click(function () {

        // Generar un nuevo captcha después del intento de envío
        generarCaptcha();
    });
});


// FOCUSIN-FOCUSOUT

$(document).ready(function () {
    // Agregar eventos focusin y focusout a los campos del formulario
    $('form input, form textarea').on('focusin', function () {
        // Cambiar el color de fondo o borde cuando se enfoca
        $(this).addClass('focused');
    }).on('focusout', function () {
        // Restaurar el color de fondo o borde cuando se pierde el foco
        $(this).removeClass('focused');
    });
});

// ESCONDER FORMULARIO
$(document).ready(function () {
    $('#enviarBtn').on('click', function () {
        if (validarFormulario()) {
            // Ocultar formulario y mostrar mensaje de confirmación
            $('#formularioContainer').slideUp();
            $('#mensajeContainer').removeClass('d-none').slideDown();
        } else {
            alert('Por favor, complete todos los campos obligatorios y marque la política de privacidad.');
        }
    });

    // Asegúrate de tener la función validarFormulario implementada correctamente
    function validarFormulario() {
         // Verificar campos obligatorios y política de privacidad
         let nombre = $('#nombre').val();
         let email = $('#email').val();
         let comentario = $('#comentario').val();
         let politicaPrivacidad = $('#politicaPrivacidad').is(':checked');
         let captchaValido = $('#captchaResult i').hasClass('fa-check');
 
         if (nombre && email && comentario && politicaPrivacidad && captchaValido) {
             // Aquí puedes enviar el formulario al servidor
             alert('Formulario enviado con éxito.');
             return true; // Devuelve true si el formulario es válido, de lo contrario, false
         } else {
            return false;
         }
 
    }
});
