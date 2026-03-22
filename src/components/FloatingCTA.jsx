import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <motion.a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"

      // 🎬 Entry Animation
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}

      // ✨ Hover + Tap (mobile friendly)
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}

      className="
        fixed 
        bottom-4 md:bottom-6 
        right-4 md:right-6 
        bg-green-500 
        text-white 
        px-4 md:px-5 
        py-2.5 md:py-3 
        rounded-full 
        shadow-lg 
        z-50 
        flex items-center gap-2
      "
    >
      <span className="text-lg">💬</span>
      <span className="text-sm md:text-base font-medium">
        Order Now
      </span>
    </motion.a>
  );
};

export default FloatingCTA;