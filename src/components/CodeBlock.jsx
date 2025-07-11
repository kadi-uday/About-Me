import Typewriter from 'typewriter-effect';
import { TYPEWRITER_STRINGS } from '../utils/constants';

const CodeBlock = () => {
  return (
    <div className="w-full max-w-md min-h-20 lg:min-h-[120px] bg-gradient-to-r from-indigo-100 to-cyan-50 dark:from-[#192438] dark:to-[#12192c] text-[#4f46e5] dark:text-[#22d3ee] rounded-lg p-4 text-sm md:text-base lg:text-lg font-outfit shadow-lg">
      <Typewriter
        options={{
          strings: TYPEWRITER_STRINGS,
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
