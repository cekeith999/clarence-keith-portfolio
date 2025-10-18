// Vercel serverless function for handling live site editing
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { elementInfo, newText, originalText } = req.body;

        console.log('Saving edit from live site:', { elementInfo, newText, originalText });

        // Use GitHub API to update the file
        const result = await updateFileViaGitHub(elementInfo, newText, originalText);

        res.status(200).json({
            success: true,
            message: 'Content updated successfully',
            commitHash: result.commitHash,
            commitMessage: result.commitMessage
        });

    } catch (error) {
        console.error('Error saving edit:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            debug: {
                hasToken: !!process.env.GITHUB_TOKEN,
                tokenLength: process.env.GITHUB_TOKEN ? process.env.GITHUB_TOKEN.length : 0,
                errorType: error.constructor.name,
                stack: error.stack
            }
        });
    }
}

async function updateFileViaGitHub(elementInfo, newText, originalText) {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO_OWNER = 'cekeith999';
    const REPO_NAME = 'clarence-keith-portfolio';
    const FILE_PATH = 'index.html';

    if (!GITHUB_TOKEN) {
        throw new Error('GitHub token not configured');
    }

    // Retry logic for SHA mismatches
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
        try {
            // Get current file content
            const getFileResponse = await fetch(
                `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
                {
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }
            );

            if (!getFileResponse.ok) {
                throw new Error(`Failed to get file: ${getFileResponse.statusText}`);
            }

            const fileData = await getFileResponse.json();
            const currentContent = Buffer.from(fileData.content, 'base64').toString('utf8');

            // Update the content
            const updatedContent = updateContentInHTML(currentContent, elementInfo, newText, originalText);

            // Create commit message
            const commitMessage = `Update ${elementInfo.type} content: "${originalText}" → "${newText}"`;

            // Update file via GitHub API
            const updateResponse = await fetch(
                `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
                {
                    method: 'PUT',
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN}`,
                        'Accept': 'application/vnd.github.v3+json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        message: commitMessage,
                        content: Buffer.from(updatedContent).toString('base64'),
                        sha: fileData.sha
                    })
                }
            );

            if (!updateResponse.ok) {
                const errorData = await updateResponse.json();
                
                // Check if it's a SHA mismatch error
                if (errorData.message && errorData.message.includes('does not match')) {
                    attempts++;
                    if (attempts < maxAttempts) {
                        console.log(`SHA mismatch, retrying... (attempt ${attempts}/${maxAttempts})`);
                        // Wait a bit before retrying
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        continue;
                    }
                }
                
                throw new Error(`Failed to update file: ${errorData.message}`);
            }

            const updateResult = await updateResponse.json();

            return {
                commitHash: updateResult.commit.sha,
                commitMessage: commitMessage
            };

        } catch (error) {
            if (attempts >= maxAttempts - 1) {
                throw error;
            }
            attempts++;
            console.log(`Error on attempt ${attempts}, retrying...`);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

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
