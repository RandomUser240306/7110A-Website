import React from "react";

import "./Members.css";

import MemberCard from "./MemberCard.js";

import { 
    Ryan1, 
    Ryan2, 
    Ryan3, 
    Ashwin1, 
    Ashwin2, 
    Ashwin3,
    Bailey1,
    Bailey2,
    Bailey3,
    Krish1,
    Krish2,
    Krish3,
    Spandan1,
    Spandan2,
    Spandan3,
    Josh1,
    Josh2,
    Josh3,
    Saarim1,
    Saarim2,
    Saarim3
 } from "./index.js";
const Members = ( {silly} ) => {
  const members = [
    {
      name: "Ryan Brown",
      description: (
        <>
        Team Role: Designer and Builder
        <br />
        <br />
        Accomplishments / Experience:
        <br />
        AP Computer Science Principles
        <br />
        AP Computer Science A
        <br />
        comp sci UIL
        <br />
        Introduction to Engineering 
        <br />
        Principles of Engineering
        <br />
        Robotics 1
        <br />
        Rockets 1
        </>
        ),
        gif: "https://media.tenor.com/maiXwoUJ3_wAAAAC/thank-you.gif",
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
      gif: "https://media.tenor.com/PsHa5wuZ3wcAAAAC/bad-kitty-bad-kitten.gif",
      photos: [
        Bailey1,
        Bailey2,
        Bailey3
      ],
    },
    {
      name: "Krish Dalela",
      description: "Coder",
      gif: "https://media.tenor.com/r5ycKQT19B8AAAAd/coding-time-coding.gif",
      photos: [
        Krish1,
        Krish2,
        Krish3,
      ],
    },
    {
      name: "Spandan Patel",
      description: "Coder, off-builder.",
      gif: "https://media.tenor.com/sIGHWV8TeSEAAAAd/i-have-no-enemies.gif",
      photos: [
        Spandan1,
        Spandan2,
        Spandan3,
      ],
    },
    {
      name: "Joshua Landgraff",
      description: (
      <>
      Team Role: Notebooker
      <br />
      <br />
      Accomplishments / Experience:
      <br />
      Introduction to Engineering and Principles of Engineering
      <br />
      AP Computer Science Principles
      <br />
      AP Computer Science A
      <br />
      13th Wall Studios Video Game Development
      <br />
      UI Design for Companies
      <br />
      National Merit for Hispanics
      </>
      ),
      gif: "https://media.discordapp.net/attachments/1143327129241669683/1164998581778923630/IMG_4040.gif",
      photos: [
        Josh1,
        Josh2,
        Josh3,
      ],
    },
    {
      name: "Saarim Sayed",
      description: "Documenter.",
      known: (
        <>

        </>
      ),

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
      <MemberCard member={members[0]} silly={silly}/>
      <MemberCard member={members[1]} silly={silly}/>
      <MemberCard member={members[2]} silly={silly}/>
      <MemberCard member={members[3]} silly={silly}/>
      <MemberCard member={members[4]} silly={silly}/>
      <MemberCard member={members[5]} silly={silly}/>
      <MemberCard member={members[6]} silly={silly}/>
    </div>
  );
  };

export default Members;