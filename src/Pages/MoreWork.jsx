import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FiArrowRight } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import WorkModal from "../components/WorkModal";
import VideoModal from "../components/VideoModal";
import { works } from "../worksData";
import FallbackVideoThumbnail from "../components/FallbackVideoThumbnail";
import LazyImage from "../components/LazyImage";

const ITEMS_PER_PAGE = 20;

const MoreWork = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTag, setSelectedTag] = useState(
    searchParams.get("tag") || "all"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWork, setSelectedWork] = useState(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const tags = ["all", ...new Set(works.map((work) => work.tag))];

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedTag === "all") {
      params.delete("tag");
      setSearchParams(params);
    } else {
      params.set("tag", selectedTag);
      setSearchParams(params);
    }
    setVisibleCount(ITEMS_PER_PAGE); // reset visible count when tag changes
  }, [selectedTag, setSearchParams]);

  const filteredWorks = works.filter((work) => {
    const matchesTag = selectedTag === "all" || work.tag === selectedTag;
    const matchesSearch =
      work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const visibleWorks = filteredWorks.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <section
      id="work"
      className="min-h-screen bg-primary px-2 py-12 flex w-full items-center justify-center pt-[100px]"
    >
      <div className="container mx-auto">
        {/* Title */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col items-center justify-center w-full my-2"
        >
          <div className="group">
            <h4 className="font-semibold font-primary text-5xl xl:text-8xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-[length:200%_100%] bg-pos-0 bg-clip-text text-transparent transition-all duration-500 group-hover:animate-rainbowMove">
              Creative Works
            </h4>
          </div>
          <h3 className="text-white font-primary text-2xl lg:text-4xl">
            with Brands and Businesses<span className="text-accent">.</span>
          </h3>
        </motion.div>

        {/* Filter and Search */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 mt-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl font-secondary text-sm transition-all ${
                  selectedTag === tag
                    ? "bg-accent text-white"
                    : "bg-white/10 text-gray-300 hover:bg-accent/70 hover:text-white"
                }`}
              >
                {tag === "all" ? "All" : tag.replace("_", " ")}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full lg:w-1/3 px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-400 font-secondary focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 w-full mt-16">
          {visibleWorks.length > 0 ? (
            visibleWorks.map((work) => (
              <div
                key={work.id}
                className="relative group h-100 md:h-76 lg:h-76 xl:h-86 rounded-3xl overflow-hidden cursor-pointer"
              >
                {work.img ? (
                  <LazyImage
                    src={work.img}
                    alt={work.title}
                    className="group-hover:scale-110 group-hover:blur-[3px]"
                  />
                ) : work.type === "video" ? (
                  <FallbackVideoThumbnail />
                ) : null}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end text-center text-white p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-sm mb-3">{work.desc}</p>
                  <button
                    onClick={() => setSelectedWork(work)}
                    className="flex items-center justify-center gap-2 text-accent font-semibold hover:underline"
                  >
                    View <FiArrowRight />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">
              No results found.
            </p>
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredWorks.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/80 transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Conditional Modal */}
      {selectedWork &&
        (selectedWork.type === "video" ? (
          <VideoModal
            work={selectedWork}
            onClose={() => setSelectedWork(null)}
          />
        ) : (
          <WorkModal
            work={selectedWork}
            onClose={() => setSelectedWork(null)}
          />
        ))}
    </section>
  );
};

export default MoreWork;
