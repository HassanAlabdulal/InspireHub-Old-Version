import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
  children: React.ReactNode; // This should be the only props expected, aside from `id` and `header`.
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  header,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Accordion open={isOpen} icon={<Icon id={id} open={isOpen} />}>
      <AccordionHeader
        onClick={toggleIsOpen}
        className="text-[#bfa260] text-2xl"
      >
        {header}
      </AccordionHeader>
      <AccordionBody className="text-lg text-[#121212]">
        {children}
      </AccordionBody>
    </Accordion>
  );
};

// // TeamMemberDetails component (can be in the same file or separate)
// interface TeamMember {
//   name: string;
//   linkedInUsername: string; // Correct these property names
//   twitterUsername: string;
// }

// const TeamMemberDetails: React.FC<{ member: TeamMember }> = ({ member }) => {
//   return (
//     <div className="flex items-center space-x-4">
//       <div>{member.name}</div>
//       <a
//         href={`https://www.linkedin.com/in/${member.linkedInUsername}`}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FontAwesomeIcon icon={faLinkedin} />
//       </a>
//       <a
//         href={`https://twitter.com/${member.twitterUsername}`}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FontAwesomeIcon icon={faTwitter} />
//       </a>
//     </div>
//   );
// };

export default AccordionItem;
