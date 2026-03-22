import { motion } from "framer-motion";

const products = [
  {
    name: "Dryfruit A2 Milk Chocolate",
    desc: "Rich blend of almonds, cashews & walnuts.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
  },
  {
    name: "Fruit & Nut Chocolate",
    desc: "Cranberries, nuts & natural sweetness.",
    image: "https://images.unsplash.com/photo-1589985270958-b3f8b9b9a8b0",
  },
  {
    name: "Royal Mix Chocolate",
    desc: "Almonds, pistachio & premium ingredients.",
    image: "https://images.unsplash.com/photo-1612197529022-2f6b4b1d0c1f",
  },
  {
    name: "Dates & Raisins Delight",
    desc: "Naturally sweet & energy-rich.",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60",
  },
  {
    name: "Coconut Bite",
    desc: "Tropical coconut with creamy texture.",
    image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="bg-[#FFF3E0] px-4 md:px-6 py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#3E2723]">
          Our Collection
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Crafted for every taste. Healthy indulgence in every bite.
        </p>

        {/* Animated Grid */}
        <motion.div
          className="mt-10 md:mt-12 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 md:h-56 object-cover"
              />

              {/* Content */}
              <div className="p-4 md:p-5 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-[#3E2723]">
                  {product.name}
                </h3>

                <p className="mt-2 text-gray-600 text-xs md:text-sm">
                  {product.desc}
                </p>

                {/* CTA */}
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20order%20ChocoVeda%20chocolates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block mt-4 
                    bg-[#3E2723] text-white 
                    px-4 py-2 
                    rounded-lg 
                    text-xs md:text-sm 
                    hover:opacity-90 
                    hover:shadow-md 
                    transition
                  "
                >
                  Order on WhatsApp
                </a>
              </div>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Products;