'use strict'

// ACORDEÓN
$(document).ready(function () {
    // Ocultar todos los contenidos al cargar la página
    $('.empresa-acord').hide();

    // Manejar clics en títulos
    $('.titulo').click(function () {
        // Ocultar todos los elementos .empresa-acord excepto el que se ha pulsado
        $('.empresa-acord').not($(this).next()).slideUp();

        // Mostrar o ocultar el contenido del elemento pulsado
        $(this).next().slideToggle();
    });
});



// MOUSEOVER / MOUSEOUT IMG
/* 
mouseenter y mouseleave son eventos de mouse en jQuery que se utilizan 
para manejar las interacciones del mouse con un elemento del DOM. 
*/

$(document).ready(function () {
    $('.img-container').on('mouseenter', function () {
        let text = $(this).data('text');
        $(this).find('.overlay-text').text(text).fadeIn();
        $(this).find('.bg-overlay-text').fadeIn().css('opacity', '0.7'); // Cambia 0.5 al valor de opacidad que desees
    }).on('mouseleave', function () {
        $(this).find('.overlay-text').fadeOut();
        $(this).find('.bg-overlay-text').fadeIn().css('opacity', '1'); // Cambia 0.5 al valor de opacidad que desees
    });
});