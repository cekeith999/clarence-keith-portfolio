
document.addEventListener('DOMContentLoaded', () => {
    // Check for red theme URL path
    if (window.location.pathname.includes('/red')) {
        document.body.classList.add('red-theme');
    }

    // Only initialize circles if we're on the home page
    const container = document.getElementById('circle-container');
    const mainContainer = document.getElementById('main-container');

    // Check if we're on home page (has circle-container)
    const isHomePage = !!container;

    // PROJECTS CONFIGURATION - Easy to add/remove projects here
    const projectsConfig = [
        {
            id: 'project1',
            name: 'Footwear',
            tagline: 'Experimental Shoe Design Collection',
            date: 'January to May (5 months)',
            goal: 'A collection of experimental footwear designs exploring innovative forms, materials, and manufacturing techniques. These projects push the boundaries of traditional shoe design through 3D modeling, additive manufacturing, and sculptural approaches to wearable objects.',
            role: [
                'Lead Designer',
                '3D Modeler',
                'Material Research',
                'Prototype Development',
                'Communication',
                'Collaboration',
                'Creative Direction'
            ],
            skills: [
                '3D Modeling',
                'Material Research',
                'Prototype Development',
                '3D Printing',
                'Communication',
                'Collaboration',
                'Creative Direction'
            ],
            lessons: [
                'Material selection critical for structural integrity',
                'Iterative testing improves final design',
                'User feedback drives meaningful improvements'
            ],
            circleImage: 'shoeimages/okshoes.webp',
            mainImage: 'shoeimages/okshoes.webp',
            thumbnails: [
                { src: 'shoeimages/okshoes.webp', alt: 'Main View' },
                { src: 'shoeimages/okshoes (7).webp', alt: 'Side View' },
                { src: 'shoeimages/okshoes (6).webp', alt: 'Detail View' },
                { src: 'shoeimages/okshoes (1).mov', alt: 'Video' },
                { src: 'shoeimages/okshoes (3).webp', alt: 'Alternative Angle' }
            ],
            projects: [
                {
                    name: 'OK Shoes',
                    description: 'A five-month collaborative project under the team name Sidian, composed of six artists exploring wearable sculpture. I led the modeling and printing process without prior experience in footwear fabrication, learning material tolerances, print ergonomics, and fit testing through trial and iteration. The collection of six experimental shoes concluded with a public showcase presented to over one hundred attendees.',
                    images: [
                        { src: 'shoeimages/okshoes.webp', alt: 'Main View' },
                        { src: 'shoeimages/okshoes (7).webp', alt: 'Side View' },
                        { src: 'shoeimages/okshoes (6).webp', alt: 'Detail View' },
                        { src: 'shoeimages/okshoes (1).mov', alt: 'Video' },
                        { src: 'shoeimages/okshoes (3).webp', alt: 'Alternative Angle' }
                    ]
                },
                {
                    name: 'Heel Boot Collection',
                    description: 'An experimental pair of shoes designed to blur the line between function and illusion. Externally a boot, internally a heel, the structure forces the wearer into an unexpected gait and exposes the tension between comfort and appearance. Built as a personal exploration in form manipulation, digital sculpting, and ergonomics.',
                    images: [
                        { src: 'shoeimages/heel boot (8).webp', alt: 'Main Design' },
                        { src: 'shoeimages/heel boot (1).webp', alt: 'Alternative View' },
                        { src: 'shoeimages/heel boot (2).webp', alt: 'Detail Shot' },
                        { src: 'shoeimages/heel boot (3).webp', alt: 'Side Profile' },
                        { src: 'shoeimages/heel boot (4).webp', alt: 'Construction Detail' },
                        { src: 'shoeimages/heel boot sketches (1).webp', alt: 'Design Sketch 1' },
                        { src: 'shoeimages/heel boot sketches (2).webp', alt: 'Design Sketch 2' },
                        { src: 'shoeimages/heel boot sketches (3).webp', alt: 'Design Sketch 3' }
                    ]
                },
                {
                    name: 'MyShoeBoot Series',
                    description: 'My individual contribution to the OK Shoes showcase. A fully modeled and printed footwear piece that translated sculptural intent into wearable form. The process focused on balancing visual mass with structural comfort through multiple iterations that refined each version for stability, proportion, and material balance.',
                    images: [
                        { src: 'shoeimages/MyShoeBoot Side View.webp', alt: 'Side View' },
                        { src: 'shoeimages/MyShoeBoot Front  View.webp', alt: 'Front View' },
                        { src: 'shoeimages/MyShoeBoot Quarter View.webp', alt: 'Quarter View' },
                        { src: 'shoeimages/MyShoeBoot Side View With My Last.webp', alt: 'With Last' },
                        { src: 'shoeimages/MyShoeBoot Top View With.webp', alt: 'Top View' }
                    ]
                },
                {
                    name: 'TunsShoe Collection',
                    description: 'Another piece developed within the OK Shoes project. Built from the same generative and sculptural principles as MyShoeBoot but adapted for minimalist lines and subtler geometry. The process emphasized rapid iteration, structural consistency, and the integration of aesthetics with anatomical precision.',
                    images: [
                        { src: 'shoeimages/TunsShoe Side View.webp', alt: 'Side View' },
                        { src: 'shoeimages/TunsShoe Front View.webp', alt: 'Front View' },
                        { src: 'shoeimages/TunsShoe Quarter View.webp', alt: 'Quarter View' },
                        { src: 'shoeimages/TunsShoe Side View With Last.webp', alt: 'With Last' },
                        { src: 'shoeimages/TunsShoe Top View.webp', alt: 'Top View' }
                    ]
                }
            ]
        },
        {
            id: 'project2',
            name: 'Accessories',
            tagline: 'Experimental Wearable Objects',
            date: 'Ongoing',
            goal: 'A collection of experimental accessories exploring the intersection of form, function, and personal expression through wearable design objects.',
            role: [
                'Designer',
                '3D Modeler',
                'Visual Design',
                'Material Research',
                'Jewelry Design'
            ],
            skills: [
                '3D Modeling',
                'Rendering',
                'Visual Design',
                'Material Research',
                'Jewelry Design'
            ],
            lessons: [
                'Wearable objects require intimate understanding of human form',
                'Scale and proportion dramatically affect user experience',
                'Materials communicate beyond their physical properties'
            ],
            circleImage: 'accessoryimages/buldgeglasses (1).webp',
            mainImage: 'accessoryimages/buldgeglasses (1).webp',
            thumbnails: [
                { src: 'accessoryimages/buldgeglasses (1).webp', alt: 'Buldge Glasses' },
                { src: 'accessoryimages/golden eye (1).webp', alt: 'Golden Eye' },
                { src: 'accessoryimages/hands glasses (1).webp', alt: 'Hands Glasses' },
                { src: 'accessoryimages/idchain (1).webp', alt: 'ID Chain' },
                { src: 'accessoryimages/liquidy glasses (1).webp', alt: 'Liquidy Glasses' },
                { src: 'accessoryimages/silvernecklace (1).webp', alt: 'Silver Necklace' }
            ],
            projects: [
                {
                    name: 'Buldge Glasses',
                    description: 'Experimental eyewear that explores organic form and proportion while maintaining wearability. The design uses subtle curvature and surface distortion to create visual movement across the face, emphasizing the tension between structure and fluidity.',
                    images: [
                        { src: 'accessoryimages/buldgeglasses (1).webp', alt: 'Front View' },
                        { src: 'accessoryimages/buldgeglasses (2).webp', alt: 'Side Profile' },
                        { src: 'accessoryimages/buldgeglasses (3).webp', alt: 'Detail Shot' }
                    ]
                },
                {
                    name: 'Golden Eye',
                    description: 'A sculptural object created as both jewelry and visual statement. The golden eye form studies perception and self-awareness through reflective geometry and minimal ornamentation. Designed to serve as both adornment and symbol.',
                    images: [
                        { src: 'accessoryimages/golden eye (1).webp', alt: 'Main View' },
                        { src: 'accessoryimages/golden eye (2).webp', alt: 'Detail' },
                        { src: 'accessoryimages/golden eye (3).webp', alt: 'Alternative Angle' },
                        { src: 'accessoryimages/golden eye (4).webp', alt: 'Close-up' }
                    ]
                },
                {
                    name: 'Hands Glasses',
                    description: 'Conceptual eyewear that integrates hand-like structures to frame the face, exploring the relationship between touch and sight. This piece investigates intimacy through design, blending human anatomy with wearable abstraction.',
                    images: [
                        { src: 'accessoryimages/hands glasses (1).webp', alt: 'Front View' },
                        { src: 'accessoryimages/hands glasses (2).webp', alt: 'Side View' },
                        { src: 'accessoryimages/hands glasses (3).webp', alt: 'Detail' },
                        { src: 'accessoryimages/hands glasses (4).webp', alt: 'Alternative Angle' }
                    ]
                },
                {
                    name: 'ID Chain',
                    description: 'A series of chain concepts exploring texture, rhythm, and identity through form variation. Each design communicates a distinct character through scale, weight, and repetition while remaining cohesive as a visual family.',
                    images: [
                        { src: 'accessoryimages/idchain (1).webp', alt: 'Chain 1' },
                        { src: 'accessoryimages/idchain (2).webp', alt: 'Chain 2' },
                        { src: 'accessoryimages/idchain (3).webp', alt: 'Chain 3' },
                        { src: 'accessoryimages/idchain (4).webp', alt: 'Chain 4' },
                        { src: 'accessoryimages/idchain (5).webp', alt: 'Chain 5' },
                        { src: 'accessoryimages/idchain (6).webp', alt: 'Chain 6' },
                        { src: 'accessoryimages/idchain (7).webp', alt: 'Chain 7' },
                        { src: 'accessoryimages/idchain (8).webp', alt: 'Chain 8' },
                        { src: 'accessoryimages/idchain (9).webp', alt: 'Chain 9' }
                    ]
                },
                {
                    name: 'Liquidy Glasses',
                    description: 'Eyewear inspired by the motion of liquid surfaces. The frames capture fluidity frozen in solid form, experimenting with reflection, balance, and transformation in both digital and physical space.',
                    images: [
                        { src: 'accessoryimages/liquidy glasses (1).webp', alt: 'Main View' },
                        { src: 'accessoryimages/liquidy glasses (2).webp', alt: 'Side View' },
                        { src: 'accessoryimages/liquidy glasses (3).webp', alt: 'Detail' }
                    ]
                },
                {
                    name: 'Silver Necklace',
                    description: 'Minimal silver forms designed to merge elegance and presence. Each variation studies proportion, negative space, and subtle surface shifts that catch light differently across movement.',
                    images: [
                        { src: 'accessoryimages/silvernecklace (1).webp', alt: 'Necklace 1' },
                        { src: 'accessoryimages/silvernecklace (2).webp', alt: 'Necklace 2' },
                        { src: 'accessoryimages/silvernecklace (3).webp', alt: 'Necklace 3' },
                        { src: 'accessoryimages/silvernecklace (4).webp', alt: 'Necklace 4' }
                    ]
                }
            ]
        },
        {
            id: 'project3',
            name: 'Masks',
            tagline: 'Identity & Protection Collection',
            date: 'Ongoing',
            goal: 'A collection of experimental mask designs exploring themes of identity, protection, and self-expression through sculptural wearable objects.',
            role: [
                'Lead Designer',
                '3D Modeler',
                'Visual Design',
                'Material Research',
                'Jewelry Design',
                'Collaboration',
                'Communication'
            ],
            skills: [
                '3D Modeling',
                'Rendering',
                'Visual Design',
                'Material Research',
                'Jewelry Design',
                'Collaboration',
                'Communication'
            ],
            circleImage: 'maskimages/red mask (first mask) (1).webp',
            mainImage: 'maskimages/red mask (first mask) (1).webp',
            thumbnails: [
                { src: 'maskimages/red mask (first mask) (1).webp', alt: 'Red Mask 1' },
                { src: 'maskimages/red mask (first mask) (2).webp', alt: 'Red Mask 2' },
                { src: 'maskimages/red mask (first mask) (3).webp', alt: 'Red Mask 3' },
                { src: 'maskimages/red mask (first mask) (4).webp', alt: 'Red Mask 4' },
                { src: 'maskimages/red mask (first mask) (5).webp', alt: 'Red Mask 5' }
            ],
            projects: [
                {
                    id: 'red-mask',
                    name: 'Red Mask Collection',
                    tagline: 'First Experimental Mask',
                    date: 'Fall 2024',
                    goal: 'The first mask in the ongoing exploration of identity and protection. Constructed through bold geometric volumes that frame the face as both sculpture and shield, the design questions how form mediates individuality and anonymity.',
                    role: [
                        'Lead Designer',
                        '3D Modeling',
                        'Material Selection',
                        'Prototype Testing'
                    ],
                    skills: [
                        '3D Printing',
                        'Generative Design',
                        'CAD Modeling',
                        'Material Science',
                        'Rapid Prototyping'
                    ],
                    description: 'The first in the mask series, exploring bold geometric forms and the relationship between protection and identity.',
                    mainImage: 'maskimages/red mask (first mask) (1).webp',
                    thumbnails: [
                        { src: 'maskimages/red mask (first mask) (1).webp', alt: 'Red Mask 1' },
                        { src: 'maskimages/red mask (first mask) (2).webp', alt: 'Red Mask 2' },
                        { src: 'maskimages/red mask (first mask) (3).webp', alt: 'Red Mask 3' },
                        { src: 'maskimages/red mask (first mask) (4).webp', alt: 'Red Mask 4' },
                        { src: 'maskimages/red mask (first mask) (5).webp', alt: 'Red Mask 5' }
                    ]
                },
                {
                    id: 'chrome-mask',
                    name: 'Chrome Mask Collection',
                    tagline: 'Reflective Identity',
                    date: 'Winter 2024',
                    goal: 'A collaboration with a group of artists curating visual concepts for a magazine issue. Each mask was created to reflect their aesthetic while preserving my design language. The chrome finish embodies reflection and distortion as metaphors for mediated identity.',
                    role: [
                        'Lead Designer',
                        '3D Modeling',
                        'Surface Treatment',
                        'Photography Direction'
                    ],
                    skills: [
                        '3D Printing',
                        'Surface Finishing',
                        'CAD Modeling',
                        'Material Science',
                        'Photography',
                        'Lighting Design'
                    ],
                    description: 'A series exploring reflective surfaces and the distortion of identity through metallic finishes and organic shapes.',
                    mainImage: 'maskimages/chrome masks for ok.webp',
                    thumbnails: [
                        { src: 'maskimages/chrome masks for ok.webp', alt: 'Chrome Mask Main' },
                        { src: 'maskimages/chrome masks for ok (1).webp', alt: 'Chrome Mask 1' },
                        { src: 'maskimages/chrome masks for ok (2).webp', alt: 'Chrome Mask 2' },
                        { src: 'maskimages/chrome masks for ok (3).webp', alt: 'Chrome Mask 3' },
                        { src: 'maskimages/chrome masks for ok (4).webp', alt: 'Chrome Mask 4' },
                        { src: 'maskimages/chrome masks for ok (5).webp', alt: 'Chrome Mask 5' },
                        { src: 'maskimages/chrome masks for ok (6).webp', alt: 'Chrome Mask 6' },
                        { src: 'maskimages/chrome masks for ok (7).webp', alt: 'Chrome Mask 7' }
                    ]
                },
                {
                    id: 'hamsa-mask',
                    name: 'Hamsa Mask Collection',
                    tagline: 'Symbolic Protection',
                    date: 'Spring 2025',
                    goal: 'A collection merging cultural symbolism with contemporary sculptural design. The Hamsa motif is integrated into a modern face form, representing protection and balance through the dialogue between spiritual symbolism and industrial technique.',
                    role: [
                        'Lead Designer',
                        'Cultural Research',
                        '3D Modeling',
                        'Symbol Integration'
                    ],
                    skills: [
                        '3D Printing',
                        'Cultural Design',
                        'CAD Modeling',
                        'Symbolic Design',
                        'Material Science',
                        'Prototype Development'
                    ],
                    description: 'A collection that merges the protective symbolism of the Hamsa with modern sculptural forms and contemporary materials.',
                    mainImage: 'maskimages/hamsa (1).webp',
                    thumbnails: [
                        { src: 'maskimages/hamsa (1).webp', alt: 'Hamsa Mask 1' },
                        { src: 'maskimages/hamsa (2).webp', alt: 'Hamsa Mask 2' },
                        { src: 'maskimages/hamsa (3).webp', alt: 'Hamsa Mask 3' },
                        { src: 'maskimages/hamsa (4).webp', alt: 'Hamsa Mask 4' },
                        { src: 'maskimages/hamsa (5).webp', alt: 'Hamsa Mask 5' },
                        { src: 'maskimages/hamsa (6).webp', alt: 'Hamsa Mask 6' }
                    ]
                },
                {
                    id: 'blackeye-mask',
                    name: 'Black Eye Mask Collection',
                    tagline: 'Minimalist Expression',
                    date: 'Summer 2025',
                    goal: 'A study in minimalism and negative space. The Black Eye series strips away ornamentation to reveal how absence defines identity. Each variation highlights proportion and emptiness as central design tools.',
                    role: [
                        'Lead Designer',
                        'Minimalist Design',
                        '3D Modeling',
                        'Form Simplification'
                    ],
                    skills: [
                        '3D Printing',
                        'Minimalist Design',
                        'CAD Modeling',
                        'Form Reduction',
                        'Material Science',
                        'Negative Space Design'
                    ],
                    description: 'A minimalist approach to mask design, focusing on essential forms and the power of negative space.',
                    mainImage: 'maskimages/blackeye (1).webp',
                    thumbnails: [
                        { src: 'maskimages/blackeye (1).webp', alt: 'Black Eye Mask 1' },
                        { src: 'maskimages/blackeye (2).webp', alt: 'Black Eye Mask 2' },
                        { src: 'maskimages/blackeye (3).webp', alt: 'Black Eye Mask 3' },
                        { src: 'maskimages/blackeye (4).webp', alt: 'Black Eye Mask 4' }
                    ]
                }
            ]
        },
        {
            id: 'project4',
            name: 'Fashion Scholarship Fund',
            tagline: 'Case Competition Winner',
            date: '2024',
            goal: 'Winner of the Fashion Scholarship Fund Case Competition, demonstrating strategic thinking, creative problem-solving, and business acumen in the fashion industry. This achievement showcases my ability to combine design innovation with market understanding and strategic planning.',
            role: [
                'Case Competition Participant',
                'Strategic Analyst',
                'Creative Problem Solver',
                'Business Strategist'
            ],
            skills: [
                'Strategic Analysis',
                'Market Research',
                'Business Strategy',
                'Creative Problem Solving',
                'Presentation',
                'Industry Analysis'
            ],
            lessons: [
                'Strategic thinking enhances creative solutions',
                'Understanding market dynamics informs design decisions',
                'Effective communication bridges creativity and business'
            ],
            circleImage: 'meimages/Mehead.webp',
            mainImage: 'meimages/Mehead.webp',
            thumbnails: [
                { src: 'meimages/Mehead.webp', alt: 'Fashion Scholarship Fund' }
            ],
            projects: []
        },
        {
            id: 'about',
            name: '',
            tagline: 'Designer & 3D Artist',
            date: 'Ongoing',
            goal: 'I am a footwear designer and 3D artist whose work investigates the relationship between form, identity, and material. My practice merges traditional craftsmanship with experimental technology, using design as a way to translate human expression into physical structure.',
            role: [
                'Designer',
                '3D Artist',
                'Material Innovator',
                'Concept Developer'
            ],
            skills: [
                '3D Modeling and Rendering',
                'Generative Design',
                'Additive Manufacturing',
                'Footwear Design',
                'Material Innovation',
                'Concept Development'
            ],
            lessons: [
                'Design bridges art and functionality',
                'Technology amplifies creative expression',
                'Iteration leads to innovation'
            ],
            circleImage: 'meimages/Mehead.webp',
            mainImage: 'meimages/Mehead.webp',
            thumbnails: [
                { src: 'meimages/Mehead.webp', alt: 'Profile Photo' }
            ]
        }
    ];

    const circles = [];
    let radius = 0;
    let isSplitLayout = false;

    function showPage(targetId) {
        console.log('showPage called with:', targetId, 'isSplitLayout:', isSplitLayout);

        // Hide all pages
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });

        if (targetId === 'home') {
            // Return to home layout
            if (isSplitLayout) {
                returnToHomeLayout();
            }
            document.getElementById('home').classList.add('active');
        } else if (isProjectPage(targetId)) {
            // Show project in split layout
            console.log('Showing project page:', targetId);
            if (!isSplitLayout) {
                console.log('Creating split layout');
                createSplitLayout();
            }
            displayProjectInSplitLayout(targetId);
        } else {
            // Other pages (about, contact) - full screen
            if (isSplitLayout) {
                returnToHomeLayout();
            }
            document.getElementById(targetId).classList.add('active');
        }

        window.scrollTo(0, 0);
    }

    function isProjectPage(targetId) {
        return projectsConfig.some(project => project.id === targetId);
    }

    function createSplitLayout() {
        isSplitLayout = true;

        // Create split layout structure
        const splitLayout = document.createElement('div');
        splitLayout.className = 'split-layout';
        splitLayout.id = 'split-layout';

        // Create circles sidebar
        const circlesSidebar = document.createElement('div');
        circlesSidebar.className = 'circles-sidebar';
        circlesSidebar.id = 'circles-sidebar';

        // Create project content area
        const projectContent = document.createElement('div');
        projectContent.className = 'project-content';
        projectContent.id = 'project-content';

        // Move circles to sidebar
        const circlesContainer = document.createElement('div');
        circlesContainer.className = 'flex flex-col items-center space-y-4';

        projectsConfig.forEach((project, index) => {
            // Create new circle element for sidebar
            const circleLink = document.createElement('a');
            circleLink.dataset.target = project.id;
            circleLink.classList.add('nav-link');

            const circleEl = document.createElement('div');
            circleEl.classList.add('portfolio-circle');
            circleEl.style.width = '60px';
            circleEl.style.height = '60px';
            circleEl.style.position = 'relative';
            circleEl.style.top = 'auto';
            circleEl.style.left = 'auto';
            circleEl.style.transform = 'none';
            circleEl.style.margin = '0.75rem 0';
            circleEl.style.border = '3px solid #FEFDEE';
            circleEl.style.backgroundImage = `url('${project.circleImage}')`;

            circleLink.appendChild(circleEl);

            // Add click handler
            circleLink.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Circle clicked in sidebar:', project.id);
                showPage(project.id);
            });

            circlesContainer.appendChild(circleLink);
        });

        circlesSidebar.appendChild(circlesContainer);
        splitLayout.appendChild(circlesSidebar);
        splitLayout.appendChild(projectContent);

        // Replace main content
        mainContainer.innerHTML = '';
        mainContainer.appendChild(splitLayout);
    }

    // Function to update active circle state
    function updateActiveCircle(activeProjectId) {
        // Remove active class from all circles
        document.querySelectorAll('.portfolio-circle').forEach(circle => {
            circle.classList.remove('active');
        });

        // Add active class to the current project's circle (for multi-page, this is handled by CSS based on current URL)
        const urlMap = {
            'project1': '/footwear/',
            'project2': '/accessories/',
            'project3': '/masks/',
            'about': '/about.html'
        };
        const activeUrl = urlMap[activeProjectId];
        const activeCircle = activeUrl ? document.querySelector(`a[href="${activeUrl}"] .portfolio-circle`) : null;
        if (activeCircle) {
            activeCircle.classList.add('active');
        }
    }

    function displayProjectInSplitLayout(projectId) {
        const projectContent = document.getElementById('project-content');
        if (!projectContent) {
            console.error('Project content container not found');
            return;
        }

        // Find the project configuration
        const project = projectsConfig.find(p => p.id === projectId);
        if (!project) {
            console.error('Project not found in configuration:', projectId);
            return;
        }

        console.log('Displaying project:', project.name);

        // Update active state for circles
        updateActiveCircle(projectId);

        // Completely clear project content
        projectContent.innerHTML = '';

        // Add back button at the top
        const backButton = document.createElement('button');
        backButton.className = 'mb-4 flex items-center space-x-2 text-[#A30000] hover:text-gray-700 transition-colors duration-300 nav-link';
        backButton.setAttribute('data-target', 'home');
        backButton.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span>Back to Portfolio</span>
    `;
        projectContent.appendChild(backButton);

        // Generate project content dynamically
        let projectSection;
        if (project.id === 'about') {
            projectSection = generateAboutContent();
        } else {
            projectSection = generateProjectContent(project);
        }
        projectContent.appendChild(projectSection);

        // Attach thumbnail click handlers
        attachThumbnailHandlers(projectContent);

        // Attach zoom listeners to new images
        attachZoomListeners();

        // Force a reflow to ensure content is visible
        projectContent.offsetHeight;
    }

    function generateProjectContent(project) {
        const section = document.createElement('section');
        section.className = 'active';
        section.id = project.id;

        const container = document.createElement('div');
        container.className = 'w-full max-w-7xl mx-auto p-4';

        // Check if this project has multiple sub-projects
        if (project.projects && project.projects.length > 0) {
            // Create a scrollable container for multiple projects
            const scrollContainer = document.createElement('div');
            scrollContainer.className = 'space-y-20';

            // Add main project header
            const headerSection = document.createElement('div');
            headerSection.className = 'text-center mb-16';

            const title = document.createElement('h1');
            title.className = 'text-5xl font-bold tracking-tight text-[#A30000] mb-6';
            title.textContent = project.name;

            const tagline = document.createElement('p');
            tagline.className = 'text-2xl text-black mb-8';
            tagline.textContent = project.tagline;

            const goal = document.createElement('p');
            goal.className = 'text-lg text-black max-w-4xl mx-auto leading-relaxed';
            goal.textContent = project.goal;

            headerSection.appendChild(title);
            headerSection.appendChild(tagline);
            headerSection.appendChild(goal);
            scrollContainer.appendChild(headerSection);

            // Create full product pages for each sub-project
            project.projects.forEach((subProject, index) => {
                const projectSection = document.createElement('div');
                projectSection.className = 'border-t-2 border-gray-400 pt-16';

                // Create the same grid layout as individual projects
                const grid = document.createElement('div');
                grid.className = 'grid grid-cols-1 lg:grid-cols-2 gap-12';

                // Image gallery section (left side)
                const imageSection = document.createElement('div');
                imageSection.className = 'flex flex-col-reverse sm:flex-row gap-4 image-section';

                // Get media array (images or thumbnails)
                const mediaArray = subProject.images || subProject.thumbnails;

                // Thumbnails container
                const thumbnailsContainer = document.createElement('div');
                thumbnailsContainer.className = 'flex sm:flex-col gap-3 scrollable-gallery pr-2';

                mediaArray.forEach((image, imgIndex) => {
                    const isVideo = image.src.toLowerCase().includes('.mov') || image.src.toLowerCase().includes('.mp4') || image.src.toLowerCase().includes('.webm');

                    if (isVideo) {
                        const video = document.createElement('video');
                        video.src = image.src;
                        video.alt = image.alt;
                        video.className = `thumbnail w-20 h-20 object-cover rounded-md ${imgIndex === 0 ? 'active' : ''}`;
                        video.controls = false;
                        video.muted = true;
                        video.loop = true;
                        video.preload = 'metadata';
                        thumbnailsContainer.appendChild(video);
                    } else {
                        // Create image container
                        const imageContainer = document.createElement('div');
                        imageContainer.className = 'image-container';

                        const img = document.createElement('img');
                        img.src = image.src;
                        img.alt = image.alt;
                        img.className = `thumbnail w-20 h-20 object-cover rounded-md ${imgIndex === 0 ? 'active' : ''}`;

                        // Create zoom icon
                        const zoomIcon = document.createElement('div');
                        zoomIcon.className = 'zoom-icon';
                        zoomIcon.innerHTML = `
                        <svg viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            <path d="M12 10h-2v3H9v-3H7V9h2V6h1v3h2v1z"/>
                        </svg>
                    `;

                        imageContainer.appendChild(img);
                        imageContainer.appendChild(zoomIcon);
                        thumbnailsContainer.appendChild(imageContainer);
                    }
                });

                // Main image container
                const mainImageContainer = document.createElement('div');
                mainImageContainer.className = 'flex-1';

                const firstMedia = mediaArray[0];
                const isFirstVideo = firstMedia.src.toLowerCase().includes('.mov') || firstMedia.src.toLowerCase().includes('.mp4') || firstMedia.src.toLowerCase().includes('.webm');

                if (isFirstVideo) {
                    // Create main video container with zoom
                    const mainVideoWrapper = document.createElement('div');
                    mainVideoWrapper.className = 'image-container';

                    const mainVideo = document.createElement('video');
                    mainVideo.src = firstMedia.src;
                    mainVideo.alt = subProject.name;
                    mainVideo.setAttribute('data-main-image', subProject.name.toLowerCase().replace(/\s+/g, '-'));
                    mainVideo.className = 'w-full h-auto object-cover rounded-lg shadow-lg';
                    mainVideo.controls = true;
                    mainVideo.muted = false;
                    mainVideo.loop = false;

                    // Create zoom icon for video
                    const mainZoomIcon = document.createElement('div');
                    mainZoomIcon.className = 'zoom-icon';
                    mainZoomIcon.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M12 10h-2v3H9v-3H7V9h2V6h1v3h2v1z"/>
                    </svg>
                `;

                    mainVideoWrapper.appendChild(mainVideo);
                    mainVideoWrapper.appendChild(mainZoomIcon);
                    mainImageContainer.appendChild(mainVideoWrapper);
                } else {
                    // Create main image container with zoom
                    const mainImageWrapper = document.createElement('div');
                    mainImageWrapper.className = 'image-container';

                    const mainImage = document.createElement('img');
                    mainImage.src = firstMedia.src;
                    mainImage.alt = subProject.name;
                    mainImage.setAttribute('data-main-image', subProject.name.toLowerCase().replace(/\s+/g, '-'));
                    mainImage.className = 'w-full h-auto object-cover rounded-lg shadow-lg';

                    // Create zoom icon for main image
                    const mainZoomIcon = document.createElement('div');
                    mainZoomIcon.className = 'zoom-icon';
                    mainZoomIcon.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M12 10h-2v3H9v-3H7V9h2V6h1v3h2v1z"/>
                    </svg>
                `;

                    mainImageWrapper.appendChild(mainImage);
                    mainImageWrapper.appendChild(mainZoomIcon);
                    mainImageContainer.appendChild(mainImageWrapper);
                }

                imageSection.appendChild(thumbnailsContainer);
                imageSection.appendChild(mainImageContainer);

                // Project details section (right side)
                const detailsSection = document.createElement('div');
                detailsSection.className = 'flex flex-col space-y-6 details-section';

                // 1) Header
                const headerSection = document.createElement('div');
                headerSection.className = 'space-y-2';

                const projectTitle = document.createElement('h2');
                projectTitle.className = 'text-4xl font-bold tracking-tight text-[#A30000]';
                projectTitle.textContent = subProject.name;

                const projectTagline = document.createElement('p');
                projectTagline.className = 'text-lg text-black font-medium';
                projectTagline.textContent = subProject.description;

                headerSection.appendChild(projectTitle);
                headerSection.appendChild(projectTagline);

                // 2) Date
                const dateSection = document.createElement('div');
                dateSection.className = 'space-y-1';

                const date = document.createElement('p');
                date.className = 'text-base text-black';
                date.textContent = project.date;

                dateSection.appendChild(date);

                // 3) Description
                const descriptionSection = document.createElement('div');
                descriptionSection.className = 'space-y-2';

                const descriptionLabel = document.createElement('h3');
                descriptionLabel.className = 'text-lg font-bold text-[#A30000]';
                descriptionLabel.textContent = 'Description:';

                const descriptionText = document.createElement('p');
                descriptionText.className = 'text-black leading-relaxed';
                descriptionText.textContent = subProject.description;

                descriptionSection.appendChild(descriptionLabel);
                descriptionSection.appendChild(descriptionText);

                // 4) Lists Section
                const listsSection = document.createElement('div');
                listsSection.className = 'space-y-6';

                // Role
                const roleSection = document.createElement('div');
                roleSection.className = 'space-y-2';

                const roleLabel = document.createElement('h3');
                roleLabel.className = 'text-lg font-bold text-[#A30000]';
                roleLabel.textContent = 'Role';

                const roleList = document.createElement('ul');
                roleList.className = 'space-y-1 text-black';
                project.role.forEach(role => {
                    const li = document.createElement('li');
                    li.textContent = `• ${role}`;
                    roleList.appendChild(li);
                });

                roleSection.appendChild(roleLabel);
                roleSection.appendChild(roleList);

                // Skills
                const skillsSection = document.createElement('div');
                skillsSection.className = 'space-y-2';

                const skillsLabel = document.createElement('h3');
                skillsLabel.className = 'text-lg font-bold text-[#A30000]';
                skillsLabel.textContent = 'Skills';

                const skillsList = document.createElement('ul');
                skillsList.className = 'space-y-1 text-black';
                project.skills.forEach(skill => {
                    const li = document.createElement('li');
                    li.textContent = `• ${skill}`;
                    skillsList.appendChild(li);
                });

                skillsSection.appendChild(skillsLabel);
                skillsSection.appendChild(skillsList);

                // Assemble lists section
                listsSection.appendChild(roleSection);
                listsSection.appendChild(skillsSection);

                // Assemble details section
                detailsSection.appendChild(headerSection);
                detailsSection.appendChild(dateSection);
                detailsSection.appendChild(descriptionSection);
                detailsSection.appendChild(listsSection);

                // Assemble grid
                grid.appendChild(imageSection);
                grid.appendChild(detailsSection);

                projectSection.appendChild(grid);
                scrollContainer.appendChild(projectSection);
            });

            container.appendChild(scrollContainer);
            section.appendChild(container);
            return section;
        }

        // Original single project layout
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 lg:grid-cols-2 gap-8';

        // Image gallery section
        const imageSection = document.createElement('div');
        imageSection.className = 'flex flex-col-reverse sm:flex-row gap-4 image-section';

        // Thumbnails container
        const thumbnailsContainer = document.createElement('div');
        thumbnailsContainer.className = 'flex sm:flex-col gap-3 scrollable-gallery pr-2';

        project.thumbnails.forEach((thumb, index) => {
            // Create image container
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';

            const img = document.createElement('img');
            img.src = thumb.src;
            img.alt = thumb.alt;
            img.className = `thumbnail w-20 h-20 object-cover rounded-md ${index === 0 ? 'active' : ''}`;

            // Create zoom icon
            const zoomIcon = document.createElement('div');
            zoomIcon.className = 'zoom-icon';
            zoomIcon.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M12 10h-2v3H9v-3H7V9h2V6h1v3h2v1z"/>
            </svg>
        `;

            imageContainer.appendChild(img);
            imageContainer.appendChild(zoomIcon);
            thumbnailsContainer.appendChild(imageContainer);
        });

        // Main image container
        const mainImageContainer = document.createElement('div');
        mainImageContainer.className = 'flex-1';

        // Create main image container with zoom
        const mainImageWrapper = document.createElement('div');
        mainImageWrapper.className = 'image-container';

        const mainImage = document.createElement('img');
        mainImage.src = project.mainImage;
        mainImage.alt = project.name;
        mainImage.setAttribute('data-main-image', project.id);
        mainImage.className = 'w-full h-auto object-cover rounded-lg shadow-lg';

        // Create zoom icon for main image
        const mainZoomIcon = document.createElement('div');
        mainZoomIcon.className = 'zoom-icon';
        mainZoomIcon.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M12 10h-2v3H9v-3H7V9h2V6h1v3h2v1z"/>
        </svg>
    `;

        mainImageWrapper.appendChild(mainImage);
        mainImageWrapper.appendChild(mainZoomIcon);
        mainImageContainer.appendChild(mainImageWrapper);

        imageSection.appendChild(thumbnailsContainer);
        imageSection.appendChild(mainImageContainer);

        // Project details section with new structure
        const detailsSection = document.createElement('div');
        detailsSection.className = 'flex flex-col space-y-6 details-section';

        // 1) Header
        const headerSection = document.createElement('div');
        headerSection.className = 'space-y-2';

        const title = document.createElement('h1');
        title.className = 'text-3xl font-bold tracking-tight text-[#A30000]';
        title.textContent = project.name;

        const tagline = document.createElement('p');
        tagline.className = 'text-lg text-black font-medium';
        tagline.textContent = project.tagline;

        headerSection.appendChild(title);
        headerSection.appendChild(tagline);

        // 2) Date
        const dateSection = document.createElement('div');
        dateSection.className = 'space-y-1';

        const date = document.createElement('p');
        date.className = 'text-base text-black';
        date.textContent = project.date;

        dateSection.appendChild(date);

        // 3) Goal
        const goalSection = document.createElement('div');
        goalSection.className = 'space-y-2';

        const goalLabel = document.createElement('h3');
        goalLabel.className = 'text-lg font-bold text-[#A30000]';
        goalLabel.textContent = 'Goal:';

        const goalText = document.createElement('p');
        goalText.className = 'text-black leading-relaxed';
        goalText.textContent = project.goal;

        goalSection.appendChild(goalLabel);
        goalSection.appendChild(goalText);

        // 4) Lists Section
        const listsSection = document.createElement('div');
        listsSection.className = 'space-y-6';

        // Role
        const roleSection = document.createElement('div');
        roleSection.className = 'space-y-2';

        const roleLabel = document.createElement('h3');
        roleLabel.className = 'text-lg font-bold text-[#A30000]';
        roleLabel.textContent = 'Role';

        const roleList = document.createElement('ul');
        roleList.className = 'space-y-1 text-black';
        project.role.forEach(role => {
            const li = document.createElement('li');
            li.textContent = `• ${role}`;
            roleList.appendChild(li);
        });

        roleSection.appendChild(roleLabel);
        roleSection.appendChild(roleList);

        // Skills
        const skillsSection = document.createElement('div');
        skillsSection.className = 'space-y-2';

        const skillsLabel = document.createElement('h3');
        skillsLabel.className = 'text-lg font-bold text-[#A30000]';
        skillsLabel.textContent = 'Skills';

        const skillsList = document.createElement('ul');
        skillsList.className = 'space-y-1 text-black';
        project.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = `• ${skill}`;
            skillsList.appendChild(li);
        });

        skillsSection.appendChild(skillsLabel);
        skillsSection.appendChild(skillsList);

        // Lessons Learned
        const lessonsSection = document.createElement('div');
        lessonsSection.className = 'space-y-2';

        const lessonsLabel = document.createElement('h3');
        lessonsLabel.className = 'text-lg font-bold text-[#A30000]';
        lessonsLabel.textContent = 'Lessons Learned';

        const lessonsList = document.createElement('ul');
        lessonsList.className = 'space-y-1 text-black';
        project.lessons.forEach(lesson => {
            const li = document.createElement('li');
            li.textContent = `• ${lesson}`;
            lessonsList.appendChild(li);
        });

        lessonsSection.appendChild(lessonsLabel);
        lessonsSection.appendChild(lessonsList);

        // Assemble lists section
        listsSection.appendChild(roleSection);
        listsSection.appendChild(skillsSection);
        listsSection.appendChild(lessonsSection);

        // Assemble details section
        detailsSection.appendChild(headerSection);
        detailsSection.appendChild(dateSection);
        detailsSection.appendChild(goalSection);
        detailsSection.appendChild(listsSection);

        grid.appendChild(imageSection);
        grid.appendChild(detailsSection);
        container.appendChild(grid);
        section.appendChild(container);

        return section;
    }

    function generateAboutContent() {
        const section = document.createElement('section');
        section.className = 'active';
        section.id = 'about';

        const container = document.createElement('div');
        container.className = 'w-full max-w-6xl mx-auto p-4';

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 lg:grid-cols-2 gap-6 items-center';

        // Left side - About content
        const aboutContent = document.createElement('div');
        aboutContent.className = 'order-2 lg:order-1';

        const title = document.createElement('h1');
        title.className = 'text-4xl font-bold tracking-tight mb-4 text-[#A30000]';
        title.textContent = '';

        const description1 = document.createElement('p');
        description1.className = 'text-black leading-relaxed mb-4';
        description1.setAttribute('data-copy', 'about-p1');
        description1.textContent = "I'm Clarence Keith, a passionate footwear designer and 3D artist specializing in experimental design and additive manufacturing. My work explores the intersection of traditional craftsmanship and cutting-edge technology.";

        const description2 = document.createElement('p');
        description2.className = 'text-black leading-relaxed mb-4';
        description2.setAttribute('data-copy', 'about-p2');
        description2.textContent = "With a background in industrial design and a fascination for generative design principles, I create footwear that challenges conventional form while maintaining functionality and aesthetic appeal.";

        const description3 = document.createElement('p');
        description3.className = 'text-black leading-relaxed mb-6';
        description3.setAttribute('data-copy', 'about-p3');
        description3.textContent = "Each piece in my portfolio represents a unique exploration of materials, form, and manufacturing processes, pushing the boundaries of what's possible in contemporary footwear design.";

        // Thoughts button
        const thoughtsButton = document.createElement('button');
        thoughtsButton.id = 'thoughts-button';
        thoughtsButton.className = 'mb-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm';
        thoughtsButton.textContent = 'Click if you\'d like to read some of my thoughts recently';

        // Resume button
        const resumeButton = document.createElement('a');
        resumeButton.href = 'https://drive.google.com/file/d/1vJrn9kZ1_pAaGeUCdLIFPutGEXJ3-3Lg/view?usp=sharing';
        resumeButton.target = '_blank';
        resumeButton.rel = 'noopener noreferrer';
        resumeButton.className = 'mb-6 inline-block px-6 py-3 bg-[#F2F0EF] text-black rounded-lg hover:bg-[#E8E6E4] transition-colors duration-300 text-sm font-semibold border-2 border-black';
        resumeButton.textContent = 'View My Resume';

        // Skills section
        const skillsTitle = document.createElement('h3');
        skillsTitle.className = 'text-2xl font-bold mb-4 text-[#A30000]';
        skillsTitle.textContent = 'Skills & Expertise';

        const skillsGrid = document.createElement('div');
        skillsGrid.className = 'grid grid-cols-2 gap-4';

        const skillsLeft = document.createElement('div');
        skillsLeft.className = 'space-y-2';
        const skillsRight = document.createElement('div');
        skillsRight.className = 'space-y-2';

        const skills = [
            '3D Modeling & Rendering',
            'Generative Design',
            'Additive Manufacturing',
            'Footwear Design',
            'Material Innovation',
            'Concept Development'
        ];

        skills.forEach((skill, index) => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'flex items-center space-x-2';

            const dot = document.createElement('div');
            dot.className = 'w-2 h-2 bg-[#F2F0EF] rounded-full';

            const skillText = document.createElement('span');
            skillText.className = 'text-black';
            skillText.textContent = skill;

            skillDiv.appendChild(dot);
            skillDiv.appendChild(skillText);

            if (index < 3) {
                skillsLeft.appendChild(skillDiv);
            } else {
                skillsRight.appendChild(skillDiv);
            }
        });

        skillsGrid.appendChild(skillsLeft);
        skillsGrid.appendChild(skillsRight);

        aboutContent.appendChild(title);
        aboutContent.appendChild(description1);
        aboutContent.appendChild(description2);
        aboutContent.appendChild(description3);
        aboutContent.appendChild(thoughtsButton);
        aboutContent.appendChild(resumeButton);
        aboutContent.appendChild(skillsTitle);
        aboutContent.appendChild(skillsGrid);

        // Right side - Full body profile image
        const profileSection = document.createElement('div');
        profileSection.className = 'order-1 lg:order-2';

        const profileContainer = document.createElement('div');
        profileContainer.className = 'relative';

        const profileImage = document.createElement('div');
        profileImage.className = 'bg-gradient-to-br from-[#F2F0EF] to-[#E8E6E4] rounded-2xl shadow-2xl overflow-hidden';

        const profileImg = document.createElement('img');
        profileImg.src = 'meimages/Full body me.webp';
        profileImg.alt = 'Clarence Keith - Full Body';
        profileImg.className = 'w-full h-auto object-cover';

        profileImage.appendChild(profileImg);
        profileContainer.appendChild(profileImage);
        profileSection.appendChild(profileContainer);

        grid.appendChild(aboutContent);
        grid.appendChild(profileSection);
        container.appendChild(grid);

        // Add carousel section
        const carouselSection = document.createElement('div');
        carouselSection.className = 'mt-12';

        const carouselTitle = document.createElement('h2');
        carouselTitle.className = 'text-3xl font-bold mb-6 text-[#A30000] text-center';
        carouselTitle.textContent = 'Some of my favorite photos right now';

        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F2F0EF] to-[#E8E6E4] p-4';

        const carouselTrack = document.createElement('div');
        carouselTrack.className = 'flex transition-transform duration-500 ease-in-out';
        carouselTrack.id = 'carousel-track';

        // Carousel images array
        const carouselImages = [
            'meimages/image000000.webp',
            'meimages/IMG_0844.webp',
            'meimages/IMG_0947.webp',
            'meimages/IMG_2849.webp',
            'meimages/IMG_3029.webp',
            'meimages/IMG_3850.webp',
            'meimages/IMG_4151.webp'
        ];

        carouselImages.forEach((imageSrc, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';

            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container relative';

            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `Favorite photo ${index + 1}`;

            const zoomIcon = document.createElement('div');
            zoomIcon.className = 'zoom-icon';
            zoomIcon.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M12 10h-2v3H9v-3H7V9h2V6h1v3h2v1z"/>
            </svg>
        `;

            imageContainer.appendChild(img);
            imageContainer.appendChild(zoomIcon);
            carouselItem.appendChild(imageContainer);
            carouselTrack.appendChild(carouselItem);
        });

        carouselContainer.appendChild(carouselTrack);
        carouselSection.appendChild(carouselTitle);
        carouselSection.appendChild(carouselContainer);
        container.appendChild(carouselSection);

        // Initialize carousel auto-spin with a small delay
        setTimeout(() => {
            initializeCarousel();
        }, 100);

        section.appendChild(container);

        return section;
    }

    function attachThumbnailHandlers(container) {
        const thumbnails = container.querySelectorAll('.thumbnail');
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                const clickedThumb = e.target;
                // Find the closest project section (either single project or sub-project)
                const projectSection = clickedThumb.closest('.border-t-2, .page-content, .active');
                const mainMedia = projectSection.querySelector(`[data-main-image]`);

                if (mainMedia) {
                    const isVideo = clickedThumb.tagName === 'VIDEO';
                    const isMainVideo = mainMedia.tagName === 'VIDEO';

                    if (isVideo && isMainVideo) {
                        // Both are videos, just change src
                        mainMedia.src = clickedThumb.src;
                    } else if (isVideo && !isMainVideo) {
                        // Thumbnail is video, main is image - replace with video
                        const newVideo = document.createElement('video');
                        newVideo.src = clickedThumb.src;
                        newVideo.alt = clickedThumb.alt;
                        newVideo.className = mainMedia.className;
                        newVideo.setAttribute('data-main-image', mainMedia.getAttribute('data-main-image'));
                        newVideo.controls = true;
                        newVideo.muted = false;
                        newVideo.loop = false;
                        mainMedia.parentNode.replaceChild(newVideo, mainMedia);
                    } else if (!isVideo && isMainVideo) {
                        // Thumbnail is image, main is video - replace with image
                        const newImg = document.createElement('img');
                        newImg.src = clickedThumb.src;
                        newImg.alt = clickedThumb.alt;
                        newImg.className = mainMedia.className;
                        newImg.setAttribute('data-main-image', mainMedia.getAttribute('data-main-image'));
                        mainMedia.parentNode.replaceChild(newImg, mainMedia);
                    } else {
                        // Both are images, just change src
                        mainMedia.src = clickedThumb.src;
                    }
                }

                // Update active state for thumbnails within the same project section
                projectSection.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                clickedThumb.classList.add('active');
            });
        });
    }

    function initializeCarousel() {
        const carouselTrack = document.getElementById('carousel-track');
        if (!carouselTrack) {
            console.log('Carousel track not found');
            return;
        }

        const items = carouselTrack.children;
        if (items.length === 0) {
            console.log('No carousel items found');
            return;
        }

        console.log('Initializing carousel with', items.length, 'items');

        let currentPosition = 0;
        let isPaused = false;
        let isDragging = false;
        let dragStartX = 0;
        let dragStartPosition = 0;
        const totalItems = items.length;
        const speed = 0.5; // pixels per frame (adjust for speed)

        // Get the width of one item (responsive)
        function getItemWidth() {
            const containerWidth = carouselTrack.parentElement.offsetWidth;
            if (window.innerWidth <= 768) {
                return containerWidth; // 1 item on mobile
            } else if (window.innerWidth <= 1024) {
                return containerWidth / 2; // 2 items on tablet
            } else {
                return containerWidth / 3; // 3 items on desktop
            }
        }

        function animateCarousel() {
            if (!isPaused) {
                currentPosition -= speed;

                // Reset position when we've moved past all items
                const itemWidth = getItemWidth();
                const totalWidth = totalItems * itemWidth;

                if (Math.abs(currentPosition) >= totalWidth) {
                    currentPosition = 0;
                }

                carouselTrack.style.transform = `translateX(${currentPosition}px)`;
            }

            requestAnimationFrame(animateCarousel);
        }

        // Pause on hover
        carouselTrack.parentElement.addEventListener('mouseenter', () => {
            if (!isDragging) {
                isPaused = true;
                console.log('Carousel paused on hover');
            }
        });

        carouselTrack.parentElement.addEventListener('mouseleave', () => {
            if (!isDragging) {
                isPaused = false;
                console.log('Carousel resumed');
            }
        });

        // Drag functionality
        carouselTrack.addEventListener('mousedown', (e) => {
            isDragging = true;
            isPaused = true;
            dragStartX = e.clientX;
            dragStartPosition = currentPosition;
            carouselTrack.style.cursor = 'grabbing';
            e.preventDefault();
        });

        carouselTrack.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - dragStartX;
                currentPosition = dragStartPosition + deltaX;
                carouselTrack.style.transform = `translateX(${currentPosition}px)`;
            }
        });

        carouselTrack.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                isPaused = false;
                carouselTrack.style.cursor = 'grab';
            }
        });

        carouselTrack.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                isPaused = false;
                carouselTrack.style.cursor = 'grab';
            }
        });

        // Touch support for mobile
        carouselTrack.addEventListener('touchstart', (e) => {
            isDragging = true;
            isPaused = true;
            dragStartX = e.touches[0].clientX;
            dragStartPosition = currentPosition;
            e.preventDefault();
        });

        carouselTrack.addEventListener('touchmove', (e) => {
            if (isDragging) {
                const deltaX = e.touches[0].clientX - dragStartX;
                currentPosition = dragStartPosition + deltaX;
                carouselTrack.style.transform = `translateX(${currentPosition}px)`;
                e.preventDefault();
            }
        });

        carouselTrack.addEventListener('touchend', () => {
            if (isDragging) {
                isDragging = false;
                isPaused = false;
            }
        });

        // Set initial cursor
        carouselTrack.style.cursor = 'grab';

        // Handle window resize
        window.addEventListener('resize', () => {
            // Reset position on resize
            currentPosition = 0;
        });

        // Start the continuous animation
        console.log('Carousel continuous animation started');
        animateCarousel();
    }

    function returnToHomeLayout() {
        isSplitLayout = false;

        // Remove active state from all circles
        document.querySelectorAll('.portfolio-circle').forEach(circle => {
            circle.classList.remove('active');
        });

        mainContainer.innerHTML = `
        <section id="home" class="page-content active h-full flex items-center justify-center relative">
            <div id="circle-container">
                <!-- Circles will be dynamically generated by JavaScript here -->
            </div>
        </section>
    `;

        // Re-setup circles
        setupCircles();
    }

    function setupCircles() {
        const container = document.getElementById('circle-container');
        if (!container) {
            console.error('Circle container not found');
            return;
        }

        console.log('Setting up circles for', projectsConfig.length, 'projects');
        container.innerHTML = '';
        circles.length = 0;
        const containerRect = container.getBoundingClientRect();
        const containerSize = Math.min(containerRect.width, containerRect.height);
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // Mobile layout - pyramid arrangement
            const circleSize = Math.min(containerSize * 0.3, 160);

            // First, add the About Me circle at the top
            const aboutProject = projectsConfig.find(p => p.id === 'about');
            if (aboutProject) {
                const circleWrapper = document.createElement('div');
                circleWrapper.style.display = 'flex';
                circleWrapper.style.flexDirection = 'column';
                circleWrapper.style.alignItems = 'center';
                circleWrapper.style.gap = '8px';

                const circleLink = document.createElement('a');
                circleLink.href = 'about.html';
                circleLink.classList.add('nav-link');

                const circleEl = document.createElement('div');
                circleEl.classList.add('portfolio-circle');
                circleEl.style.width = `${circleSize}px`;
                circleEl.style.height = `${circleSize}px`;
                circleEl.style.backgroundImage = `url('${aboutProject.circleImage}')`;
                circleEl.style.position = 'relative';
                circleEl.style.top = 'auto';
                circleEl.style.left = 'auto';
                circleEl.style.transform = 'none';
                circleEl.style.margin = '0';

                // Create label (hidden for about)
                const label = document.createElement('div');
                label.classList.add('circle-label');
                label.textContent = aboutProject.name;
                label.style.display = 'none';

                circleLink.appendChild(circleEl);
                circleWrapper.appendChild(label);
                circleWrapper.appendChild(circleLink);
                container.appendChild(circleWrapper);
                circles.push(circleEl);
            }

            // Then add the project circles in a row at the bottom
            const projectWrapper = document.createElement('div');
            projectWrapper.style.display = 'flex';
            projectWrapper.style.flexDirection = 'row';
            projectWrapper.style.justifyContent = 'center';
            projectWrapper.style.alignItems = 'center';
            projectWrapper.style.gap = '1rem';
            projectWrapper.style.flexWrap = 'wrap';

            const projectCircles = projectsConfig.filter(p => p.id !== 'about');
            projectCircles.forEach((project, i) => {
                const circleWrapper = document.createElement('div');
                circleWrapper.style.display = 'flex';
                circleWrapper.style.flexDirection = 'column';
                circleWrapper.style.alignItems = 'center';
                circleWrapper.style.gap = '8px';

                const circleLink = document.createElement('a');
                // Map project IDs to URLs
                const urlMap = {
                    'project1': '/footwear/',
                    'project2': '/accessories/',
                    'project3': '/masks/',
                    'project4': '/fashion-scholarship-fund/',
                    'about': '/about.html'
                };
                circleLink.href = urlMap[project.id] || '#';
                circleLink.classList.add('nav-link');

                const circleEl = document.createElement('div');
                circleEl.classList.add('portfolio-circle');
                circleEl.style.width = `${circleSize}px`;
                circleEl.style.height = `${circleSize}px`;
                circleEl.style.backgroundImage = `url('${project.circleImage}')`;
                circleEl.style.position = 'relative';
                circleEl.style.top = 'auto';
                circleEl.style.left = 'auto';
                circleEl.style.transform = 'none';
                circleEl.style.margin = '0';

                // Create label
                const label = document.createElement('div');
                label.classList.add('circle-label');
                label.textContent = project.name;
                label.style.color = '#333';
                label.style.fontSize = '14px';
                label.style.fontWeight = 'bold';
                label.style.textAlign = 'center';
                label.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
                label.style.opacity = '0.8';
                label.style.maxWidth = `${circleSize + 20}px`;
                label.style.wordWrap = 'break-word';

                circleLink.appendChild(circleEl);
                circleWrapper.appendChild(label);
                circleWrapper.appendChild(circleLink);
                projectWrapper.appendChild(circleWrapper);
                circles.push(circleEl);
            });

            container.appendChild(projectWrapper);
        } else {
            // Desktop layout - triangular arrangement
            radius = Math.min(containerSize * 0.15, 150); // Max 150px from center
            const circleSize = containerSize * 0.2;
            const positions = generateCirclePositions(projectsConfig.length);

            projectsConfig.forEach((project, i) => {
                const pos = positions[i];
                if (!pos) return;
                const x = pos.x * radius;
                const y = pos.y * radius;

                // Create wrapper for circle and label
                const circleWrapper = document.createElement('div');
                circleWrapper.style.position = 'absolute';
                circleWrapper.style.top = '50%';
                circleWrapper.style.left = '50%';
                circleWrapper.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
                circleWrapper.style.display = 'flex';
                circleWrapper.style.flexDirection = 'column';
                circleWrapper.style.alignItems = 'center';
                circleWrapper.style.gap = '8px';

                const circleLink = document.createElement('a');
                // Map project IDs to URLs
                const urlMap = {
                    'project1': '/footwear/',
                    'project2': '/accessories/',
                    'project3': '/masks/',
                    'project4': '/fashion-scholarship-fund/',
                    'about': '/about.html'
                };
                circleLink.href = urlMap[project.id] || '#';
                circleLink.classList.add('nav-link');

                const circleEl = document.createElement('div');
                circleEl.classList.add('portfolio-circle');
                circleEl.style.width = `${circleSize}px`;
                circleEl.style.height = `${circleSize}px`;
                circleEl.style.backgroundImage = `url('${project.circleImage}')`;
                circleEl.dataset.baseX = x;
                circleEl.dataset.baseY = y;
                circleEl.style.transform = 'none';
                circleEl.style.position = 'relative';
                circleEl.style.top = 'auto';
                circleEl.style.left = 'auto';

                // Create label
                const label = document.createElement('div');
                label.classList.add('circle-label');
                label.textContent = project.name;
                label.style.color = '#333';
                label.style.fontSize = '14px';
                label.style.fontWeight = 'bold';
                label.style.textAlign = 'center';
                if (project.id === 'about') {
                    label.style.display = 'none';
                }
                label.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
                label.style.opacity = '0.8';
                label.style.maxWidth = `${circleSize + 30}px`;
                label.style.wordWrap = 'break-word';
                label.style.whiteSpace = 'nowrap';

                circleLink.appendChild(circleEl);
                circleWrapper.appendChild(label);
                circleWrapper.appendChild(circleLink);
                container.appendChild(circleWrapper);
                circles.push(circleEl);
            });
        }

        console.log('Created', circles.length, 'circles');
        addCircleEventListeners();

        // Start orbital animation for desktop
        if (!isMobile && projectsConfig.length >= 4) {
            startOrbitalAnimation();
        }
    }

    // Orbital Animation System
    let orbitAngle = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let animationFrameId = null;
    const orbitSpeed = 0.0003; // Radians per frame (slow rotation)
    const maxSlowdownDistance = 300; // Distance at which slowdown starts
    const minSlowdownDistance = 50; // Distance at which animation stops completely

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function startOrbitalAnimation() {
        const container = document.getElementById('circle-container');
        if (!container) return;

        const isMobile = window.innerWidth <= 768;
        if (isMobile) return;

        // Get all circle wrappers (excluding about circle)
        const circleWrappers = container.querySelectorAll('div[style*="position: absolute"]');
        const containerRect = container.getBoundingClientRect();
        const centerX = containerRect.width / 2;
        const centerY = containerRect.height / 2;

        function animate() {
            // Calculate minimum distance from mouse to any circle
            let minDistance = Infinity;

            circleWrappers.forEach((wrapper) => {
                const rect = wrapper.getBoundingClientRect();
                const circleCenterX = rect.left + rect.width / 2;
                const circleCenterY = rect.top + rect.height / 2;
                const distance = Math.sqrt(
                    Math.pow(mouseX - circleCenterX, 2) +
                    Math.pow(mouseY - circleCenterY, 2)
                );
                minDistance = Math.min(minDistance, distance);
            });

            // Calculate speed multiplier based on mouse proximity
            let speedMultiplier = 1;
            if (minDistance < maxSlowdownDistance) {
                // Linear interpolation between full speed and stopped
                speedMultiplier = Math.max(0, (minDistance - minSlowdownDistance) / (maxSlowdownDistance - minSlowdownDistance));
            }

            // Update orbit angle
            orbitAngle += orbitSpeed * speedMultiplier;

            // Update each project circle position
            const radius = Math.min(containerRect.width * 0.15, 150) * 1.1; // Match the positioning radius, max 150px
            let projectIndex = 0;

            circleWrappers.forEach((wrapper, i) => {
                // Check if this is the about circle (center)
                const link = wrapper.querySelector('a');
                if (link && link.href.includes('about')) {
                    return; // Skip about circle
                }

                // Calculate new position based on orbit angle
                const baseAngle = (projectIndex / 4) * 2 * Math.PI - Math.PI / 2; // Starting angle
                const currentAngle = baseAngle + orbitAngle;

                const x = Math.cos(currentAngle) * radius;
                const y = Math.sin(currentAngle) * radius;

                // Apply smooth transition
                wrapper.style.transition = 'none'; // Disable CSS transitions for smooth animation
                wrapper.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;

                projectIndex++;
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        // Start the animation
        animate();
    }

    function stopOrbitalAnimation() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    }

    function createConnectingLines() {
        const container = document.getElementById('circle-container');
        if (!container) return;

        // Find the about me circle (should be the last one)
        const aboutCircle = document.querySelector('a[href="about.html"] .portfolio-circle');
        if (!aboutCircle) return;

        const aboutRect = aboutCircle.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Get about circle center position relative to container
        const aboutCenterX = aboutRect.left + aboutRect.width / 2 - containerRect.left;
        const aboutCenterY = aboutRect.top + aboutRect.height / 2 - containerRect.top;

        // Create lines from all project circles to about circle
        const projectUrls = ['/footwear/', '/accessories/', '/masks/', '/fashion-scholarship-fund/'];
        for (let i = 0; i < projectUrls.length; i++) {
            const projectCircle = document.querySelector(`a[href="${projectUrls[i]}"] .portfolio-circle`);
            if (!projectCircle) continue;

            const projectRect = projectCircle.getBoundingClientRect();
            const projectCenterX = projectRect.left + projectRect.width / 2 - containerRect.left;
            const projectCenterY = projectRect.top + projectRect.height / 2 - containerRect.top;

            // Calculate line properties
            const deltaX = aboutCenterX - projectCenterX;
            const deltaY = aboutCenterY - projectCenterY;
            const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

            // Create line element
            const line = document.createElement('div');
            line.className = 'connecting-line';
            line.style.width = `${length}px`;
            line.style.left = `${projectCenterX}px`;
            line.style.top = `${projectCenterY}px`;
            line.style.transform = `rotate(${angle}deg)`;
            line.style.transformOrigin = '0 0';
            line.style.zIndex = '-1';

            // Add uneven staggered animation delay to create organic offset effect
            const delays = [0, 1.2, 2.1, 0.6]; // Uneven delays for more natural flow (4 projects)
            const delay = delays[i] || 0;
            line.style.setProperty('--animation-delay', `${delay}s`);

            // Insert line at the beginning of the container so it appears behind circles
            container.insertBefore(line, container.firstChild);
        }
    }

    function generateCirclePositions(count) {
        if (count === 1) return [{ x: 0, y: 0 }];
        if (count === 2) return [{ x: -0.5, y: 0 }, { x: 0.5, y: 0 }];
        if (count === 3) return [{ x: 0, y: -0.8 }, { x: -1, y: 0.8 }, { x: 1, y: 0.8 }];
        if (count === 4) return [
            { x: 0, y: -0.9 },    // Top a bit higher
            { x: -1.2, y: 1.1 },  // Bottom left
            { x: 1.2, y: 1.1 },   // Bottom right
            { x: 0, y: 0.37 }     // Center (About) - geometric center of triangle
        ];
        // For 5 items: 4 project circles around center (about)
        if (count === 5) {
            // Find about circle index
            const aboutIndex = projectsConfig.findIndex(p => p.id === 'about');
            const positions = [];
            // Generate 4 positions in a circle (for projects)
            const projectPositions = [];
            for (let i = 0; i < 4; i++) {
                const angle = (i / 4) * 2 * Math.PI - Math.PI / 2; // Start at top
                projectPositions.push({
                    x: Math.cos(angle) * 1.1,
                    y: Math.sin(angle) * 1.1
                });
            }
            // Insert about circle at center (0, 0) at its index
            for (let i = 0; i < count; i++) {
                if (i === aboutIndex) {
                    positions.push({ x: 0, y: 0 }); // Center
                } else {
                    // Find which project position to use
                    const projectIndex = i < aboutIndex ? i : i - 1;
                    positions.push(projectPositions[projectIndex]);
                }
            }
            return positions;
        }
        // For more than 5, arrange in a circle
        const positions = [];
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
            positions.push({
                x: Math.cos(angle) * 0.8,
                y: Math.sin(angle) * 0.8
            });
        }
        return positions;
    }

    function addCircleEventListeners() {
        circles.forEach(hoveredCircle => {
            // Get the parent link element
            const circleLink = hoveredCircle.closest('a.nav-link');
            if (circleLink) {
                // Make sure the link is clickable and properly set up
                circleLink.style.display = 'block';
                circleLink.style.cursor = 'pointer';

                // Remove any data-target attribute if it exists (legacy SPA behavior)
                if (circleLink.dataset.target) {
                    delete circleLink.dataset.target;
                }

                // Ensure the circle itself doesn't block clicks - let them bubble to the link
                hoveredCircle.style.pointerEvents = 'auto';

                // For real URL links, ensure clicks work properly
                if (circleLink.href && circleLink.href !== '#' && !circleLink.hasAttribute('data-target')) {
                    // Get the href value
                    const href = circleLink.getAttribute('href') || circleLink.href;

                    // Add click handler to circle to ensure navigation
                    hoveredCircle.addEventListener('click', (e) => {
                        // Navigate directly to the href
                        if (href && href !== '#') {
                            e.stopPropagation();
                            window.location.href = href;
                        }
                    }, true); // Use capture to run before other handlers
                }
            }

            hoveredCircle.addEventListener('mouseenter', () => {
                if (isSplitLayout) return; // Don't animate in split layout

                // Scale the hovered circle only (no push effect)
                hoveredCircle.style.transform = 'scale(1.15)';
                hoveredCircle.style.zIndex = '10';
                hoveredCircle.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';

                // Scale the label as well
                const label = hoveredCircle.parentElement.querySelector('.circle-label');
                if (label) {
                    label.style.transform = 'scale(1.1)';
                    label.style.opacity = '1';
                    label.style.fontWeight = '900';
                }
            });

            hoveredCircle.addEventListener('mouseleave', () => {
                if (isSplitLayout) return; // Don't animate in split layout

                // Reset all circles back to scale(1) without translation
                circles.forEach(circle => {
                    circle.style.transform = 'scale(1)';
                    circle.style.zIndex = '1';
                    circle.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';

                    // Reset the label scaling
                    const label = circle.parentElement.querySelector('.circle-label');
                    if (label) {
                        label.style.transform = 'scale(1)';
                        label.style.opacity = '0.8';
                        label.style.fontWeight = 'bold';
                    }
                });
            });
        });
    }

    // Global Navigation - for multi-page, links work normally
    // Only prevent default if it's a data-target (legacy SPA behavior)
    document.body.addEventListener('click', (e) => {
        const targetLink = e.target.closest('.nav-link');
        if (targetLink && targetLink.dataset.target) {
            e.preventDefault();
            // For multi-page, convert to navigation
            const urlMap = {
                'project1': '/footwear/',
                'project2': '/accessories/',
                'project3': '/masks/',
                'about': '/about.html',
                'home': '/'
            };
            const url = urlMap[targetLink.dataset.target];
            if (url) {
                window.location.href = url;
            }
        }
    });

    // Thumbnail click logic
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('thumbnail')) {
            const clickedThumb = e.target;
            const projectSection = clickedThumb.closest('.page-content, .active');
            const mainMedia = projectSection.querySelector(`[data-main-image]`);

            if (mainMedia) {
                const isVideo = clickedThumb.tagName === 'VIDEO';
                const isMainVideo = mainMedia.tagName === 'VIDEO';

                if (isVideo && isMainVideo) {
                    // Both are videos, just change src
                    mainMedia.src = clickedThumb.src;
                } else if (isVideo && !isMainVideo) {
                    // Thumbnail is video, main is image - replace with video
                    const newVideo = document.createElement('video');
                    newVideo.src = clickedThumb.src;
                    newVideo.alt = clickedThumb.alt;
                    newVideo.className = mainMedia.className;
                    newVideo.setAttribute('data-main-image', mainMedia.getAttribute('data-main-image'));
                    newVideo.controls = true;
                    newVideo.muted = false;
                    newVideo.loop = false;
                    mainMedia.parentNode.replaceChild(newVideo, mainMedia);
                } else if (!isVideo && isMainVideo) {
                    // Thumbnail is image, main is video - replace with image
                    const newImg = document.createElement('img');
                    newImg.src = clickedThumb.src;
                    newImg.alt = clickedThumb.alt;
                    newImg.className = mainMedia.className;
                    newImg.setAttribute('data-main-image', mainMedia.getAttribute('data-main-image'));
                    mainMedia.parentNode.replaceChild(newImg, mainMedia);
                } else {
                    // Both are images, just change src
                    mainMedia.src = clickedThumb.src;
                }
            }

            // Update active state for thumbnails within the same project
            projectSection.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            clickedThumb.classList.add('active');
        }
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Initial setup
    console.log('Portfolio initialized with', projectsConfig.length, 'projects');
    // Only setup circles on home page
    if (isHomePage) {
        setupCircles();
        window.addEventListener('resize', () => {
            if (!isSplitLayout) {
                setupCircles();
            }
        });
    }

    // Handle thoughts button click using event delegation
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'thoughts-button') {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.innerHTML = `
                <div class="w-full max-w-4xl mx-auto p-6 sm:p-8">
                    <div class="text-center">
                        <h1 class="text-4xl font-bold mb-8 text-[#A30000]">Some of my thoughts recently</h1>
                        <div class="space-y-6 text-left max-w-3xl mx-auto">
                            <p class="text-black text-lg leading-relaxed">
                                People wear clothes like armor, not because they're cold but because they're scared of being seen for what they are, unfinished. Every thread says something about how far we've drifted from our own expression. Fashion started as protection, then communication, now it's performance. We forgot what we were trying to say. People talk about wanting authenticity, but no one really wants to be seen mid-process. We like the illusion of rawness, not the mess it takes to get there.
                            </p>
                            <p class="text-black text-lg leading-relaxed">
                                Everything about life contradicts itself. We chase freedom through structure. We find identity in repetition. We call our screens a window to the world while the world keeps shrinking behind them. People want to escape systems but still need something to belong to. That's the joke, everything that frees us also traps us. We hate the artificial but live through it anyway. It's not fake, it's just another layer of survival. Pretending might be the only thing that keeps us human.
                            </p>
                            <p class="text-black text-lg leading-relaxed">
                                Every invention feels like an echo. We build machines to talk for us, then forget what silence sounds like. We automate feeling, and it leaves us starving for the real thing. We keep trying to design empathy into the system, but maybe the system was never supposed to care. It's all theater, but that doesn't make it meaningless. It's still a stage where we can rehearse being alive, over and over, until it feels right again.
                            </p>
                            <p class="text-black text-lg leading-relaxed">
                                I work inside that space, between art and survival, between code and soul. I'm not trying to fix the contradiction. I'm trying to live in it. The goal isn't harmony, it's awareness. To notice the glitch and still make something from it. To build a world that doesn't exist yet and remind myself that creation is the only honest way to lie. Every mask, every prototype, every render is proof that I'm still learning how to translate being into form.
                            </p>
                        </div>
                    </div>
                </div>
            `;
            }
        }
    });

    // Handle contact popup
    const contactPopupTrigger = document.getElementById('contact-popup-trigger');
    const contactPopup = document.getElementById('contact-popup');
    const popupClose = document.getElementById('popup-close');
    const popupForm = document.getElementById('popup-contact-form');

    // Open popup
    contactPopupTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        contactPopup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close popup
    function closePopup() {
        contactPopup.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    popupClose.addEventListener('click', closePopup);

    // Close popup when clicking outside
    contactPopup.addEventListener('click', (e) => {
        if (e.target === contactPopup) {
            closePopup();
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactPopup.classList.contains('active')) {
            closePopup();
        }
    });

    // Handle form submission
    popupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading state
        const submitButton = popupForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Submit to Formspree
            const formData = new FormData(popupForm);
            const response = await fetch(popupForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Thank you for your message! I\'ll get back to you soon.');
                popupForm.reset();
                closePopup();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            alert('Sorry, there was an error sending your message. Please try again or contact me directly.');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
});

// Inline Text Editing Functionality
let isEditMode = false;
let currentEditElement = null;
let originalText = '';

// Track key states
let keysPressed = {
    ctrl: false,
    alt: false
};

// Keyboard event listeners
document.addEventListener('keydown', (e) => {
    if (e.key === 'Control') keysPressed.ctrl = true;
    if (e.key === 'Alt') keysPressed.alt = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Control') keysPressed.ctrl = false;
    if (e.key === 'Alt') keysPressed.alt = false;
});

// Double click with Ctrl+Alt to enable editing
document.addEventListener('dblclick', (e) => {
    if (keysPressed.ctrl && keysPressed.alt) {
        e.preventDefault();
        enableTextEditing(e.target);
    }
});

function enableTextEditing(element) {
    // Only allow editing of text elements
    const editableElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'];
    if (!editableElements.includes(element.tagName.toLowerCase())) {
        return;
    }

    // Don't edit if it's already in edit mode
    if (element.classList.contains('editing')) {
        return;
    }

    // Store original text and element
    originalText = element.textContent.trim();
    currentEditElement = element;

    // Create input field
    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalText;
    input.className = 'edit-input bg-white text-[#A30000] border-2 border-blue-500 px-2 py-1 rounded';
    input.style.fontSize = window.getComputedStyle(element).fontSize;
    input.style.fontWeight = window.getComputedStyle(element).fontWeight;
    input.style.fontFamily = window.getComputedStyle(element).fontFamily;
    input.style.width = '100%';
    input.style.minWidth = '200px';

    // Replace element content with input
    element.innerHTML = '';
    element.appendChild(input);
    element.classList.add('editing');
    input.focus();
    input.select();

    // Handle save on Enter
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const value = input.value;
            saveTextChange(element, value);
        } else if (e.key === 'Escape') {
            e.preventDefault();
            cancelEdit(element);
        }
    });

    // Handle blur (click outside) - with delay to prevent conflicts
    input.addEventListener('blur', (e) => {
        // Small delay to prevent DOM manipulation conflicts
        setTimeout(() => {
            if (element.classList.contains('editing')) {
                const value = input.value;
                saveTextChange(element, value);
            }
        }, 100);
    });
}

function saveTextChange(element, newText) {
    if (newText.trim() === originalText) {
        // No change, just cancel
        cancelEdit(element);
        return;
    }

    // Show saving indicator
    element.innerHTML = '<span class="text-blue-500">Saving...</span>';

    // Send to backend to save
    saveToBackend(element, newText.trim());
}

function cancelEdit(element) {
    element.textContent = originalText;
    element.classList.remove('editing');
    currentEditElement = null;
    originalText = '';
}

async function saveToBackend(element, newText) {
    try {
        // Determine what type of content this is
        const elementInfo = getElementInfo(element);

        // Get current page path for multi-page support
        const filePath = window.currentPagePath || window.location.pathname.replace(/^\//, '') || 'index.html';

        // Show saving indicator
        element.innerHTML = '<span class="text-blue-500">Saving...</span>';

        // Send to backend to save and commit
        const response = await fetch('/api/save-edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                elementInfo: elementInfo,
                newText: newText,
                originalText: originalText,
                filePath: filePath
            })
        });

        if (response.ok) {
            const result = await response.json();

            // Success - update the element
            element.textContent = newText;
            element.classList.remove('editing');
            element.innerHTML = `<span class="text-green-500">✓ ${newText}</span>`;

            // Remove success indicator after 2 seconds
            setTimeout(() => {
                element.textContent = newText;
            }, 2000);

            // Show success notification
            showSuccessNotification(elementInfo, newText, originalText, result.commitHash);

        } else {
            const error = await response.json();
            console.error('API Error Response:', error);
            throw new Error(error.message || 'Failed to save');
        }
    } catch (error) {
        console.error('Error saving text:', error);
        element.innerHTML = '<span class="text-red-500">Error saving</span>';
        setTimeout(() => {
            cancelEdit(element);
        }, 2000);

        // Show error notification with more details
        showErrorNotification(error.message, error);
    }
}

function getElementInfo(element) {
    // Try to determine what content this is based on context
    const projectSection = element.closest('.page-content, .active');
    const projectId = projectSection ? projectSection.id : null;

    // Check if it's in a specific project
    if (projectId && projectId.startsWith('project')) {
        return {
            type: 'project',
            projectId: projectId,
            elementType: element.tagName.toLowerCase(),
            text: element.textContent.trim()
        };
    }

    // Check if it's in the about section
    if (element.closest('#about')) {
        return {
            type: 'about',
            elementType: element.tagName.toLowerCase(),
            text: element.textContent.trim()
        };
    }

    // Default fallback
    return {
        type: 'general',
        elementType: element.tagName.toLowerCase(),
        text: element.textContent.trim()
    };
}

// Store changes for potential git operations
function storeChangeForGit(elementInfo, newText, originalText) {
    const changes = JSON.parse(localStorage.getItem('portfolioChanges') || '[]');
    changes.push({
        timestamp: new Date().toISOString(),
        elementInfo: elementInfo,
        newText: newText,
        originalText: originalText
    });
    localStorage.setItem('portfolioChanges', JSON.stringify(changes));
}

// Show success notification
function showSuccessNotification(elementInfo, newText, originalText, commitHash) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-md';
    notification.innerHTML = `
    <h3 class="font-bold mb-2">✅ Text Saved & Committed!</h3>
    <p class="text-sm mb-2">Change: "${originalText}" → "${newText}"</p>
    <p class="text-xs mb-2">✅ File updated automatically</p>
    <p class="text-xs mb-2">✅ Changes committed to git</p>
    <p class="text-xs mb-2">✅ Pushed to GitHub</p>
    <p class="text-xs text-green-200">Commit: ${commitHash ? commitHash.substring(0, 7) : 'N/A'}</p>
    <button onclick="this.parentElement.remove()" class="mt-2 bg-green-500 hover:bg-green-400 px-3 py-1 rounded text-xs">
        Close
    </button>
`;

    document.body.appendChild(notification);

    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 8000);
}

// Show error notification
function showErrorNotification(errorMessage, errorDetails = null) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-md';

    let debugInfo = '';
    if (errorDetails && errorDetails.debug) {
        debugInfo = `
        <details class="mt-2">
            <summary class="text-xs cursor-pointer">Debug Info</summary>
            <pre class="text-xs mt-1 bg-black bg-opacity-20 p-2 rounded overflow-auto">${JSON.stringify(errorDetails.debug, null, 2)}</pre>
        </details>
    `;
    }

    notification.innerHTML = `
    <h3 class="font-bold mb-2">❌ Error Saving</h3>
    <p class="text-sm mb-2">${errorMessage}</p>
    <p class="text-xs mb-2">Check browser console for more details</p>
    ${debugInfo}
    <button onclick="this.parentElement.remove()" class="mt-2 bg-red-500 hover:bg-red-400 px-3 py-1 rounded text-xs">
        Close
    </button>
`;

    document.body.appendChild(notification);

    // Auto-remove after 15 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 15000);
}

// Function to export all changes for manual git operations
function exportChanges() {
    const changes = JSON.parse(localStorage.getItem('portfolioChanges') || '[]');
    if (changes.length === 0) {
        alert('No changes to export');
        return;
    }

    const changesText = changes.map(change =>
        `- ${change.elementInfo.type}: "${change.originalText}" → "${change.newText}"`
    ).join('\n');

    const commitMessage = `Update portfolio content:\n\n${changesText}`;

    // Copy to clipboard
    navigator.clipboard.writeText(commitMessage).then(() => {
        alert('Commit message copied to clipboard! Paste it when you run: git commit -m "..."');
    }).catch(() => {
        // Fallback: show in alert
        prompt('Copy this commit message:', commitMessage);
    });
}

// Add visual indicator when in edit mode
document.addEventListener('keydown', (e) => {
    if (keysPressed.ctrl && keysPressed.alt) {
        document.body.style.cursor = 'text';
    }
});

document.addEventListener('keyup', (e) => {
    if (!keysPressed.ctrl || !keysPressed.alt) {
        document.body.style.cursor = 'default';
    }
});

// Custom cursor functionality
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Add hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .portfolio-circle, .nav-link, .thumbnail');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Zoom modal functionality
const zoomModal = document.getElementById('zoom-modal');
const zoomImage = document.getElementById('zoom-image');
const zoomClose = document.getElementById('zoom-close');

let currentZoom = 0.5; // Start at 50%
let isDragging = false;
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;

function openZoomModal(imageSrc) {
    zoomImage.src = imageSrc;
    zoomModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset zoom and position
    currentZoom = 0.5;
    translateX = 0;
    translateY = 0;
    updateImageTransform();
}

function closeZoomModal() {
    zoomModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateImageTransform() {
    zoomImage.style.transform = `scale(${currentZoom}) translate(${translateX}px, ${translateY}px)`;
}

function zoomIn() {
    currentZoom = Math.min(currentZoom * 1.2, 5); // Max 500%
    updateImageTransform();
}

function zoomOut() {
    currentZoom = Math.max(currentZoom / 1.2, 0.5); // Min 50%
    updateImageTransform();
}

// Mouse wheel zoom
zoomModal.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
        zoomIn();
    } else {
        zoomOut();
    }
});

// Touch events for pinch zoom
let initialDistance = 0;
let initialZoom = 0.5;

zoomModal.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
        e.preventDefault();
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        initialDistance = Math.sqrt(
            Math.pow(touch2.clientX - touch1.clientX, 2) +
            Math.pow(touch2.clientY - touch1.clientY, 2)
        );
        initialZoom = currentZoom;
    } else if (e.touches.length === 1) {
        // Single touch for dragging
        isDragging = true;
        startX = e.touches[0].clientX - translateX;
        startY = e.touches[0].clientY - translateY;
    }
});

zoomModal.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
        e.preventDefault();
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.sqrt(
            Math.pow(touch2.clientX - touch1.clientX, 2) +
            Math.pow(touch2.clientY - touch1.clientY, 2)
        );
        const scale = currentDistance / initialDistance;
        currentZoom = Math.max(0.5, Math.min(5, initialZoom * scale));
        updateImageTransform();
    } else if (e.touches.length === 1 && isDragging) {
        e.preventDefault();
        translateX = e.touches[0].clientX - startX;
        translateY = e.touches[0].clientY - startY;
        updateImageTransform();
    }
});

zoomModal.addEventListener('touchend', (e) => {
    isDragging = false;
});

// Mouse drag for panning
zoomModal.addEventListener('mousedown', (e) => {
    if (e.target === zoomImage) {
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        e.preventDefault();
    }
});

zoomModal.addEventListener('mousemove', (e) => {
    if (isDragging) {
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateImageTransform();
    }
});

zoomModal.addEventListener('mouseup', () => {
    isDragging = false;
});

zoomModal.addEventListener('mouseleave', () => {
    isDragging = false;
});

// Close modal when clicking close button or outside the image
zoomClose.addEventListener('click', closeZoomModal);
zoomModal.addEventListener('click', (e) => {
    if (e.target === zoomModal) {
        closeZoomModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
        closeZoomModal();
    }
});

// Add zoom functionality to existing and future zoom icons
function attachZoomListeners() {
    document.querySelectorAll('.zoom-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const img = icon.parentElement.querySelector('img');
            if (img) {
                openZoomModal(img.src);
            }
        });
    });
}

// Attach listeners to existing zoom icons
attachZoomListeners();
