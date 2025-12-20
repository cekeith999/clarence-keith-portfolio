# Clarence Keith - Portfolio Website

A modern, multi-page portfolio website showcasing footwear design, 3D art, accessories, masks, and professional achievements. Built with vanilla HTML, CSS, and JavaScript, deployed on Vercel.

**Live Site**: https://www.clarencekeith.com/

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Resume/Portfolio Structure](#resumeportfolio-structure)
- [Features](#features)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Recent Changes](#recent-changes)
- [For Developers/AI](#for-developersai)

---

## 🎯 Project Overview

This is a **multi-page static website** portfolio for Clarence Keith, a footwear designer and 3D artist. The site showcases:
- **4 Main Project Categories**: Footwear, Accessories, Masks, and Fashion Scholarship Fund
- **About Section**: Personal information, skills, and resume
- **Dynamic Copy System**: Ability to switch portfolio copy for different audiences (Mattel, Nike/Jordan internships)
- **Interactive Elements**: Custom cursor, image zoom, contact form, animated circles

---

## 📄 Resume/Portfolio Structure

### Home Page (`index.html`)
- **4 Project Circles** arranged around a central "About Me" circle
- **Desktop Layout**: Circles positioned in a circle around center
- **Mobile Layout**: About Me circle at top, 4 project circles in a row below
- **Connecting Lines**: Animated lines connecting project circles to center (desktop only)
- **Navigation**: Click any circle to navigate to that section

### Project Categories

1. **Footwear** (`/footwear/`)
   - OK Shoes (collaborative project)
   - Heel Boot Collection
   - MyShoeBoot Series
   - TunsShoe Collection

2. **Accessories** (`/accessories/`)
   - Buldge Glasses
   - Golden Eye
   - Hands Glasses
   - ID Chain
   - Liquidy Glasses
   - Silver Necklace

3. **Masks** (`/masks/`)
   - Red Mask Collection
   - Chrome Mask Collection
   - Hamsa Mask Collection
   - Black Eye Mask Collection

4. **Fashion Scholarship Fund** (`/fashion-scholarship-fund/`)
   - Case Competition Winner (2024)
   - Strategic analysis and business acumen showcase

5. **About** (`/about.html`)
   - Personal description (3 paragraphs)
   - Skills & Expertise list
   - Profile image
   - "Thoughts" button for extended content

### Copy Versions (Dynamic Content)
The site includes a **copy switcher system** (`/change`) that allows tailoring portfolio copy for different audiences:
- **Default**: Standard portfolio copy
- **Mattel**: Tailored for Mattel Future Lab Program Management Internship
- **Nike/Jordan**: Tailored for Nike/Jordan Design Internship

---

## ✨ Features

### Core Features
- ✅ **Multi-page Navigation**: Separate HTML pages for each project category
- ✅ **Interactive Circle Navigation**: Animated circles on home page
- ✅ **Image Galleries**: Zoom functionality, thumbnail navigation, video support
- ✅ **Contact Form**: Formspree integration (sends to cekeith@usc.edu and jordankeith999@gmail.com)
- ✅ **Responsive Design**: Mobile and desktop layouts
- ✅ **Custom Cursor**: Animated cursor that follows mouse movement
- ✅ **Bottom Marquee**: Continuous scrolling text with philosophical thoughts
- ✅ **Copy Switcher**: Toggle between different portfolio copy versions
- ✅ **SEO Optimized**: Sitemap, meta tags, proper heading structure

### Interactive Elements
- **Orbital Animation**: Project circles slowly orbit around central About Me circle (desktop only)
- **Mouse Proximity Detection**: Orbital animation slows/stops as mouse approaches circles
- **Image Zoom**: Click zoom icon on any image for full-screen view
- **Video Support**: `.mov` files supported in galleries
- **Hover Effects**: Circles and images have hover animations
- **Smooth Transitions**: CSS transitions for all interactions
- **Active State Management**: Current page/section highlighted

### Design System
- **Color Palette**:
  - Primary Red: `#A30000`
  - Background: `#F2F0EF` (off-white)
  - Text: Black
  - Accent: White
- **Typography**: Custom Yeezy T-Star font family
- **Layout**: Tailwind CSS utility classes + custom CSS

---

## 📁 File Structure

```
portfolio/
├── index.html                    # Home page with circles
├── about.html                    # About page
├── change.html                   # Copy switcher page
├── experimentalpage.html         # 3D scroll experiment page
│
├── styles.css                    # Main stylesheet
├── scripts.js                    # Main JavaScript (circle logic, navigation, etc.)
├── projects-config.js            # Project data configuration
├── copy-config.js                # Copy versions for different audiences
├── copy-switcher.js              # Dynamic copy update system
│
├── footwear/                     # Footwear project pages
│   ├── index.html
│   ├── ok-shoes.html
│   ├── heel-boot-collection.html
│   ├── myshoeboot-series.html
│   └── tunsshoe-collection.html
│
├── accessories/                  # Accessories project pages
│   ├── index.html
│   ├── buldge-glasses.html
│   ├── golden-eye.html
│   ├── hands-glasses.html
│   ├── id-chain.html
│   ├── liquidy-glasses.html
│   └── silver-necklace.html
│
├── masks/                        # Masks project pages
│   ├── index.html
│   ├── red-mask.html
│   ├── chrome-mask.html
│   ├── hamsa-mask.html
│   └── blackeye-mask.html
│
├── fashion-scholarship-fund/     # Fashion Scholarship Fund page
│   └── index.html
│
├── shoeimages/                   # Footwear project images
├── accessoryimages/              # Accessories project images
├── maskimages/                   # Masks project images
├── meimages/                     # Profile and about images
├── productdesignimages/          # Product design images
│
├── fonts/                        # Custom Yeezy T-Star fonts
├── api/                          # API endpoints (if needed)
│
├── vercel.json                   # Vercel routing configuration
├── sitemap.xml                   # SEO sitemap
├── robots.txt                    # SEO robots file
│
└── Documentation/
    ├── README.md                 # This file
    ├── AI_SITEMAP.md            # AI navigation guide
    ├── COPY_SWITCHER_README.md  # Copy switcher documentation
    ├── EDITING_GUIDE.md         # Content editing guide
    └── MULTIPAGE_CONVERSION.md  # Multi-page conversion notes
```

---

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styles + Tailwind CSS (CDN)
- **JavaScript (Vanilla)**: No frameworks, pure JS
- **Formspree**: Contact form backend
- **Vercel**: Hosting and deployment
- **WebP**: Optimized image format
- **Git**: Version control

---

## 🚀 Getting Started

### Prerequisites
- A web browser
- Git (for cloning)
- Text editor (VS Code recommended)

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cekeith999/clarence-keith-portfolio.git
   cd clarence-keith-portfolio
   ```

2. **Open in browser**:
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python
     python -m http.server 8000
     
     # Node.js
     npx serve
     ```

3. **View locally**: Navigate to `http://localhost:8000`

### Development Notes
- **No build process**: This is a static site, no compilation needed
- **Live reload**: Use browser dev tools or a live reload extension
- **Image optimization**: Images should be converted to WebP format (see `convert-to-webp.ps1`)

---

## 📝 Content Management

### Adding a New Project

1. **Add to `projects-config.js`**:
   ```javascript
   {
       id: 'project5',
       name: 'Project Name',
       tagline: 'Project Tagline',
       date: 'Date',
       goal: 'Project goal description...',
       role: ['Role 1', 'Role 2'],
       skills: ['Skill 1', 'Skill 2'],
       lessons: ['Lesson 1', 'Lesson 2'],
       circleImage: 'path/to/circle-image.webp',
       mainImage: 'path/to/main-image.webp',
       thumbnails: [
           { src: 'path/to/image1.webp', alt: 'Alt text' }
       ],
       projects: [
           {
               name: 'Sub-project Name',
               description: 'Description...',
               images: [...]
           }
       ]
   }
   ```

2. **Create project page** (if needed):
   - Create HTML file in appropriate directory
   - Follow structure of existing project pages
   - Update `vercel.json` routing if needed

3. **Update URL mapping in `scripts.js`**:
   ```javascript
   const urlMap = {
       'project5': '/new-project/',
       // ...
   };
   ```

4. **Add images** to appropriate image directory

### Editing Copy Versions

Edit `copy-config.js` to add/modify copy versions:
```javascript
newVersion: {
    name: 'Version Name',
    description: 'Description',
    about: {
        paragraph1: "Text...",
        paragraph2: "Text...",
        paragraph3: "Text..."
    }
}
```

### Updating About Section

1. **Static HTML**: Edit `about.html` directly
2. **Dynamic Copy**: Update `copy-config.js` for version-specific text
3. **Data Attributes**: Ensure paragraphs have `data-copy="about-p1"` etc. for dynamic updates

### Adding Images

1. **Convert to WebP**: Use provided PowerShell script or online converter
2. **Place in appropriate directory**: `shoeimages/`, `accessoryimages/`, etc.
3. **Update references**: In `projects-config.js` or HTML files

---

## 🌐 Deployment

### Vercel Deployment

1. **Connect GitHub repository** to Vercel
2. **Automatic deployment**: Pushes to `main` branch auto-deploy
3. **Custom domain**: Configured at `www.clarencekeith.com`
4. **Routing**: Handled by `vercel.json`

### Manual Deployment

```bash
# Build (if needed - this is static, so just commit)
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel CLI (if using)
vercel --prod
```

### Environment Variables
- None required (Formspree handles contact form)

---

## 📅 Recent Changes

### December 2024

#### Added Fashion Scholarship Fund Case Competition
- ✅ Added 4th project circle on home page
- ✅ Created `/fashion-scholarship-fund/` page
- ✅ Updated circle positioning logic for 4 circles around center
- ✅ Updated connecting lines to connect all 4 project circles
- **Files Modified**: `projects-config.js`, `scripts.js`, `vercel.json`
- **Files Created**: `fashion-scholarship-fund/index.html`

#### Orbital Animation System
- ✅ Added slow orbital rotation for project circles around About Me
- ✅ Animation slows/stops as mouse approaches circles (proximity detection)
- ✅ Desktop only - disabled on mobile for performance
- **Files Modified**: `scripts.js`

#### Card Stack Document Viewer
- ✅ Converted 22-page PDF to WebP images (5.3MB vs 45MB)
- ✅ Interactive card stack viewer with stacked card visual effects
- ✅ Scroll wheel, drag, button, and keyboard navigation
- ✅ Immediate response on scroll (debounced cooldown)
- **Files Created**: `fashion-scholarship-fund/slides/slide-*.webp` (22 images)
- **Files Modified**: `fashion-scholarship-fund/index.html`



#### Copy Switcher System
- ✅ Created `/change` page for switching portfolio copy
- ✅ Added copy versions: Default, Mattel, Nike/Jordan
- ✅ Dynamic copy updates across all pages
- ✅ localStorage persistence
- **Files Created**: `copy-config.js`, `copy-switcher.js`, `change.html`
- **Files Modified**: `about.html`, `index.html`, `scripts.js`, `vercel.json`

#### Multi-Page Architecture
- ✅ Converted from SPA to multi-page structure
- ✅ Separate HTML pages for each project category
- ✅ Extracted CSS to `styles.css`
- ✅ Extracted JavaScript to `scripts.js` and `projects-config.js`
- ✅ Vercel routing configuration

---

## 🤖 For Developers/AI

### Key Files to Understand

1. **`projects-config.js`**: 
   - **Purpose**: Central data store for all projects
   - **Structure**: Array of project objects with nested sub-projects
   - **Usage**: Referenced by `scripts.js` for circle generation and content display
   - **Important**: The "about" project is always last in the array

2. **`scripts.js`**:
   - **Purpose**: Main JavaScript logic
   - **Key Functions**:
     - `setupCircles()`: Generates home page circles
     - `generateCirclePositions(count)`: Calculates circle positions
     - `createConnectingLines()`: Draws lines between circles
     - `displayProjectInSplitLayout()`: Shows project content
   - **Circle Logic**: Handles 4 project circles + 1 about circle (5 total)

3. **`copy-config.js`**:
   - **Purpose**: Stores different copy versions
   - **Functions**: `getCurrentCopyVersion()`, `setCopyVersion()`, `getCopy()`
   - **Storage**: Uses localStorage key `'copyVersion'`

4. **`copy-switcher.js`**:
   - **Purpose**: Updates copy dynamically across pages
   - **Mechanism**: Uses `data-copy` attributes and MutationObserver
   - **Auto-updates**: Runs on page load and watches for dynamic content

5. **`vercel.json`**:
   - **Purpose**: URL routing configuration
   - **Routes**: Maps clean URLs to HTML files
   - **Example**: `/footwear/` → `/footwear/index.html`

### Circle Positioning Logic

The `generateCirclePositions()` function handles different circle counts:
- **1 circle**: Center
- **2 circles**: Horizontal
- **3 circles**: Triangle
- **4 circles**: Triangle with center (old layout)
- **5 circles**: 4 project circles around center (current layout)
- **6+ circles**: Circular arrangement

### Adding a New Circle

1. Add project to `projects-config.js` (before "about" entry)
2. Update `generateCirclePositions()` if count changes
3. Update URL mapping in `scripts.js`
4. Create corresponding page/directory
5. Update `vercel.json` routing

### Copy System Architecture

```
User selects copy version on /change
    ↓
localStorage.setItem('copyVersion', 'mattel')
    ↓
copy-switcher.js detects change
    ↓
Updates all elements with data-copy attributes
    ↓
Pages reload or update dynamically
```

### Image Handling

- **Format**: WebP preferred for optimization
- **Naming**: Descriptive names with numbers for sequences
- **Paths**: Relative paths from root (e.g., `shoeimages/okshoes.webp`)
- **Video**: `.mov` files supported in galleries

### Contact Form

- **Service**: Formspree
- **Endpoint**: `https://formspree.io/f/mkgqyjaa`
- **Recipients**: 
  - Primary: `cekeith@usc.edu`
  - CC: `jordankeith999@gmail.com`
- **Fields**: Name, Email/Phone, Message

### Custom Cursor

- **Implementation**: Custom CSS + JavaScript
- **Element**: `#custom-cursor`
- **Behavior**: Follows mouse, changes on hover

### Marquee Text

- **Location**: Bottom of all pages
- **Content**: Philosophical thoughts (4 unique items, duplicated for loop)
- **Animation**: CSS animation for continuous scroll
- **Update**: Edit HTML directly in each page

### Orbital Animation System

- **Location**: `scripts.js` - `startOrbitalAnimation()` function
- **Behavior**: Project circles slowly orbit around central About Me circle
- **Speed Control**: `orbitSpeed = 0.0003` radians per frame
- **Mouse Proximity**: Animation slows/stops as mouse approaches
  - `maxSlowdownDistance = 300` - Distance where slowdown begins
  - `minSlowdownDistance = 50` - Distance where animation stops completely
- **Radius**: `containerSize * 0.22 * 1.1` - Controls distance from center
- **Desktop Only**: Animation disabled on mobile devices
- **To Adjust Speed**: Modify `orbitSpeed` constant (higher = faster)
- **To Adjust Spacing**: Modify `radius` values in `setupCircles()` and `startOrbitalAnimation()`

---

## 🔧 Troubleshooting

### Circles Not Appearing
- Check `projects-config.js` has correct structure
- Verify `circleImage` paths are correct
- Check browser console for errors

### Copy Not Updating
- Verify `copy-config.js` is loaded before `copy-switcher.js`
- Check localStorage: `localStorage.getItem('copyVersion')`
- Ensure elements have `data-copy` attributes

### Images Not Loading
- Verify image paths are relative to HTML file location
- Check file extensions match (case-sensitive)
- Ensure images are in correct directories

### Routing Issues
- Check `vercel.json` configuration
- Verify file paths match routing rules
- Check for typos in URLs

---

## 📞 Contact & Support

- **Portfolio**: https://www.clarencekeith.com/
- **Contact Form**: Available on site (header "Reach out!" button)
- **Email**: cekeith@usc.edu

---

## 📄 License

© 2024 Clarence Keith. All rights reserved.

---

## 🔄 Update Log

**Last Updated**: December 20, 2024

**Recent Updates**:
- Added Fashion Scholarship Fund case competition (4th circle)
- Implemented copy switcher system for different audiences
- Updated README with comprehensive documentation

**Next Steps** (for future updates):
- Add more copy versions as needed
- Add new projects to portfolio
- Update images and content
- Enhance features based on feedback

---

*This README should be updated with each significant change to the portfolio. When adding features, modifying structure, or changing functionality, document it here for future reference.*
