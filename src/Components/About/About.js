import React from 'react'
import './About.css'

function About() {
  return (
    <div className='main-container-about'>
      <img src={process.env.PUBLIC_URL + "profile.jpg"} className='imgt'/>
      <div className='content'>
        Hello! I'm a passionate and experienced game developer currently pursuing my BCA (Bachelor of Computer Applications) in my 2nd year from Jaipur, Rajasthan. Born on September 9, 2006, I've been honing my skills in game development for over four years. My journey started with creating 2D and 3D games, and it has since expanded into various other fields of development.

        I have a strong foundation in web development, Android development, and Android Studio. My expertise includes creating APIs and backend applications for games, using technologies like Node.js to set up servers. I'm well-versed in different types of connections, including WebSockets, HTTP, UDP, and TCP.

        In addition to game development, I have an intermediate knowledge of React for building static websites—this very website being one of my projects. My versatility extends to making Android plugins for Godot, which allows me to integrate customized features into Android apps and games.

        With a deep commitment to continual learning and a passion for creating immersive and interactive experiences, I'm excited to bring innovative solutions to the projects I work on. Whether it's game development, backend programming, or web design, I'm always eager to take on new challenges and expand my skill set.
      </div>
      
    </div>
  )
}

export default About
