import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-white dark:bg-[#10141e] px-6 md:px-12 lg:px-32 py-16 text-black dark:text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
          <img
            src="https://github.com/kadi-uday.png"
            alt="Kadi Uday"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Info */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-indigo-600 dark:text-cyan-400 mb-4">
            About Me
          </h2>
          <p className="text-lg font-outfit leading-relaxed text-gray-700 dark:text-gray-300">
            I’m a passionate <span className="font-semibold text-indigo-500 dark:text-cyan-300">Front-End Developer</span> currently pursuing B.Tech in Artificial Intelligence and Data Science. I love crafting clean, responsive interfaces using modern tech like React and Tailwind CSS.
            <br /><br />
            My interests lie in combining UI with intelligence — exploring AI-powered UIs and seamless user experiences.
          </p>

          {/* Skills Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold font-outfit mb-2">Skills</h3>
            <hr className="border-t-2 border-indigo-500 dark:border-cyan-400 w-24 mb-4" />
            <div className="flex flex-wrap gap-3 text-sm">
              {["React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Git", "OpenAI API", "Responsive Design"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-cyan-800 dark:text-white rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
