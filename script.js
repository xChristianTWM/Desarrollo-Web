<script>
// Función para alternar la visibilidad del menú en la barra de navegación
    function toggleMenu() {
        const menuBar = document.querySelector('.container-bar');
        menuBar.classList.toggle('active');
    }

// Función para alternar la visibilidad del aside (filtros) en pantallas pequeñas
    function toggleAside() {
        const aside = document.querySelector('.left-column');
        aside.classList.toggle('active');
    }



</script>
