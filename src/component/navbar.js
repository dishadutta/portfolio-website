import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
    <div className='nav-top'>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{fontFamily: 'Alkalami, serif', fontSize:'34px', color: 'rgb(30, 30, 195)', fontWeight: 'bold'}}>DISHA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
              <form className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" style={{fontSize:'17px', fontWeight:'bold', fontFamily:'Alkalami'}} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" style={{fontSize:'17px', fontWeight:'bold', fontFamily:'Alkalami'}}  to="/blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" style={{fontSize:'17px', fontWeight:'bold', fontFamily:'Alkalami'}}  to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" style={{fontSize:'17px', fontWeight:'bold', fontFamily:'Alkalami'}}  to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" style={{fontSize:'17px', fontWeight:'bold', fontFamily:'Alkalami'}} href='https://drive.google.com/file/d/1DnLM0P7pqjvZ0ZqllQ8f8gpdspcCpkhn/view?usp=sharing'>Resume</a>
                </li>
              </ul>
              </form>
            </div>
          </div>
        </nav>
    </div>
    );
  }
}

export default Navbar;