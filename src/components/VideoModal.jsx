import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useEffect } from "react";

const VideoModal = ({ work, onClose }) => {
  useEffect(() => {
    if (work) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [work]);

  if (!work) return null;

  // 🎥 Convert Google Drive link to embed preview
  const getEmbedUrl = (url) => {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
    const id = match ? match[1] : null;
    return id ? `https://drive.google.com/file/d/${id}/preview` : url;
  };

  const videoUrl = getEmbedUrl(work.video || work.img);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-2 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* MODAL CONTAINER (scrollable) */}
        <motion.div
          className="
            bg-white/10 backdrop-blur-lg rounded-3xl
            w-full max-w-5xl relative border border-white/10
            flex flex-col overflow-y-auto
            max-h-[95vh] custom-scrollbar
          "
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="sticky top-3 right-3 self-end text-white hover:text-accent transition-all z-20 mr-3 mt-2 sm:mr-4 sm:mt-3"
          >
            <FiX size={26} />
          </button>

          {/* EMBEDDED VIDEO */}
          <div className="bg-black flex items-center justify-center">
            <iframe
              src={videoUrl}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="
                w-full
                h-[55vh]
                sm:h-[65vh]
                md:h-[70vh]
                lg:h-[75vh]
                xl:h-[80vh]
                rounded-2xl
              "
            ></iframe>
          </div>

          {/* INFO SECTION */}
          <div className="p-4 sm:p-6 md:p-8 text-white bg-black/60">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              {work.title}
            </h2>
            <p className="text-gray-200 font-secondary mb-6 leading-relaxed text-sm sm:text-base">
              {work.desc}
            </p>
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 sm:px-6 sm:py-2 bg-accent rounded-xl text-white font-semibold hover:bg-accent/80 transition-all text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
