# Update HTML to wrap content and sidebar in two-column flex container
content = open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'r', encoding='utf-8').read()

# Add the two-column wrapper
old_html = '''<div id="fsf-backdrop" class="fsf-backdrop"></div>
        <div class="fsf-page-container">
            <!-- Left Column: Content -->
            <div class="fsf-content">'''

new_html = '''<div id="fsf-backdrop" class="fsf-backdrop"></div>
        <div class="fsf-page-container">
        <div class="fsf-two-column">
            <!-- Left Column: Content -->
            <div class="fsf-content">'''

content = content.replace(old_html, new_html)

open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'w', encoding='utf-8').write(content)
print('Added two-column wrapper!')
