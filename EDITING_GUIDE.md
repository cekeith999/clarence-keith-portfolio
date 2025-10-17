# Inline Text Editing Guide

## How to Use the Editing Feature

### Activation
1. **Hold down** `Ctrl` + `Alt` keys
2. **Double-click** on any text element (headings, paragraphs, etc.)
3. The text will become editable with a blue border

### Editing
- **Type** your new text
- **Press Enter** to save changes
- **Press Escape** to cancel and revert to original text
- **Click outside** the input field to save

### Visual Feedback
- **Blue border**: Text is being edited
- **"Saving..."**: Changes are being processed
- **Green checkmark**: Changes saved successfully
- **Red "Error saving"**: Something went wrong

### What Gets Saved
- Changes are automatically saved to the `index.html` file
- Changes are automatically committed to Git
- Changes are automatically pushed to GitHub
- Your live site will reflect the changes immediately

### Supported Elements
You can edit:
- Headings (H1, H2, H3, H4, H5, H6)
- Paragraphs
- Spans and divs with text content
- Project titles and descriptions
- About page content

### Technical Details
- The editing system works by detecting `Ctrl+Alt+DoubleClick`
- Changes are processed through a Node.js backend server
- Git operations are automated (add, commit, push)
- The system maintains the original styling and formatting

### Troubleshooting
- Make sure you're holding `Ctrl+Alt` when double-clicking
- Only text elements can be edited (not images or buttons)
- If editing doesn't work, check the browser console for errors
- Ensure the server is running on port 3001

### Server Setup
To run the editing server:
```bash
npm install
npm start
```

Then visit `http://localhost:3001` to use the editing features.
