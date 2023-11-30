import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export interface TeamMember {
  name: string;
  linkedInUsername: string;
  twitterUsername: string;
}

export const TeamMemberDetails: React.FC<{ member: TeamMember }> = ({
  member,
}) => {
  return (
    <div className="flex items-center justify-between">
      <span>{member.name}</span>
      <div>
        <a
          href={`https://www.linkedin.com/in/${member.linkedInUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-xl text-[#5f7fbf] hover:text-[#3a60a3] transition-all duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href={`https://twitter.com/${member.twitterUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-xl text-gray-800 hover:text-[#121212] transition-all duration-300"
        >
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
      </div>
    </div>
  );
};
