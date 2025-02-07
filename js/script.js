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
function mostrarPago() {
    Swal.fire({
        title: "Formas de pago",
        html: `
        <p>Aceptamos todos los medios de pago: Efectivo, depósito, transferencia y Tarjeta de crédito. Este último  tendrá un recargo y su porcentaje varía, dependiendo el tipo de tarjeta con que se efectúe el pago</p>
        <p><strong>PAGOS CON TARJETA</strong></p>
        <img src="./Image/visaMasterLogo.png" alt="tarjtas"><img src="./Image/naranja.png" alt="nx">
        <br>
        Financiación:  Tarjeta Naranja, Visa, Master (Bancarizadas):
        <br>
        <ul>
            <li>Un solo pago: 10%</li>
            <li>3 cuotas: 35%</li>
            <li>6 cuotas: 50%</li>
        </ul>
        <p>Link de pago de mercado pago: 10%</p>
        <img src="./Image/logo-mercadopago.jpg" alt="mercado">`,
        icon: "$"
    });
}

document.getElementById('formas-de-pago-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    mostrarPago();
});
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
            mensaje = `Villa de Merlo se encuentra situada en  la provincia de San Luis, a los pies de las sierras. Siendo reconocida mundialmente por su benigno microclima y sus hermosos paisajes y entornos naturales.
            Villa de Merlo ofrece un abanico de actividades y paseos, entre ellos Trekking, Avistaje de aves, Actividades de montaña y variadas actividades de turismo aventura.
            Nosotros te ofrecemos:
            TRASLADO EN BUS MIX
            ALOJAMIENTO 
            REGIMEN DE COMIDA: PENSIÓN COMPLETA
            COORDINACION PERMANENTE 
            ASISTENCIA MÉDICA.
            OPCIONAL
            EXCURSIONES A CARGO DE CADA PASAJERO

            Te invitamos a sumarte con nosotros a un viaje a puro relax y descanso.
            ¡Consultá próximas salidas y Reservá ahora!`;
            break;
        case 'Mendoza':
                        mensaje = `
            SAN RAFAEL + FULL DAY LAS LEÑAS
            San Rafael se encuentra al sur de la provincia de Mendoza, a 200km de La Leñas.
            Es por eso que decidimos fusionar estos dos destinos para ofrecerte una experiencia única. 
            San Rafael nos ofrece bodegas, chocolaterías y variadas actividades recreativas para realizar, por otro lado Las Leñas con sus imponentes cerros nevados nos invitan a disfrutar de un paseo diferente, con actividades de turismo aventura para practicar .
            Nosotros te ofrecemos:
            SALIDA EN BUS MIX DESDE CORDOBA
            ALOJAMIENTO
            REGIMEN DE COMIDA: MEDIA PENSION 
            COORDINACION PERMANENTE 
            ASISTENCIA MÉDICA.
            Entre las actividades podrás:
            <li>REALIZAR UNA DEGUSTACIÓN DE VINOS EN BODEGA LASBIANO</li>
            <li>CONOCER LA CHOCOLATERA (KETOBAC) Y ACEITERA</li>
            <li>VISITAR EL LABERINTO DE BORGES.</li>
            OPCIONAL
            ACTIVIDADES DE TURISMO AVENTURA O EXTREMOS
            ALQUILER DE TRAJES PARA ESQUIAR

            ¡Sumate con nosotros a conocer estos dos destinos increíbles!
            Consultá Proximas salidas y Reservá ahora.`;
            break;
        case 'Puerto Madryn':
            mensaje = `Situada en la provincia de Chubut, allí encontraremos Ballenas, pingüinos, elefantes y lobos marinos, que conforman el atractivo convocante de Península Valdés.¡No podes perderte esta experiencia inolvidable!
            ¿Qué te ofrecemos?
            SALIDA 3 Y 24 DE OCTUBRE
            INCLUYE 
            Bus Mix desde Córdoba 
            3 noches de alojamiento en“Hotel Petit” 
            Media pensión 
            Coordinación Permanente 
            Seguro médico 
            EXCURSIONES INCLUÍDAS 
            City tour: Puerto Madryn 
            Traslado a Puerto Pirámides 
            Visita a Las Grutas 
            EXCURSIONES OPCIONALES 
            <li>Pinguinera en Punta Tombo</li> 
            <li>Avistaje de Lobos Marinos en Punta Loma</li> 
            <li>Avistaje de Ballena en playa “El Doradillo”</li> 
            <li>Navegación en Puerto Pirámides</li>`;
            break;
        case 'Termas de la Federación':
            mensaje = `TERMAS DE FEDERACIÓN | TERMAS DE CHAJARÍ | TERMAS DE AYUÍ
            ¿Ya conocías estos destinos? Todas ellas se encuentran en la provincia de Entre Ríos, y cuentan con maravillosos parques de aguas termales. 
            Punto Travel te lleva a conocerlos. Los mismos se caracterizan por su entorno natural, tranquilidad y modernos servicios turísticos.
            Todos ellos cuentan con un parque acuático ideal para los mas pequeños y para disfrutar en familia.
            Es una buena opción para realizar tanto actividades recreativas como de descanso, relax y terapéuticas. 
            Nosotros te ofrecemos:
            TRASLADO EN BUS MIX DESDE CORDOBA Y CARLOS PAZ
            ALOJAMIENTO
            REGIMEN DE COMIDA: MEDIA PENSIÓN
            COORDINACION PERMANENTE
            ASISTENCIA MÉDICA.
            Excursiones:
            <li>TERMAS DE AYUÍ</li>
            <li>TERMAS DE CONCORDIA</li>
            <li>REPRESA SALTO GRANDE</li>
            ❌NO INLUYE TICKET DE ACCESO A LOS PARQUES❌
            ¡Consultá nuestras próximas salidas y Reservá ahora!`;
            break;
        case 'Termas de Rio Hondo':
            mensaje = `
            Se encuentran ubicadas en la provincia de Santiago del Estero, sede de grandes eventos deportivos.
            Este destino tiene diversas actividades para realizar, entre ellas el Dique Frontal y El museo del Automovil, entre otras.
            La ciudad es conocida por sus aguas termales, que son reconocidas por sus propiedades curativas, Es ideal para aquellos que buscan disfrutar de las bondades curativas del agua termal, recrearse y relajarse.
            Nosotros te ofrecemos:
            Bus Mix desde Cordoba
            Alojamiento
            Coordinación permanente
            Pensión completa
            Full day en Santiago del Estero
            ¡Viví este destino Imperdible!
            ¡Consultá Proximas salidas y Reservá ahora!
            `;
            break;
        case 'Salta':
            mensaje = `
            El norte argentino es una región maravillosa del país para viajar y conocer.
            Punto Travel te lleva a conocer Salta y Jujuy.  Ofreciéndote múltiples paisajes y experiencias enriquecedoras
            NUESTRO PAQUETE INCLUYE:
            BUS MIX DESDE CORDOBA
            ALOJAMIENTO
            MEDIA PENSIÓN
            COORDINACIÓN PERMANENTE
            PODRÁS CONOCER:
            CITY TOUR POR SALTA + TELEFERICO
            JUJUY FULL DAY (HUMAHUACA, MAIMARÁ, PURMAMARCA)
            ¡Prepará tu valija y sumate a este viaje maravilloso!
            CONSULTÁ PROXIMAS SALIDAS Y RESERVÁ AHORA.
            `;
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


