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
if (typeof module !== "undefined" && module.exports) {
    module.exports = projectsConfig;
}
