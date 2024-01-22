'use strict'

// ACORDEÓN

$(document).ready(function() {
    // Manejar clics en títulos
    $('.titulo').click(function() {
        // Ocultar todos los contenidos y mostrar solo el del clic actual
        $('.contenido').not($(this).next()).slideUp();
        $(this).next().slideToggle();

        // Verificar cuál contenido está actualmente visible
        $('.contenido').each(function() {
            if ($(this).is(':visible')) {
                console.log('El contenido de este apartado está visible:', $(this).text());
            }
        });
    });
});
