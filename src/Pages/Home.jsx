import React from "react";
import {MousePointerClick ,AudioLines} from 'lucide-react';

const skillBar = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "SQL",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Git",
    "GitHub",
];

const Home = () => {
    return (
        <div className="container mx-auto h-screen flex flex-col justify-center items-center text-center p-5">
            <h1 className="text-2xl md:text-5xl font-bold mb-6 drop-shadow-md">Welcome to NUTTAWIPHA's Portfolio</h1>
            <p className="text-base md:text-lg text-gray-700 mb-4">Hi! I'm Nuttawipha Tangroe, <br class="md:hidden" /> a passionate Frontend Developer / Full-stack Developer.</p>
            <p className="text-base md:text-lg text-gray-700">Explore my projects, contributions, <br class="md:hidden" /> and get to know more about me below.</p>
            <div className="mt-8 flex items-center justify-center">
                <a href="#about" className="inline-block bg-[#41403f] text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors">
                    Learn More About Me
                </a>
                <a href="/resume-Nuttawipha-Tangroe.pdf" download="Resume_NuttawiphaTangroe_Developer.pdf" className="inline-block border-2 border-[#41403f] text-[#41403f] px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 hover:text-white hover:border-yellow-600 transition-all ml-4">
                    Download My Resume
                </a>
            </div>
            <div className="mt-6">
                <a href="#contact" className="text-gray-500 hover:text-yellow-600 transition-colors underline underline-offset-4">
                    View Resume with Google Drive <MousePointerClick className="inline-block w-5 h-5 ml-1" />
                </a>
            </div>
            <p className="text-base md:text-lg text-gray-300 mt-[60px]">
                <AudioLines className="inline-block w-5 h-5 mr-2 text-blue-300" />
                My Skills 
                <AudioLines className="inline-block w-5 h-5 ml-2 text-blue-300" />
            </p>
            <div className="overflow-hidden w-full py-4 ">
                <div className="animate-marquee inline-flex whitespace-nowrap items-center gap-4">
                    {skillBar.map((skill, index) => (
                        <span key={`skill-${index}`} >
                            <span className="text-gray-700 px-4 py-2 rounded-full font-semibold shadow-sm">{skill}</span>
                            <span className="text-blue-300 pl-4">•</span>
                        </span>
                    ))}
                    {skillBar.map((skill, index) => (
                        <span key={`skill-${index}`} >
                            <span className="text-gray-700 px-4 py-2 rounded-full font-semibold shadow-sm">{skill}</span>
                            <span className="text-blue-300 pl-4">•</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;