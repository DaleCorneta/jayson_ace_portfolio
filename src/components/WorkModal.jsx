import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiZoomIn, FiZoomOut } from "react-icons/fi";

const WorkModal = ({ work, onClose }) => {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTouchDist = useRef(null);

  // Disable background scroll
  useEffect(() => {
    if (work) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [work]);

  // Fit image nicely on load
  useEffect(() => {
    if (imageLoaded && containerRef.current && imageRef.current) {
      const container = containerRef.current;
      const img = imageRef.current;
      const containerRatio = container.offsetWidth / container.offsetHeight;
      const imageRatio = img.naturalWidth / img.naturalHeight;
      let fitScale = 1;
      if (imageRatio > containerRatio) {
        fitScale = container.offsetWidth / img.naturalWidth;
      } else {
        fitScale = container.offsetHeight / img.naturalHeight;
      }
      setScale(fitScale);
      setOffset({ x: 0, y: 0 });
    }
  }, [imageLoaded]);

  if (!work) return null;

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch zoom start
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      lastTouchDist.current = dist;
    }
  };

  const handleTouchEnd = () => (lastTouchDist.current = null);

  // Fix for passive event warning
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.1 : -0.1;
      setScale((prev) => Math.min(Math.max(prev + delta, 0.3), 3));
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 2 && lastTouchDist.current) {
        e.preventDefault();
        const newDist = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        );
        const delta = (newDist - lastTouchDist.current) / 200;
        setScale((prev) => Math.min(Math.max(prev + delta, 0.3), 3));
        lastTouchDist.current = newDist;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-2 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={containerRef}
          className="
            relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-lg
            w-full max-w-6xl max-h-[95vh]
            flex flex-col items-center justify-center
            overflow-auto custom-scrollbar
          "
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white hover:text-accent transition-all z-20"
          >
            <FiX size={26} />
          </button>

          {/* Image Viewer */}
          <div
            className="
              flex items-center justify-center w-full h-full
              bg-black/70 relative rounded-3xl
              overflow-hidden select-none
            "
          >
            <motion.img
              ref={imageRef}
              src={work.img}
              alt={work.title}
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              animate={{ scale, x: offset.x, y: offset.y }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="
                max-w-full max-h-[85vh] md:max-h-[90vh]
                object-contain
                cursor-grab active:cursor-grabbing
                touch-none
              "
            />

            {/* Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-2 rounded-full text-xs sm:text-sm flex items-center gap-2"
            >
              <FiZoomIn size={14} />
              <span>Scroll, pinch, or drag to zoom</span>
            </motion.div>

            {/* Zoom Indicator */}
            <motion.div
              className="absolute top-3 left-4 bg-black/60 px-3 py-1 rounded-full text-white text-xs sm:text-sm flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {scale > 1 ? <FiZoomIn /> : <FiZoomOut />}
              <span>{(scale * 100).toFixed(0)}%</span>
            </motion.div>
          </div>

          {/* Info Section */}
          <div className="p-4 sm:p-6 text-white text-center">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-accent via-accent/70 to-accent bg-clip-text text-transparent">
              {work.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-4">
              {work.desc}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-accent rounded-xl font-semibold hover:bg-accent/80 transition-all"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkModal;
