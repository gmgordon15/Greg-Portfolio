import React from 'react'
import {useEffect} from 'react'
import Resume from './pictures/Resume - Gregory Gordon Updated.pdf'
import ResumePic from './pictures/Resume - Updated.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

function SectionThree() {
    useEffect(()=>{
        AOS.init({duration: 1000})
    }, []) 

const ResumePDF = Resume
    return (
        <div className="Section-3-Container" id="SectionThree">
            <div className="Title-3-Container">
                <h2>Resume</h2>
            </div>

            <div className="resume-content-container">
                <div className="resume-container"data-aos="fade-down">
                    
                        <img src={ResumePic} alt="" id="resume-pic" className="resume"/>
                    

                    <div className="button-container-div-3">
                    <a href={ResumePDF} download="Greg Gordon - Resume"><button className="download-button">Download</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree
