import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
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
    <div className="pb-16 ">
      <motion.h2
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2 }}
        className="my-10 text-center text-4xl  text-red-700"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap items-center justify-center gap-10 mt-2 "
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2.5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-orange-300 to-black-100 shadow-lg shadow-gray-500 "
        >
          <AiFillHtml5 className="text-8xl text-orange-500 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-600 ">
            HTML5
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2.5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-blue-500 to-black-300 shadow-lg shadow-gray-400 "
        >
          <DiCss3Full className="text-8xl text-blue-600 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-600">
            CSS3
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(4)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-green-400 to-black-100 shadow-lg shadow-gray-300 "
        >
          <SiTailwindcss className="text-8xl text-cyan-400 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-500">
            Tailwind CSS
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-yellow-300 to-black-100 shadow-lg shadow-gray-200 "
        >
          <DiJavascript1 className="text-8xl text-yellow-500 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-500">
            JavaScript
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-orange-400 to-black-100 shadow-lg shadow-gray-500 "
        >
          <SiFirebase className="text-8xl text-orange-400 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-500">
            Firebase
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconsVariants(2.5)}
          className="p-4 hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-green-300 to-black-100 shadow-lg shadow-gray-500 "
        >
          <RiReactjsLine className="text-8xl text-cyan-400 drop-shadow-lg" />
          <p className="text-center mt-2 text-lg font-semibold text-gray-500">
            React
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
