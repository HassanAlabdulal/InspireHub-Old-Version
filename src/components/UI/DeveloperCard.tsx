import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

type DeveloperCardProps = {
  imagePath: string;
  name: string;
  title: string;
  linkedInUrl: string;
  twitterUrl: string;
  githubUrl: string;
};

const DeveloperCard: React.FC<DeveloperCardProps> = ({
  imagePath,
  name,
  title,
  linkedInUrl,
  twitterUrl,
  githubUrl,
}) => {
  return (
    <div className="w-full max-w-sm transition-all duration-500 bg-white border border-gray-200 shadow-md rounded-xl hover:bg-gray-50 hover:scale-105">
      <div className="flex flex-col items-center pb-8">
        <img
          className="w-32 h-32 mt-10 mb-3 border-2 border-black rounded-full shadow-lg"
          src={imagePath}
          alt={`${name} image`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href={githubUrl}
            target="_blank"
            className="p-2 text-center align-middle rounded-full"
          >
            <FontAwesomeIcon
              title="GitHub"
              className="inline-block w-8 h-8 transition-all duration-700 hover:scale-110"
              icon={faGithub}
            />
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            className="p-2 text-center align-middle rounded-full"
          >
            <FontAwesomeIcon
              title="LinkedIn"
              className="inline-block w-8 h-8 transition-all duration-700 hover:scale-110 text-[#3e60a3]"
              icon={faLinkedin}
            />
          </a>
          <a
            href={twitterUrl}
            target="_blank"
            className="p-2 text-center align-middle rounded-full"
          >
            <FontAwesomeIcon
              title="Twitter"
              className="inline-block w-8 h-8 transition-all duration-700 hover:scale-110"
              icon={faXTwitter}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
