import React, { Component } from 'react'
import optum from '../images/optum.png'
import refier from '../images/refier.png'
import tsf from '../images/tsf.png'
import kobzo from '../images/kobzo.png'
import microsoft from '../images/microsoft.png'
import jpmorgan from '../images/jpmorgan.jpg'
import profile from '../images/profile.jpg'
import {BrowserView, MobileView} from 'react-device-detect'

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{padding: '20px'}} />
        <BrowserView>
        <div className='row'>
          <div className='col-8'><span className='designation'>Software Engineer</span><br/><span className='company'>Optum, UHG</span></div>
          <div className='col-4' ><img className='profile-img' src={profile}/></div>
        </div>
        </BrowserView>
        <MobileView>
        <div className='col'>
          <div className='row' ><img className='profile-img' src={profile}/></div>
          <div className='row'><span className='designation'>Software Engineer</span><br/><span className='company'>Optum, UHG</span></div>
        </div>
        </MobileView>
        <div style={{padding: '10px'}} />
        <span>I've recently graduated with a Bachelor Degree in Computer Science and Engineering from SRM Institute of Science and Technologies. 
        I am passionate about software, programming languages, technologies and creativities. 
        I am a very creative, passionate, organized, proactive and versatile person, 
        and I am confident in my ability to tackle with any new missions. 
        I possess a range of technical skills that I gained through my personal and learning professional experiences.</span> <br/>
        <div style={{padding: '40px'}} />
        <span className='experience'>Experiences</span>
        <div style={{padding: '10px'}} />
        <div className='row exp-card'>
          <div className='col-1 img-box'><img className='company-logo' src={optum}/></div>
          <div className='col-11 yoe-info'>Optum <span className='yoe'>May 22 - Present</span><br/>
            <span style={{color: 'gray'}}>Software Engineer - Full Time</span></div>
        </div>
        <div className='row exp-card'>
          <div className='col-1 img-box'><img className='company-logo' src={refier}/></div>
          <div className='col-11 yoe-info'>Refier <span className='yoe'>Feb 22 - Apr 22</span><br/>
            <span style={{color: 'gray'}}>Software Developer - Internship</span></div>
        </div>
        <div className='row exp-card'>
          <div className='col-1 img-box'><img className='company-logo' src={tsf}/></div>
          <div className='col-11 yoe-info'>The Sparks Foundation <span className='yoe'>Mar 21</span><br/>
            <span style={{color: 'gray'}}>Data Science and Business Analytics Intern - Internship</span></div>
        </div>
        <div className='row exp-card'>
          <div className='col-1 img-box'><img className='company-logo' src={kobzo}/></div>
          <div className='col-11 yoe-info'>KobZo <span className='yoe'>Aug 20 - Nov 20</span><br/>
            <span style={{color: 'gray'}}>Web Developer - Internship</span></div>
        </div>
        <div className='row exp-card'>
          <div className='col-1 img-box'><img className='company-logo' src={microsoft}/></div>
          <div className='col-11 yoe-info'>Microsoft <span className='yoe'>July 20</span><br/>
            <span style={{color: 'gray'}}>Virtual Internship Trainee - Apprenticeship</span></div>
        </div>
        <div className='row exp-card'>
          <div className='col-1 img-box'><img className='company-logo' src={jpmorgan}/></div>
          <div className='col-11 yoe-info'>JPMorgan Chase & Co. <span className='yoe'>June 20</span><br/>
            <span style={{color: 'gray'}}>Software Engineer - Internship</span></div>
        </div>
        <div style={{padding: '40px'}} />
      </div>
    )
  }
}

export default Home