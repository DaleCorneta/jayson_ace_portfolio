import { BiArrowToBottom } from "react-icons/bi";
import BlurText from "../UIcomponents/BlurText";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const AboutIntro = () => {
  const handleAnimationComplete = () => {};
  return (
    <div
      id="about"
      className="min-h-[30vh] pt-[100px] lg:pt-0 lg:h-screen flex items-center bg-white w-full px-4"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full">
          <BlurText
            text="The Story of Ace and Where His Creative Journey Began"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-[30px] lg:text-[90px] xl:text-[130px] mb-8 font-primary font-bold text-center leading-8 lg:leading-30 xl:leading-35 text-primary"
            fadeOutDuration={0.7}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <BlurText
            text="↓"
            delay={5000}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-[30px] lg:text-[90px] xl:text-[130px] mb-8 font-secondary font-bold text-balance leading-8 lg:leading-30 text-primary animate-float"
            fadeOutDuration={2}
          />
          <style>
            {`
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(20px); }
      }
      .animate-float {
        animation: float 1.5s ease-in-out infinite;
      }
    `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
