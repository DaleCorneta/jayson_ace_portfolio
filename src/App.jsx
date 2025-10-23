import AboutIntro from "./components/AboutIntro.jsx";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import Work from "./components/Work.jsx";
import BeyondWork from "./components/BeyondWork.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import AboutFeature from "./components/AboutFeature.jsx";
import Pricing from "./components/Pricing.jsx";

function App() {
  return (
    <>
      <div className="overflow-hidden bg-white">
        <Header />
        <Navigation />
        <Hero />
        <AboutIntro />
        <About />
        <AboutFeature />
        <Work />
        <BeyondWork />
        <Pricing/>
        <Contact />
      </div>
    </>
  );
}

export default App;
