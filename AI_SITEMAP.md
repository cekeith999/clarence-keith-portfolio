# Clarence Keith Portfolio - AI Navigation Guide

## Site Overview
This is a Single Page Application (SPA) portfolio website for Clarence Keith, a footwear designer and 3D artist. All content is dynamically loaded within one HTML page.

## Base URL
- **Main Site**: https://www.clarencekeith.com/

## Navigation Structure

### 1. Home Page (`#home`)
- **URL**: https://www.clarencekeith.com/#home
- **Description**: Landing page with 4 interactive circles
- **Content**: 
  - Central "About Me" circle (profile image)
  - Three project category circles: "Footwear", "Accessories", "Masks"
  - Connecting lines between circles
  - Custom cursor and animations
- **Navigation**: Click any circle to enter that section

### 2. Footwear Section (`#footwear`)
- **URL**: https://www.clarencekeith.com/#footwear
- **Description**: Showcases footwear design projects
- **Content**:
  - Multiple shoe collections (Sidian Shoes, Heel Boot Collection, etc.)
  - Each collection has its own scrollable section
  - Image galleries with zoom functionality
  - Project details: descriptions, roles, skills
- **Navigation**: Scroll through collections, click thumbnails to view images

### 3. Accessories Section (`#accessories`)
- **URL**: https://www.clarencekeith.com/#accessories
- **Description**: Displays accessory design work
- **Content**:
  - Sunglasses and other accessory designs
  - Image galleries with zoom functionality
  - Project details and descriptions
- **Navigation**: Similar to footwear section

### 4. Masks Section (`#masks`)
- **URL**: https://www.clarencekeith.com/#masks
- **Description**: Features mask design collections
- **Content**:
  - 4 different mask collections
  - Each with individual product pages
  - Image galleries and project details
- **Navigation**: Scroll through mask collections

### 5. About Me Section (`#about`)
- **URL**: https://www.clarencekeith.com/#about
- **Description**: Personal information and resume
- **Content**:
  - Personal description and background
  - Skills & expertise list
  - Resume download button
  - "Thoughts" button for philosophical content
- **Navigation**: Click "View My Resume" for PDF, "Thoughts" for extended content

## Interactive Elements

### Header Navigation
- **"Reach out!" button**: Opens contact form popup
- **"Clarence Keith" title**: Returns to home page
- **Instagram icon**: Links to external Instagram profile

### Contact Form
- **Trigger**: "Reach out!" button in header
- **Fields**: Name, Email/Phone, Message
- **Action**: Sends to Formspree endpoint
- **Recipients**: cekeith@usc.edu and jordankeith999@gmail.com

### Image Features
- **Zoom functionality**: Click zoom icons on images for full-screen view
- **Scrollable galleries**: Hover to scroll through image collections
- **Video support**: Some projects include .mov video files

## Technical Details

### Single Page Application (SPA)
- All content loads dynamically without page refreshes
- JavaScript manages content switching and animations
- CSS transitions provide smooth user experience

### Color Scheme
- **Background**: Off-white (#F2F0EF)
- **Headers/Titles**: Red (#A30000)
- **Text**: Black
- **Header/Marquee**: Red (#A30000)

### Responsive Design
- Mobile-friendly layout
- Circles arrange horizontally on small screens
- Touch-friendly interactions

## AI Navigation Tips

1. **Content Access**: All content is accessible through the main navigation circles
2. **No Traditional Pages**: Don't look for separate HTML files - everything is in index.html
3. **Dynamic Loading**: Content appears/disappears based on user interactions
4. **State Management**: The site remembers which section is active
5. **External Links**: Only Instagram and resume PDF are external

## Key Features for AI Understanding

- **Portfolio Focus**: Showcases footwear, accessories, and mask designs
- **Interactive Elements**: Zoom, scroll, hover effects throughout
- **Contact Integration**: Built-in contact form with email integration
- **Professional Presentation**: Clean, modern design with smooth animations
- **Content Rich**: Multiple projects with detailed descriptions and media

## File Structure
```
/
├── index.html (main file - contains everything)
├── sitemap.xml (SEO sitemap)
├── AI_SITEMAP.md (this file)
├── shoeimages/ (footwear project images)
├── accessoryimages/ (accessory project images)
├── maskimages/ (mask project images)
├── meimages/ (profile and about images)
└── instagram icon.png (custom Instagram icon)
```
