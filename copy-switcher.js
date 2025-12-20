// Copy switcher - updates all copy across the site based on selected version
// This should be included on all pages that need dynamic copy

(function() {
    'use strict';
    
    // Wait for copy-config.js to load
    if (typeof getCopy === 'undefined') {
        console.error('copy-config.js must be loaded before copy-switcher.js');
        return;
    }
    
    // Get current copy version
    const currentCopy = getCopy();
    
    // Update about page copy
    function updateAboutPage() {
        const aboutSection = document.querySelector('#about');
        if (!aboutSection) return;
        
        const paragraphs = aboutSection.querySelectorAll('p.text-black');
        if (paragraphs.length >= 3) {
            paragraphs[0].textContent = currentCopy.about.paragraph1;
            paragraphs[1].textContent = currentCopy.about.paragraph2;
            paragraphs[2].textContent = currentCopy.about.paragraph3;
        }
    }
    
    // Update dynamically generated descriptions in scripts.js
    function updateDynamicDescriptions() {
        // Find elements that might contain the about text
        const description1 = document.querySelector('[data-copy="about-p1"]');
        const description2 = document.querySelector('[data-copy="about-p2"]');
        const description3 = document.querySelector('[data-copy="about-p3"]');
        
        if (description1) description1.textContent = currentCopy.about.paragraph1;
        if (description2) description2.textContent = currentCopy.about.paragraph2;
        if (description3) description3.textContent = currentCopy.about.paragraph3;
    }
    
    // Update project copy from projects-config.js
    // This is more complex as projects-config.js is a const array
    // We'll need to intercept when projects are displayed
    function updateProjectCopy(projectId, projectData) {
        if (!currentCopy.projects || !currentCopy.projects[projectId]) {
            return projectData; // Return original if no custom copy
        }
        
        const customCopy = currentCopy.projects[projectId];
        return {
            ...projectData,
            goal: customCopy.goal || projectData.goal,
            tagline: customCopy.tagline || projectData.tagline,
            // Can extend to update roles, skills, lessons, etc.
        };
    }
    
    // Main update function
    function updateAllCopy() {
        updateAboutPage();
        updateDynamicDescriptions();
        
        // If projects are already displayed, we'd need to re-render them
        // This would require integration with scripts.js
    }
    
    // Expose update function globally
    window.updateAllCopy = updateAllCopy;
    
    // Watch for dynamically added elements (for scripts.js generated content)
    const observer = new MutationObserver((mutations) => {
        let shouldUpdate = false;
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Element node
                    // Check if any added node has our data-copy attributes
                    if (node.hasAttribute && node.hasAttribute('data-copy')) {
                        shouldUpdate = true;
                    } else if (node.querySelector && node.querySelector('[data-copy]')) {
                        shouldUpdate = true;
                    }
                }
            });
        });
        if (shouldUpdate) {
            // Small delay to ensure content is fully added
            setTimeout(updateDynamicDescriptions, 100);
        }
    });
    
    // Start observing after DOM is ready
    function startObserving() {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    // Auto-update on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            updateAllCopy();
            startObserving();
        });
    } else {
        updateAllCopy();
        startObserving();
    }
    
    // Also update when copy version changes (for SPA navigation)
    window.addEventListener('storage', (e) => {
        if (e.key === 'copyVersion') {
            location.reload(); // Reload to get new copy
        }
    });
    
    // Re-run update after a short delay to catch dynamically generated content
    setTimeout(updateAllCopy, 500);
    setTimeout(updateAllCopy, 1500);
})();

