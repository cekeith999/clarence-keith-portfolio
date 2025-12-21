# Update HTML structure for FSF page
content = open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'r', encoding='utf-8').read()

# Replace old fsf-layout wrapper with simpler structure
old_layout_start = '<div class="fsf-layout">'
new_layout_start = '''<div id="fsf-backdrop" class="fsf-backdrop"></div>
        <div class="fsf-page-container">'''

content = content.replace(old_layout_start, new_layout_start)

# Write back
open(r'c:\portfolio\fashion-scholarship-fund\index.html', 'w', encoding='utf-8').write(content)
print('Updated HTML structure!')
