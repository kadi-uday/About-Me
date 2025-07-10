import Typewriter from 'typewriter-effect';

const CodeBlock = () => {
  return (
    <div className="w-full max-w-md bg-[#f3f4f6] dark:bg-[#1e293b] text-[#4f46e5] dark:text-[#22d3ee] rounded-lg p-4 text-sm md:text-base lg:text-lg font-outfit shadow-lg">
      <Typewriter
        options={{
          strings: [
            `{\n  "name": "Kadi Uday",\n  "role": "Front-End Developer",\n  "skills": ["React", "Tailwind", "JavaScript"]\n}`,
            `{\n  "project": "NetflixGPT",\n  "tech": ["React", "OpenAI API"],\n  "type": "AI App"\n}`,
            `{\n  "project": "SwigEat",\n  "tech": ["React", "Tailwind"],\n  "type": "Food Delivery Clone"\n}`
          ],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default CodeBlock;
