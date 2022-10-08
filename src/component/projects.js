import React, { Component } from 'react'
import blueprint from '../images/blueprint.jpg'
import captioning from '../images/captioning.jpg'
import cartlog from '../images/cartlog.jpg'
import maskdetector from '../images/maskdetector.jpg'
import object from '../images/object.jpg'
import sayitsocial from '../images/sayitsocial.jpg'
import tiempo from '../images/tiempo.jpg'

class Projects extends Component {
  render() {
    return (
      <div>
        <div style={{padding: '20px'}} />
        <h1><strong>Projects</strong></h1>
        <div style={{padding: '17px'}} />
        <div className='row'>
          <div className='col'>
            <div className="card project-card" style={{width: '18rem'}}>
              <img className="card-img-top project-img" src={blueprint} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Blueprint</h5>
                <p className="card-text" style={{color: 'gray'}}>An application which to manage your own upcoming or ongoing projects.</p>
                <p className="project-domain" style={{color: 'gray'}}>Web Development</p>
                <div className='row'>
                  <div className='col' style={{textAlign: 'left'}}><a className='project-button' href='https://github.com/dishadutta/Blueprint-react'>Client</a></div>
                  <div className='col' style={{textAlign: 'right'}}><a className='project-button' href='https://github.com/dishadutta/Blueprint_Backend'>Server</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="card project-card" style={{width: '18rem'}}>
              <img className="card-img-top project-img" src={object} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Object Detection</h5>
                <p className="card-text" style={{color: 'gray'}}>Detection of all the objects present in a static image or real time webcam.</p>
                <p className="project-domain" style={{color: 'gray'}}>Deep Learning</p>
                <a className='project-button' href='https://github.com/dishadutta/Object_Detection'>Learn more</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{padding: '20px'}} />
        <div className='row'>
          <div className='col'>
            <div className="card project-card" style={{width: '18rem'}}>
              <img className="card-img-top project-img" src={cartlog} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">CartLog</h5>
                <p className="card-text" style={{color: 'gray'}}>An e-Commerce app for seeling or buying books worldwide.</p><br/>
                <p className="project-domain" style={{color: 'gray'}}>Web Development</p>
                <div className='row'>
                  <div className='col' style={{textAlign: 'left'}}><a className='project-button' href='https://github.com/dishadutta/Cartlog_Client'>Buyer</a></div>
                  <div className='col' style={{textAlign: 'right'}}><a className='project-button' href='https://github.com/dishadutta/Cartlog_Server'>Seller</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="card project-card" style={{width: '18rem'}}>
              <img className="card-img-top project-img" src={sayitsocial} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Say It Social</h5>
                <p className="card-text" style={{color: 'gray'}}>An Application to let users connect on day to day basis and share their stories.</p>
                <p className="project-domain" style={{color: 'gray'}}>Web Development</p>
                <div className='row'>
                  <div className='col' style={{textAlign: 'left'}}><a className='project-button' href='https://github.com/dishadutta/SayItSocialClient'>Client</a></div>
                  <div className='col' style={{textAlign: 'right'}}><a className='project-button' href='https://github.com/dishadutta/SayItSocialServer'>Server</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{padding: '20px'}} />
        <div className='row'>
          <div className='col'>
            <div className="card project-card" style={{width: '18rem'}}>
              <img className="card-img-top project-img" src={captioning} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Image Captioning</h5>
                <p className="card-text" style={{color: 'gray'}}>A model that generates caption for any given image.</p><br/>
                <p className="project-domain" style={{color: 'gray'}}>Deep Learning</p>
                <a className='project-button' href='https://github.com/dishadutta/Image-Captioning'>Learn more</a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="card project-card" style={{width: '18rem'}}>
              <img className="card-img-top project-img" src={maskdetector} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Mask Detector</h5>
                <p className="card-text" style={{color: 'gray'}}>A real time webcam application that detects whether a person is wearing mask or not.</p>
                <p className="project-domain" style={{color: 'gray'}}>Deep Learning</p>
                <a className='project-button' href='https://github.com/dishadutta/Real-Time-Face-Mask-Detector/'>Learn more</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{padding: '20px'}} />
        <div className='row'>
          <div className='col'>
            <div className="card project-card" style={{width: '18rem'}}>
              <img className="card-img-top project-img" src={tiempo} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Tiempo</h5>
                <p className="card-text" style={{color: 'gray'}}>A Modern weather app thats shows additional information along with weather.</p>
                <p className="project-domain" style={{color: 'gray'}}>Flutter App</p>
                <a className='project-button' href='https://github.com/dishadutta/Tiempo'>Learn more</a>
              </div>
            </div>
          </div>
          <div className='col'></div>
        </div>
        <div style={{padding: '20px'}} />
      </div>
    )
  }
}

export default Projects