document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content');
    const links = document.querySelectorAll('.sidebar a');
    const toggleButton = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Handle sidebar toggle
    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }

    // Function to load content
function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
            window.history.pushState({ page: page }, '', `#${page.replace('.html', '')}`);
            addContentLinkHandlers();
            
            // Scroll after content loads (works for ALL navigation)
            setTimeout(() => {
                contentDiv.scrollTo({ top: 0, behavior: 'smooth' });
            }, 50); // Small delay ensures smooth scroll
        })
        .catch(err => console.error('Error loading content:', err));
}

function addContentLinkHandlers() {
    const contentLinks = contentDiv.querySelectorAll('a[href$=".html"]');
    contentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadContent(this.getAttribute('href'));
        });
    });
}

// Handle sidebar links (add scroll here too!)
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        loadContent(this.getAttribute('href'));
    });
});

    // Handle back/forward navigation
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.page) {
            loadContent(e.state.page);
        } else {
            // Load default page if no state
            loadContent(links[0].getAttribute('href'));
        }
    });

    // Load initial content
    const initialPage = window.location.hash
        ? window.location.hash.substring(1) + '.html'
        : links[0].getAttribute('href');
    loadContent(initialPage);
});