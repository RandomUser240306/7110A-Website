import Carousel from "./Carousel";
import "./Members.css";

import React from 'react'

export default function MemberCard( { member, silly } ) {
  return (
    <>
        <div className="member" key={member.name}>
          <h2 className="memberName">{member.name}</h2>
          <div className="memberContent">
            <p className="memberDescription">{member.description}</p>
            <div className="photos">
              {silly ? <div>{member.gif && <img className="gif" src={member.gif} alt={`${member.name}'s gif`} />}</div> : <></>}
              <Carousel images={member.photos} />
              {/* {member.photos.map((photo, index) => (
                <img src={photo} alt={member.name} key={index} />
              ))} */}
            </div>
          </div>
          
          {silly ? <p className="Favorite">My favorite Gif^</p> : <></>}
        </div>
    </>
  )
}
