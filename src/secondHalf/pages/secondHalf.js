import React from 'react';
import SideNavbar from '../components/SideNavbar';
import { Route, Routes } from 'react-router-dom';
import Education from '../components/Educations/Education';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Project from '../components/Projects/Project';
import ContactMe from '../components/ContactMe/ContactMe';

import './secondHalf.css';
const SecondHalf = props => {
    return (
        <div className='col-xl-9' style={{ display: "flex", flexDirection: "row-reverse" }}>
            <SideNavbar  collapse={props.collapse}/>
            <div style={{ width: "100%", color: "white" }}>
                <Routes path='/'>
                    <Route path='education' element={<Education />}></Route>
                    <Route path='experience' element={<Experience />}></Route>
                    <Route path='projects' element={<Project />}></Route>
                    <Route path='skills' element={<Skills />}></Route>
                    <Route path='contactme' element={<ContactMe />}></Route>
                    <Route path='*' element={<Education />}></Route>
                </Routes>
            </div>
        </div>
    );
};

export default SecondHalf;