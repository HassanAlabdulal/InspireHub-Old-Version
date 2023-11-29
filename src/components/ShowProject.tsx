import React from "react";
import { renderStars } from "../utils/renderStars";

interface TeamMember {
  name: string;
  linkedIn: string;
  twitter: string;
}

interface ProjectData {
  title: string;
  images: string[];
  date: string;
  rate: number;
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
  rate: 5,
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
    <div className="min-h-screen p-6 mx-auto bg-[#f7f7f7] text-[#121212]">
      <div className="mt-32">
        <div className="w-1/4 h-full ">
          <header className="mb-5 text-center ">
            <h1 className="mb-6 text-4xl font-bold text-[#bfa260]">
              {projectData.title}
            </h1>
            <hr className="h-px my-8 bg-gray-200 border-0" />
          </header>
          <div className="flex items-center justify-center text-xl">
            Rate: {renderStars(projectData.rate)}
            <span className="ml-1">{projectData.rate} of 5</span>
          </div>

          <dl className="max-w-md mt-24 text-gray-900 divide-y divide-gray-200 ">
            <div className="flex flex-col items-center pb-5">
              <dt className="mb-1 text-gray-500 md:text-lg ">Category</dt>
              <dd className="text-lg font-semibold">{projectData.category}</dd>
            </div>
            <div className="flex flex-col items-center py-5">
              <dt className="mb-1 text-gray-500 md:text-lg ">Budget</dt>
              <dd className="text-lg font-semibold">
                {projectData.budget} <span>{projectData.currency}</span>
              </dd>
            </div>
            <div className="flex flex-col items-center pt-5">
              <dt className="mb-1 text-gray-500 md:text-lg ">Date</dt>
              <dd className="text-lg font-semibold">{projectData.date}</dd>
            </div>
          </dl>

          {/* <section className="mb-6">
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
        </section> */}
        </div>
      </div>
    </div>
  );
};

export default ShowProject;
