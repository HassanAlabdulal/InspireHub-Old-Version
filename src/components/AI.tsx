import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animations/AI-Animation.json";

interface InputProps {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, placeholder, onChange }) => (
  <div className="mb-4">
    <label className="block mb-2 text-sm font-bold text-gray-700">
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    />
  </div>
);

interface DropdownProps {
  label: string;
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => (
  <div className="mb-4">
    <label className="block mb-2 text-sm font-bold text-gray-700">
      {label}
    </label>
    <select
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

const AI: React.FC = () => {
  const [interests, setInterests] = useState({
    areasOfInterest: "",
    skillsOrTechnologies: "",
    IndustryRelevance: "",
    projectType: "",
  });
  const [preferences, setPreferences] = useState({
    timeCommitment: "",
    PreferredTools: "",
    CollaborationPreference: "",
    DifficultyLevel: "",
  });
  const [generatedIdeas, setGeneratedIdeas] = useState<string>("");

  const getProjectIdeas = () => {
    // Simulate API call and set generated ideas
    setGeneratedIdeas("Here are some AI generated project ideas...");
  };

  return (
    <div className="container mx-auto min-h-screen p-6 bg-[#f7f7f7]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-center">
            User Interests
          </h2>
          <Input
            label="Areas of Interest"
            placeholder="Specific domains you are interested in, technology, health, etc.."
            onChange={(value) =>
              setInterests({ ...interests, areasOfInterest: value })
            }
          />
          <Input
            label="Skills or Technologies"
            placeholder="Skills or technologies you're proficient in or wish to explore"
            onChange={(value) =>
              setInterests({ ...interests, skillsOrTechnologies: value })
            }
          />

          <Dropdown
            label="Industry Relevance"
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
            label="Project Type"
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
              { value: "health_and_wellness", label: "Health and Wellness" },
              { value: "data_analysis", label: "Data Analysis" },
              { value: "software_development", label: "Software Development" },
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
              setInterests({ ...interests, projectType: value })
            }
          />
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md md:col-span-1">
          <div className="w-full h-full max-xl:w-80 max-xl:h-80 max-lg:mt-24">
            <Lottie animationData={animationData} />
          </div>
          <textarea
            value={generatedIdeas}
            onChange={(e) => setGeneratedIdeas(e.target.value)}
            className="w-full h-32 p-4 border rounded shadow resize-none"
            placeholder="Generated project ideas will appear here..."
          />
          <button
            onClick={getProjectIdeas}
            className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Get Project Ideas
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-center">
            User Preferences
          </h2>

          <Input
            label="Preferred Tools"
            placeholder=" Write down the tools or frameworks you prefer to use"
            onChange={(value) =>
              setPreferences({ ...preferences, PreferredTools: value })
            }
          />
          <Dropdown
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
    </div>
  );
};

export default AI;
