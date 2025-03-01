import { PROJECTS } from "../constants";
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className="pb-12 bg-gradient-to-b from-black to-black text-white">
      <motion.h2 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className="my-20 text-center text-4xl  text-red-800">Projects</motion.h2>
      <div className="flex flex-wrap justify-center gap-12">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 max-w-md"
          >
           <motion.div
           whileInView={{opacity: 1, x:0}}
           initial={{opacity:0, x:-100}}
           transition={{duration:1}}
           >
           <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
           </motion.div>
            <motion.div 
            whileInView={{opacity: 1, y:0}}
            initial={{opacity:0, y:100}}
            transition={{duration:0.5}}
            
            className="p-6">
              <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              {project.technologies.map((tech, index) =>(
                <span className="mr-2 rounded bg-stone-900 p-2
                text-sm fonr-medium text-stone-300 " key={index}>
                    {tech}
                </span>
            ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
