import React from 'react';

const Contributions = () => {
    const projects = [
        {
            id: 1,
            title: "Personal Portfolio",
            description: "A responsive portfolio website built with React and Vite, showcasing frontend development skills.",
            link: "https://github.com/nuttawipha"
        },
        {
            id: 2,
            title: "Future Project",
            description: "An upcoming project focusing on advanced JavaScript and API integration.",
            link: "#"
        },
        {
            id: 3,
            title: "Future Project",
            description: "An upcoming project focusing on advanced JavaScript and API integration.",
            link: "#"
        },
        {
            id: 4,
            title: "Future Project",
            description: "An upcoming project focusing on advanced JavaScript and API integration.",
            link: "#"
        }
    ];

    return (
        <div className="container h-[50vh] mx-auto px-4 mt-[100px]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-[#ffd700] mb-9 md:text-left drop-shadow-md pl-2">Projects & Contributions</h2>
                <div className="flex overflow-x-auto gap-6 pb-4 snap-x min-h-[450px] py-5 px-2">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-[#baae82]/60 p-6 rounded-xl border-2 border-[#cdc7a5]/40 hover:scale-105 transition-transform min-w-[300px] md:min-w-[350px] snap-center">
                            <h3 className="text-xl font-bold text-[#ffd700] mb-3">{project.title}</h3>
                            <p className="text-white text-sm leading-relaxed">{project.description}</p>
                            <a href={project.link} className="inline-block mt-4 text-[#5f1212] font-semibold underline hover:text-black" target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contributions;