// Lógica para el botón de añadir productos
document.querySelectorAll('.producto button').forEach(btn => {
    btn.addEventListener('click', () => {
        Swal.fire({
            title: 'Restaurante Virtual',  // Título
            text: 'Producto agregado al carrito!',  // Mensaje
            icon: 'success',  // Ícono de éxito
            confirmButtonText: 'OK'  // Texto del botón
        });
    });
});

// Animación simple en hero
window.addEventListener('load', () => {
    const hero = document.getElementById('hero');
    hero.style.opacity = 0;
    setTimeout(() => {
        hero.style.transition = 'opacity 1s';
        hero.style.opacity = 1;
    }, 500);
});

// Evita la navegación a la página actual en el menú de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el nombre del archivo de la página actual (ej: 'index.html')
    const paginaActual = window.location.pathname.split('/').pop();
    
    // Selecciona todos los enlaces en el nav
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Si el href del enlace coincide con la página actual, previene la navegación
        if (linkHref === paginaActual) {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // No hace nada, solo previene el click
            });
        }
    });
});

// Cálculo del precio del Combo Familiar en 'ofertas.html'
document.addEventListener('DOMContentLoaded', function() {
    const precioBurger = 3.49; // Precio base de la hamburguesa
    const precioCola = 1.99; // Precio de la bebida cola
    const descuento = 0.8; // 20% descuento (0.8 = 80% del precio original)
    const numBurgers = 4;
    const numColas = 4;
    
    const totalBurgers = (precioBurger * descuento) * numBurgers;
    const totalColas = precioCola * numColas;
    const totalCombo = totalBurgers + totalColas;
    
    // Actualiza el precio en el HTML
    const comboPriceElement = document.getElementById('combo-precio');
    if (comboPriceElement) {
        comboPriceElement.textContent = '$' + totalCombo.toFixed(2);
    }
});

// Inicializa EmailJS
emailjs.init('64F0LBIGZ1vsg3iI4');  // ID de usuario

// Maneja el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Previene el envío por defecto

    // Recoge los datos del formulario, nombre, correo y mensaje y se lo envía al correo destinatario
    const formData = {
        from_name: document.getElementById('nombre').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('mensaje').value,
        to_email: 'augustozanetta46@gmail.com'  // El correo de destino
    };

    // Envía el email usando EmailJS
    emailjs.send('service_npgsvzk', 'template_xsb9jzz', formData)
        .then(function(response) {
            alert('¡Mensaje enviado exitosamente! Gracias por contactarnos.');
            document.getElementById('contact-form').reset();  // Limpia el formulario
        }, function(error) {
            alert('Error al enviar el mensaje. Inténtalo de nuevo.');
            console.error('Error:', error);  // Muestra el error en la consola para depuración
        });
});