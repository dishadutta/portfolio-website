import React, { Component } from 'react'
import c from '../images/c.png'
import cplusplus from '../images/cplusplus.png'
import java from '../images/java.png'
import php from '../images/php.png'
import javascript from '../images/c.png'
import python from '../images/python.png'
import dart from '../images/dart.png'
import html_css from '../images/html_css.png'
import node from '../images/node.png'
import react from '../images/react.png'
import next from '../images/next.png'
import spring from '../images/spring.png'
import cypress from '../images/dart.png'
import jest from '../images/jest.png'
import rocket from '../images/rocket.png'
import hobbies from '../images/hobbies.png'

class About extends Component {
  render() {
    return (
      <div>
        <div style={{padding: '20px'}} />
        <h1><strong>About</strong></h1>
        <div style={{padding: '17px'}}/>
        <span>As an ambitious and results-driven full-stack developer, 
  I aspire to contribute my expertise to a dynamic team where innovation is valued. 
  My goal is to secure a challenging full-stack developer role that allows me to leverage my proficiency in frontend and backend technologies to architect robust and scalable solutions. 
  I am enthusiastic about collaborating on forward-thinking projects, bringing a keen eye for detail and a passion for creating seamless user experiences.</span>
        <div style={{padding: '17px'}} />
        <h2><strong>Skills</strong></h2>
        <div style={{padding: '10px'}} />
        <h5>Programming Technologies -</h5>
        <div style={{padding: '4px'}} />
        <ul>
          <li><img src={c} className='skill-emoji'/>&nbsp;&nbsp;C</li>
          <li><img src={cplusplus} className='skill-emoji'/>&nbsp;&nbsp;C++</li>
          <li><img src={java} className='skill-emoji'/>&nbsp;&nbsp;Java</li>
          <li><img src={php} className='skill-emoji'/>&nbsp;&nbsp;PHP</li>
          <li><img src={javascript} className='skill-emoji'/>&nbsp;&nbsp;JavaScript</li>
          <li><img src={python} className='skill-emoji'/>&nbsp;&nbsp;Python</li>
          <li><img src={dart} className='skill-emoji'/>&nbsp;&nbsp;Dart</li>
        </ul>
        <div style={{padding: '10px'}} />
        <h5>Web Technologies -</h5>
        <div style={{padding: '4px'}} />
        <ul>
          <li><img src={javascript} className='skill-emoji'/>&nbsp;&nbsp;JavaScript</li>
          <li><img src={php} className='skill-emoji'/>&nbsp;&nbsp;PHP</li>
          <li><img src={html_css} className='skill-emoji'/>&nbsp;&nbsp;HTML/CSS</li>
          <li><img src={node} className='skill-emoji'/>&nbsp;&nbsp;Node.js</li>
          <li><img src={react} className='skill-emoji'/>&nbsp;&nbsp;ReactJS</li>
          <li><img src={next} className='skill-emoji'/>&nbsp;&nbsp;NextJS</li>
          <li><img src={spring} className='skill-emoji'/>&nbsp;&nbsp;Spring</li>
        </ul>
        <div style={{padding: '10px'}} />
        <h5>Testing Library for Web Automation -</h5>
        <div style={{padding: '4px'}} />
        <ul>
          <li><img src={cypress} className='skill-emoji'/>&nbsp;&nbsp;Cypress</li>
          <li><img src={jest} className='skill-emoji'/>&nbsp;&nbsp;Jest</li>
        </ul>
        <div style={{padding: '17px'}} />
        <h2><strong>Interest</strong></h2>
        <div style={{padding: '4px'}} />
        <li><img src={hobbies} className='skill-emoji'/>&nbsp;&nbsp;Music, Singing, Painting, Drawing</li>
        <li><img src={rocket} className='skill-emoji'/>&nbsp;&nbsp;I love to learn and explore new things</li>
        <div style={{padding: '20px'}} />
      </div>
    )
  }
}

export default About
