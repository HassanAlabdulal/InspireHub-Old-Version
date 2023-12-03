import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
  <div className="w-full lg:w-1/3 bg-[#f7f7f7]">
    <div className="border border-gray-200 rounded-sm shadow-lg ">
      <header className="px-5 py-4 border-b">
        <h2 className="font-semibold text-[#bfa260] text-center">
          Developers Team
        </h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <tbody className="text-sm divide-y divide-gray-100">
              <tr>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  ALI ALSHAIKH
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://www.linkedin.com/in/" target="_blank">
                    <FontAwesomeIcon
                      title="linkedin"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110 text-[#3e60a3]"
                      icon={faLinkedin}
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://twitter.com/" target="_blank">
                    <FontAwesomeIcon
                      title="X"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                      icon={faXTwitter}
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://github.com/" target="_blank">
                    <FontAwesomeIcon
                      title="GitHub"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                      icon={faGithub}
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  ABDULLAH AL MATAWAH
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a
                    href="https://www.linkedin.com/in/abdullah-al-matawah-b6036a231/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      title="linkedin"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110 text-[#3e60a3]"
                      icon={faLinkedin}
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://twitter.com/aamhaamm" target="_blank">
                    <FontAwesomeIcon
                      title="X"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                      icon={faXTwitter}
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://github.com/aamhaamm" target="_blank">
                    <FontAwesomeIcon
                      title="GitHub"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                      icon={faGithub}
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  HASSAN ALABDULAL
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://www.linkedin.com/in/" target="_blank">
                    <FontAwesomeIcon
                      title="linkedin"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110 text-[#3e60a3]"
                      icon={faLinkedin}
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://twitter.com/7assan_abdulaal" target="_blank">
                    <FontAwesomeIcon
                      title="X"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                      icon={faXTwitter}
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://github.com/HassanAlabdulal" target="_blank">
                    <FontAwesomeIcon
                      title="GitHub"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                      icon={faGithub}
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  ALI ALABDULAAL
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://www.linkedin.com/in/" target="_blank">
                    <FontAwesomeIcon
                      title="linkedin"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110 text-[#3e60a3]"
                      icon={faLinkedin}
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://twitter.com/l3b3al" target="_blank">
                    <FontAwesomeIcon
                      title="X"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                      icon={faXTwitter}
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://github.com/l3b3al" target="_blank">
                    <FontAwesomeIcon
                      title="GitHub"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                      icon={faGithub}
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  HUSSAIN ALZAYER
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://www.linkedin.com/in/" target="_blank">
                    <FontAwesomeIcon
                      title="linkedin"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110 text-[#3e60a3]"
                      icon={faLinkedin}
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://twitter.com/7ussainLz" target="_blank">
                    <FontAwesomeIcon
                      title="X"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                      icon={faXTwitter}
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://github.com/7ussainLZ" target="_blank">
                    <FontAwesomeIcon
                      title="GitHub"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                      icon={faGithub}
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);
