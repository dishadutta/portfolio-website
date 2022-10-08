import React, { Component } from 'react'

class Blogs extends Component {
  render() {
    return (
      <div className="container">
        <div style={{padding: '20px'}} />
        <h1><strong>Blogs</strong></h1>
        <div style={{padding: '17px'}} />
        <div className='row'>
          <a href='https://medium.com/@duttadisha12345/wireframing-ee91b7983095'><h4 className='blog-heading'>Wireframing</h4></a>
          <span style={{color: 'gray'}}>Wireframes is basically considered as the skeleton of a website that are created at the beginning stage of web design projects. Wireframing…</span>
        </div>
        <div style={{padding: '20px'}} />
        <div className='row'>
          <a href='https://medium.com/@duttadisha12345/differences-between-github-and-gitlab-afe42e5d1702'><h4 className='blog-heading'>Differences Between GitHub and GitLab</h4></a>
          <span style={{color: 'gray'}}>GitHub is basically a internet hosting service for version control and collaboration of code. And GitLab is open source end-to-end platform…</span>
        </div>
        <div style={{padding: '20px'}} />
        <div className='row'>
          <a href='https://medium.com/@duttadisha12345/git-basics-b689e1c0bc2b'><h4 className='blog-heading'>Git Basics</h4></a>
          <span style={{color: 'gray'}}>For developers, contributing code around is important and to get that happen, understanding and knowing Git is way too important…</span>
        </div>
        <div style={{padding: '20px'}} />
        <div className='row'>
          <a href='https://medium.com/@duttadisha12345/deploying-react-app-on-github-pages-830735689d26'><h4 className='blog-heading'>Deploying React App on GitHub Pages</h4></a>
          <span style={{color: 'gray'}}>Developing a website is always fun and exciting but deciding where and how to deploy it globally might be a little tricky sometimes. GitHub…</span>
        </div>
        <div style={{padding: '20px'}} />
      </div>
    )
  }
}

export default Blogs