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

// API endpoint to save content and commit to git automatically
app.post('/api/save-and-commit', async (req, res) => {
    try {
        const { elementInfo, newText, originalText } = req.body;
        
        console.log('Saving and committing content:', { elementInfo, newText, originalText });
        
        // Read the current index.html file
        const indexPath = path.join(__dirname, 'index.html');
        let content = await fs.readFile(indexPath, 'utf8');
        
        // Update the content based on element info
        const updatedContent = updateContentInHTML(content, elementInfo, newText, originalText);
        
        // Write the updated content back to the file
        await fs.writeFile(indexPath, updatedContent, 'utf8');
        console.log('✅ File updated successfully');
        
        // Add all changes to git
        await execAsync('git add .');
        console.log('✅ Changes added to git');
        
        // Create a descriptive commit message
        const commitMessage = `Update ${elementInfo.type} content: "${originalText}" → "${newText}"`;
        const commitResult = await execAsync(`git commit -m "${commitMessage}"`);
        console.log('✅ Changes committed to git');
        
        // Push to remote repository
        const pushResult = await execAsync('git push origin main');
        console.log('✅ Changes pushed to GitHub');
        
        // Extract commit hash from commit result
        const commitHash = commitResult.stdout.match(/\[([a-f0-9]+)\]/)?.[1] || 'unknown';
        
        res.json({ 
            success: true, 
            message: 'Content saved and committed successfully',
            commitHash: commitHash,
            commitMessage: commitMessage
        });
        
    } catch (error) {
        console.error('Error saving and committing content:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message,
            details: error.stderr || error.stdout
        });
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
    // Escape special regex characters in the original text
    const escapedOriginal = originalText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // More sophisticated replacement based on element type and context
    if (elementInfo.type === 'project') {
        // For project content, look within the projectsConfig array
        const projectId = elementInfo.projectId;
        
        // Try to find the text within the specific project configuration
        const projectConfigRegex = new RegExp(
            `(id:\\s*['"]${projectId}['"][\\s\\S]*?)${escapedOriginal}([\\s\\S]*?)(?=},|$)`,
            'g'
        );
        
        content = content.replace(projectConfigRegex, (match, before, after) => {
            return before + newText + after;
        });
        
        // Also try to replace in the dynamically generated content
        const dynamicContentRegex = new RegExp(
            `(data-main-image[\\s\\S]*?)${escapedOriginal}([\\s\\S]*?)(?=<|$)`,
            'g'
        );
        
        content = content.replace(dynamicContentRegex, (match, before, after) => {
            return before + newText + after;
        });
        
    } else if (elementInfo.type === 'about') {
        // For about content, look in the about section or projectsConfig
        const aboutRegex = new RegExp(
            `(id:\\s*['"]about['"][\\s\\S]*?)${escapedOriginal}([\\s\\S]*?)(?=},|$)`,
            'g'
        );
        
        content = content.replace(aboutRegex, (match, before, after) => {
            return before + newText + after;
        });
        
    } else {
        // General replacement - look for text within HTML tags
        const generalRegex = new RegExp(`>${escapedOriginal}<`, 'g');
        content = content.replace(generalRegex, `>${newText}<`);
        
        // Also try to replace in JavaScript strings
        const jsStringRegex = new RegExp(`(['"])${escapedOriginal}\\1`, 'g');
        content = content.replace(jsStringRegex, `$1${newText}$1`);
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
