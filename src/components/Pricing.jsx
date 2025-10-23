import {
  BsBrushFill,
  BsCameraVideoFill,
  BsImageFill,
  BsCheck2Circle,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Pricing = () => {
  return (
    <section
      id="beyond_work"
      className="min-h-screen bg-primary px-2 py-12 flex w-full items-center justify-center pt-[100px]"
    >
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
              ★ Pricing ★
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
          <p className="text-white font-secondary text-lg lg:text-xl leading-relaxed">
            Each project is unique <span className="text-accent"> — </span> I
            provide custom quotes based on your creative needs, style, and
            timeline.
            <br />
            <br />
            To give you an idea, here are my starting rates:
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
            className="group w-full lg:w-1/3 bg-white h-136 lg:h-152 xl:h-166 rounded-3xl shadow-md border border-primary/10 p-6 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center justify-center w-full">
              <div className="bg-primary p-4 w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full flex items-center justify-center hover:scale-125 transition-transform">
                <BsImageFill className="text-white text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-rainbowMove" />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <h4 className="font-semibold font-primary xl:text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove">
                Graphic Designs<span className="text-accent">.</span>
              </h4>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <div className="flex flex-row items-center justify-start xl:justify-center gap-x-2 w-full px-4 xl:px-8">
                <p className="text-xs font-primary text-primary text-center">
                  <i>Starts  <br /> at</i>
                </p>
                <h3 className="text-primary font-bold font-primary text-5xl lg:text-3xl xl:text-5xl my-2">
                  ₱1,500
                </h3>
              </div>
            </div>
            <div className="my-6">
              <div className="px-2 xl:px-8 font-secondary text-primary flex flex-col items-start justify-center gap-y-4">
                {/* Item 1 */}
                <div className="font-semibold flex items-start gap-x-3">
                  <BsCheck2Circle className="w-6 h-6 flex-shrink-0 mt-1 text-accent" />
                  <p className="text-xs lg:text-md xl">Up to 3 design layouts</p>
                </div>

                {/* Sub-points */}
                <div className="flex flex-col pl-9 gap-y-1">
                  <p className="text-xs lg:text-md xl">→ 1 for promotional/ads,</p>
                  <p className="text-xs lg:text-md xl">
                    → 1 editable version for future updates,
                  </p>
                  <p className="text-xs lg:text-md xl">
                    → and 1 alternative design for flexibility.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="font-semibold flex items-start gap-x-3">
                  <BsCheck2Circle className="w-6 h-6 flex-shrink-0 mt-1 text-accent" />
                  <p className="text-xs lg:text-md xl">
                    Deliverables in JPEG, PNG, and editable format (PSD if
                    needed).
                  </p>
                </div>

                {/* Item 3 */}
                <div className="font-semibold flex items-start gap-x-3">
                  <BsCheck2Circle className="w-6 h-6 flex-shrink-0 mt-1 text-accent" />
                  <p className="text-xs lg:text-md xl">
                    Ideal for social media posts, menus, posters, or branding
                    visuals.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="font-semibold flex items-start gap-x-3">
                  <BsCheck2Circle className="w-6 h-6 flex-shrink-0 mt-1 text-accent" />
                  <p className="text-xs lg:text-md xl">
                    Each design is crafted to align with your brand’s voice and
                    purpose — not just aesthetics, but strategy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group w-full lg:w-1/3 bg-white h-136 lg:h-152 xl:h-166  rounded-3xl shadow-md border border-primary/10 p-6 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center justify-center w-full">
              <div className="bg-primary p-4 w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full flex items-center justify-center hover:scale-125 transition-transform">
                <BsCameraVideoFill className="text-white text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-rainbowMove" />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <h4 className="font-semibold font-primary xl:text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove">
                Video Editing<span className="text-accent">.</span>
              </h4>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <div className="flex flex-row items-center justify-start xl:justify-center gap-x-2 w-full px-4 xl:px-8">
                <p className="text-xs font-primary text-primary text-center">
                  <i>Starts  <br /> at</i>
                </p>
                <h3 className="text-primary font-bold font-primary text-5xl lg:text-3xl xl:text-5xl my-2">
                  ₱3,000
                </h3>
              </div>
            </div>
            <div className="my-6">
              <div className="px-2 xl:px-8 font-secondary text-primary flex flex-col items-start justify-center gap-y-4">
                {/* Item 1 */}
                <div className="font-semibold flex items-start gap-x-3">
                  <BsCheck2Circle className="w-6 h-6 flex-shrink-0 mt-1 text-accent" />
                  <p className="text-xs lg:text-md xl">
                    Short-Form Promotional Videos – up to 3 videos, around 30
                    seconds each, perfect for social media promotion of your
                    business.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="font-semibold flex items-start gap-x-3">
                  <BsCheck2Circle className="w-6 h-6 flex-shrink-0 mt-1 text-accent" />
                  <p className="text-xs lg:text-md xl">
                    OR Trending Story/Viral-Style Video – 1 video that tells a
                    story, follows current trends, and has the potential to go
                    viral.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="font-semibold flex items-start gap-x-3">
                  <BsCheck2Circle className="w-6 h-6 flex-shrink-0 mt-1 text-accent" />
                  <p className="text-xs lg:text-md xl">
                    Optimized Output Files – ready to post on Facebook,
                    Instagram, or TikTok.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group w-full lg:w-1/3 bg-white h-136 lg:h-152 xl:h-166  rounded-3xl shadow-md border border-primary/10 p-6 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center justify-center w-full">
              <div className="bg-primary p-4 w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full flex items-center justify-center hover:scale-125 transition-transform">
                <BsBrushFill className="text-white text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-rainbowMove" />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <h4 className="font-semibold font-primary xl:text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove">
                Murals<span className="text-accent">.</span>
              </h4>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <div className="flex flex-row items-center justify-start xl:justify-center gap-x-2 w-full px-4 xl:px-8">
                <p className="text-xs font-primary text-primary text-center">
                  <i>Starts  <br /> at</i>
                </p>
                <h3 className="text-primary font-bold font-primary text-5xl lg:text-3xl xl:text-5xl my-2">
                  ₱5,000
                </h3>
              </div>
            </div>
            <div className="my-6">
              <div className="px-2 xl:px-8 font-secondary text-primary flex flex-col items-start justify-center gap-y-4">
                {/* Item 1 */}
                <div className="font-semibold flex items-start gap-x-3">
                  <BsCheck2Circle className="w-6 h-6 flex-shrink-0 mt-1 text-accent" />
                  <p className="text-xs lg:text-md xl">
                    Rate covers artist’s talent fee for design and painting.
                    Client provides materials (paint, brushes, scaffolding if
                    needed), or these can be added to the total cost upon
                    request.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="font-semibold flex items-start gap-x-3">
                  <BsCheck2Circle className="w-6 h-6 flex-shrink-0 mt-1 text-accent" />
                  <p className="text-xs lg:text-md xl">
                    Final pricing depends on project scope, materials, and
                    desired output. Let’s talk about your idea, and I’ll tailor
                    a package that fits your goals and budget perfectly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
