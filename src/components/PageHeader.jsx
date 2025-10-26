import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const PageHeader = () => {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (show) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 w-full start-0 px-4 z-9999 ${
        navBackground ? "backdrop-blur-2xl" : ""
      }`}
    >
      <div className="container mx-auto my-6">
        <div className="flex items-center justify-between group">
          <a href="/">
            <p
              className="font-bold font-secondary text-2xl xl:text-4xl
               bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500
               bg-[length:200%_100%] bg-pos-0 bg-clip-text text-transparent transition-all duration-500
               group-hover:animate-rainbowMove"
            >
              Jayson
            </p>
          </a>
          <div className="relative group">
            <div className="relative">
              <Link to="/">
                <motion.button
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-gray-50 transition-colors hover:text-accent font-secondary"
                >
                  <FiArrowLeft className="transition-transform group-hover:rotate-45 group-active:-rotate-12" />
                   Home
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
