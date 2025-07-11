import React from 'react'
import { ABOUT_STATS } from '../utils/constants';

const AboutDescription = () => {
    return (
        <div className="flex-1 text-center lg:text-left max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit mb-6 text-indigo-600 dark:text-cyan-400">
                ABOUT ME
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-outfit">
                I'm <span className="font-semibold text-indigo-600 dark:text-cyan-300">Kadi Uday</span>, a final-year B.Tech student in Artificial Intelligence and Data Science at St. Martin’s Engineering College, Hyderabad, with a CGPA of <strong>8.29</strong>.
                <br /><br />
                I’m passionate about crafting scalable, user-friendly web apps using modern technologies like React.js, Redux Toolkit, and Tailwind CSS. Over the past year, I've built production-ready projects like <strong>SwigEat</strong>, <strong>NetflixGPT</strong>, and a <strong>YouTube Clone</strong>, gaining hands-on experience in API integration, responsive design, and real-world UI/UX.
                <br /><br />
                I enjoy building things that solve real problems, and I’m especially fascinated by the intersection of frontend development and AI. My academic journey also includes exploring machine learning and data science fundamentals, which I often blend into my projects.
                <br /><br />
                I'm also continuously upskilling through online courses, internships, and community contributions — all while aiming for excellence and preparing for opportunities at top-tier tech companies.
            </p>

            {/* Info Cards */}
            <div className="mt-8 flex flex-col w-full md:flex-row  gap-6 justify-center lg:justify-start">
                {ABOUT_STATS.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-full sm:w-1/2 md:w-36 bg-gradient-to-r from-indigo-100 to-cyan-50 dark:from-[#192438] dark:to-[#12192c] border border-transparent dark:border-[#334155] px-4 py-3 rounded-lg text-center shadow-md transition-transform duration-300 hover:scale-105"
                    >
                        <h4 className="text-xl font-bold text-indigo-700 dark:text-cyan-400">{item.value}</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{item.label}</p>
                    </div>

                ))}
                <div className="w-full sm:w-1/2 md:w-36 bg-indigo-700 dark:bg-yellow-600 border-[2px] border-indigo-900 dark:border-yellow-700 px-4 py-3 rounded-lg text-center shadow-md transition-transform duration-300 hover:scale-105">
                    <a
                        href="/Kadi_Uday_Resume.pdf"
                        download
                        className="block text-xl font-bold text-white hover:underline"
                    >
                        Resume
                    </a>
                    <p className="text-sm text-white mt-1">Download</p>
                </div>


            </div>
        </div>
    )
}

export default AboutDescription;
