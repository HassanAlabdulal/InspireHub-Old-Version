import React from 'react';

const projectData = {
  title: "InspireHub",
  images: [
    "src/assets/ContactUs.png", 
  ],
  date: "2023-01-01",
  category: "Technology",
  budget: "5000",
  currency: "SAR",
  description: "It is a website that is a hub for inspiring and innovative project ideas...",
  motivation: "The primary motivation behind InspireHub is to address a significant challenge...",
  teamMembers: [
    { name: "Abdullah", linkedIn: "aamhaamm", twitter: "aamhaamm" },
  ],
  features: "Easy to use, Suitable for everyone ...",
  resources: "https://github.com/InspireHub",
  tools: "React, Astro ...",
  others: "This is the first version, we are working to update it as soon as depending on your suggestions...",
};


export default function ShowProject() {
    return (
      <div className="bg-[#f7f7f7] pt-[65px] flex flex-col items-center min-h-screen font-roboto">
        <div className="bg-[#f7f7f7] p-10 shadow-2xl rounded max-w-4xl w-full">
          {/* Title Section */}
          <h1 className="text-[#bfa260] font-bold text-3xl mb-6 text-center">
            {projectData.title}
          </h1>
  
          {/* Image Section */}
          {projectData.images.length > 0 && (
            <div className="mb-6">
              <img
                src={projectData.images[0]}
                alt="Project"
                className="w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          )}
  
          {/* Project Details Section */}
          <h2 className="text-[#bfa260] font-bold text-2xl mb-4">
            Project Details
          </h2>
          <div className="text-black">
            <p className="mb-2"><strong>Date of project:</strong> {projectData.date}</p>
            <p className="mb-2"><strong>Category:</strong> {projectData.category}</p>
            <p className="mb-2"><strong>Budget:</strong> {`${projectData.budget} ${projectData.currency}`}</p>
            <p className="mb-2"><strong>Description:</strong> {projectData.description}</p>
            <p className="mb-2"><strong>Motivation:</strong> {projectData.motivation}</p>
            <p className="mb-2"><strong>Features:</strong> {projectData.features}</p>
            <p className="mb-2"><strong>Resources:</strong> <a href={projectData.resources} target="_blank" rel="noopener noreferrer">{projectData.resources}</a></p>
            <p className="mb-2"><strong>Tools:</strong> {projectData.tools}</p>
            <p className="mb-2"><strong>Others:</strong> {projectData.others}</p>
          </div>
  
          {/* Team Members Section */}
          <h3 className="text-[#bfa260] font-bold text-xl mb-4 mt-6">Team Members</h3>
          {projectData.teamMembers.map((member, index) => (
              <div key={index} className="mb-2">
                <p><strong>Name:</strong> {member.name}</p>
                <p>
                  <strong>LinkedIn:</strong> <a href={`https://${member.linkedIn}`} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </p>
                <p>
                  <strong>Twitter:</strong> <a href={`https://${member.twitter}`} target="_blank" rel="noopener noreferrer">Twitter Profile</a>
                </p>
              </div>
          ))}
        </div>
      </div>
    );
  }