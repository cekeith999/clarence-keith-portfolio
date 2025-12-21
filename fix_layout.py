# Implement sticky two-column layout for FSF page
import re

content = open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'r', encoding='utf-8').read()

# 1. Update the CSS for sticky sidebar and two-column layout
# Find the fsf-sidebar CSS and change from fixed to sticky
old_sidebar_css = '''        /* Sticky card stack - initially hidden until JS positions it */
        .fsf-sidebar {
            position: fixed;
            top: 0;
            right: 3rem;
            width: 480px;
            z-index: 10;
            transition: top 0.3s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform-origin: center center;
        }
        
        /* Mid-scroll: centered in viewport */
        .fsf-sidebar.centered {
            top: 50%;
            transform: translateY(-50%);
        }'''

new_sidebar_css = '''        /* Two-column flex layout container */
        .fsf-two-column {
            display: flex;
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            align-items: flex-start;
        }
        
        /* Sticky sidebar - scrolls with page but sticks at top */
        .fsf-sidebar {
            position: sticky;
            top: 100px;
            width: 480px;
            flex-shrink: 0;
            z-index: 10;
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform-origin: center center;
            align-self: flex-start;
        }'''

content = content.replace(old_sidebar_css, new_sidebar_css)

# 2. Update fsf-content CSS (remove margin-right)
old_content_css = '''        .fsf-content {
            max-width: 600px;
            margin-left: 2rem;
            margin-right: 550px; /* Leave space for fixed sidebar */
            padding: 0 1rem;
        }'''

new_content_css = '''        .fsf-content {
            flex: 1;
            max-width: 600px;
            min-width: 0;
        }'''

content = content.replace(old_content_css, new_content_css)

# 3. Wrap content and sidebar in two-column container
# Find the start of fsf-page-container and fsf-content
old_layout = '''<div id="fsf-backdrop" class="fsf-backdrop"></div>
        <div class="fsf-page-container">
            <!-- Left Column: Content -->
            <div class="fsf-content">'''

new_layout = '''<div id="fsf-backdrop" class="fsf-backdrop"></div>
        <div class="fsf-page-container">
        <!-- Two Column Layout -->
        <div class="fsf-two-column">
            <!-- Left Column: Content -->
            <div class="fsf-content">'''

content = content.replace(old_layout, new_layout)

# 4. Close the two-column container after the sidebar closes
# Find where sidebar closes and page-container closes
old_close = '''            </div>
        </div></main>'''

new_close = '''            </div>
        </div><!-- close two-column -->
        </div><!-- close fsf-page-container --></main>'''

content = content.replace(old_close, new_close)

# 5. Simplify the scroll JS - remove dynamic positioning since we're using sticky
old_js = '''            // Apply will-change for smooth animation
            sidebar.style.willChange = 'transform, top';
            
            // Get the Project Overview section position for alignment
            const projectOverview = fsfContent.querySelector('h3');
            const initialTop = projectOverview ? projectOverview.getBoundingClientRect().top + window.scrollY : 500;
            sidebar.style.top = initialTop + 'px';'''

new_js = '''            // Apply will-change for smooth animation
            sidebar.style.willChange = 'transform';'''

content = content.replace(old_js, new_js)

# Write back
open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'w', encoding='utf-8').write(content)
print('Implemented sticky two-column layout!')
