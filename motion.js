/**
 * Motion System - Framer-quality animations for the portfolio
 * Uses Motion One library for spring physics and smooth animations
 * 
 * @see https://motion.dev/
 */

// ============================================================================
// MOTION PRESETS
// ============================================================================

export const springs = {
    // Quick, responsive - for buttons, small elements
    snappy: { stiffness: 400, damping: 30, mass: 1 },

    // General purpose - balanced feel
    smooth: { stiffness: 200, damping: 26, mass: 1 },

    // Large elements, page transitions
    gentle: { stiffness: 120, damping: 20, mass: 1 },

    // Playful with overshoot
    bouncy: { stiffness: 300, damping: 15, mass: 1 },

    // Very subtle, almost linear
    stiff: { stiffness: 500, damping: 40, mass: 1 },
};

export const durations = {
    instant: 0.1,
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 0.8,
};

export const easings = {
    // Framer-like easing curves
    smooth: [0.25, 0.1, 0.25, 1.0],
    smoothOut: [0.0, 0.0, 0.2, 1.0],
    smoothIn: [0.4, 0.0, 1.0, 1.0],
    bounce: [0.68, -0.55, 0.265, 1.55],
};

// ============================================================================
// SCROLL OBSERVER
// ============================================================================

class ScrollObserver {
    constructor() {
        this.callbacks = new Set();
        this.cachedMeasurements = new WeakMap();
        this.frameRequested = false;
        this.scrollY = window.scrollY;
        this.viewportHeight = window.innerHeight;

        // Passive scroll listener
        window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
        window.addEventListener('resize', this.onResize.bind(this), { passive: true });
    }

    onScroll() {
        this.scrollY = window.scrollY;

        if (!this.frameRequested) {
            this.frameRequested = true;
            requestAnimationFrame(() => {
                this.callbacks.forEach(cb => cb(this.scrollY, this.viewportHeight));
                this.frameRequested = false;
            });
        }
    }

    onResize() {
        this.viewportHeight = window.innerHeight;
        this.cachedMeasurements = new WeakMap(); // Invalidate cache
    }

    subscribe(callback) {
        this.callbacks.add(callback);
        // Initial call
        callback(this.scrollY, this.viewportHeight);

        return () => this.callbacks.delete(callback);
    }

    // Get cached bounding rect (only measures once until resize)
    getRect(element) {
        if (!this.cachedMeasurements.has(element)) {
            this.cachedMeasurements.set(element, element.getBoundingClientRect());
        }
        // Adjust for scroll position
        const cached = this.cachedMeasurements.get(element);
        return {
            ...cached,
            top: cached.top + this.scrollY,
            bottom: cached.bottom + this.scrollY,
        };
    }

    // Force re-measure (call after layout changes)
    invalidate(element) {
        if (element) {
            this.cachedMeasurements.delete(element);
        } else {
            this.cachedMeasurements = new WeakMap();
        }
    }
}

export const scrollObserver = new ScrollObserver();

// ============================================================================
// SPRING ANIMATOR (RAF-based, library-agnostic)
// ============================================================================

class SpringAnimator {
    constructor() {
        this.animations = new Map();
        this.running = false;
    }

    // Animate a value with spring physics
    animate(id, from, to, spring, onUpdate, onComplete) {
        const { stiffness = 200, damping = 26, mass = 1 } = spring;

        this.animations.set(id, {
            current: from,
            target: to,
            velocity: 0,
            stiffness,
            damping,
            mass,
            onUpdate,
            onComplete,
        });

        if (!this.running) {
            this.running = true;
            this.tick();
        }
    }

    // Update target without restarting
    setTarget(id, target) {
        const anim = this.animations.get(id);
        if (anim) {
            anim.target = target;
        }
    }

    // Stop animation
    stop(id) {
        this.animations.delete(id);
    }

    tick() {
        if (this.animations.size === 0) {
            this.running = false;
            return;
        }

        const dt = 1 / 60; // Assume 60fps
        const toRemove = [];

        this.animations.forEach((anim, id) => {
            // Spring physics
            const springForce = -anim.stiffness * (anim.current - anim.target);
            const dampingForce = -anim.damping * anim.velocity;
            const acceleration = (springForce + dampingForce) / anim.mass;

            anim.velocity += acceleration * dt;
            anim.current += anim.velocity * dt;

            anim.onUpdate(anim.current);

            // Check if settled
            const isSettled =
                Math.abs(anim.current - anim.target) < 0.001 &&
                Math.abs(anim.velocity) < 0.001;

            if (isSettled) {
                anim.onUpdate(anim.target); // Snap to final value
                if (anim.onComplete) anim.onComplete();
                toRemove.push(id);
            }
        });

        toRemove.forEach(id => this.animations.delete(id));

        requestAnimationFrame(() => this.tick());
    }
}

export const springAnimator = new SpringAnimator();

// ============================================================================
// WILL-CHANGE MANAGER
// ============================================================================

class WillChangeManager {
    constructor() {
        this.elements = new WeakMap();
        this.timeouts = new WeakMap();
    }

    // Apply will-change before animation
    prepare(element, properties = 'transform') {
        // Clear any pending removal
        const timeout = this.timeouts.get(element);
        if (timeout) {
            clearTimeout(timeout);
            this.timeouts.delete(element);
        }

        element.style.willChange = properties;
        this.elements.set(element, Date.now());
    }

    // Remove will-change after animation (with delay)
    release(element, delay = 300) {
        const timeout = setTimeout(() => {
            element.style.willChange = 'auto';
            this.elements.delete(element);
            this.timeouts.delete(element);
        }, delay);

        this.timeouts.set(element, timeout);
    }
}

export const willChangeManager = new WillChangeManager();

// ============================================================================
// DEBUG MODE
// ============================================================================

class MotionDebug {
    constructor() {
        this.enabled = new URLSearchParams(window.location.search).has('debug');
        this.frameCount = 0;
        this.lastTime = performance.now();
        this.droppedFrames = 0;

        if (this.enabled) {
            this.createOverlay();
            this.startMonitoring();
        }
    }

    createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.8);
            color: #0f0;
            font-family: monospace;
            font-size: 12px;
            padding: 8px 12px;
            border-radius: 4px;
            z-index: 99999;
            pointer-events: none;
        `;
        document.body.appendChild(this.overlay);
    }

    startMonitoring() {
        const measure = () => {
            const now = performance.now();
            const delta = now - this.lastTime;

            // Check for dropped frames (> 20ms = dropped at 60fps)
            if (delta > 20) {
                this.droppedFrames++;
            }

            this.frameCount++;

            // Update display every 30 frames
            if (this.frameCount % 30 === 0) {
                const fps = Math.round(1000 / delta);
                this.overlay.innerHTML = `
                    FPS: ${fps}<br>
                    Dropped: ${this.droppedFrames}
                `;

                if (fps < 50) {
                    this.overlay.style.color = '#f00';
                } else if (fps < 55) {
                    this.overlay.style.color = '#ff0';
                } else {
                    this.overlay.style.color = '#0f0';
                }
            }

            this.lastTime = now;
            requestAnimationFrame(measure);
        };

        requestAnimationFrame(measure);
    }

    log(...args) {
        if (this.enabled) {
            console.log('[Motion]', ...args);
        }
    }

    warn(...args) {
        if (this.enabled) {
            console.warn('[Motion]', ...args);
        }
    }
}

export const motionDebug = new MotionDebug();

// ============================================================================
// REDUCED MOTION
// ============================================================================

export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Linear interpolation
export function lerp(start, end, progress) {
    return start + (end - start) * progress;
}

// Clamp value between min and max
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

// Map value from one range to another
export function mapRange(value, inMin, inMax, outMin, outMax) {
    return outMin + (outMax - outMin) * ((value - inMin) / (inMax - inMin));
}

// Apply transform with GPU optimization
export function setTransform(element, { x = 0, y = 0, scale = 1, rotate = 0 }) {
    element.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotate}deg)`;
}

// ============================================================================
// INITIALIZATION
// ============================================================================

// Check for reduced motion preference
if (prefersReducedMotion) {
    document.documentElement.classList.add('reduce-motion');
    motionDebug.log('Reduced motion enabled');
}

motionDebug.log('Motion system initialized');
