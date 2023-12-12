import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeveloperCard from "../components/UI/DeveloperCard";

type AccordionSectionProps = {
  title: string;
  children: ReactNode;
};

const transition = {
  duration: 0.3,
  ease: "easeInOut",
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

  const buttonStyles = `flex items-center w-2/3 justify-between text-[#bfa260] font-roboto font-semibold 
  text-2xl mb-4 px-4 py-2 max-md:px-2 max-md:text-lg max-md:w-full max-md:py-1 bg-white border border-gray-300 
  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bfa260]`;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <button className={buttonStyles} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <motion.span
          className="mr-2"
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
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
  <div className="w-full bg-[#f7f7f7]">
    <div className="flex flex-wrap justify-center gap-7 ">
      <div className="flex justify-center w-full mb-5 gap-7 max-md:flex-col">
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
      <div className="flex justify-center w-full mb-10 gap-7 max-md:flex-col">
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
