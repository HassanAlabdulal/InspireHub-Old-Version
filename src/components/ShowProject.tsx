import React from "react";

interface TeamMember {
  name: string;
  linkedIn: string;
  twitter: string;
}

interface ProjectData {
  title: string;
  images: string[];
  date: string;
  category: string;
  budget: string;
  currency: string;
  description: string;
  motivation: string;
  teamMembers: TeamMember[];
  features: string;
  resources: string;
  tools: string;
  others: string;
}

const projectData: ProjectData = {
  title: "InspireHub",
  images: ["src/assets/ContactUs.png"],
  date: "2023-01-01",
  category: "Technology",
  budget: "5000",
  currency: "SAR",
  description:
    "It is a website that is a hub for inspiring and innovative project ideas...",
  motivation:
    "The primary motivation behind InspireHub is to address a significant challenge...",
  teamMembers: [
    { name: "Abdullah", linkedIn: "aamhaamm", twitter: "aamhaamm" },
  ],
  features: "Easy to use, Suitable for everyone ...",
  resources: "https://github.com/InspireHub",
  tools: "React, Astro ...",
  others:
    "This is the first version, we are working to update it as soon as depending on your suggestions...",
};

const ShowProject: React.FC = () => {
  return (
    <div className="container p-6 mx-auto">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold">{projectData.title}</h1>
      </header>

      <section className="mb-6">
        <div className="flex flex-wrap justify-center gap-4">
          {projectData.images.map((imageSrc, index) => (
            <img
              key={index}
              className="rounded-lg shadow-lg h-96 w-96"
              src={imageSrc}
              alt={`Project ${projectData.title}`}
            />
          ))}
        </div>
      </section>

      <section className="mb-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <p className="font-semibold">
              Date: <span className="font-normal">{projectData.date}</span>
            </p>
          </div>
          <div>
            <p className="font-semibold">
              Category:{" "}
              <span className="font-normal">{projectData.category}</span>
            </p>
          </div>
          <div>
            <p className="font-semibold">
              Budget:{" "}
              <span className="font-normal">{`${projectData.budget} ${projectData.currency}`}</span>
            </p>
          </div>
        </div>
        <p className="mt-4">{projectData.description}</p>
        <p className="mt-4">
          <strong>Motivation:</strong> {projectData.motivation}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Team Members</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectData.teamMembers.map((member, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
              <p className="font-semibold">{member.name}</p>
              <p>LinkedIn: {member.linkedIn}</p>
              <p>Twitter: {member.twitter}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Features</h2>
        <p>{projectData.features}</p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Resources</h2>
        <a
          href={projectData.resources}
          className="text-blue-600 hover:text-blue-800"
        >
          {projectData.resources}
        </a>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Tools Used</h2>
        <p>{projectData.tools}</p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Other Information</h2>
        <p>{projectData.others}</p>
      </section>
    </div>
  );
};

export default ShowProject;
