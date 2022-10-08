import React, { Component } from 'react';
import {HiMail} from 'react-icons/hi'
import {AiFillLinkedin, AiFillGithub, AiFillMediumSquare, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'

class Footer extends Component {
  render() {
    return (
      <div className='footer-design'>
        <a href="mailto:duttadisha12345@gmail.com"><HiMail className="icon" size="28px" color="whitesmoke"/></a>
        <a href="https://www.linkedin.com/in/dishadutta14/"><AiFillLinkedin className="icon" size="28px" color="whitesmoke"/></a>
        <a href="https://github.com/dishadutta"><AiFillGithub className="icon" size="28px" color="whitesmoke"/></a>
        <a href="https://medium.com/@duttadisha12345"><AiFillMediumSquare className="icon" size="28px" color="whitesmoke"/></a>
        <a href="https://twitter.com/disha_dutta20"><AiOutlineTwitter className="icon" size="28px" color="whitesmoke"/></a>
        <a href="https://www.youtube.com/channel/UCL-KeiScXWU5QYsNNLw-1Tg"><AiFillYoutube className="icon" size="28px" color="whitesmoke"/></a>
        <div style={{padding: '4px'}} />
        <p style={{color:'whitesmoke', fontSize:'14px', fontWeight: 'bold', textAlign:'center'}}>ⓒ 2022 DISHA DUTTA</p>
        <p style={{color:'gray', fontSize:'14px', fontWeight: 'bold', textAlign:'center'}}>View Resume</p>
        <div style={{padding: '10px'}} />
      </div>
    )
  }
}

export default Footer