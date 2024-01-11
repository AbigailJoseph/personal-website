import React from 'react'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import './AboutSection.css'


function AboutSection() {
  return (
    <section id="about">
      {/* <div className='container'> */}
      <p className="section-text-p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
    <div className='outer-section-container'>
        
    <div className="section-container">
        <div className="pic-container">
          <img src={pic1} className="about-pic" />
        </div>
        <div className="pic-container">
          <img src={pic2} className="about-pic" />
        </div>
        <div className="pic-container">
          <img src={pic3} className="about-pic" />
        </div>
    </div>

        <div className="about-details-container">
          <div className="text-container">
            <p>
              Abigail is currently a freshman at Cornell University as a computer science major. She a member of the Girl Scout Cadet 
              Committe of the Cornell Chapter of the <strong className='bold'> Society of Women Engineers(SWE) </strong>. She is also a developer in the WebDev club at Cornell.
              Abigail has experience in both web and iOS development. She is proficient in <strong className='bold'>Javascript, HTML/CS, Swift, Java, and Python</strong>. Further she is skilled 
              in the following frameworks: <strong className='bold'> React, Node.js, Bootstrap, and Google Firebase </strong>.  
            </p>
          </div>
        </div>
    </div>
  {/* </div> */}
      
    </section>
  )
}

export default AboutSection