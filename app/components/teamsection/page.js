"use client";
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Mahedi Hassan',
      role: 'Talent Acquisition - Tech',
      description: "Right Now, I'm working at Upwork and Fiverr as Web Design & Developer.",
      imageUrl: "/careerpic.jpg"
    },
    {
      name: 'Md Rafi',
      role: 'Talent Acquisition - Non-Tech',
      description: "I'm Rafi. Coding passion drives my tech journey.",
      imageUrl: "/careerpic.jpg"
    },
    {
      name: 'Nayem Hossain',
      role: 'Human Resource',
      description: "Right Now, I'm working at Upwork and Fiverr as Web Design & Developer.",
      imageUrl: "/careerpic.jpg"
    },
    {
      name: 'Rakibul Hasan',
      role: 'Human Resource',
      description: "Right Now, I'm working at Upwork and Fiverr as Web Design & Developer.",
      imageUrl: "/careerpic.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto md:mt-22 mt-12">
      {/* Header Section */}
      <div className="text-center mb-16 space-y-4">
        <p className="text-[#326B3F] text-md">Our Team</p>
        <h2 className="md:text-3xl text-xl font-medium">
          A Top Level Heading Will Come Here in about 6-7 words.{' '}<br />
          <span className="text-[#326B3F]">Let's Team up!</span>
        </h2>
        <p className="text-[#6a6a6a] text-sm">
          A sub heading will come in about 15-18 words.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 px-2 md:px-4">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 md:p-4 space-y-1 md:space-y-2">
              <h3 className="text-sm md:text-lg font-semibold text-[#1b223c] truncate">{member.name}</h3>
              <p className="text-[#326B3F] font-medium text-xs md:text-sm">{member.role}</p>
              <p className="text-[#6a6a6a] text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
