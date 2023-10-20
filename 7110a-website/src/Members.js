import React from "react";

import "./Members.css";

import { 
    Ryan1, 
    Ryan2, 
    Ryan3, 
    Ashwin1, 
    Ashwin2, 
    Ashwin3,
    // Bailey1,
    // Bailey2,
    // Bailey3,
    Krish1,
    Krish2,
    Krish3,
    // Spandan1,
    // Spandan2,
    // Spandan3,
    // Josh1,
    // Josh2,
    // Josh3,
    Saarim1,
    Saarim2,
    Saarim3
 } from "./index.js";
const Members = () => {
  const members = [
    {
      name: "Ryan Brown",
      description: "designer, builder, sort of notebook",
      gif: "https://tenor.com/view/rat-spinning-horizontally-gif-25424411",
      photos: [
        Ryan1, 
        Ryan2, 
        Ryan3
    ],
    },
    {
      name: "Ashwin Iyer",
      description: "Driver, builder, off-coder.",
      gif: "https://media.tenor.com/ifL9Vb-kv_cAAAAC/ryan-hello.gif",
      photos: [
        Ashwin1, 
        Ashwin2, 
        Ashwin3],
    },
    {
      name: "Bailey Koh",
      description: "Builder",
      gif: "https://tenor.com/view/rat-spinning-horizontally-gif-25424411",
      photos: [
        "https://example.com/jane1.jpg",
        "https://example.com/jane2.jpg",
        "https://example.com/jane3.jpg",
      ],
    },
    {
      name: "Krish Dalela",
      description: "Coder",
      gif: "https://tenor.com/view/rat-spinning-horizontally-gif-25424411",
      photos: [
        Krish1,
        Krish2,
        Krish3,
      ],
    },
    {
      name: "Spandan Patel",
      description: "Coder, off-builder.",
      gif: "https://tenor.com/view/rat-spinning-horizontally-gif-25424411",
      photos: [
        "https://example.com/jane1.jpg",
        "https://example.com/jane2.jpg",
        "https://example.com/jane3.jpg",
      ],
    },
    {
      name: "Joshua Landgraff",
      description: "Notebooker.",
      gif: "https://tenor.com/view/rat-spinning-horizontally-gif-25424411",
      photos: [
        "https://example.com/jane1.jpg",
        "https://example.com/jane2.jpg",
        "https://example.com/jane3.jpg",
      ],
    },
    {
      name: "Saarim Sayed",
      description: "Documenter.",
      gif: "https://media.tenor.com/RfJzepsDdmYAAAAC/rat-spinning.gif",
      photos: [
        Saarim1,
        Saarim2,
        Saarim3,
      ],
    },
  ];

  return (
    <div className="members">
      {members.map((member) => (
        <div className="member" key={member.name}>
          <h2>{member.name}</h2>
          <p className="Description">{member.description}</p>
          
          <div className="photos">
            {member.gif && <img className="gif" src={member.gif} alt={`${member.name}'s gif`} />}
            {member.photos.map((photo, index) => (
              <img src={photo} alt={member.name} key={index} />
            ))}
          </div>
          <p className="Favorite">My favorite image^</p>
        </div>
      ))}
    </div >
  );
};

export default Members;
