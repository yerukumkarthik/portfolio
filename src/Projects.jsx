
import React from "react";
import {motion, scale} from 'framer-motion';
import { style } from 'framer-motion/client';

function Projects(){
    return(
        <>
        <div className='bg-gradient-to-b from-[#1e1e2f] to-[#0f0f1a] pt-24' id="projects">
            <center><h1 className='text-4xl bg-gradient-to-r from-white via-[#ff00c8] via-[#8e2de2] to-[#4a00e0] bg-clip-text text-transparent font-bold hover:text-[#945987]'>HAVE A LOOK ON MY PROJECTS</h1></center>
            <center><p className='pt-10 text-[18px] text-white'>Crafted with love, logic & late-night debugging sessions.</p></center>
            <div className="projects-section">
                <a href='https://aec.edu.in/relieving_appointment/' target='_blank'>
                <div className="project-card">
                    <div className='overflow-hidden'>
                        <motion.video src='./media/relieving.mp4' autoPlay loop muted whileHover={{scale:1.1}} transition={{duration:0.5}}></motion.video>
                    </div>
                    <div className='project-card-text'>
                        <p className='project-card-text-title'>RELIEVING PROCESS AUTOMATION</p>
                        <p className='project-card-text-des'>Automated system for generating and approving official documents with digital signatures, used by many employees across colleges</p>
                     <div className='project-card-span'><span>HTML</span><span>CSS</span><span>JS</span><span>PHP</span></div>

                    </div>
                </div>
                </a>
                 <a>
                <div className="project-card">
                    <div className='overflow-hidden'>
                        <center><motion.video src='./media/hctmm_video.mp4' autoPlay loop muted whileHover={{scale:1.1}} transition={{duration:0.5}} style={{height:280}}></motion.video></center>
                    </div>
                    <div className='project-card-text'>
                        <p className='project-card-text-title'>HCTMM APP</p>
                        <p className='project-card-text-des'>A mobile app built for HCTMM startup enabling tablet booking, doctor consultations, and basic health service management — all in one place.</p>
                     <div className='project-card-span'><span>FLUTTER</span><span>DART</span><span>NODE.JS</span><span>EXPRESS.JS</span><span>FIREBASE</span></div>

                    </div>
                </div>
                </a>
                 <a>
                <div className="project-card">
                    <div className='overflow-hidden'>
                        <motion.video src='./media/IMS_jdbc.mp4' autoPlay loop muted whileHover={{scale:1.1}} transition={{duration:0.5}}></motion.video>
                    </div>
                    <div className='project-card-text'>
                        <p className='project-card-text-title'>INVENTORY MANAGEMENT SYSTEM</p>
                        <p className='project-card-text-des'>A Java-based inventory management application using JDBC for database operations — tracks stock levels, manages product details, and streamlines inventory control.</p>
                     <div className='project-card-span'><span>JAVA</span><span>MySQL</span><span>JDBC</span></div>

                    </div>
                </div>
                </a>
                 <a>
                <div className="project-card">
                    <div className='overflow-hidden'>
                        <motion.video src='./media/timetable.mp4' autoPlay loop muted whileHover={{scale:1.1}} transition={{duration:0.5}} style={{height:280, width:500}}></motion.video>
                    </div>
                    <div className='project-card-text'>
                        <p className='project-card-text-title'>TIME TABLE GENERATOR</p>
                        <p className='project-card-text-des'>A smart scheduling tool built for our college to auto-generate clash-free timetables, handling Thub sessions and custom class inputs with ease.</p>
                     <div className='project-card-span'><span>HTML</span><span>CSS</span><span>JS</span><span>NODE.JS</span><span>EXPRESS.JS</span></div>

                    </div>
                </div>
                </a>
            </div>
        </div>
        </>
    )
}

export default Projects;