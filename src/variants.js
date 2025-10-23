// variants.js
export const fadeIn = (direction = "up", delay = 0) => {
  const distance = 60;

  let x = 0;
  let y = 0;

  if (direction === "up") y = distance;
  if (direction === "down") y = -distance;
  if (direction === "left") x = distance;
  if (direction === "right") x = -distance;

  return {
    hidden: {
      opacity: 0,
      x,
      y,
      scale: 0.96,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        delay,
        ease: [0.25, 0.8, 0.25, 1], // smooth "easeOutBack" style
      },
    },
  };
};
