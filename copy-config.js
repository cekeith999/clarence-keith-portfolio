// Copy configuration for different audiences
// Add new versions by creating new objects in the copyVersions object

const copyVersions = {
    default: {
        name: 'Default',
        description: 'Standard portfolio copy',
        about: {
            paragraph1: "I'm Clarence Keith, a passionate footwear designer and 3D artist specializing in experimental design and additive manufacturing. My work explores the intersection of traditional craftsmanship and cutting-edge technology.",
            paragraph2: "With a background in industrial design and a fascination for generative design principles, I create footwear that challenges conventional form while maintaining functionality and aesthetic appeal.",
            paragraph3: "Each piece in my portfolio represents a unique exploration of materials, form, and manufacturing processes, pushing the boundaries of what's possible in contemporary footwear design."
        },
        projects: {
            // Project-specific copy can be added here
            // Format: projectId: { goal: "...", tagline: "...", etc. }
        }
    },
    mattel: {
        name: 'Mattel',
        description: 'Tailored for Mattel Future Lab Program Management Internship',
        about: {
            paragraph1: "I'm Clarence Keith, a footwear designer and 3D artist with a passion for innovation and cross-functional collaboration. My work combines experimental design with additive manufacturing, demonstrating my ability to manage complex creative projects from concept to execution.",
            paragraph2: "Through my portfolio projects, I've developed strong organizational skills, project coordination experience, and the ability to work collaboratively with diverse teams. I excel at tracking progress, identifying dependencies, and documenting processes—skills essential for supporting innovation project management.",
            paragraph3: "My experience in early-stage concept exploration, material research, and iterative design processes aligns with Mattel's mission to create innovative products that inspire and develop children through play. I'm eager to contribute to Future Lab's discovery practice and support strategic innovation initiatives."
        },
        projects: {
            // Add project-specific Mattel copy here if needed
        }
    },
    nike: {
        name: 'Nike/Jordan',
        description: 'Tailored for Nike/Jordan Design Internship',
        about: {
            paragraph1: "I'm Clarence Keith, a footwear designer and 3D artist specializing in experimental design and additive manufacturing. My work brings trend-relevant concepts to life through innovative materials, form, and storytelling—core to Jordan Brand's design philosophy.",
            paragraph2: "With expertise in 3D modeling, rendering, and digital product creation, I create footwear that combines performance, style, and cultural relevance. My portfolio demonstrates strong visual communication skills, modern aesthetic application, and the ability to translate concepts from ideation to final product.",
            paragraph3: "Each project showcases my passion for design innovation, material exploration, and collaborative problem-solving. I'm excited to contribute to Jordan Brand's mission of helping athletes fly on and off the court through cutting-edge design that bridges sport, culture, and creativity."
        },
        projects: {
            // Add project-specific Nike/Jordan copy here if needed
        }
    }
};

// Get current copy version from localStorage
function getCurrentCopyVersion() {
    return localStorage.getItem('copyVersion') || 'default';
}

// Set copy version
function setCopyVersion(version) {
    if (copyVersions[version]) {
        localStorage.setItem('copyVersion', version);
        return true;
    }
    return false;
}

// Get copy for current version
function getCopy(version = null) {
    const currentVersion = version || getCurrentCopyVersion();
    return copyVersions[currentVersion] || copyVersions.default;
}

