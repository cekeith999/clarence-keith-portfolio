// Test endpoint to check if the API is working
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        // Check if GitHub token is configured
        const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
        
        if (!GITHUB_TOKEN) {
            return res.status(500).json({
                success: false,
                error: 'GitHub token not found in environment variables',
                debug: {
                    hasToken: false,
                    envKeys: Object.keys(process.env).filter(key => key.includes('GITHUB'))
                }
            });
        }

        // Test GitHub API connection
        const testResponse = await fetch(
            'https://api.github.com/repos/cekeith999/clarence-keith-portfolio',
            {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            }
        );

        if (!testResponse.ok) {
            const errorData = await testResponse.json();
            return res.status(500).json({
                success: false,
                error: 'GitHub API connection failed',
                debug: {
                    status: testResponse.status,
                    statusText: testResponse.statusText,
                    githubError: errorData
                }
            });
        }

        const repoData = await testResponse.json();

        res.status(200).json({
            success: true,
            message: 'Connection test successful',
            debug: {
                hasToken: true,
                tokenLength: GITHUB_TOKEN.length,
                repoName: repoData.name,
                repoOwner: repoData.owner.login,
                repoUrl: repoData.html_url
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            debug: {
                hasToken: !!process.env.GITHUB_TOKEN,
                errorType: error.constructor.name
            }
        });
    }
}
