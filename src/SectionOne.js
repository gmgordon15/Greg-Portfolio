import React from 'react'
import {Link} from 'react-scroll'
import {useState} from 'react'
import './App.css'


function SectionOne() {
const [click,setClick] = useState(false)
const handleClick = () => setClick(!click)
const closeMenu = () => setClick(false)



    return (
        <div className="Section-1-Container">
            <div className="content-container-1">
                <div className="Name-Info-Container">
                    <h1>Hi, I'm Greg Gordon</h1>
                    <h3>Software Developer</h3>
                </div>
                <div className="button-container-section-1">
                <Link to="SectionTwo" spy={true} smooth={true} offset={10} duration={500} onClick={closeMenu}><button className="buttons-container-1" id="button-1">Projects</button></Link>
                <Link to="SectionThree" spy={true} smooth={true} offset={10} duration={500} onClick={closeMenu}><button className="buttons-container-1" id="button-2">Resume</button></Link>
                <Link to="SectionFour" spy={true} smooth={true} offset={10} duration={750} onClick={closeMenu}><button className="buttons-container-1" id="button-3">Contact</button></Link>
                </div>
            </div>
        </div>
    )
}

export default SectionOne

