// Inicialización global
document.addEventListener('DOMContentLoaded', () => {
    // Configurar fecha máxima para ingreso (hoy)
    const fechaHoy = new Date().toISOString().split('T')[0];
    const inputsFecha = document.querySelectorAll('input[type="date"][name="fecha-ingreso"]');
    inputsFecha.forEach(input => input.max = fechaHoy);

    // Manejar pestañas en página principal
    if (document.getElementById('btn-menu')) {
        const btnMenu = document.getElementById('btn-menu');
        const btnConsulta = document.getElementById('btn-consulta');
        const sectionMenu = document.getElementById('section-menu');
        const sectionConsulta = document.getElementById('section-consulta');

        btnMenu.addEventListener('click', () => {
            sectionMenu.classList.add('active');
            sectionConsulta.classList.remove('active');
            btnMenu.classList.add('active');
            btnConsulta.classList.remove('