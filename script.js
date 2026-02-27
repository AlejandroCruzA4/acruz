/* ============================================
   Portafolio — JavaScript
   ============================================ */

/*
    Archivo: script.js
    Propósito: manejo de interacciones del portafolio (animaciones on-scroll, navegación
    activa, menú móvil, smooth scroll, y manejo de formulario de contacto en demo).

    Notas para integrarlo con MCP/Framer:
    - Se pueden editar textos o atributos desde `index.html` y `style.css` vía MCP.
    - Para enviar formularios a un endpoint real, añade un endpoint en el MCP (ej. POST /mcp/contact)
        y reemplaza el handler demo por una llamada `fetch` al MCP.
*/

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Reveal on Scroll ---------- */
    // Selecciona elementos que usan la clase `.reveal` y aplica la clase `.visible`
    // cuando entran en el viewport. Usamos IntersectionObserver para mejor rendimiento
    // comparado con scroll events manuales.
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase que activa la animación CSS y deja de observar
                // para que la animación ocurra solo una vez.
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        // threshold controla qué fracción del elemento debe estar visible
        threshold: 0.15,
        // rootMargin permite disparar la animación un poco antes/ después
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ---------- Active Nav Link ---------- */
    // Observa las secciones para actualizar el enlace de navegación activo según
    // la sección visible en pantalla. Esto mejora la UX al indicar en qué sección
    // se encuentra el usuario.
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__links a');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    // Activa el link cuyo href coincide con el id de la sección
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, {
        threshold: 0.3,
        // Aquí usamos la variable CSS --nav-height para compensar el padding del scroll
        rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--nav-height')} 0px -40% 0px`
    });

    sections.forEach(section => navObserver.observe(section));

    /* ---------- Mobile Menu ---------- */
    // Control básico del menú móvil: alterna clases y bloquea el scroll del body
    // cuando el menú está abierto.
    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('open');
        // Evita que la página haga scroll detrás del menú móvil
        document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
    });

    // Cerrar el menú cuando el usuario hace click en un enlace (UX móvil)
    navLinksContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinksContainer.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    /* ---------- Smooth scroll for CTA buttons ---------- */
    // Intercepta enlaces a anclas internas y usa scrollIntoView para un desplazamiento suave.
    // Esto mejora la navegación en lugar del salto instantáneo por defecto.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ---------- Contact Form (demo handler) ---------- */
    // Handler de ejemplo: muestra feedback local y resetea el formulario.
    // Para producción: reemplazar por `fetch()` a un endpoint (por ejemplo en el MCP)
    // que reciba y almacene/mande el mensaje.
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Feedback visual inmediato para el usuario
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ ¡Mensaje enviado!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';
        submitBtn.disabled = true;

        // Simula una respuesta asíncrona; en un MCP real aquí haríamos fetch
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            form.reset();
        }, 3000);
    });

    /* ---------- Nav background on scroll ---------- */
    // Cambia la opacidad/fondo del nav al hacer scroll para mejorar legibilidad
    // sobre secciones con fondos oscuros/claros.
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 15, 0.92)';
        } else {
            nav.style.background = 'rgba(10, 10, 15, 0.7)';
        }

        lastScroll = currentScroll;
    }, { passive: true });

});
