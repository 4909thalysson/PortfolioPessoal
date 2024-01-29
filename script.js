document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Oculta todas as seções
            contentSections.forEach(function(section) {
                section.style.display = 'none';
            });

            // Obtém o ID da seção a ser exibida
            const targetId = this.getAttribute('href').substring(1);

            // Exibe a seção alvo
            document.getElementById(targetId).style.display = 'block';
        });
    });
});
