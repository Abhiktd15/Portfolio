import { motion } from 'motion/react';
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
                    { name: "HTML5", icon: "🌐" },
                    { name: "CSS3", icon: "🎨" },
                    { name: "Tailwind CSS", icon: "💨" },
                    { name: "JavaScript", icon: "⚡" },
                    { name: "TypeScript", icon: "🔷" },
                    { name: "React", icon: "⚛️" },
                    { name: "Redux", icon: "🔄" },
                    { name: "Framer Motion", icon: "🎭" },
                    { name: "Responsive Design", icon: "📱" },
                    { name: "REST API Integration", icon: "🔌" },
                  ];

  const backendSkills = [
                    { name: "Node.js", icon: "🟢" },
                    { name: "Express", icon: "🚂" },
                    { name: "MongoDB", icon: "🍃" }, 
                    { name: "Mongoose", icon: "🧬" },
                    { name: "API Development (REST)", icon: "🔗" },
                    { name: "Authentication (JWT)", icon: "🔐" },
                    { name: "Firebase", icon: "🔥" },
                    { name: "Server-Side Routing", icon: "🧭" }
                  ]; 
  const tools = [
                    { name: "Git", icon: "🔧" },
                    { name: "GitHub", icon: "🐙" },
                    { name: "CI/CD", icon: "🔄" },
                    { name: "Figma", icon: "🎨" },
                    { name: "Vercel", icon: "▲" },
                    { name: "Postman", icon: "📬" },
                    { name: "Visual Studio Code", icon: "🖊️" },
                    { name: "Jira", icon: "📋" },
                    { name: "CI/CD (GitHub Actions)", icon: "🚀" },
                    { name: "Netlify", icon: "🌐" },
                    { name: "Command Line (CLI)", icon: "💻" }
                  ]
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-white  text-center">
            {" "}
            About Me
          </h2>
          <div className="mb-8 border-t-4 border-purple-700 w-20 mx-auto "></div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-xl">
              I'm a passionateMERN Stack Developer with hands-on experience building full-stack applications and scalable REST APIs. Proven ability to collaborate in remote & GitHub Profile
              environments, develop responsive UIs, and deliver robust backend services.
            </p>

            <div className="">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              className="rounded-xl p-6 ">
                <h3 className="text-xl font-bold mb-4 border-l-4 pl-4 border-purple-700"> Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: key * 0.05 }}
                      viewport={{ once: true }}
                      key={key}
                      className="flex flex-col items-center  border border-gray-500  hover:bg-purple-700/10 hover:-translate-y-0.5 hover:border-purple-700 text-white py-3 px-6 rounded-lg text-base hover:cursor-pointer"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-bold text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              className="rounded-xl p-6 ">
                <h3 className="text-xl font-bold mb-4  border-l-4 pl-4 border-purple-700"> Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: key * 0.05 }}
                      viewport={{ once: true }}
                      key={key}
                      className="flex flex-col items-center  border border-gray-500  hover:bg-purple-700/10 hover:-translate-y-0.5 hover:border-purple-700 text-white py-3 px-6 rounded-lg text-base hover:cursor-pointer"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-bold text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              className="rounded-xl p-6 ">
                <h3 className="text-xl font-bold mb-4  border-l-4 pl-4 border-purple-700"> Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, key) => (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: key * 0.05 }}
                      viewport={{ once: true }}
                      key={key}
                      className="flex flex-col items-center  border border-gray-500  hover:bg-purple-700/10 hover:-translate-y-0.5 hover:border-purple-700 text-white py-3 px-6 rounded-lg text-base hover:cursor-pointer"
                    >
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="font-bold text-sm">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 border-b-2 w-fit border-purple-700"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  <strong className="text-gray-300"> B.Tech in Information Technology </strong> - AKGEC (2020-2024)
                </li>
                <li>
                  <strong className="text-gray-300">Web Development </strong> – Focused on building responsive front-end and scalable back-end web applications using JavaScript, React, and Node.js.
                </li>
                <li>
                  <strong className="text-gray-300">Software Engineering </strong> – Explored SDLC, version control, modular coding practices, and software project management.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 border-b-2 w-fit border-purple-700"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold">
                    {" "}
                    Full Stack Developer at StratosAlly (June 2024 - Present){" "}
                  </h4>
                  <ul className=" list-disc list-inside text-gray-400 ">
                    <li>
                      Built and maintained full-stack web application using React.js, Tailwind CSS, Node.js, and Express.js.
                    </li>
                    <li>
                      Created responsive UI components and integrated them with RESTful APIs.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
