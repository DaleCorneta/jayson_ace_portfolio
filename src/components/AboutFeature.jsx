import { BsBrushFill, BsCameraVideoFill, BsImageFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const AboutFeature = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white px-2 my-12 flex w-full items-center justify-center"
    >
      <div className="container mx-auto w-full">
        {/* Section Title */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center justify-center w-full my-2"
        >
          <h4 className="text-primary font-primary text-2xl mb-6 font-bold leading-[0.8]">
            Features<span className="text-accent">.</span>
          </h4>
        </motion.div>

        {/* Headings */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:gap-x-8 xl:gap-x-16 gap-y-4">
          <div className="w-full">
            <motion.h3
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="font-semibold text-4xl xl:text-6xl text-primary xl:leading-[1.3] font-primary"
            >
              I have the{" "}
              <span className="relative inline-block font-bold text-accent bg-[linear-gradient(110deg,theme(colors.accent)_0%,theme(colors.accent)_45%,rgba(255,255,255,0.15)_50%,theme(colors.accent)_55%,theme(colors.accent)_100%)] bg-[length:250%_100%] bg-clip-text text-transparent animate-[shimmer_25s_linear_infinite] [animation-delay:-1s]">
                Expertise
              </span>{" "}
              to{" "}
              <span className="relative inline-block font-bold text-accent bg-[linear-gradient(110deg,theme(colors.accent)_0%,theme(colors.accent)_45%,rgba(255,255,255,0.15)_50%,theme(colors.accent)_55%,theme(colors.accent)_100%)] bg-[length:250%_100%] bg-clip-text text-transparent animate-[shimmer_25s_linear_infinite] [animation-delay:-2.3s]">
                Design
              </span>{" "}
              with{" "}
              <span className="relative inline-block font-bold text-accent bg-[linear-gradient(110deg,theme(colors.accent)_0%,theme(colors.accent)_45%,rgba(255,255,255,0.15)_50%,theme(colors.accent)_55%,theme(colors.accent)_100%)] bg-[length:250%_100%] bg-clip-text text-transparent animate-[shimmer_25s_linear_infinite] [animation-delay:-3.7s]">
                Purpose
              </span>
            </motion.h3>
          </div>
          <div className="w-full">
            <motion.p
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="font-medium text-lg xl:text-3xl text-primary text-justify font-secondary"
            >
              With years of creative experience, my work goes beyond visuals{" "}
              <span className="text-accent">— </span>
              it’s about connecting stories, emotions, and ideas to solve real
              challenges through creativity.
            </motion.p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col lg:flex-row w-full items-center justify-around mt-12 gap-x-8 gap-y-6">
          {/* CARD 1 */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group w-full lg:w-1/3 bg-primary h-[340px] rounded-3xl shadow-md border border-primary/10 p-6 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center justify-center w-full">
              <div className="bg-accent p-4 w-18 h-18 rounded-full flex items-center justify-center hover:scale-125 transition-transform">
                <BsImageFill className="text-white text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-rainbowMove" />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <h4 className="font-semibold font-primary xl:text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove">
                Graphic Designs<span className="text-accent">.</span>
              </h4>
            </div>
            <div className="my-6">
              <p className="px-2 font-secondary text-white text-justify">
                Through graphic design, I turn concepts into clear visual
                identities that communicate purpose and leave a lasting
                impression.
              </p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group w-full lg:w-1/3 bg-primary h-[340px] rounded-3xl shadow-md border border-primary/10 p-6 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center justify-center w-full">
              <div className="bg-accent p-4 w-18 h-18 rounded-full flex items-center justify-center hover:scale-125 transition-transform">
                <BsCameraVideoFill className="text-white text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-rainbowMove" />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <h4 className="font-semibold font-primary xl:text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove">
                Video Editing<span className="text-accent">.</span>
              </h4>
            </div>
            <div className="my-6">
              <p className="px-2 font-secondary text-white text-justify">
                I craft engaging video stories that capture attention, evoke
                emotion, and deliver messages with clarity and impact — every
                frame with purpose.
              </p>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group w-full lg:w-1/3 bg-primary h-[340px] rounded-3xl shadow-md border border-primary/10 p-6 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center justify-center w-full">
              <div className="bg-accent p-4 w-18 h-18 rounded-full flex items-center justify-center hover:scale-125 transition-transform">
                <BsBrushFill className="text-white text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-rainbowMove" />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <h4 className="font-semibold font-primary xl:text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove">
                Murals<span className="text-accent">.</span>
              </h4>
            </div>
            <div className="my-6">
              <p className="px-2 font-secondary text-white text-justify">
                I bring spaces to life with hand-painted murals that transform
                walls into immersive artworks, expressing culture, emotion, and
                story in vivid color.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeature;
