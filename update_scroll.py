# Update scroll handler for three-phase behavior
content = open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'r', encoding='utf-8').read()

old_js = '''        // ============================================================================
        // SCROLL DETECTION - Simple at-bottom toggle
        // ============================================================================
        
        function setupScrollExpansion() {
            const sidebar = document.getElementById('fsf-sidebar');
            const fsfContent = document.querySelector('.fsf-content');
            const backdrop = document.getElementById('fsf-backdrop');
            
            if (!sidebar || !fsfContent) return;
            
            // Apply will-change for smooth animation
            sidebar.style.willChange = 'transform';
            
            function checkScroll() {
                const contentRect = fsfContent.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                // When content bottom is above viewport (user scrolled past content)
                const isAtBottom = contentRect.bottom < viewportHeight - 100;
                
                if (isAtBottom) {
                    sidebar.classList.add('at-bottom');
                    backdrop?.classList.add('visible');
                } else {
                    sidebar.classList.remove('at-bottom');
                    backdrop?.classList.remove('visible');
                }
            }
            
            // Passive scroll listener
            window.addEventListener('scroll', checkScroll, { passive: true });
            window.addEventListener('resize', checkScroll, { passive: true });
            
            // Initial check
            checkScroll();
            
            // Click backdrop to scroll back up
            backdrop?.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        document.addEventListener('DOMContentLoaded', setupScrollExpansion);'''

new_js = '''        // ============================================================================
        // SCROLL DETECTION - Three phases: aligned, centered, enlarged
        // ============================================================================
        
        function setupScrollExpansion() {
            const sidebar = document.getElementById('fsf-sidebar');
            const fsfContent = document.querySelector('.fsf-content');
            const backdrop = document.getElementById('fsf-backdrop');
            
            if (!sidebar || !fsfContent) return;
            
            // Apply will-change for smooth animation
            sidebar.style.willChange = 'transform, top';
            
            function checkScroll() {
                const scrollY = window.scrollY;
                const viewportHeight = window.innerHeight;
                const contentRect = fsfContent.getBoundingClientRect();
                
                // Phase thresholds
                const startCenteringAt = 150;
                const isAtBottom = contentRect.bottom < viewportHeight - 50;
                
                // Phase 1: At top - aligned with Project Overview
                if (scrollY < startCenteringAt) {
                    sidebar.classList.remove('centered');
                    sidebar.classList.remove('at-bottom');
                    backdrop?.classList.remove('visible');
                }
                // Phase 3: At bottom - enlarged and centered
                else if (isAtBottom) {
                    sidebar.classList.add('centered');
                    sidebar.classList.add('at-bottom');
                    backdrop?.classList.add('visible');
                }
                // Phase 2: Mid-scroll - centered in viewport
                else {
                    sidebar.classList.add('centered');
                    sidebar.classList.remove('at-bottom');
                    backdrop?.classList.remove('visible');
                }
            }
            
            // Passive scroll listener
            window.addEventListener('scroll', checkScroll, { passive: true });
            window.addEventListener('resize', checkScroll, { passive: true });
            
            // Initial check
            checkScroll();
            
            // Click backdrop to scroll back up
            backdrop?.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        document.addEventListener('DOMContentLoaded', setupScrollExpansion);'''

content = content.replace(old_js, new_js)

open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'w', encoding='utf-8').write(content)
print('Updated scroll handler!')
