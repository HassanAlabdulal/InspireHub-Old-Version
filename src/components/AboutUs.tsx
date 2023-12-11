import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeveloperCard from "../components/UI/DeveloperCard";

type AccordionSectionProps = {
  title: string;
  children: ReactNode;
};

// Adjust the transition timing here
const transition = {
  duration: 0.3, // Reduced duration for a faster transition
  ease: "easeInOut", // This can be adjusted to other easing options
};

export const AccordionSection = ({
  title,
  children,
}: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  // Updated styles for the button
  const buttonStyles = `flex items-center w-2/3 justify-between text-[#bfa260] font-roboto font-semibold 
  text-2xl mb-4 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bfa260]`;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <button className={buttonStyles} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <motion.span
          className="mr-2"
          initial={false} // Disable initial animation
          animate={{ rotate: isOpen ? 90 : 0 }} // Adjust rotation degrees if needed
          transition={transition}
        >
          {isOpen ? "-" : "+"}
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={transition}
            className={"overflow-hidden w-2/3"}
            // Key prop is important for AnimatePresence to track the component's presence in the DOM
            key={title}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const TableComponent = () => (
  <div className="w-full lg:w-2/3 bg-[#f7f7f7]">
    <div className="flex flex-wrap justify-center gap-7">
      <div className="flex justify-center w-full mb-5 gap-7">
        <DeveloperCard
          imagePath="src/assets/photo.png"
          name="Hassan Alabdulal"
          title="Frontend Developer"
          linkedInUrl="https://www.linkedin.com/in/"
          twitterUrl="https://twitter.com/7assan_abdulaal"
          githubUrl="https://github.com/HassanAlabdulal"
        />
        <DeveloperCard
          imagePath="src/assets/photo.png"
          name="Abdullah Almatawah"
          title="Frontend Developer"
          linkedInUrl="https://www.linkedin.com/in/michaelbrown"
          twitterUrl="https://twitter.com/michaelbrown"
          githubUrl="https://github.com/michaelbrown"
        />

        <DeveloperCard
          imagePath="src/assets/photo.png"
          name="Ali Alabdulaal"
          title="UI/UX Designer"
          linkedInUrl="https://www.linkedin.com/in/emilyjohnson"
          twitterUrl="https://twitter.com/emilyjohnson"
          githubUrl="https://github.com/emilyjohnson"
        />
      </div>
      <div className="flex justify-center w-full mb-10 gap-7">
        <DeveloperCard
          imagePath="src/assets/photo.png"
          name="Ali Alshaikh"
          title="Backend Developer"
          linkedInUrl="https://www.linkedin.com/in/janesmith"
          twitterUrl="https://twitter.com/janesmith"
          githubUrl="https://github.com/janesmith"
        />
        <DeveloperCard
          imagePath="src/assets/photo.png"
          name="Hussain Alzayer"
          title="Data Scientist"
          linkedInUrl="https://www.linkedin.com/in/sarahdavis"
          twitterUrl="https://twitter.com/sarahdavis"
          githubUrl="https://github.com/sarahdavis"
        />
      </div>
    </div>
  </div>
);
