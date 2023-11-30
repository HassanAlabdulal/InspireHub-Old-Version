import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface IconProps {
  id: number;
  open: number;
}

function Icon({ id, open }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

interface AccordionItemProps {
  id: number;
  header: string;
  body: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, header, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Accordion open={isOpen} icon={<Icon id={id} open={isOpen ? id : 0} />}>
      <AccordionHeader onClick={toggleIsOpen}>{header}</AccordionHeader>
      <AccordionBody>{body}</AccordionBody>
    </Accordion>
  );
};

export default AccordionItem;
