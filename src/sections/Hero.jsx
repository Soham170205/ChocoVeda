import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 overflow-hidden">

      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/chocolate.mp4" type="video/mp4" />
      </video>

      {/* 🌓 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🧠 Content */}
      <motion.div
        className="relative z-10 max-w-4xl text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Indulge in Chocolate. <br className="hidden md:block" />
          Without the Guilt.
        </h1>

        {/* Subtext */}
        <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-200">
          Crafted with A2 milk, desi jaggery, and Ayurvedic nutrition —
          chocolates that nourish as much as they delight.
        </p>

        {/* Offer */}
        <p className="mt-2 text-yellow-300 text-sm md:text-base font-medium">
          🎉 Limited Launch Offer: Get 10% OFF on your first order
        </p>

        {/* Buttons */}
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-3 md:gap-4 justify-center">

          <motion.a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

            className="
              w-full md:w-auto
              bg-white text-black 
              px-6 py-3 
              rounded-xl 
              text-sm md:text-lg 
              font-medium
            "
          >
            Order on WhatsApp
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

            className="
              w-full md:w-auto
              border border-white 
              px-6 py-3 
              rounded-xl 
              text-sm md:text-lg 
              hover:bg-white hover:text-black 
              transition
            "
          >
            Explore Chocolates
          </motion.button>

        </div>

      </motion.div>
    </section>
  );
};

export default Hero;