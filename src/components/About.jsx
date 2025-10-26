import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section id="about">
      <div className="bg-white relative px-4">
        {/* Background grid */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="grid-background z-0"
        ></motion.div>

        {/* Foreground content */}
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-min-screen lg:min-h-screen">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-about bg-contain bg-no-repeat h-[320px] lg:h-[640px] bg-[url('./assets/about.png')] bg-center w-full"
            ></motion.div>

            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full"
            >
              <h2 className="text-primary font-primary text-[48px] mb-6 font-bold leading-[0.8]">
                About me<span className="text-accent">.</span>
              </h2>
              <p className="text-primary font-secondary mb-6 font-medium text-justify text-xl">
                {" "}
                Hi, I’m Mark Jayson Reginales, but you can call me Ace. I’m a
                passionate visual creator who loves to turn ideas into
                meaningful visuals — whether through design, videos, or murals.{" "}
                <br /> <br /> My creative journey started back in Elementary,
                when I discovered my love for drawing and painting. Over time,
                that passion grew into digital arts and storytelling through
                design and video editing. I believe creativity isn’t just about
                making things look good — it’s about solving problems,
                connecting people, and expressing purpose.{" "}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
