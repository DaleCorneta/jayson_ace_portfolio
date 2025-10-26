import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();
  const works = [
    {
      id: 1,
      title: "Hungry Bob Korean Fusion",
      tag: "hungry_bob",
      desc: "Logo • social media content • printable and display menus • promotional video • Grab & Foodpanda designs • food photography",
      img: "https://drive.google.com/thumbnail?id=11KlL7MA63VUUZ1UE62IyEcpjl4vhlU9-&sz=w2000",
    },
    {
      id: 2,
      title: "Dabang Coffee",
      tag: "dabang",
      desc: "Graphic design • logo • social media posts • printable and display menus • video reels • promotional video • Grab & Foodpanda materials • menu photography",
      img: "https://drive.google.com/thumbnail?id=1Fz3WRHRAnEASv8o9weSl9zkaABeHPOcl&sz=w2000",
    },
    {
      id: 3,
      title: "OnePiece Resto Café",
      tag: "ome_piece",
      desc: "Custom One Piece murals • printable menus • logo design • branding materials",
      img: "https://drive.google.com/thumbnail?id=1Ls03GqEQlzR79_x2uMCNpufpR49jWidy&sz=w2000",
    },
    {
      id: 4,
      title: "Pugad ni Art Studio",
      tag: "pugad",
      desc: "Wall design • creative mural paintings",
      img: "https://drive.google.com/thumbnail?id=1P0jAIG7HfAgbg2fF_ud4cfd7PX5MUjYq&sz=w2000",
    },
    {
      id: 5,
      title: "Oswald (Music Artist)",
      tag: "oswald",
      desc: "Music video editing • thumbnail • Spotify artwork • teaser reels",
      img: "https://drive.google.com/thumbnail?id=1K40wkYyfykHTEcaFj9HiuWW1CBDOeaJc&sz=w2000",
    },
    {
      id: 6,
      title: "Café Will Restaurant",
      tag: "cafe_will",
      desc: "Logo enhancement • printable menus • menu photography",
      img: "https://drive.google.com/thumbnail?id=1tztO7K6G5MXM1AXi9SUlrVLdQbf27m0T&sz=w2000",
    },
  ];

  return (
    <section
      id="work"
      className="min-h-screen bg-primary px-2 py-12 flex w-full items-center justify-center pt-[100px]"
    >
      <div className="container mx-auto">
        {/* Title Section */}
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
              group-hover:animate-rainbowMove"
            >
              Creative Works
            </h4>
          </div>
          <h3 className="text-white font-primary text-2xl lg:text-4xl">
            with Brands and Businesses<span className="text-accent">.</span>
          </h3>
        </motion.div>

        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-start lg:justify-between justify-end my-12 gap-y-6">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-1/3"
          >
            <p className="text-white font-secondary text-justify">
              From cafés to studios, I’ve partnered with Baguio-based brands and
              artists to turn their ideas into visuals that connect, promote,
              and inspire.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full flex items-center justify-end"
          >
            <motion.button
              onClick={() => navigate(`/works`)}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="group relative flex w-fit items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-gray-50 transition-colors hover:text-primary font-secondary"
            >
              See More
              <FiArrowRight className="transition-transform group-hover:rotate-45 group-active:-rotate-12" />
            </motion.button>
          </motion.div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 w-full">
          {works.map((work) => (
            <motion.div
              key={work.id}
              variants={fadeIn("up", work.id * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group h-100 md:h-76 lg:h-76 xl:h-118 rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image (FIXED for Google Drive) */}
              <img
                src={work.img}
                alt={work.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[3px]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end text-center text-white p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
                {/* Content Wrapper (fix hover trigger area) */}
                <div className="absolute inset-0 -z-10"></div>

                {/* Animate children staggered */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.15,
                      },
                    },
                  }}
                  className="relative z-20"
                >
                  <motion.h3
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: "easeOut" },
                      },
                    }}
                    className="font-semibold font-primary text-xl xl:text-3xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 
            bg-[length:200%_100%] bg-pos-0 bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove"
                  >
                    {work.title}
                  </motion.h3>

                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45, ease: "easeOut" },
                      },
                    }}
                    className="text-sm mb-4 mt-2 font-secondary"
                  >
                    {work.desc}
                  </motion.p>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                    onClick={() => navigate(`/works?tag=${work.tag}`)}
                    className="inline-block font-secondary px-4 py-2 rounded-xl bg-accent hover:bg-accent/80 text-white text-sm font-semibold transition-all"
                  >
                    View More →
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
