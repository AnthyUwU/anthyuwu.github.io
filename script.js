document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content');
    const links = document.querySelectorAll('.sidebar a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('href');
            loadContent(page);
        });
    });

    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(err => console.error('Error loading content:', err));
    }

    // Load the first page by default
    loadContent(links[0].getAttribute('href'));
});

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });
});