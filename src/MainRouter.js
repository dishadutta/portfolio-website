import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './component/about';
import Blogs from './component/blogs';
import Navbar from './component/navbar';
import Projects from './component/projects';
import Home from './component/home';
import Footer from './component/footer';

const MainRouter = () => (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path='/blogs' element={<Blogs/>} />
        <Route exact path='/projects' element={<Projects/>} />
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
  export default MainRouter;