import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeveloperCard from "../components/UI/DeveloperCard";

type AccordionSectionProps = {
  title: string;
  children: ReactNode;
};

export const AccordionSection = ({
  title,
  children,
}: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Variants for animating the open/close state
  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  return (
    <div>
      <button
        className="flex items-center text-[#bfa260] font-roboto font-semibold text-2xl mb-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span
          className="mr-2 transition-transform transform duration-400"
          animate={{ rotate: isOpen ? 1 : 0 }}
        >
          {isOpen ? "▼" : "►"}
        </motion.span>
        {title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{ duration: 0.7 }}
            className="overflow-hidden"
          >
            <div className="p-4 mb-4 rounded-md bg-[#f7f7f7] shadow-sm hover:shadow-md transition-all duration-700">
              {children}
            </div>
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
        {/* Three cards in the top row */}
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
          name="Ali Alshaikh"
          title="Backend Developer"
          linkedInUrl="https://www.linkedin.com/in/janesmith"
          twitterUrl="https://twitter.com/janesmith"
          githubUrl="https://github.com/janesmith"
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
        {/* Two cards in the bottom row */}
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
