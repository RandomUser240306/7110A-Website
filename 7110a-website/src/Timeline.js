import React from 'react'
import './Timeline.css';

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="line"></div>
      <div className="event">
        <div className="event-content">
          <img src="image1.jpg" alt="Event 1" />
          <p>Caption 1</p>
        </div>
      </div>
      <div className="event">
        <div className="event-content">
          <img src="image2.jpg" alt="Event 2" />
          <p>Caption 2</p>
        </div>
      </div>
      <div className="event">
        <div className="event-content">
          <img src="image3.jpg" alt="Event 3" />
          <p>Caption 3</p>
        </div>
      </div>
    </div>
  )
}
