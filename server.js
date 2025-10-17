const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// API endpoint to update content
app.post('/api/update-content', async (req, res) => {
    try {
        const { elementInfo, newText, originalText } = req.body;
        
        console.log('Updating content:', { elementInfo, newText, originalText });
        
        // Read the current index.html file
        const indexPath = path.join(__dirname, 'index.html');
        let content = await fs.readFile(indexPath, 'utf8');
        
        // Update the content based on element info
        const updatedContent = updateContentInHTML(content, elementInfo, newText, originalText);
        
        // Write the updated content back to the file
        await fs.writeFile(indexPath, updatedContent, 'utf8');
        
        res.json({ success: true, message: 'Content updated successfully' });
    } catch (error) {
        console.error('Error updating content:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// API endpoint to commit changes to git
app.post('/api/commit-changes', async (req, res) => {
    try {
        const { elementInfo, newText, originalText } = req.body;
        
        console.log('Committing changes to git...');
        
        // Add all changes
        await execAsync('git add .');
        
        // Commit with a descriptive message
        const commitMessage = `Update ${elementInfo.type} content: "${originalText}" → "${newText}"`;
        await execAsync(`git commit -m "${commitMessage}"`);
        
        // Push to remote
        await execAsync('git push origin main');
        
        console.log('Changes committed and pushed successfully');
        res.json({ success: true, message: 'Changes committed to git successfully' });
    } catch (error) {
        console.error('Error committing to git:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

function updateContentInHTML(content, elementInfo, newText, originalText) {
    // This is a simplified approach - in a real implementation, you'd want more sophisticated parsing
    // For now, we'll do a simple text replacement
    
    // Escape special regex characters in the original text
    const escapedOriginal = originalText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Create a regex to find the text within the appropriate context
    let regex;
    
    if (elementInfo.type === 'project') {
        // Look for the text within the specific project section
        const projectId = elementInfo.projectId;
        const projectSectionRegex = new RegExp(
            `(id="${projectId}"[\\s\\S]*?)${escapedOriginal}([\\s\\S]*?)(?=id="|$)`,
            'g'
        );
        
        content = content.replace(projectSectionRegex, (match, before, after) => {
            return before + newText + after;
        });
    } else if (elementInfo.type === 'about') {
        // Look for the text within the about section
        const aboutSectionRegex = new RegExp(
            `(id="about"[\\s\\S]*?)${escapedOriginal}([\\s\\S]*?)(?=id="|$)`,
            'g'
        );
        
        content = content.replace(aboutSectionRegex, (match, before, after) => {
            return before + newText + after;
        });
    } else {
        // General replacement - be more careful here
        const generalRegex = new RegExp(`>${escapedOriginal}<`, 'g');
        content = content.replace(generalRegex, `>${newText}<`);
    }
    
    return content;
}

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view your portfolio`);
    console.log('Press Ctrl+Alt and double-click any text to edit it!');
});

module.exports = app;
