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
          className="mx-2 text-blue-600 hover:text-blue-800"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href={`https://twitter.com/${member.twitterUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-blue-400 hover:text-blue-600"
        >
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
      </div>
    </div>
  );
};
