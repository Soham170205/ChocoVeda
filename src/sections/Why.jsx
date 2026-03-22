import { motion } from "framer-motion";

const features = [
  {
    title: "No Refined Sugar",
    desc: "Sweetened naturally with desi jaggery for a healthier alternative.",
  },
  {
    title: "No Preservatives",
    desc: "Freshly made chocolates without harmful additives.",
  },
  {
    title: "A2 Milk & Pure Ghee",
    desc: "Easier digestion with traditional, nutrient-rich ingredients.",
  },
  {
    title: "Ayurvedic Nutrition",
    desc: "Infused with soyanuts & flaxseeds for functional health benefits.",
  },
  {
    title: "No Artificial Additives",
    desc: "No colors, sweeteners, or emulsifiers — 100% clean.",
  },
  {
    title: "Rich in Dry Fruits",
    desc: "Packed with almonds, cashews, berries & more.",
  },
];

const Why = () => {
  return (
    <section
      id="about"
      className="bg-white px-4 md:px-6 py-16 md:py-20"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#3E2723]">
          What Makes Our Chocolates Different?
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Every bite of ChocoVeda is crafted with intention — combining taste,
          nutrition, and purity.
        </p>

        {/* Grid */}
        <motion.div
          className="mt-10 md:mt-12 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >

          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="p-5 md:p-6 rounded-2xl border bg-[#FFF3E0]/40 hover:shadow-lg transition"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#3E2723]">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Why;