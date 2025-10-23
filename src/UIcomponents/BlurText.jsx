import { motion } from "motion/react";
import { useEffect, useRef, useState, useMemo } from "react";

// 🟢 Improved fadeIn animation variant (Option 2)
export const fadeIn = (direction = "up", delay = 0) => {
  const distance = 60;

  return {
    hidden: {
      opacity: 0,
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 1.2,
        delay,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 1.4,
        delay,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
};

// 🌀 BlurText Component
const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  fadeOutDuration = 0.5,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Intersection observer for fade in/out
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <p
      ref={ref}
      className={`flex flex-wrap justify-center text-center ${className}`}
    >
      {elements.map((segment, index) => {
        const variantDirection =
          direction === "top" ? "up" : direction === "bottom" ? "down" : "up";

        return (
          <motion.span
            key={index}
            className="inline-block will-change-[transform,filter,opacity]"
            variants={fadeIn(variantDirection, index * (delay / 1000))}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.05,
              filter: "brightness(1.1)",
              transition: { type: "spring", stiffness: 300, damping: 12 },
            }}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
