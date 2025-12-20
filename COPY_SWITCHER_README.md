# Copy Switcher System

This system allows you to easily switch between different versions of your portfolio copy to tailor it for different audiences (corporate clients, creative agencies, etc.).

## How It Works

1. **`copy-config.js`** - Stores all copy versions (default, corporate, creative, etc.)
2. **`copy-switcher.js`** - Automatically updates copy across all pages based on selected version
3. **`change.html`** - Toggle page at `/change` where you can switch between versions

## Usage

1. Visit `https://www.clarencekeith.com/change` (or `/change` locally)
2. Click on a copy version card to select it
3. The selection is saved in localStorage and persists across page visits
4. Navigate to any portfolio page to see the updated copy

## Adding New Copy Versions

Edit `copy-config.js` and add a new object to the `copyVersions` object:

```javascript
newVersion: {
    name: 'Version Name',
    description: 'Description of this version',
    about: {
        paragraph1: "First paragraph text...",
        paragraph2: "Second paragraph text...",
        paragraph3: "Third paragraph text..."
    },
    projects: {
        // Optional: Add project-specific copy
        project1: {
            goal: "Custom goal text...",
            tagline: "Custom tagline..."
        }
    }
}
```

## Current Copy Versions

- **Default** - Standard portfolio copy
- **Corporate** - Tailored for corporate clients and business opportunities
- **Creative** - Tailored for creative agencies and artistic collaborations

## Files Modified

- `copy-config.js` - Copy storage (NEW)
- `copy-switcher.js` - Copy updater (NEW)
- `change.html` - Toggle interface (NEW)
- `about.html` - Added data attributes and copy-switcher script
- `index.html` - Added copy-switcher script
- `scripts.js` - Added data attributes to dynamically created elements
- `vercel.json` - Added routing for `/change` page

## Technical Details

- Uses `localStorage` to persist selection
- Uses `data-copy` attributes to identify elements that need updating
- Uses `MutationObserver` to watch for dynamically created content
- Automatically updates on page load
- Reloads page when copy version changes (via storage event)

