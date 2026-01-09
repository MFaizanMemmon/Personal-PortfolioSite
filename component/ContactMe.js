'use client';
import React from "react";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiYoutube } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-20 px-6 md:px-20 relative font-sans"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 font-serif"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 font-serif">
            Get in Touch
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            I’m open for work opportunities, collaborations, or just to say hi! 
            Feel free to reach out using the form or via social links below.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-2">
              <FiMail className="text-gray-500" /> 
              <span className="font-medium">Email:</span> engineerfaizan56@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FiPhone className="text-gray-500" /> 
              <span className="font-medium">Phone:</span> +92 318 9417122
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin className="text-gray-500" /> 
              <span className="font-medium">Location:</span> Pakistan, Sindh
            </p>
          </div>

          {/* Social Media Links in one line */}
          <div className="flex flex-wrap items-center gap-4 mt-6 justify-start">
            <a href="https://www.linkedin.com/in/faizan-memon122/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-blue-600 hover:text-white border border-gray-300 text-gray-800 font-medium rounded-full shadow-sm transition">
              <FiLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/MFaizanMemmon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-blue-600 hover:text-white border border-gray-300 text-gray-800 font-medium rounded-full shadow-sm transition">
              <FiGithub /> GitHub
            </a>
            <a href="https://wa.me/923189417122" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-blue-600 hover:text-white border border-gray-300 text-gray-800 font-medium rounded-full shadow-sm transition">
              <FiPhone /> WhatsApp
            </a>
            <a href="https://www.youtube.com/@faizanengineer8811" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-blue-600 hover:text-white border border-gray-300 text-gray-800 font-medium rounded-full shadow-sm transition">
              <FiYoutube /> YouTube
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          action="https://formspree.io/f/mbdlnnyk"
          method="POST"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl space-y-6"
        >
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactMe;
