import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiJavascript1, DiNodejsSmall } from "react-icons/di";
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2 }}
        className="my-10 text-center text-4xl text-red-700 font-bold"
      >
        Technologies
      </motion.h2>

      {/* --- First Row --- */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-10 mt-6"
      >
        {/* HTML */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2.5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-orange-300 to-black-100 shadow-lg shadow-gray-500 rounded-2xl"
        >
          <AiFillHtml5 className="text-8xl text-orange-500 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-600">HTML5</p>
        </motion.div>

        {/* CSS */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2.5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-blue-500 to-black-300 shadow-lg shadow-gray-400 rounded-2xl"
        >
          <DiCss3Full className="text-8xl text-blue-600 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-600">CSS3</p>
        </motion.div>

        {/* Tailwind */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(4)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-green-400 to-black-100 shadow-lg shadow-gray-300 rounded-2xl"
        >
          <SiTailwindcss className="text-8xl text-cyan-400 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-500">Tailwind CSS</p>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-yellow-300 to-black-100 shadow-lg shadow-gray-200 rounded-2xl"
        >
          <DiJavascript1 className="text-8xl text-yellow-500 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-500">JavaScript</p>
        </motion.div>

        {/* React */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2.5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-green-300 to-black-100 shadow-lg shadow-gray-500 rounded-2xl"
        >
          <RiReactjsLine className="text-8xl text-cyan-400 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-500">React</p>
        </motion.div>
      </motion.div>

      {/* --- Second Row --- */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-10 mt-10"
      >
        {/* Firebase */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-orange-400 to-black-100 shadow-lg shadow-gray-500 rounded-2xl"
        >
          <SiFirebase className="text-8xl text-orange-400 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-500">Firebase</p>
        </motion.div>

        {/* Node.js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(3)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-green-500 to-black-100 shadow-lg shadow-gray-400 rounded-2xl"
        >
          <DiNodejsSmall className="text-8xl text-green-700 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-500">Node.js</p>
        </motion.div>

        {/* Express.js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(3.5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-gray-300 to-black-100 shadow-lg shadow-gray-500 rounded-2xl"
        >
          <SiExpress className="text-8xl text-gray-800 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-500">Express.js</p>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(4)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-green-300 to-black-100 shadow-lg shadow-gray-400 rounded-2xl"
        >
          <SiMongodb className="text-8xl text-green-600 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-500">MongoDB</p>
        </motion.div>

        {/* Next.js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(3.5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-black to-gray-700 shadow-lg shadow-gray-600 rounded-2xl"
        >
          <SiNextdotjs className="text-8xl text-white drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-300">Next.js</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
