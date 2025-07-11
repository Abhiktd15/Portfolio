import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
// import emailjs from "emailjs-com";
import { motion } from "motion/react";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/work.abhiktd15@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            className="px-4 w-full  md:w-5xl  p-6 mb-4">
            <h2 className="text-4xl font-bold mb-2 text-white text-center">
              {" "}
              Get In Touch
            </h2>
            <div className="border-t-4 mb-3 w-24 mx-auto border-purple-700"></div>
            <p className="text-gray-300 font-medium text-center">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
          </motion.div>
          <div className="px-4 max-w-4xl mx-auto flex max-md:flex-col gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              className="w-1/2  max-md:w-full">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="text-gray-400/70 mb-4 text-left">
                  Feel free to reach out through any of the following methods. I'm always open to discussing new
                  projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-700/20 p-3 rounded-full text-purple-700">
                      <FiMail size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a
                        href="mailto:work.abhiktd15@gmail.com"
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        work.abhiktd15@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-700/20 p-3 rounded-full text-purple-700">
                      <FiLinkedin size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <a
                        href="https://linkedin.com/in/Abhiktd15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        linkedin.com/in/Abhiktd15
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-700/20 p-3 rounded-full text-purple-700">
                      <FiGithub size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <a
                        href="https://github.com/Abhiktd15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        github.com/Abhiktd15
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-50/15 rounded-md bg-black focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-50/15 rounded-md bg-black focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-50/15 rounded-md bg-black focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-50/15 rounded-md bg-black focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-purple-700 rounded-lg py-2 font-semibold hover:bg-purple-800">
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
                {submitted && (
                  <p className="mt-4 text-green-600">✅ Your message has been sent!</p>
                )}
              </motion.div>
          </div>
      </RevealOnScroll>
    </section>
  );
};
