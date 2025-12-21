import re

# Read file
with open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add CSS for fullscreen button and lower nav controls
new_css = """
            /* Fullscreen button */
            .fullscreen-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(0, 0, 0, 0.6);
                color: white;
                border: none;
                border-radius: 6px;
                padding: 6px 10px;
                cursor: pointer;
                font-size: 12px;
                z-index: 10;
                transition: background 0.2s;
            }
            
            .fullscreen-btn:hover {
                background: rgba(0, 0, 0, 0.8);
            }
            
            /* Navigation position adjustment */
            .card-stack-controls {
                margin-top: 1.5rem;
            }
            
            /* Smooth transition for sidebar */
            .fsf-sidebar {
                transition: transform 0.15s ease-out, width 0.15s ease-out;
            }
"""

# Insert before @media query
content = content.replace('@media (max-width: 1024px)', new_css + '\n        @media (max-width: 1024px)')

# 2. Replace the scroll detection JavaScript with gradual transition
old_scroll_fn = """        // Scroll detection for bottom expansion
        function setupBottomExpansion() {
            const layout = document.querySelector('.fsf-layout');
            const sidebar = document.querySelector('.fsf-sidebar');
            const content = document.querySelector('.fsf-content');
            
            if (!layout || !sidebar || !content) return;
            
            function checkScroll() {
                const contentBottom = content.getBoundingClientRect().bottom;
                const viewportHeight = window.innerHeight;
                
                // When the content bottom is near or above the viewport bottom
                if (contentBottom < viewportHeight + 100) {
                    layout.classList.add('at-bottom');
                    sidebar.classList.add('expanded');
                } else {
                    layout.classList.remove('at-bottom');
                    sidebar.classList.remove('expanded');
                }
            }
            
            window.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            checkScroll(); // Initial check
        }
        
        document.addEventListener('DOMContentLoaded', setupBottomExpansion);"""

new_scroll_fn = """        // Scroll detection for gradual bottom expansion
        function setupBottomExpansion() {
            const layout = document.querySelector('.fsf-layout');
            const sidebar = document.querySelector('.fsf-sidebar');
            const fsfContent = document.querySelector('.fsf-content');
            
            if (!layout || !sidebar || !fsfContent) return;
            
            const sidebarOriginalWidth = 500;
            
            function checkScroll() {
                const contentRect = fsfContent.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                // Calculate progress: 0 = content bottom is 400px below viewport, 1 = content bottom at viewport
                const startThreshold = 400;
                const distanceFromBottom = contentRect.bottom - viewportHeight;
                const progress = Math.max(0, Math.min(1, 1 - (distanceFromBottom / startThreshold)));
                
                if (progress > 0) {
                    // Gradual scale and width change
                    const scale = 1 + (progress * 0.25);
                    const newWidth = sidebarOriginalWidth + (progress * 250);
                    const translateX = progress * -15;
                    
                    sidebar.style.transform = `scale(${scale}) translateX(${translateX}%)`;
                    sidebar.style.width = newWidth + 'px';
                    
                    if (progress > 0.9) {
                        layout.classList.add('at-bottom');
                        sidebar.classList.add('expanded');
                    } else {
                        layout.classList.remove('at-bottom');
                        sidebar.classList.remove('expanded');
                    }
                } else {
                    sidebar.style.transform = '';
                    sidebar.style.width = '';
                    layout.classList.remove('at-bottom');
                    sidebar.classList.remove('expanded');
                }
            }
            
            window.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            checkScroll();
        }
        
        document.addEventListener('DOMContentLoaded', setupBottomExpansion);"""

content = content.replace(old_scroll_fn, new_scroll_fn)

# 3. Add fullscreen button HTML to card stack
old_card_div = '<div class="card-stack" id="card-stack">'
new_card_div = '''<div class="card-stack" id="card-stack">
                        <button class="fullscreen-btn" id="fullscreen-btn" title="Toggle fullscreen">⛶</button>'''
content = content.replace(old_card_div, new_card_div, 1)

# 4. Add fullscreen toggle function before initCardStack
old_init = 'function initCardStack() {'
new_init = '''// Fullscreen toggle
        function toggleFullscreen() {
            const wrapper = document.querySelector('.card-stack-wrapper');
            if (!document.fullscreenElement) {
                wrapper.requestFullscreen().catch(err => console.log(err));
            } else {
                document.exitFullscreen();
            }
        }
        
        // Setup fullscreen button
        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('fullscreen-btn');
            if (btn) btn.addEventListener('click', toggleFullscreen);
        });
        
        function initCardStack() {'''

content = content.replace(old_init, new_init)

# Write file
with open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('All improvements applied!')
