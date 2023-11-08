import "./Members.css";

import React from 'react'

export default function MemberCard( { member } ) {
  return (
    <>
        <div className="member" key={member.name}>
          <h2>{member.name}</h2>
          <div className="photos">
            {member.gif && <img className="gif" src={member.gif} alt={`${member.name}'s gif`} />}
            <p className="Description">{member.description}</p>
            {member.photos.map((photo, index) => (
              <img src={photo} alt={member.name} key={index} />
            ))}
          </div>
          <p className="Favorite">My favorite Gif^</p>
        </div>
    </>
  )
}
