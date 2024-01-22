'use strict'

// ACORDEÓN

$(document).ready(function () {

    // Ocultar todos los contenidos al cargar la página
    /* 
    Estaba añadiendo la clase d-none y como interfiere con las animaciones de jquery,
    lo he modificado por la funcion .hide()*/
    $('.empresa-acord').hide();

    // Manejar clics en títulos
    $('.titulo').click(function () {
        // Guardar el contenido actual en una variable
        let contenidoActual = $(this).next();

        /* 
        Utilizando find(), estamos buscando todos los elementos a 
        dentro del contenidoActual. Estos son los enlaces dentro del contenido.
        */
        let enlacesEnContenido = contenidoActual.find('a');
        console.log('Enlaces dentro del contenido:', enlacesEnContenido);

        /* 
        Utilizando children(), estamos obteniendo todos los hijos directos del contenidoActual.
        */
        let hijosDirectosDeContenido = contenidoActual.children();
        console.log('Hijos directos del contenido:', hijosDirectosDeContenido);

        /* 
        Utilizando closest(), estamos buscando el ancestro más cercano 
        del contenidoActual que tenga la clase item. Esto es útil para encontrar 
        el contenedor padre del contenido actual.
        */
        let contenedorPadre = contenidoActual.closest('.item');
        console.log('Contenedor padre:', contenedorPadre);


        // Verificar si el contenido actual está visible
        if (contenidoActual.is(':visible')) {
            // Si está visible, realizar slideUp()
            contenidoActual.slideUp();
        } else {
            // Si no está visible, ocultar todos los contenidos y realizar slideDown()
            $('.empresa-acord').not(contenidoActual).slideUp();
            contenidoActual.slideDown();
        }
    });
});


// MOUSEOVER / MOUSEOUT IMG
