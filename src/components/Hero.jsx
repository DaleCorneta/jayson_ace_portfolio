import { FaInstagram, FaFacebook, FaFacebookMessenger } from "react-icons/fa";
// import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden px-4"
      id="hero"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="grid-background"
      ></motion.div>
      <motion.div
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView={"show"}
        className="absolute inset-0 bg-[url('./assets/hero.png')] bg-no-repeat bg-right-bottom lg:bg-size-[850px_auto] xl:bg-size-[1450px_auto] pointer-events-none hidden lg:block"
      ></motion.div>
      <div className="container mx-auto z-100">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mt-2 mb-2 text-[36px] xl:text-[60px] font-primary font-semibold leading-none tracking-wide"
            >
              <p className="mr-4 text-primary">Hi! I'm</p>
            </motion.div>
            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-primary text-[55px] font-extrabold leading-none xl:text-[90px] font-primary"
            >
              JAYSON <span className="text-accent">"ACE"</span>
            </motion.h1>
            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-primary text-[55px] font-extrabold leading-[0.8] xl:text-[120px] font-primary"
            >
              REGINALES
            </motion.h1>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-none"
            >
              {/* <span className="mr-4 text-primary">I am a</span> */}
              {/* <TypeAnimation
                sequence={[
                  "full stack web developer",
                  2000,
                  "insatiable learner",
                  2000,
                  "problem solver",
                  2000,
                ]}
                speed={50}
                className="font-semibold text-accent"
                wrapper="span"
                repeat={Infinity}
              /> */}
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="max-w-lg mx-auto mb-8 font-secondary text-primary lg:mx-0 font-medium"
            >
              A <span className="font-bold">Designer</span> in Baguio, I'm
              passionate on{" "}
              <span className="font-bold">
                "Turning Ideas Into Visuals That Speak"
              </span>
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mx-0"
            >
              <Link to="contact" activeClass="active" smooth={true} spy={false}>
                <button className="bg-primary text-white font-secondary font-bold border-2 rounded-xl px-4 py-2 hover:border-secondary hover:bg-primary hover:text-accent focus:border-tertiary focus:bg-primary focus:text-accent focus:text-[18px]">
                  Contact me
                </button>
              </Link>

              <Link to="work" activeClass="active" smooth={true} spy={false}>
                <button className="text-secondary font-secondary font-bold border-2 rounded-xl px-4 py-2 hover:border-tertiary hover:bg-primary hover:text-accent focus:border-tertiary focus:bg-primary focus:text-accent focus:text-[18px]">
                  My Works
                </button>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.facebook.com/TheStoryofAce/"
                target="_blank"
                className="text-3xl text-primary hover:text-accent"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/acetzytv/"
                target="_blank"
                className="text-3xl text-primary hover:text-accent"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/markjayson.reginales#"
                target="_blank"
                className="text-3xl text-primary hover:text-accent"
              >
                <FaFacebookMessenger />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[820px] lg:w-full"
          >
            {/* <div className="bg-[url('./assets/banner.png')] blob"></div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
