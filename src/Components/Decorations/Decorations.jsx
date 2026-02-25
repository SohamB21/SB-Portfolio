import React from "react";

// Fresco-Style Teal Blob
export const TealBlob = ({ className }) => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path fill="currentColor" d="M39.9,-65.7C50.8,-56.3,57.9,-42.6,63.6,-28.9C69.3,-15.2,73.6,-1.5,72.4,12C71.2,25.5,64.5,38.8,55,50.4C45.5,62,33.2,71.9,19.2,75.4C5.2,78.9,-10.5,76,-25.6,71.2C-40.7,66.4,-55.2,59.7,-64.8,48.8C-74.4,37.9,-79.1,22.8,-78.9,7.8C-78.7,-7.2,-73.6,-22.1,-65.3,-34.5C-57,-46.9,-45.5,-56.8,-33.2,-65.3C-20.9,-73.8,-7.8,-80.9,4.4,-88.5L16.6,-96.1L16.6,0L4.4,0Z" transform="translate(100 100)"></path>
    </svg>
);

// Fresco-Style Wave Divider
export const WaveDivider = ({ className, fill = "#ffffff" }) => (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={className}>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={fill}></path>
    </svg>
);

// Texture Pattern - Dot Grid
export const DotGrid = ({ className, color = "currentColor", id = "dot_pattern_fresco" }) => (
    <svg width="100%" height="100%" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id={id} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill={color} fillOpacity="0.8" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
);

// Noise Overlay for Texture (Fresco Vibe)
export const NoiseOverlay = ({ className = "absolute inset-0 opacity-[0.1] z-[0]" }) => (
    <div className={`pointer-events-none ${className}`}
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
    </div>
);

// Original Sparkle (Still fits usage)
export const Sparkle = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
);

// Loopy Arrow matching user request (Improved)
export const CurlyArrow = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Hand-drawn loop-de-loop arrow */}
        <path d="M15 25 C 45 -5, 80 30, 55 55 C 30 80, 20 30, 65 35 C 90 40, 90 85, 90 85" />
        {/* Correctly aligned downward arrowhead */}
        <path d="M78 70 L 90 85 L 102 70" />
    </svg>
);

export const BurstStar = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 L62 38 L95 28 L72 52 L90 85 L58 68 L35 95 L38 62 L5 55 L38 42 Z" />
    </svg>
);

export const CodeIcon = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M30,40 L15,50 L30,60" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M70,40 L85,50 L70,60" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60,30 L40,70" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const TerminalIcon = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="70" height="70" rx="4" strokeOpacity="0.3" />
        <path d="M30,45 L37,50 L30,55" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="42" y1="58" x2="58" y2="58" strokeLinecap="round" />
        <path d="M70,45 L63,50 L70,55" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ZigZag = ({ className }) => (
    <svg viewBox="0 0 100 25" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M5 20 L27 5 L50 20 L72 5 L95 20" />
    </svg>
);

export const CircleDoodle = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 C 20 10 10 30 10 50 C 10 80 30 90 50 90 C 80 90 90 70 90 50 C 90 30 70 10 50 10 Z" strokeDasharray="5 5" />
    </svg>
);

export const Squiggle = ({ className }) => (
    <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10 Q 20 0, 35 10 T 65 10 T 95 10" />
    </svg>
);

export const HandUnderline = ({ className }) => (
    <svg viewBox="0 0 100 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5 C 20 8, 40 2, 60 5 C 80 8, 95 3, 95 5" />
    </svg>
);
