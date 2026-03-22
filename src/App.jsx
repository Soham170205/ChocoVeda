import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Why from "./sections/Why";
import Products from "./sections/Products";
import Trust from "./sections/Trust";
import CTA from "./sections/CTA";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <Products />
      <Trust />
      <CTA />
      <FloatingCTA />
      <Footer />
    </>
  );
}

export default App;