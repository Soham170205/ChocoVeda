import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-[#2a1a17] text-gray-300 py-8 md:py-10 px-4 md:px-6">

            <motion.div
                className="max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >

                {/* Brand */}
                <h3 className="text-xl md:text-2xl font-bold text-white">
                    ChocoVeda
                </h3>

                <p className="mt-3 md:mt-4 text-sm">
                    Indulgence Meets Intelligence.
                </p>

                {/* Info */}
                <div className="mt-5 md:mt-6 text-xs md:text-sm space-y-1">
                    <p>FSSAI Certified</p>
                    <p>Shelf Life: 15 Days</p>
                    <p>Store in a cool, airtight container</p>
                </div>

                {/* Divider */}
                <div className="mt-6 border-t border-gray-700 w-full max-w-xs mx-auto"></div>

                {/* Copyright */}
                <p className="mt-4 text-[11px] md:text-xs text-gray-500">
                    © {new Date().getFullYear()} ChocoVeda. All rights reserved.
                </p>
                <a
                    href="https://wa.me/91XXXXXXXXXX"
                    className="block mt-4 text-green-400 text-sm"
                >
                    Chat with us on WhatsApp →
                </a>

            </motion.div>
        </footer>
    );
};

export default Footer;