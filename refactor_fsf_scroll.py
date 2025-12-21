import re

# Read the FSF page
with open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the old scroll handlers with a new optimized one
old_scroll_section = '''        
        // Scroll detection for bottom section
        function setupScrollDetection() {
            const sidebar = document.getElementById('fsf-sidebar');
            const bottomSection = document.getElementById('fsf-bottom-section');
            
            if (!sidebar || !bottomSection) return;
            
            function checkScroll() {
                const scrollBottom = window.scrollY + window.innerHeight;
                const docHeight = document.documentElement.scrollHeight;
                const threshold = 200; // pixels from bottom
                
                if (docHeight - scrollBottom < threshold) {
                    // Near bottom - show expanded section, hide sidebar
                    sidebar.style.display = 'none';
                    bottomSection.classList.add('active');
                } else {
                    // Not at bottom - show sidebar, hide expanded section
                    sidebar.style.display = 'block';
                    bottomSection.classList.remove('active');
                }
            }
            
            window.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check
        }
        
        // Initialize scroll detection
        document.addEventListener('DOMContentLoaded', setupScrollDetection);

        
        // Scroll detection for gradual bottom expansion
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
        
        document.addEventListener('DOMContentLoaded', setupBottomExpansion);'''

new_scroll_section = '''        
        // ============================================================================
        // SCROLL-BASED EXPANSION - GPU-OPTIMIZED, RAF-BATCHED
        // ============================================================================
        
        function setupScrollExpansion() {
            const sidebar = document.querySelector('.fsf-sidebar');
            const fsfContent = document.querySelector('.fsf-content');
            const layout = document.querySelector('.fsf-layout');
            
            if (!sidebar || !fsfContent) return;
            
            // Cache measurements - only update on resize
            let contentBottom = 0;
            let rafPending = false;
            let currentProgress = 0;
            let targetProgress = 0;
            
            // Spring interpolation
            const springStiffness = 0.08;
            const springDamping = 0.85;
            let velocity = 0;
            
            function measureLayout() {
                const rect = fsfContent.getBoundingClientRect();
                contentBottom = rect.bottom + window.scrollY;
            }
            
            function onScroll() {
                const viewportBottom = window.scrollY + window.innerHeight;
                const startThreshold = 400;
                const distanceFromEnd = contentBottom - viewportBottom;
                
                // Calculate target progress (0 to 1)
                targetProgress = Math.max(0, Math.min(1, 1 - (distanceFromEnd / startThreshold)));
                
                if (!rafPending) {
                    rafPending = true;
                    requestAnimationFrame(updateAnimation);
                }
            }
            
            function updateAnimation() {
                rafPending = false;
                
                // Spring physics for smooth interpolation
                const force = (targetProgress - currentProgress) * springStiffness;
                velocity = velocity * springDamping + force;
                currentProgress += velocity;
                
                // Stop when settled
                const isSettled = Math.abs(targetProgress - currentProgress) < 0.001 && Math.abs(velocity) < 0.001;
                
                if (!isSettled) {
                    requestAnimationFrame(updateAnimation);
                    rafPending = true;
                } else {
                    currentProgress = targetProgress;
                }
                
                // Apply transforms ONLY (no layout-affecting properties)
                applyTransforms(currentProgress);
            }
            
            function applyTransforms(progress) {
                if (progress > 0.01) {
                    // Scale: 1.0 to 1.35
                    const scale = 1 + (progress * 0.35);
                    // Translate: move toward center as it grows
                    const translateX = progress * -12;
                    const translateY = progress * 10;
                    
                    // Use translate3d for GPU acceleration
                    sidebar.style.transform = `translate3d(${translateX}%, ${translateY}px, 0) scale(${scale})`;
                    sidebar.style.opacity = 1 - (progress * 0.05);
                    
                    if (progress > 0.85) {
                        layout?.classList.add('at-bottom');
                        sidebar.classList.add('expanded');
                    } else {
                        layout?.classList.remove('at-bottom');
                        sidebar.classList.remove('expanded');
                    }
                } else {
                    sidebar.style.transform = '';
                    sidebar.style.opacity = '';
                    layout?.classList.remove('at-bottom');
                    sidebar.classList.remove('expanded');
                }
            }
            
            // Apply will-change on interaction, remove when idle
            function enableGPU() {
                sidebar.style.willChange = 'transform, opacity';
            }
            
            function disableGPU() {
                setTimeout(() => {
                    if (currentProgress < 0.01) {
                        sidebar.style.willChange = 'auto';
                    }
                }, 500);
            }
            
            // Initial measurement
            measureLayout();
            
            // Event listeners (passive!)
            window.addEventListener('scroll', () => {
                enableGPU();
                onScroll();
                disableGPU();
            }, { passive: true });
            
            window.addEventListener('resize', () => {
                measureLayout();
                onScroll();
            }, { passive: true });
            
            // Initial call
            onScroll();
        }
        
        document.addEventListener('DOMContentLoaded', setupScrollExpansion);'''

content = content.replace(old_scroll_section, new_scroll_section)

# Write back
with open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Refactored FSF scroll handler!')
