import { motion } from "framer-motion";

const Trust = () => {
  return (
    <section
      id="about"
      className="bg-white px-4 md:px-6 py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723]">
            Crafted by Experts. Backed by Science.
          </h2>

          <p className="mt-4 md:mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
            ChocoVeda chocolates are developed under the guidance of a certified
            dietician and an Ayurvedic doctor — combining modern nutrition with
            ancient wisdom.
          </p>

          <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Every ingredient is carefully selected to ensure not just taste, but
            real health benefits in every bite.
          </p>

          {/* Highlights */}
          <div className="mt-5 md:mt-6 flex flex-wrap gap-2 md:gap-3">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm">
              FSSAI Certified
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm">
              No Preservatives
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm">
              Doctor Formulated
            </span>
          </div>
        </motion.div>

        {/* RIGHT: INGREDIENTS */}
        <motion.div
          className="grid grid-cols-2 gap-3 md:gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            "A2 Milk",
            "Desi Jaggery",
            "Pure Ghee",
            "Soyanuts",
            "Flaxseeds",
            "Dry Fruits",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-3 md:p-4 border rounded-xl text-center bg-[#FFF3E0]/40"
            >
              <p className="text-sm md:text-base font-semibold text-[#3E2723]">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Trust;