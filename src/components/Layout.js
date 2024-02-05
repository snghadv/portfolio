import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

import './all.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Layout() {
    const [currentLink, setCurrentLink] = useState("home");
    const links = [{
        name: "Home",
        value: "home"
    }, {
        name: "About",
        value: "about"
    }, {
        name: "Projects",
        value: "projects"
    }, {
        name: "Contact",
        value: "contact"
    }];

    const onClickLink = (linkValue) => {
        setCurrentLink(linkValue);
    }

    const Icon = ({linkValue}) => {
            if (linkValue === "home") return <FaHome style={{marginRight: "10px", marginBottom: "-3px", fontSize: 'larger'}}/>
            if (linkValue === "about") return <IoIosPerson style={{marginRight: "10px", marginBottom: "-3px", fontSize: 'larger'}}/>
            if (linkValue === "projects") return <GrProjects style={{marginRight: "10px", marginBottom: "-2px", fontSize: 'large'}}/>
            if (linkValue === "contact") return <MdEmail style={{marginRight: "10px", marginBottom: "-4px", fontSize: 'larger'}}/>
    }
    return (
        <div style={{ display: 'flex' }}>
            <div className='lefnav'>
                <p className='title'>Portfolio</p>
                <div className='navLinks'>
                    {links.map(link => {
                        return currentLink !== link?.value ? <p className='navLinks' onClick={() => onClickLink(link.value)}><Icon linkValue={link?.value} />{link.name}</p>
                            : <p className='navLinksActive' ><Icon linkValue={link?.value} />{link.name}</p>
                    })}
                </div>
                <p className='copyright'>© 2024 Saurabh Singh</p>
            </div>
            <div className='rightBox'>
                {currentLink === "home" && <Home />}
                {currentLink === "about" && <About />}
                {currentLink === "projects" && <Projects />}
                {currentLink === "contact" && <Contact />}
            </div>
        </div>
    );
}

export default Layout;
