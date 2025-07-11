import React, { useState } from "react";
import skillCategories from "../utils/skillCategories";

const TechSkills = () => {
    const [selectedCategory, setSelectedCategory] = useState("Frontend");

    return (
        <section className="min-h-screen px-4 sm:px-6 py-8 lg:py-12 bg-white dark:bg-[#0e1628] text-black dark:text-white transition-all duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit text-center mb-10 text-indigo-600 dark:text-cyan-400">
                    Technical Skills
                </h2>

                {/* Tabs */}
                <div className="flex justify-center gap-4 sm:gap-6 mb-8 flex-wrap">
                    {Object.keys(skillCategories).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform border dark:border-gray-600
                ${selectedCategory === category
                                    ? "bg-indigo-600 text-white dark:bg-indigo-600"
                                    : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-600 hover:scale-95"}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {skillCategories[selectedCategory].map((skill, idx) => (
                        <div
                            key={idx}
                            className="p-4 rounded-lg shadow-md bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-[#131b2a] dark:to-[#1e273f] flex flex-col gap-2 transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                {skill.icon}
                                <div>
                                    <h4 className="font-bold text-md sm:text-lg">{skill.name}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">
                                        {skill.level}% Proficiency
                                    </p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded">
                                <div
                                    className={`h-3 rounded bg-gradient-to-r ${skill.gradient}`}
                                    style={{ width: `${skill.level}%`, transition: "width 0.5s ease" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSkills;
