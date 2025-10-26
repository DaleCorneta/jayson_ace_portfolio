import Hero from "../components/Hero";
import AboutIntro from "../components/AboutIntro";
import About from "../components/About";
import AboutFeature from "../components/AboutFeature";
import Work from "../components/Work";
import BeyondWork from "../components/BeyondWork";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutIntro />
      <About />
      <AboutFeature />
      <Work />
      <BeyondWork />
      <Pricing />
      <Contact />
    </>
  );
}

export default Home