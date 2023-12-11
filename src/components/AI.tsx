import React, { useState} from 'react';
import Lottie from "lottie-react";
import animationData from "../assets/Animations/AI-Animation.json";
import { createSuggestion } from "../utils/createSuggestion";
import { motion } from "framer-motion";

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  onChange,
  name,
}) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-bold text-gray-700"
    >
      {label}
    </label>
    <input
      name={name}
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 leading-tight text-gray-700 transition-all duration-300 border rounded shadow focus:px-5 focus:outline-0"
    />
  </div>
);
interface DropdownProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  name,
}) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-bold text-gray-700"
    >
      {label}
    </label>
    <select
      name={name}
      onChange={(e) => onSelect(e.target.value)}
      className="block w-full px-4 py-2 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const CircularProgressBar = ({ progress }) => {
  // Calculate the circumference of the circle
  const radius = 50; // radius of the circle
  const stroke = 4; // stroke width of the circle
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // Calculate the stroke dash offset
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex justify-center items-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="lightgray"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="blue"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke="#51c5cf"
          dy=".3em"
          fontSize="40" // Adjust font size as needed
        >
          {`${Math.round(progress)}%`} {/* Round to the nearest whole number */}
        </text>
      </svg>
    </div>
  );
};

const AI: React.FC = () => {
  const [interests, setInterests] = useState({
    areasOfInterest: "",
    skillsOrTechnologies: "",
    IndustryRelevance: "",
    projectField: "",
  });
  const [preferences, setPreferences] = useState({
    timeCommitment: "",
    PreferredTools: "",
    CollaborationPreference: "",
    DifficultyLevel: "",
  });
  const [generatedIdeas, setGeneratedIdeas] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Mock function to simulate progress
  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 500); // You can adjust the interval time as needed
  };


  const getProjectIdeas = async () => {
    setIsLoading(true); // Start loading
  
    // Assume it takes approximately 5 seconds for createSuggestion to complete
    const expectedDuration = 10000; // in milliseconds
    let elapsedTime = 0; // time since the operation started
    const intervalTime = 100; // update progress every 100 milliseconds
  
    const interval = setInterval(() => {
      elapsedTime += intervalTime;
      // Calculate progress as the percentage of the expected duration
      const calculatedProgress = (elapsedTime / expectedDuration) * 100;
      // Ensure progress doesn't exceed 100%
      setProgress(Math.min(calculatedProgress, 100));
    }, intervalTime);
  
    try {
      const suggestion = await createSuggestion({
        ...preferences,
        ...interests,
      });
      setGeneratedIdeas(suggestion);
      setProgress(100); // Directly set to 100% when done
    } catch (error) {
      console.error("Failed to get project ideas:", error);
    } finally {
      clearInterval(interval); // Stop the interval when the operation is done
      setIsLoading(false); // Stop loading regardless of success or error
    }
  };
  
  

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex justify-center items-center">
      <div className="container p-8 mx-auto bg-[#f7f7f7] rounded-lg">
        <div className="flex flex-col gap-6 mt-16">
          <div className="flex flex-col items-center mx-6 lg:flex-row md:mx-12 lg:mx-24 xl:mx-48">
            <div className="w-1/2 h-1/2 lg:w-4/5 lg:h-4/5">
              <Lottie animationData={animationData} />
            </div>
            <div className="flex flex-col items-center my-6 space-y-1">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.02,
                    },
                  },
                  hidden: {},
                }}
                className="text-2xl max-w-2xl sm:text-3xl sm:max-w-3xl sm:mx-12 md:18 font-bold leading-none tracking-tight text-center text-[#bfa260] font-nunito"
              >
                {Array.from("Hello, I'm Spark").map((char, index) => {
                  // Check if the current character is part of the word "SparkIdeator"
                  const isPartOfName =
                    "Hello I am ".length <= index &&
                    index < "Hello I am Spark".length;

                  return (
                    <motion.span
                      key={index}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 50 },
                      }}
                      transition={{ type: "spring", stiffness: 50 }}
                      // Apply additional styles if the character is part of "SparkIdeator"
                      style={isPartOfName ? {fontWeight: "bolder" } : {}}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.02,
                    },
                  },
                  hidden: {},
                }}
                className="text-xl max-w-1xl sm:text-2xl sm:max-w-2xl sm:mx-12 md:18 font-semibold leading-none tracking-tight text-center text-[#bfa260] font-nunito"
              >
                {Array.from("Your creative companion").map((char, index) => {
                  return (
                    <motion.span
                      key={index}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 50 },
                      }}
                      transition={{ type: "spring", stiffness: 50 }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
              <span className="text-center font-roboto text-base text-[#121212] md:text-lg lg:text-xl pt-4">
                I'am here to help you discover exciting project ideas tailored
                to your interests and preferences. Let's embark on a journey of
                inspiration and innovation together!
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full gap-12 my-6 lg:flex-row">
            <div className="flex flex-col justify-center w-full p-6 bg-[#fafafa] rounded-lg shadow-lg lg:w-1/2 gap-2">
              <h2 className="mb-4 md:mb-12 text-2xl font-nunito font-bold text-[#bfa260] text-center">
                User Interests
              </h2>
              <Input
                name="areasOfInterest"
                label="Areas of Interest"
                placeholder="Interest areas (e.g., tech, health)"
                onChange={(value) =>
                  setInterests({ ...interests, areasOfInterest: value })
                }
              />
              <Input
                name="skillsOrTechnologies"
                label="Skills or Technologies"
                placeholder="Skills/interests (e.g., project management, education)"
                onChange={(value) =>
                  setInterests({ ...interests, skillsOrTechnologies: value })
                }
              />

              <Dropdown
                label="Industry Relevance"
                name="IndustryRelevance"
                options={[
                  { value: "technology", label: "Technology" },
                  { value: "healthcare", label: "Healthcare" },
                  { value: "education", label: "Education" },
                  { value: "finance", label: "Finance" },
                  { value: "automotive", label: "Automotive" },
                  { value: "entertainment", label: "Entertainment" },
                  { value: "manufacturing", label: "Manufacturing" },
                  { value: "agriculture", label: "Agriculture" },
                  { value: "retail", label: "Retail" },
                  { value: "energy", label: "Energy" },
                  { value: "environment", label: "Environment" },
                  { value: "food_and_beverage", label: "Food & Beverage" },
                  {
                    value: "government_and_public_sector",
                    label: "Government & Public Sector",
                  },
                  { value: "real_estate", label: "Real Estate" },
                  {
                    value: "transportation_and_logistics",
                    label: "Transportation & Logistics",
                  },
                  { value: "telecommunications", label: "Telecommunications" },
                  { value: "pharmaceuticals", label: "Pharmaceuticals" },
                  { value: "space", label: "Space" },
                  { value: "cyber_security", label: "Cyber Security" },
                  { value: "art_and_design", label: "Art & Design" },

                  // More options...
                ]}
                onSelect={(value) =>
                  setInterests({ ...interests, IndustryRelevance: value })
                }
              />

              <Dropdown
                name="projectField"
                label="Project Feild"
                options={[
                  { value: "development", label: "Development" },
                  { value: "research", label: "Research" },
                  { value: "entrepreneurship", label: "Entrepreneurship" },
                  { value: "social_impact", label: "Social Impact" },
                  { value: "educational", label: "Educational" },
                  { value: "creative_arts", label: "Creative Arts" },
                  {
                    value: "technology_innovation",
                    label: "Technology Innovation",
                  },
                  { value: "scientific_inquiry", label: "Scientific Inquiry" },
                  { value: "community_service", label: "Community Service" },
                  {
                    value: "environmental_conservation",
                    label: "Environmental Conservation",
                  },
                  {
                    value: "health_and_wellness",
                    label: "Health and Wellness",
                  },
                  { value: "data_analysis", label: "Data Analysis" },
                  {
                    value: "software_development",
                    label: "Software Development",
                  },
                  { value: "product_design", label: "Product Design" },
                  { value: "market_research", label: "Market Research" },
                  { value: "business_strategy", label: "Business Strategy" },
                  { value: "engineering", label: "Engineering" },
                  {
                    value: "multimedia_production",
                    label: "Multimedia Production",
                  },
                  { value: "event_planning", label: "Event Planning" },
                  { value: "policy_development", label: "Policy Development" },
                ]}
                onSelect={(value) =>
                  setInterests({ ...interests, projectField: value })
                }
              />
            </div>
            <div className="flex flex-col justify-center w-full p-6 bg-[#fafafa] rounded-lg shadow-lg lg:w-1/2 gap-2">
              <h2 className="mb-4 md:mb-12 text-2xl font-nunito font-bold text-[#bfa260] text-center ">
                User Preferences
              </h2>

              <Input
                name="preferredTools"
                label="Preferred Tools"
                placeholder="Preferred tools/frameworks"
                onChange={(value) =>
                  setPreferences({ ...preferences, PreferredTools: value })
                }
              />
              <Dropdown
                name="timeCommitment"
                label="Time Commitment"
                options={[
                  { value: "weeks", label: "Weeks" },
                  { value: "months", label: "Months" },
                  { value: "ongoing", label: "Ongoing" },
                  // More options...
                ]}
                onSelect={(value) =>
                  setPreferences({ ...preferences, timeCommitment: value })
                }
              />

              <Dropdown
                name="DifficultyLevel"
                label="Difficulty Level"
                options={[
                  { value: "easy", label: "Easy" },
                  { value: "medium", label: "Medium" },
                  { value: "hard", label: "Hard" },
                  // More options...
                ]}
                onSelect={(value) =>
                  setPreferences({ ...preferences, DifficultyLevel: value })
                }
              />
              <Dropdown
                name="CollaborationPreference"
                label="Collaboration Preference:"
                options={[
                  { value: "solo", label: "Solo" },
                  { value: "team", label: "Team" },
                  // More options...
                ]}
                onSelect={(value) =>
                  setPreferences({ ...preferences, DifficultyLevel: value })
                }
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-[#fafafa] rounded-lg shadow-lg">
            <textarea
              value={generatedIdeas}
              onChange={(e) => setGeneratedIdeas(e.target.value)}
              className="w-full h-80 p-4 border rounded shadow resize-none lg:w-4/5"
              placeholder="Generated project ideas will appear here..."
            />
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={getProjectIdeas}
                className="px-4 py-2 font-bold text-white  disabled:bg-gray-400 disabled:cursor-not-allowed 
              cursor-pointer rounded-lg bg-[#5f7fbf] border-2 border-[#5f7fbf] text-base transition-all
               duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
               disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Get Project Ideas
              </button>
              <a
                className="flex select-none items-center justify-center rounded-lg border-2 border-[#5f7fbf]
                            px-4 py-2 text-base font-bold text-[#5f7fbf] align-middle transition-all duration-500
                          hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                href="AIPage"
              >
                Restart
              </a>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <CircularProgressBar progress={progress} />
        </div>
      )}
    </div>
  );
};

export default AI;