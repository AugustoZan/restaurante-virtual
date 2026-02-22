// ============================================================
// TRADUCCIONES
// ============================================================
const translations = {
  es: {
    nav: { menu: 'Menú', ofertas: 'Ofertas', contacto: 'Contacto' },
    index: {
      title: 'Restaurante Virtual',
      heroTitle: '¡Bienvenido al Restaurante Virtual!',
      heroText: 'Disfruta de nuestros deliciosos productos.',
      menuTitle: 'Nuestro Menú',
      burgers: 'Hamburguesas', drinks: 'Bebidas', desserts: 'Postres',
      addToCart: 'Agregar al Carrito',
      products: [
        { name: 'Hamburguesa', desc: 'Hamburguesa con carne, lechuga tomate y queso.' },
        { name: 'Hamburguesa Clásica', desc: 'Carne jugosa, lechuga, tomate, bacon y cebolla en pan suave.' },
        { name: 'Hamburguesa Vegetariana', desc: 'Patty de verduras, lechuga, tomate y cebolla en pan suave.' },
        { name: 'Refresco Cola', desc: 'Refresco carbonatado refrescante, 500ml.' },
        { name: 'Jugo de Naranja', desc: 'Jugo natural exprimido, 500ml.' },
        { name: 'Helado de Vainilla', desc: 'Copa de helado cremoso.' }
      ]
    },
    ofertas: {
      title: 'Restaurante Virtual - Ofertas',
      heroTitle: '¡Descubre Nuestras Ofertas Especiales!',
      heroText: 'Aprovecha descuentos exclusivos en hamburguesas, combos y más. ¡No te lo pierdas!',
      ofertasTitle: 'Ofertas del Día',
      addToCart: 'Agregar al Carrito',
      products: [
        { name: 'Hamburguesa Clásica', desc: 'Deliciosa hamburguesa con queso, lechuga y tomate. ¡Oferta limitada!' },
        { name: 'Combo Familiar', desc: '4 hamburguesas, papas fritas y 4 bebidas para compartir. Descuento de 20% por cada hamburguesa.' },
        { name: 'Hamburguesa Vegetariana', desc: 'Opción saludable con verduras frescas y salsa especial. ¡Gratis con pedido mayor a $15!' },
        { name: 'Helado Artesanal', desc: 'Sabor vainilla con toppings. Complementa tu pedido por solo $3.99.' }
      ]
    },
    contacto: {
      title: 'Restaurante Virtual - Contacto',
      contactTitle: 'Contáctanos',
      contactText: '¿Tienes alguna pregunta o quieres hacer una reserva? ¡Envíanos un mensaje!',
      nombre: 'Nombre:', email: 'Correo Electrónico:', mensaje: 'Mensaje:', enviar: 'Enviar',
      successMsg: '¡Mensaje enviado exitosamente! Gracias por contactarnos.',
      errorMsg: 'Error al enviar el mensaje. Inténtalo de nuevo.'
    },
    footer: '© 2026 Restaurante Virtual',
    cartMsg: '¡Producto agregado al carrito!'
  },
  en: {
    nav: { menu: 'Menu', ofertas: 'Offers', contacto: 'Contact' },
    index: {
      title: 'Virtual Restaurant',
      heroTitle: 'Welcome to the Virtual Restaurant!',
      heroText: 'Enjoy our delicious products.',
      menuTitle: 'Our Menu',
      burgers: 'Burgers', drinks: 'Drinks', desserts: 'Desserts',
      addToCart: 'Add to Cart',
      products: [
        { name: 'Burger', desc: 'Burger with beef, lettuce, tomato and cheese.' },
        { name: 'Classic Burger', desc: 'Juicy beef, lettuce, tomato, bacon and onion on a soft bun.' },
        { name: 'Veggie Burger', desc: 'Veggie patty, lettuce, tomato and onion on a soft bun.' },
        { name: 'Cola Soda', desc: 'Refreshing carbonated soda, 500ml.' },
        { name: 'Orange Juice', desc: 'Freshly squeezed natural juice, 500ml.' },
        { name: 'Vanilla Ice Cream', desc: 'Creamy ice cream cup.' }
      ]
    },
    ofertas: {
      title: 'Virtual Restaurant - Offers',
      heroTitle: 'Discover Our Special Offers!',
      heroText: "Enjoy exclusive discounts on burgers, combos and more. Don't miss out!",
      ofertasTitle: "Today's Deals",
      addToCart: 'Add to Cart',
      products: [
        { name: 'Classic Burger', desc: 'Delicious burger with cheese, lettuce and tomato. Limited offer!' },
        { name: 'Family Combo', desc: '4 burgers, fries and 4 drinks to share. 20% discount on each burger.' },
        { name: 'Veggie Burger', desc: 'Healthy option with fresh vegetables and special sauce. Free with orders over $15!' },
        { name: 'Artisan Ice Cream', desc: 'Vanilla flavor with toppings. Add to your order for just $3.99.' }
      ]
    },
    contacto: {
      title: 'Virtual Restaurant - Contact',
      contactTitle: 'Contact Us',
      contactText: 'Do you have a question or want to make a reservation? Send us a message!',
      nombre: 'Name:', email: 'Email:', mensaje: 'Message:', enviar: 'Send',
      successMsg: 'Message sent successfully! Thank you for contacting us.',
      errorMsg: 'Error sending message. Please try again.'
    },
    footer: '© 2026 Virtual Restaurant',
    cartMsg: 'Product added to cart!'
  }
};

// Banderas: muestra la bandera del idioma AL QUE vas a cambiar
const flags = {
  es: { src: 'https://flagcdn.com/w40/gb.png', alt: 'Switch to English' },  // estás en ES, mostrás UK
  en: { src: 'https://flagcdn.com/w40/es.png', alt: 'Cambiar a Español' }   // estás en EN, mostrás España
};

// ============================================================
// FUNCIONES DE IDIOMA
// ============================================================
function getLang() {
  return localStorage.getItem('lang') || 'es';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
  updateLangButton(lang);
}

function updateLangButton(lang) {
  const flag = document.getElementById('lang-flag');
  if (flag) {
    flag.src = flags[lang].src;
    flag.alt = flags[lang].alt;
  }
}

function applyTranslations(lang) {
  const t = translations[lang];
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.documentElement.lang = lang;

  // Nav
  document.querySelectorAll('nav ul li a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === 'index.html') link.textContent = t.nav.menu;
    if (href === 'ofertas.html') link.textContent = t.nav.ofertas;
    if (href === 'contacto.html') link.textContent = t.nav.contacto;
  });

  // Footer
  const footer = document.querySelector('footer p');
  if (footer) footer.textContent = t.footer;

  if (page === 'index.html' || page === '') {
    document.title = t.index.title;
    const q = s => document.querySelector(s);
    if (q('#hero h1')) q('#hero h1').textContent = t.index.heroTitle;
    if (q('#hero p')) q('#hero p').textContent = t.index.heroText;
    if (q('#menu > h2')) q('#menu > h2').textContent = t.index.menuTitle;
    const sections = document.querySelectorAll('#menu > h3');
    if (sections[0]) sections[0].textContent = t.index.burgers;
    if (sections[1]) sections[1].textContent = t.index.drinks;
    if (sections[2]) sections[2].textContent = t.index.desserts;
    document.querySelectorAll('.producto h4').forEach((el, i) => { if (t.index.products[i]) el.textContent = t.index.products[i].name; });
    document.querySelectorAll('.producto .descripcion').forEach((el, i) => { if (t.index.products[i]) el.textContent = t.index.products[i].desc; });
    document.querySelectorAll('.agregar-carrito').forEach(btn => btn.textContent = t.index.addToCart);

  } else if (page === 'ofertas.html') {
    document.title = t.ofertas.title;
    const q = s => document.querySelector(s);
    if (q('#hero h1')) q('#hero h1').textContent = t.ofertas.heroTitle;
    if (q('#hero p')) q('#hero p').textContent = t.ofertas.heroText;
    if (q('#menu h2')) q('#menu h2').textContent = t.ofertas.ofertasTitle;
    document.querySelectorAll('.producto h3').forEach((el, i) => { if (t.ofertas.products[i]) el.textContent = t.ofertas.products[i].name; });
    document.querySelectorAll('.producto .descripcion').forEach((el, i) => { if (t.ofertas.products[i]) el.textContent = t.ofertas.products[i].desc; });
    document.querySelectorAll('.agregar-carrito').forEach(btn => btn.textContent = t.ofertas.addToCart);

  } else if (page === 'contacto.html') {
    document.title = t.contacto.title;
    const q = s => document.querySelector(s);
    if (q('#contacto h2')) q('#contacto h2').textContent = t.contacto.contactTitle;
    if (q('#contacto > p')) q('#contacto > p').textContent = t.contacto.contactText;
    const labels = document.querySelectorAll('#contact-form label');
    if (labels[0]) labels[0].textContent = t.contacto.nombre;
    if (labels[1]) labels[1].textContent = t.contacto.email;
    if (labels[2]) labels[2].textContent = t.contacto.mensaje;
    if (q('#contact-form button[type="submit"]')) q('#contact-form button[type="submit"]').textContent = t.contacto.enviar;
  }
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  const lang = getLang();
  applyTranslations(lang);
  updateLangButton(lang);

  // Botón idioma
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => setLang(getLang() === 'es' ? 'en' : 'es'));
  }

  // Evita navegar a la página actual
  const paginaActual = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href') === paginaActual) {
      link.addEventListener('click', e => e.preventDefault());
    }
  });

  // Precio combo
  const comboPriceElement = document.getElementById('combo-precio');
  if (comboPriceElement) {
    const total = (3.49 * 0.8 * 4) + (1.99 * 4);
    comboPriceElement.textContent = '$' + total.toFixed(2);
  }

  // Formulario contacto
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    emailjs.init('64F0LBIGZ1vsg3iI4');
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const t = translations[getLang()].contacto;
      emailjs.send('service_npgsvzk', 'template_xsb9jzz', {
        from_name: document.getElementById('nombre').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('mensaje').value,
        to_email: 'augustozanetta46@gmail.com'
      }).then(() => { alert(t.successMsg); contactForm.reset(); },
        () => { alert(t.errorMsg); });
    });
  }
});

// Carrito
document.querySelectorAll('.producto button').forEach(btn => {
  btn.addEventListener('click', () => {
    const t = translations[getLang()];
    Swal.fire({ title: 'Restaurante Virtual', text: t.cartMsg, icon: 'success', confirmButtonText: 'OK' });
  });
});

// Animación hero
window.addEventListener('load', () => {
  const hero = document.getElementById('hero');
  if (hero) {
    hero.style.opacity = 0;
    setTimeout(() => { hero.style.transition = 'opacity 1s'; hero.style.opacity = 1; }, 500);
  }
});
