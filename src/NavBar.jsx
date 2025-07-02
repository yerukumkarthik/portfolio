import { useEffect, useState } from "react";
import React from "react";

function NavBar(){
    const [mouse,mouseChange] = useState(window.scrollY);
    // console.log("buhbhbb ",mouse);
    const [visibility,setVisibility] = useState(true);
    const handlescroll = ()=>{
        // console.log("hoiiii "+ mouse,window.scrollY);
        const currentMouse = window.scrollY;
        if(mouse < currentMouse)
        {
            setVisibility(false);
        }
        else{
            setVisibility(true);
        }
        mouseChange(currentMouse);
    };
    useEffect(()=>{
        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
});

    // const scroll = (id) =>{
    //     const section = document.getElementById(id);
    //     section.scrollIntoView({behavior:"smooth"});
    // }
    return(
        <>
            <div className={`navBar ${visibility? "visible" : "hidden"}`}>
                <a href="#home" className="navButton">Home</a>
                <a href="#about" className="navButton">About</a>
                <a href="#projects" className="navButton">Projects</a>
                <a href="#contact" className="navButton">Contact</a>
            </div>
        </>
    );

}

export default NavBar;