import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    const projectsSection = document.getElementById('contact');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex justify-between items-center p-10 bg-black border-b-2 border-green-500 rounded-b-3xl'>
      <div className="animate-bounce">
        <h1 className='text-3xl font-extrabold text-white hover:text-green-500'>sPm</h1>
      </div>
      <div className="flex items-center gap-5">
        <Link to='/' onClick={() => window.scrollTo(0, 0)}> 
          <p className='text-lg hover:border-2 hover:border-green-500 hover:bg-green-500 hover:rounded-md w-14 text-green-500 hover:text-black'>Home</p>
        </Link>
        <p className='text-lg hover:border-2 hover:border-green-500 hover:bg-green-500 hover:rounded-md w-14 text-green-500 hover:text-black' onClick={scrollToAbout}>About</p>
        <p className='text-lg hover:border-2 hover:border-green-500 hover:bg-green-500 hover:rounded-md w-12 text-green-500 hover:text-black' onClick={scrollToSkills}>Skills</p>
        <p className='text-lg hover:border-2 hover:border-green-500 hover:bg-green-500 hover:rounded-md w-16 text-green-500 hover:text-black' onClick={scrollToProjects}>Projects</p>
        <p className='text-lg hover:border-2 hover:border-green-500 hover:bg-green-500 hover:rounded-md w-16 text-green-500 hover:text-black' onClick={scrollToContact}>Contact</p>
      </div>
    </div>
  );
}

export default Navbar;
