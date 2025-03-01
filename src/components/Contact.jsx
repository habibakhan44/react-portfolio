import React, { useRef } from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // EmailJS integration code here
  };

  return (
    <div className="pb-20 px-6">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl text-red-700"
      >
        Contact me for collaboration
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7 }}
        className="text-center text-gray-300 mb-10"
      >
        Reach out today to discuss your project needs and start collaborating on something amazing!
      </motion.p>

      <div className="max-w-3xl mx-auto">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          <motion.div variants={fadeInUp} className="text-center">
  <label className="block text-gray-300 mb-2">Name</label>
  <motion.input
    type="text"
    name="user_name"
    placeholder="Your Name"
    className="w-2/3 md:w-1/2 p-3 rounded-md bg-transparent border border-gray-600 text-gray-300 focus:outline-none shadow-[0_0_10px_rgba(255,0,0,0.4)]"
    required
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  />
</motion.div>

<motion.div variants={fadeInUp} className="text-center mt-4">
  <label className="block text-gray-300 mb-2">Email</label>
  <motion.input
    type="email"
    name="user_email"
    placeholder="Your Email"
    className="w-2/3 md:w-1/2 p-3 rounded-md bg-transparent border border-gray-600 text-gray-300 focus:outline-none shadow-[0_0_10px_rgba(255,0,0,0.4)]"
    required
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  />
</motion.div>

<motion.div variants={fadeInUp} className="text-center mt-4">
  <label className="block text-gray-300 mb-2">Message</label>
  <motion.textarea
    name="message"
    placeholder="Your Message"
    className="w-2/3 md:w-1/2 p-3 rounded-md bg-transparent border border-gray-600 text-gray-300 focus:outline-none shadow-[0_0_10px_rgba(255,0,0,0.4)] h-24 transition-all duration-300 ease-in-out focus:h-40"
    required
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  ></motion.textarea>
</motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-red-800 text-white rounded-full hover:bg-red-700 transition"
            >
              Submit
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
