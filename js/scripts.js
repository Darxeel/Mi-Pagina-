/* Adaptación de Start Bootstrap Creative. Licencia original en LICENSE. */
window.addEventListener('DOMContentLoaded', () => {
    const config = window.CONFIGURACION || {};
    document.querySelectorAll('[data-marca]').forEach(el => { el.textContent = config.marca || 'Darxel Build Studio'; });
    document.title = `${config.marca || 'Darxel Build Studio'} | Arquitectura en Minecraft`;
    document.getElementById('year').textContent = new Date().getFullYear();
    const etiquetas = { catalogo:'Comprar esquemáticos ↗', patreon:'Apoyar en Patreon ↗', discord:'Hablemos en Discord ↗', correo:'Escribir por correo ↗', instagram:'Instagram ↗', youtube:'YouTube ↗' };
    document.querySelectorAll('[data-enlace]').forEach(el => {
        const key = el.dataset.enlace;
        const valor = (config.enlaces?.[key] || '').trim();
        if (!valor || (key !== 'correo' && !/^https:\/\//i.test(valor))) return;
        el.href = key === 'correo' ? `mailto:${valor}` : valor;
        if (key !== 'correo') { el.target = '_blank'; el.rel = 'noopener noreferrer'; }
        el.removeAttribute('aria-disabled'); el.removeAttribute('tabindex');
        el.textContent = el.closest('.social-links') ? `${key === 'youtube' ? 'YouTube' : key[0].toUpperCase() + key.slice(1)} ↗` : etiquetas[key];
    });
    // Si no carga el complemento, las fotos siguen siendo enlaces directos.
    if (window.SimpleLightbox) new SimpleLightbox({ elements:'#portfolio a.portfolio-box[href]' });
    const menu = document.getElementById('navbarResponsive');
    const boton = document.querySelector('.navbar-toggler');
    // Menú de respaldo para trabajar sin conexión al CDN.
    if (!window.bootstrap) boton.addEventListener('click', () => { const abierto = menu.classList.toggle('show'); boton.setAttribute('aria-expanded',String(abierto)); });
    document.querySelectorAll('#navbarResponsive .nav-link').forEach(enlace => enlace.addEventListener('click', () => {
        if (window.bootstrap) bootstrap.Collapse.getInstance(menu)?.hide();
        else { menu.classList.remove('show'); boton.setAttribute('aria-expanded','false'); }
    }));
});
