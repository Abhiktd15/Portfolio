import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { RevealOnScroll } from "../RevealOnScroll";
import {motion} from 'motion/react'

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl text-start font-bold mb-6 ">
            <span className="text-purple-700 text-3xl block text-start font-mono">Hello, I'm</span>Abhishek Bhardwaj
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1vZYyjZ8Gn4FpWEgBgzaTRqF_cOdAzK-g/view?usp=sharing" target='_blank'
              className="bg-purple-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
              My Resume
            </a>
            <a
              href="#projects"
              className="border border-gray-100/10 text-white py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-1 hover:bg-gray-100/10"
            
            >
              View Projects
            </a>
          </div>
          <div className="flex items-center justify-center mt-10 gap-5 text-3xl">
            <a href="https://github.com/Abhiktd15" target="_blank">
              <FiGithub className="hover:cursor-pointer hover:scale-105 hover:-translate-y-1"/>
            </a>
            <a href="https://linkedin.com/in/Abhiktd15" target="_blank">
              <FiLinkedin className="hover:cursor-pointer hover:scale-105 hover:-translate-y-1"/>
            </a>
            <a href="#contact" >
              <FiMail className="hover:cursor-pointer hover:scale-105 hover:-translate-y-1"/>
            </a>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
