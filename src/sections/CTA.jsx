import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-[#3E2723] text-white py-16 md:py-20 px-4 md:px-6 text-center">
      
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-snug animate-bounce">
          Ready to Experience Healthy Indulgence?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-300 text-sm md:text-base animate-[pulse_2s_infinite]">
          Order your favorite ChocoVeda chocolates today. Freshly made,
          naturally sweet, and delivered with care.
        </p>

        {/* Scarcity (conversion boost) */}
        <p className="mt-2 text-yellow-300 text-xs md:text-sm">
          ⚡ Limited batches made daily — order before stock runs out!
        </p>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"

          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

          className="
            inline-block mt-6 md:mt-8 
            bg-white text-[#3E2723] 
            px-6 py-3 
            rounded-xl 
            text-base md:text-lg 
            font-medium 
            w-full md:w-auto
          "
        >
          Order on WhatsApp
        </motion.a>

      </motion.div>
    </section>
  );
};

export default CTA;