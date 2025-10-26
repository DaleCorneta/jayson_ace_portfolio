import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";

const BeyondWork = () => {
  return (
    <section id="work" className="relative bg-white py-24 px-4">
      {/* Background grid */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="grid-background z-0 absolute inset-0"
      ></motion.div>

      {/* Foreground */}
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center gap-20">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-row items-center justify-center lg:justify-start w-full">
              <h2 className="text-primary font-primary text-center text-[48px] mb-6 font-bold leading-[1.1]">
                Beyond the Work<span className="text-accent">.</span>
              </h2>
            </div>
            <p className="text-primary font-secondary font-medium text-justify text-lg leading-relaxed">
              As a Baguio-based content creator and visual artist, I’m currently
              building a series that documents my creative journey{" "}
              <span className="text-accent">—</span> including the process of
              growing my own clothing line from the ground up. Every project I
              take on is personal; I treat each one with care and passion
              because it becomes part of my story too.
              <br />
              <br />
              By working with me, you’re not just getting creative output{" "}
              <span className="text-accent">—</span> your brand can also be
              featured in my vlogs and content, helping promote your space to my
              growing local community.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-about bg-contain bg-no-repeat bg-center w-full lg:w-1/2 h-72 lg:h-[520px] rounded-3xl bg-[url('./assets/story.png')]"
          ></motion.div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center lg:text-left w-full lg:w-2/3"
          >
            <p className="text-primary font-secondary text-lg lg:text-xl leading-relaxed">
              My creative journey shared through “The Story of Ace”{" "}
              <span className="text-accent">—</span> where I turn everyday
              projects into stories that inspire.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <a href="contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex text-2xl items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-white hover:text-accent font-secondary transition-colors"
              >
                <span
                  className="font-semibold font-primary text-xl xl:text-2xl
              bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500
              bg-[length:200%_100%] bg-pos-0 bg-clip-text text-transparent transition-all duration-500
              group-hover:animate-rainbowMove"
                >
                  Visit My Page
                </span>
                <FiArrowRight className="transition-transform group-hover:rotate-45" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeyondWork;
