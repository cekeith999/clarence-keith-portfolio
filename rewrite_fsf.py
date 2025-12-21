import re

# Read the FSF page
with open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# New simplified CSS - card stack is always sticky on right, animates at bottom
new_css = '''    <style>
        /* Simple layout with sticky card stack */
        .fsf-page-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
        }
        
        .fsf-content {
            max-width: 600px;
            padding-right: 520px; /* Space for sticky sidebar */
        }
        
        /* Sticky card stack - always on right side */
        .fsf-sidebar {
            position: fixed;
            top: 120px;
            right: calc(50% - 600px + 2rem);
            width: 480px;
            z-index: 10;
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), 
                        opacity 0.3s ease;
            transform-origin: center center;
        }
        
        /* When at bottom - center and enlarge */
        .fsf-sidebar.at-bottom {
            position: fixed;
            top: 50%;
            left: 50%;
            right: auto;
            transform: translate(-50%, -50%) scale(1.3);
            width: 600px;
            z-index: 100;
        }
        
        /* Backdrop when enlarged */
        .fsf-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(242, 240, 239, 0.95);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.4s ease, visibility 0.4s ease;
            z-index: 50;
        }
        
        .fsf-backdrop.visible {
            opacity: 1;
            visibility: visible;
        }
        
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
            margin-top: 1rem;
        }
        
        /* Card stack styles */
        .card-stack-wrapper {
            position: relative;
            width: 100%;
        }
        
        .card-stack {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 10;
            perspective: 1000px;
            cursor: grab;
            user-select: none;
        }
        
        .card-stack:active {
            cursor: grabbing;
        }
        
        .card-stack-card {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 12px;
            overflow: hidden;
            background: white;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .card-stack-card.dragging {
            transition: none;
        }
        
        .card-stack-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .card-nav-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #A30000;
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
        }
        
        .card-nav-btn:hover:not(:disabled) {
            background: #8B0000;
            transform: scale(1.1);
        }
        
        .card-nav-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .card-counter {
            font-size: 0.875rem;
            font-weight: 600;
            color: #333;
            min-width: 60px;
            text-align: center;
        }
        
        /* Mobile: stack vertically */
        @media (max-width: 1024px) {
            .fsf-content {
                max-width: 100%;
                padding-right: 0;
            }
            
            .fsf-sidebar {
                position: relative;
                top: 0;
                right: auto;
                width: 100%;
                max-width: 500px;
                margin: 2rem auto;
            }
            
            .fsf-sidebar.at-bottom {
                position: relative;
                top: auto;
                left: auto;
                transform: none;
                width: 100%;
            }
        }
    </style>'''

# Find and replace everything from <style> to </style>
# This is a bit complex because the style tag may have issues
style_pattern = r'<style>.*?</style>'
content = re.sub(style_pattern, new_css, content, flags=re.DOTALL, count=1)

# Now update the scroll JavaScript to use simpler at-bottom toggle
old_scroll_pattern = r'// ={70,}.*?document\.addEventListener\(\'DOMContentLoaded\', setupScrollExpansion\);'

new_scroll_js = '''// ============================================================================
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

content = re.sub(old_scroll_pattern, new_scroll_js, content, flags=re.DOTALL)

# Write back
with open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Rewrote FSF page with simplified layout!')
