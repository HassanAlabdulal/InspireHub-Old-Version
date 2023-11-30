import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// Icon component
interface IconProps {
  id: number;
  open: boolean;
}

const Icon: React.FC<IconProps> = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

// AccordionItem component
interface AccordionItemProps {
  id: number;
  header: string;
  icon?: JSX.Element; // Make icon optional to ensure compatibility with existing usage without an icon
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  header,
  icon,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Accordion open={isOpen} icon={<Icon id={id} open={isOpen} />}>
      <AccordionHeader
        onClick={toggleIsOpen}
        className="flex items-center text-[#bfa260] text-2xl"
      >
        <div className="flex items-center">
          {icon} {/* Render the icon here */}
          <span className="ml-1">{header}</span>{" "}
          {/* Adjust the margin-left as needed */}
        </div>
      </AccordionHeader>
      <AccordionBody className="text-lg text-[#121212]">
        {children}
      </AccordionBody>
    </Accordion>
  );
};

export default AccordionItem;
