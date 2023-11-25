import React, { useState } from "react";

interface InputProps {
  label: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, onChange }) => (
  <div className="mb-4">
    <label className="block mb-2 text-sm font-bold text-gray-700">
      {label}
    </label>
    <input
      type="text"
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
  });
  const [preferences, setPreferences] = useState({
    projectType: "",
    timeCommitment: "",
  });
  const [generatedIdeas, setGeneratedIdeas] = useState<string>("");

  const getProjectIdeas = () => {
    // Simulate API call and set generated ideas
    setGeneratedIdeas("Here are some AI generated project ideas...");
  };

  return (
    <div className="flex items-start justify-around min-h-screen p-10 bg-gray-100">
      <div className="flex-1">
        <h2 className="mb-4 text-lg font-semibold text-center">
          User Interests
        </h2>
        <Input
          label="Areas of Interest"
          onChange={(value) =>
            setInterests({ ...interests, areasOfInterest: value })
          }
        />
        <Input
          label="Skills or Technologies"
          onChange={(value) =>
            setInterests({ ...interests, skillsOrTechnologies: value })
          }
        />
      </div>

      <div className="flex-1 text-center">
        <img
          src="src/assets/Website-Creator.png"
          alt="Centerpiece"
          className="mx-auto mb-4"
        />
        <textarea
          value={generatedIdeas}
          onChange={(e) => setGeneratedIdeas(e.target.value)}
          className="w-full h-32 p-4 border rounded shadow"
          placeholder="Generated project ideas will appear here..."
        />
        <button
          onClick={getProjectIdeas}
          className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Get Project Ideas
        </button>
      </div>

      <div className="flex-1">
        <h2 className="mb-4 text-lg font-semibold text-center">
          User Preferences
        </h2>
        <Dropdown
          label="Project Type"
          options={[
            { value: "research", label: "Research" },
            { value: "development", label: "Development" },
            { value: "entrepreneurship", label: "Entrepreneurship" },
            // More options...
          ]}
          onSelect={(value) =>
            setPreferences({ ...preferences, projectType: value })
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
      </div>
    </div>
  );
};

export default AI;
