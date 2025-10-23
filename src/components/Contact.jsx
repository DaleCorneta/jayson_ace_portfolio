import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-2 py-12 flex w-full items-center justify-center pt-[100px] relative"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="grid-background z-0 absolute inset-0"
      ></motion.div>
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center justify-center w-full my-2"
        >
          <div className="group">
            <h4
              className="font-semibold font-primary text-5xl xl:text-8xl
              bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500
              bg-[length:200%_100%] bg-pos-0 bg-clip-text text-transparent transition-all duration-500
              group-hover:animate-rainbowMove leading-[1.1] pb-2"
            >
              Let's Work Together
            </h4>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center w-full"
        >
          <p className="text-primary font-semibold font-secondary text-lg lg:text-xl leading-relaxed">
            I’m always open to new projects and collaborations{" "}
            <span className="text-accent"> — </span> whether it’s for design,
            video editing, or murals. If you’re looking for someone who values
            creativity, storytelling, and purpose in every work, I’d love to
            hear from you.
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row w-full items-center justify-around mt-12 gap-x-8 gap-y-6">
          {/* CARD 1 */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group w-full lg:w-1/4 bg-primary h-32 rounded-3xl shadow-md border border-primary/10 p-6 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center justify-center">
              <h4 className="font-semibold font-primary xl:text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove">
                Email
              </h4>
            </div>
            <div className="my-2">
              <p className="px-2 font-secondary text-white text-center">
                mjreginales43@gmail.com
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
            className="group w-full lg:w-1/4 bg-primary h-32 rounded-3xl shadow-md border border-primary/10 p-6 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center justify-center">
              <h4 className="font-semibold font-primary xl:text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove">
                Phone
              </h4>
            </div>
            <div className="my-2">
              <p className="px-2 font-secondary text-white text-center">
                +63 962 735 9149
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
            className="group w-full lg:w-1/4 bg-primary h-32 rounded-3xl shadow-md border border-primary/10 p-6 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center justify-center">
              <h4 className="font-semibold font-primary xl:text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove">
                Personal Facebook
              </h4>
            </div>
            <div className="my-2 flex items-center justify-center">
              <a
                href="https://facebook.com/markjayson.reginales"
                target="_blank"
                className="px-2 font-secondary text-white text-center"
              >
                facebook.com/markjayson.reginales
              </a>
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group w-full lg:w-1/4 bg-primary h-32 rounded-3xl shadow-md border border-primary/10 p-6 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center justify-center">
              <h4 className="font-semibold font-primary xl:text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove">
                Facebook Page
              </h4>
            </div>
            <div className="my-2 flex items-center justify-center">
              <a
                href="https://facebook.com/TheStoryOfAce"
                target="_blank"
                className="px-2 font-secondary text-white text-center"
              >
                facebook.com/TheStoryOfAce
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
