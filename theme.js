// Simpler, more robust theme toggle implementation
(function() {
    // Execute as soon as this script is loaded
    function initTheme() {
        const themeToggle = document.querySelector('.theme-toggle');
        
        if (!themeToggle) {
            console.error('Theme toggle button not found');
            return;
        }
        
        const themeIcon = themeToggle.querySelector('i');
        
        if (!themeIcon) {
            console.error('Theme icon not found');
            return;
        }
        
        // Check for saved user preference, otherwise use system preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const storedTheme = localStorage.getItem('theme');
        
        // Determine which theme to use
        let currentTheme = storedTheme;
        if (!currentTheme) {
            currentTheme = prefersDarkScheme.matches ? 'dark' : 'light';
        }
        
        // Apply the theme immediately
        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            
            // Update the icon (safely)
            if (theme === 'dark') {
                themeIcon.className = ''; // Reset classes
                themeIcon.className = 'fa-solid fa-moon';
            } else {
                themeIcon.className = ''; // Reset classes
                themeIcon.className = 'fa-solid fa-sun';
            }
        }
        
        // Apply initial theme
        applyTheme(currentTheme);
        
        // Toggle theme on button click
        themeToggle.addEventListener('click', function() {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
        
        // Handle system preference changes
        prefersDarkScheme.addEventListener('change', function(e) {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    // Try to initialize immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();