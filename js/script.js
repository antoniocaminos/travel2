// Función de saludo
function holamunde() {
    console.log("Hola Punto Travel");
}
holamunde(); // Llama a la función de saludo

// Inicialización del carrusel para que se desplace automáticamente

const carrusel = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    
$(document).ready(function() {
    $('#carouselExampleFade').carousel({
        interval: 3000 // Establece el intervalo de desplazamiento en milisegundos (en este caso, 3 segundos)
    });
});
///////////////////buttons/////////////////////////
// Función para mostrar el mensaje SweetAlert con mensaje específico por destino
function mostrarMensaje(cardTitle) {
    let mensaje = '';

    // Configurar mensaje específico por cada destino
    switch (cardTitle) {
        case 'Cataratas del Iguazu':
            mensaje =`Conocé las imponentes Cataratas del iguazu junto a nosotros. Una de las 7 maravillas naturales  del mundo.
            Se encuentran al norte de la provincia de Misiones y al limite con Brasil.
            Este destino contiene las actividades y excursiones más completas que lo convierten en un viaje inolvidable.
            Ademas de conocer el flamante Parque Nacional Iguazu, podrás conocer:
            <li>MINAS DE WANDA</li>
            <li>RUINAS DE SAN IGNACIO</li>
            <li>GUIRA OGA</li>
            <li>HITO TRES FRONTERAS</li>
            <li>LA ARIPUCA</li>
            <li>BAR DE HIELO</li>
            <em>Y TAMBIÉN REALIZAR UN PASEO EN CATAMARÁN.<em>

            Nuestro paquete incluye:
            TRASLADO EN BUS MIX
            ALOJAMIENTO
            MEDIA PENSIÓN
            COORDINACIÓN PERMANENTE
            ASISTENCIA MÉDICA

            ¿Te vas a Perder este destino Increíble? ¡Consultá y reservá ahora!`;
            break;
        case 'Merlo':
            mensaje = 'Merlo es conocido por su microclima, ideal para el descanso y el turismo de naturaleza. Ubicado en la provincia de San Luis, Argentina, ofrece paisajes montañosos y una amplia oferta de actividades al aire libre.';
            break;
        case 'Mendoza':
            mensaje = 'Mendoza es famosa por sus viñedos y la producción de vino, además de tener paisajes montañosos impresionantes. Es una provincia argentina ubicada en la región de Cuyo, conocida también por el Cerro Aconcagua, la montaña más alta de América del Sur.';
            break;
        case 'Puerto Madryn':
            mensaje = 'Puerto Madryn es un destino privilegiado para el avistaje de ballenas y la fauna marina. Situado en la provincia de Chubut, Argentina, ofrece la oportunidad de observar de cerca a estos majestuosos mamíferos marinos y disfrutar de sus playas.';
            break;
        case 'Termas de la Federación':
            mensaje = 'Las Termas de la Federación ofrecen aguas termales con propiedades curativas y un entorno natural relajante. Se encuentran en la provincia de Entre Ríos, Argentina, y son ideales para el descanso y el bienestar.';
            break;
        case 'Termas de Rio Hondo':
            mensaje = 'Las Termas de Río Hondo son conocidas por sus aguas termales y por ser un centro turístico y de salud. Ubicadas en la provincia de Santiago del Estero, Argentina, ofrecen tratamientos termales y diversas actividades recreativas.';
            break;
        case 'Salta':
            mensaje = 'Salta, conocida como "La Linda", ofrece paisajes naturales impresionantes y una rica cultura folclórica. Situada en el noroeste argentino, es famosa por sus valles, quebradas, y la belleza de sus paisajes.';
            break;
        default:
            mensaje = 'Información no disponible en este momento.';
    }

    // Mostrar el mensaje con SweetAlert
    Swal.fire({
        title: `${cardTitle}`,
        text: `¿Quieres saber más sobre ${cardTitle}?`,
        html: `<p>${mensaje}</p>`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, quiero saber más!',
        cancelButtonText: 'Salir'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '¡Listo!',
                'Toca el boton flotante de WhatsApp',
                'success'
            );
            // Aquí puedes redirigir o realizar otras acciones después de confirmar
        }
    });
}

// Asignar el evento click a cada botón de Más Info
document.getElementById('cataratas').addEventListener('click', function() {
    mostrarMensaje('Cataratas del Iguazu');
});

document.getElementById('villa-merlo').addEventListener('click', function() {
    mostrarMensaje('Merlo');
});

document.getElementById('mendoza').addEventListener('click', function() {
    mostrarMensaje('Mendoza');
});

document.getElementById('madryn').addEventListener('click', function() {
    mostrarMensaje('Puerto Madryn');
});

document.getElementById('termasfederacion').addEventListener('click', function() {
    mostrarMensaje('Termas de la Federación');
});

document.getElementById('termasriohondo').addEventListener('click', function() {
    mostrarMensaje('Termas de Rio Hondo');
});

document.getElementById('salta').addEventListener('click', function() {
    mostrarMensaje('Salta');
});




///////////////////buttons/////////////////////////


/* logica modal start */
 // Obtener elementos
const modal = document.getElementById("modal");
const link = document.getElementById("formas-de-pago-link");
const closeBtn = document.getElementsByClassName("close")[0];

// Mostrar el modal al hacer clic en el enlace
link.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la 'X'
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

 /* logica modal ends */