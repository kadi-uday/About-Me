import React from "react";
import projectsData from "../utils/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section className="min-h-screen px-6 py-12 md:py-14 lg:py-16 bg-white dark:bg-[#0e1628] text-black dark:text-white transition-all duration-300">
            <div className="max-w-full mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit text-center mb-10 text-indigo-600 dark:text-cyan-400">
                    PROJECTS
                </h2>

                <div className="flex flex-col gap-16">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;