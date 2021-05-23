import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about">
      <h2 className="about-title">About</h2>
      <div className="about-data">
        <div className="about-img">
          <img src="assets/myimg2.jpeg" alt="" />
        </div>
        <div>
          <h2 className="about-subtitle">I'am Pranavdhar</h2>
          <p className="about-text">
            studying my first year in computer science engineering at Amrita University, Amritapuri located in India. I am a member at amfoss -
            a student developer club.I am an ambitious computer science engineer, an open-source enthusiast, and a curious person to learn new things every day and
            improve myself. I am always ready to have new experiences, meet new people and learn new things. I find the idea of creating value for people and impacting
            the world through my work delightful.
                    </p>
          <p><b>Languages and tools known:</b> </p>
          <p>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt='react'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/django/django.png" alt='django'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/5c058a388828bb5fde0bcafd4bc867b5bb3f26f3/topics/graphql/graphql.png" alt='graphql'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt='javascript'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt='html'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt='css'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/5c058a388828bb5fde0bcafd4bc867b5bb3f26f3/topics/python/python.png" alt='python'/>
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="VS Code" />
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt="git" />
            <img className='tech-image' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ubuntu/ubuntu.png" alt="ubuntu" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
