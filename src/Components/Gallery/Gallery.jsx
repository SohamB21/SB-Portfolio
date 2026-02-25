import React, { useContext } from "react";
import { ThemeContext } from "../../context.jsx";
import { Sparkle, BurstStar, CircleDoodle, DotGrid } from "../Decorations/Decorations";
import terrainBG from "../../assets/media/terrain.svg";
import { Fade, Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    const galleryItems = [
        {
            id: 1,
            title: "GDG Devfest",
            category: "Events",
            image: "https://picsum.photos/id/10/800/600",
            size: "large", // spans 2 columns
        },
        {
            id: 2,
            title: "Startup Mahakumbh",
            category: "Competition",
            image: "https://picsum.photos/id/20/400/300",
            size: "small",
        },
        {
            id: 3,
            title: "Techfest SVU SIH",
            category: "Events",
            image: "https://picsum.photos/id/30/600/800",
            size: "tall", // spans 2 rows
        },
        {
            id: 4,
            title: "Certifications C C++",
            category: "Learning",
            image: "https://picsum.photos/id/40/600/400",
            size: "medium",
        },
        {
            id: 5,
            title: "Alagappa Conference Certifications",
            category: "Teaching",
            image: "https://picsum.photos/id/50/400/400",
            size: "small",
        },
        {
            id: 6,
            title: "FYP",
            category: "Projects",
            image: "https://picsum.photos/id/60/800/400",
            size: "wide",
        },
    ];

    return (
        <div id="Gallery" className="relative py-24 px-4 overflow-hidden" ref={ref}>
            {/* Background Layer */}
            <div className={`absolute inset-0 -z-20 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}></div>

            {/* Architectural Tech Pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.5]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="archGrid" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(-25)">
                            <line x1="0" y1="50" x2="100" y2="50" stroke={darkMode ? "#006837" : "#006837"} strokeWidth="0.5" strokeDasharray="10 10" opacity="0.2" />
                            <line x1="50" y1="0" x2="50" y2="100" stroke={darkMode ? "#F7941D" : "#F7941D"} strokeWidth="0.5" strokeDasharray="10 10" opacity="0.2" />
                            <circle cx="50" cy="50" r="2" fill="#F7941D" fillOpacity="0.6" />
                            <circle cx="0" cy="0" r="1.5" fill="#006837" fillOpacity="0.6" />
                            <path d="M 45 50 L 55 50 M 50 45 L 50 55" stroke="#006837" strokeWidth="1" opacity="0.4" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#archGrid)" />
                </svg>
            </div>

            {/* Decorative Background Elements */}
            <div className={`absolute -bottom-24 -left-24 w-96 h-96 -z-10 opacity-[0.05] ${darkMode ? 'text-cta' : 'text-cta'} rotate-45`}>
                <CircleDoodle />
            </div>

            <div className={`absolute top-1/2 right-0 w-32 h-32 -z-10 opacity-[0.03] ${darkMode ? 'text-primary' : 'text-primary'} animate-wiggle`}>
                <BurstStar />
            </div>
            <div className={`absolute bottom-1/4 left-1/4 w-32 h-32 -z-10 opacity-[0.02] ${darkMode ? 'text-cta' : 'text-cta'} rotate-12`}>
                <CircleDoodle />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* HEADER - Styled like other sections */}
                <div className="text-center mb-20 space-y-4 relative">
                    <Fade in={inView} timeout={800}>
                        <div className="relative inline-block">
                            <span className={`font-yellowtail text-4xl md:text-5xl block transform -rotate-6 ${darkMode ? "text-cta" : "text-cta"} mb-2`}>
                                Moments & Milestones!
                            </span>
                            <h1 className={`text-5xl md:text-7xl font-extrabold font-outfit uppercase tracking-tight ${darkMode ? "text-white" : "text-primary"}`}>
                                Gallery
                            </h1>
                        </div>
                    </Fade>

                    {/* Clean Texture Pattern */}
                    <div className={`absolute top-0 -right-20 -z-10 opacity-40 hidden md:block w-32 h-32 ${darkMode ? "text-primary" : "text-primary"}`}>
                        <DotGrid id="gallery_header_dots" />
                    </div>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
                    {galleryItems.map((item, index) => (
                        <Grow key={item.id} in={inView} timeout={500 + (index * 100)}>
                            <div
                                className={`group relative overflow-hidden rounded-3xl border-[1.25px] transition-all duration-700 hover:shadow-2xl hover:-translate-y-2
                  ${darkMode ? 'border-slate-800 bg-slate-800/20' : 'border-primary/10 bg-white'}
                  ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${item.size === 'tall' ? 'md:row-span-2' : ''}
                  ${item.size === 'wide' ? 'md:col-span-2' : ''}
                `}
                            >
                                {/* Image Wrap - No Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    {/* Subtler gradient just for text legibility on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Topographic Texture Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-[0.1] mix-blend-overlay"
                                    style={{
                                        backgroundImage: `url(${terrainBG})`,
                                        backgroundSize: '400px',
                                    }}
                                />

                                {/* Content - Reveal on hover */}
                                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                                    <div className="transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <span className="font-yellowtail text-xl text-cta mb-2 block">
                                            {item.category}
                                        </span>
                                        <h3 className="text-3xl font-black font-outfit text-white uppercase tracking-tight leading-[0.8] drop-shadow-lg">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                                    <BurstStar className="w-8 h-8 text-white/50" />
                                </div>
                            </div>
                        </Grow>
                    ))}
                </div>

                {/* Footer Accent */}
                <div className="mt-16 text-center">
                    <p className={`font-outfit text-sm uppercase tracking-widest ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        And many more memories in the making...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
