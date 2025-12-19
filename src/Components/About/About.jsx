import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          {setPlayState(true)}
        }}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa explicabo vero possimus labore ipsam, quo omnis, aliquam tempora enim, unde eum commodi ex rem quis est blanditiis repellendus. Quod, mollitia.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam saepe consequatur quae assumenda nemo esse, similique asperiores in dolores aliquam accusamus quidem molestiae magni, veniam neque placeat ab. Ipsum, possimus?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores dolore commodi ipsum eligendi cum nemo et ab explicabo neque accusantium repellendus reiciendis, atque aperiam unde ut, id esse nobis.</p>
      </div>
    </div>
  )
}

export default About
