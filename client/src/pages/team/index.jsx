import React from "react";

// Replace these with the paths to your actual images
import teamMember1 from "../../assets/Profile_Photo.jpg";
import teamMember2 from "../../assets/nvm.jpg";
import teamMember3 from "../../assets/ana.jpg";
import teamMember4 from "../../assets/vish.png";
import teamMember5 from "../../assets/woman.png";
import ShoppingHeader from "../../components/shopping-view/header";

function Team() {
  const teamMembers = [
    {
      name: "Shivam Jain",
      position: "Co-founder",
      image: teamMember1,
    },
    {
      name: "Navonmesh Mehta",
      position: "Co-founder",
      image: teamMember2,
    },
    {
      name: "Ananaya Mittal",
      position: "Content-Writer",
      image: teamMember3,
    },
    {
        name: "Vishakha Simaiya",
        position: "Social Media Manager",
        image: teamMember4,
      },
      {
        name: "Ayushi Vishwakarma",
        position: "UI/UX Designer",
        image: teamMember5,
      },
  ];

  return (
    <>
    <ShoppingHeader/>
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Team</h2>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 mt-2">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Team;
