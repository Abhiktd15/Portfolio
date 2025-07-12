import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "motion/react";

export const Projects = () => {

  const projects =[
  {
    icon: 'https://github.com/user-attachments/assets/669ad727-0334-4b5d-8b20-8945b548d052',
    title: 'E‑commerce Website',
    description: 'A full‑stack MERN e‑commerce application with JWT auth, product filtering, admin dashboard and cart management.',
    stack: ["React", "Node.js", "MongoDB", "Redux", "JWT","Express Js","Tailwind Css","Cookies","Mongoose"],
    codeUrl: 'https://github.com/Abhiktd15/EcomWebsite',
    demoUrl: 'https://ecom-website-gold.vercel.app/'  // add live demo link if available
  },
  {
    icon: 'https://github.com/user-attachments/assets/94284ebc-60a6-4c19-84c9-3fa5e19705af',
    title: 'Blogging Website',
    description: 'A dynamic MERN blog platform allowing users to create, edit, delete posts, and read others’ blogs.',
    stack: ["React", "Node.js", "MongoDB", "Redux", "JWT-Authentication","Tailwind Css","Express Js"],
    codeUrl: 'https://github.com/Abhiktd15/BloggingWebsite',
    demoUrl: 'https://blogging-website-two-sand.vercel.app/'
  },
  {
    icon: 'https://github.com/user-attachments/assets/463f5725-8290-4c94-ab41-7132c3d8f066',
    title: 'Job Portal Web App',
    description: 'A full‑featured job portal for seekers and employers with auth, job listing, and applications.',
    stack: ["React", "Node.js" ,"Express Js", "MongoDB","Mongoose", "JWT","Cookies","Tailwind Css","Redux"],
    codeUrl: 'https://github.com/Abhiktd15/JobPortalFrontend',
    demoUrl: 'https://job-portal-frontend-ochre.vercel.app/'
  },
  {
    icon: 'https://github.com/abhishekbahr/Budget-Tracking-App/assets/96624688/3ca0850e-970c-49e3-9470-e920b1edb914',
    title: 'Budget Tracking App',
    description: 'A React application for tracking income and expenses with a clean, interactive UI.You can add expense track the record of it.',
    stack: ["React","HTML5","CSS3","Tailwind Css","Version Control","Git","Github"],
    codeUrl: 'https://github.com/Abhiktd15/ExpenseTracker',
    demoUrl: ''
  },
  {
    icon: 'https://github.com/user-attachments/assets/2940734f-bc9c-4975-af12-81a8aef924a0',
    title: 'Freelance Project',
    description: 'A React application  cybersecurity-focused learning platform designed to provide knowledge in cyber-security.',
    stack: ["React","HTML5","CSS3","Tailwind Css","Git","Version Control"],
    codeUrl: '',
    demoUrl: 'https://shieldmaze.com'
  },

]
  
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-white text-center">
            {" "}
            My Projects
          </h2>
          <div className="border-t-4 mb-8 w-24 mx-auto border-purple-700"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              projects.map((item,key) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: key * 0.1 }}
                    viewport={{ once: true }} 
                    key={key}
                    className="
                    glass h-full rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                    transition-all
                  "
                  >
                    <div className="w-full ">
                      <img src={item.icon} className="w-full h-52 rounded-t-xl hover:touch-pinch-zoom"/>
                    </div>

                    <div className=" p-6">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-base leading-4 mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.stack.map((tech, key) => (
                          <span
                            key={key}
                            className="
                              bg-blue-500/10 text-purple-700 py-1 px-3 
                              rounded-full text-sm
                              transition
                              hover:bg-purple-700/20 hover:-translate-y-0.5
                              hover:cursor-pointer
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 items-center">
                        {item.codeUrl && 
                          <a
                            href={item.codeUrl}
                            target="_blank"
                            className=" flex items-center font-mono gap-2 px-2 py-1 border border-gray-100/20 hover:bg-gray-200/10 text-base rounded-md text-white  transition-colors my-4"
                          >
                            <FiGithub/>
                            <p>Code</p>
                          </a>
                        }
                        {item.demoUrl && 
                          <a
                            href={item.demoUrl}
                            target="_blank"
                            className="  flex items-center gap-2 px-2 py-1 hover:bg-purple-600 text-base border border-purple-700/5 rounded-md text-white bg-purple-700  transition-colors my-4"
                          >
                            <HiOutlineExternalLink /> 
                            <p>Demo</p>
                          </a>
                        }
                      </div>
                    </div>
                  </motion.div>
                )
              })
            }
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
