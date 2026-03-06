# 🍔 Restaurante Virtual

Un sitio web interactivo de un restaurante ficticio, desarrollado como proyecto de portafolio para demostrar habilidades en desarrollo web frontend. Incluye un menú con productos, ofertas especiales, un formulario de contacto funcional y animaciones simples.

## 📋 Descripción
Este proyecto simula un restaurante online con tres páginas principales: **Menú** (productos como hamburguesas, bebidas y postres), **Ofertas** (descuentos y combos con cálculos dinámicos) y **Contacto** (formulario que envía emails usando EmailJS). Es responsive, con un diseño temático en tonos marrones y verdes, y funcionalidades como un carrito simulado, animaciones en la sección hero y navegación inteligente.

Ideal para practicar HTML, CSS y JavaScript, y para mostrar en un portafolio de desarrollo web.

## ✨ Características
- **Menú interactivo**: Muestra productos con imágenes, descripciones y precios. Botones para "agregar al carrito" con notificaciones usando SweetAlert2.
- **Ofertas dinámicas**: Cálculo automático de precios (ej. Combo Familiar con descuento del 20% en hamburguesas).
- **Formulario de contacto**: Envía emails al restaurante y al usuario (BCC configurado en EmailJS). Incluye validación básica.
- **Animaciones y UX**: Transición de opacidad en la sección hero, navegación que previene clics en la página actual.
- **Responsive**: Diseño adaptable a móviles y desktop, con grid para productos.
- **Tecnologías modernas**: Integración con EmailJS para emails y SweetAlert2 para alertas estilizadas.

## 🛠️ Tecnologías Usadas
- **HTML5**: Estructura de las páginas (index.html, ofertas.html, contacto.html).
- **CSS3**: Estilos responsive, colores temáticos (#694E35 para acentos), animaciones y media queries.
- **JavaScript (ES6)**: Lógica para carrito, cálculos, navegación y envío de emails.
- **EmailJS**: Servicio para enviar emails desde el frontend sin backend.
- **SweetAlert2**: Librería para notificaciones personalizadas (en lugar de alert nativos).
- **CDNs**: Librerías externas cargadas desde jsDelivr.

## 🚀 Instalación y Ejecución
1. **Clona el repositorio**:
```sh
git clone https://github.com/AugustoZan/restaurante-virtual.git
cd restaurante-virtual-portafolio
```

2. **Abre en un navegador**:
- No requiere servidor; es un sitio estático. Abre `index.html` directamente en tu navegador (o usa Live Server en VS Code).

3. **Dependencias**:
- Las librerías (SweetAlert2 y EmailJS) se cargan desde CDN, así que no necesitas instalar nada extra.
- Asegúrate de tener las imágenes en `assets/` (logo.jpg, burger.jpg, etc.) para que se muestren correctamente.

## 📖 Uso
- **Navegación**: Usa el menú para ir a Menú, Ofertas o Contacto.
- **Agregar al carrito**: Haz clic en "Agregar al Carrito" para ver una notificación de éxito. No es funcional, solo estético.
- **Ver ofertas**: En `ofertas.html`, el precio del Combo Familiar se calcula automáticamente.
- **Enviar mensaje**: En `contacto.html`, llena el formulario y envíalo. Recibirás una confirmación por email (BCC). Revisar spam si no aparece.
- **Responsive**: Prueba en móvil para ver el diseño adaptado.

## 📸 Capturas de Pantalla
<img width="1349" height="605" alt="image" src="https://github.com/user-attachments/assets/6fef527a-f896-4146-be68-b072e90f5915" />
<img width="1350" height="603" alt="image" src="https://github.com/user-attachments/assets/447c6f88-2fd7-4b31-bc53-e83fddef6ac4" />
<img width="1349" height="605" alt="image" src="https://github.com/user-attachments/assets/d4b08498-f22a-43ec-be99-76aaa7ba1207" />

## 📄 Licencia
Este proyecto es de código abierto y está bajo ninguna licencia. Es para uso personal y educativo.

## 👨‍💻 Autor
- **Augusto Zanetta** - [GitHub](https://github.com/AugustoZan) | [LinkedIn](https://www.linkedin.com/in/augusto-zanetta)
- Proyecto creado en 2026 como parte de un portafolio de desarrollo web.
