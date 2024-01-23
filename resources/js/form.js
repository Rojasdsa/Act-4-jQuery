'use strict'

$(document).ready(function () {
    // Generar números aleatorios y mostrarlos en el captcha
    function generarCaptcha() {
        var num1 = Math.floor(Math.random() * 10) + 1;
        var num2 = Math.floor(Math.random() * 10) + 1;
        var resultado = num1 + num2;

        $('#captchaContainer').text(num1 + ' + ' + num2 + ' =');
        $('#captchaResult').data('resultado', resultado);
    }

    // Verificar el resultado del captcha al escribir
    $('#captchaInput').on('input', function () {
        var resultadoUsuario = parseInt($(this).val());
        var resultadoReal = $('#captchaResult').data('resultado');

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
        // Verificar campos obligatorios y política de privacidad
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var comentario = $('#comentario').val();
        var politicaPrivacidad = $('#politicaPrivacidad').is(':checked');
        var captchaValido = $('#captchaResult i').hasClass('fa-check');

        if (nombre && email && comentario && politicaPrivacidad && captchaValido) {
            // Aquí puedes enviar el formulario al servidor
            alert('Formulario enviado con éxito.');
        } else {
            alert('Por favor, completa todos los campos obligatorios y verifica el captcha.');
        }

        // Generar un nuevo captcha después del intento de envío
        generarCaptcha();
    });
});
