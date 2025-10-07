import ProfilePic from "../assets/habibaprofile.png";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Hero = () => {
  return (
    <div className="pb-8 lg:mb-36 bg-gradient-to-br from-black-900 via-black to-gray-800 ">
      <div className="flex flex-wrap lg:flex-row-reverse lg:gap-auto items-start">
        
       
<div className="flex items-start gap-2">
  <motion.img 
    src={ProfilePic} 
    alt="Habiba Khan" 
    className="rounded-3xl w-80 h-96 object-cover border-3 -mt-6 mr-10 ml-0  shadow-lg shadow-red-800"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1.5 }}
  />
</div>


        {/* Text Section */}
        <div className="w-full lg:w-1/2 ml-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start lg:m-6"
          >
            <motion.h2 
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-7xl text-white shadow-lg "
            >
               Habiba <span className="text-red-600">Khan</span>
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="text-3xl tracking-tight"
            >
              <ReactTyped
                strings={["Full-Stack Developer", "Web Enthusiast"]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="text-red-600" 
              />              
            </motion.span>
            
            <motion.p 
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-lg leading-relaxed tracking-tighter text-gray-300 "
            >
              I am a passionate Full Stack Developer with a knack for crafting beautiful and user-friendly web applications. With a focus on responsive design and accessibility, I aim to create engaging user experiences. Let's build something amazing together!      
            </motion.p>

            <motion.a 
              variants={childVariants}
              href="/Habiba CV (1).pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              download 
              className="bg-white rounded-full px-5 py-4 mt-4 text-sm text-stone-800 shadow-md hover:scale-105 transition-transform"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
