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
    corporate: {
        name: 'Corporate',
        description: 'Tailored for corporate clients and business opportunities',
        about: {
            paragraph1: "I'm Clarence Keith, a professional footwear designer and 3D artist with expertise in experimental design and additive manufacturing. My work bridges traditional craftsmanship with cutting-edge technology to deliver innovative solutions.",
            paragraph2: "With a strong background in industrial design and expertise in generative design principles, I create footwear that balances innovative form with functional requirements and market appeal.",
            paragraph3: "Each project in my portfolio demonstrates a strategic approach to materials, form, and manufacturing processes, delivering solutions that meet both creative and commercial objectives."
        },
        projects: {
            // Add project-specific corporate copy here if needed
        }
    },
    creative: {
        name: 'Creative',
        description: 'Tailored for creative agencies and artistic collaborations',
        about: {
            paragraph1: "I'm Clarence Keith, a footwear designer and 3D artist pushing the boundaries of experimental design and additive manufacturing. My work exists at the intersection of art, craft, and technology.",
            paragraph2: "Rooted in industrial design and driven by generative design principles, I create footwear that challenges perception, reimagines form, and explores new possibilities in wearable art.",
            paragraph3: "Each piece in my portfolio is a unique experiment in materials, form, and process—a statement that questions what footwear can be and where design might go next."
        },
        projects: {
            // Add project-specific creative copy here if needed
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

