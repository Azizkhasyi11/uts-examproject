"use client";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

const ToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-primary text-white shadow-lg"
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default ToTop;
