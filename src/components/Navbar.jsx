import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Products", id: "products" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#FFF3E0]/90 backdrop-blur-md shadow-sm z-50">
      
      {/* Main Bar */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-bold text-[#3E2723]">
          ChocoVeda
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[#3E2723] font-medium">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              className="relative group transition"
            >
              {item.name}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3E2723] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20order%20ChocoVeda%20chocolates"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-[#3E2723] text-white px-4 py-2 rounded-lg hover:opacity-90 transition hover:shadow-md"
        >
          Order Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#3E2723]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FFF3E0] px-4 pb-4 flex flex-col gap-4 text-[#3E2723] font-medium"
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="py-2 border-b border-gray-200"
              >
                {item.name}
              </a>
            ))}

            {/* CTA */}
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20order%20ChocoVeda%20chocolates"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3E2723] text-white px-4 py-3 rounded-lg text-center mt-2"
            >
              Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;