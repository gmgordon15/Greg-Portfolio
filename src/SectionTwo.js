import React from 'react'
import {useEffect} from 'react'

import TheOddsPicture from './pictures/TheODDsGettr.png'
import CharitPic from './pictures/ChartItPic.png'
import RoseAnalytics from './pictures/RoseAnalyticsPic.png'
import AOS from 'aos';
import 'aos/dist/aos.css'



function SectionTwo() {
    useEffect(()=>{
        AOS.init({duration: 1000})
    }, []) 

    return (
        <div className="Section-2-Container" id="SectionTwo">
            <div className="Title-2-Container">
                <h2>Projects</h2>
            </div>
            <div className="projects-content-container">
                <div className="individual-project-container" data-aos="fade">
                    <div className="project-picture">
                        <img src={TheOddsPicture} alt=""/>
                    </div>

                    <div className="project-discription-container">
                        <h4>The ODDs Gettr</h4>
                        <div className="underline"></div>
                        <p>The Odds Gettr is a web application that compares odds from different sportsbooks.  Users can search for various leagues and sports and compare odds from both draftkings and fanduel.  This application uses the ODDs 
                            Api in order to display realtime bet data.<br></br><br></br>
                            Technologies: HTML, CSS, JavaScript, The ODDs API
                            </p>
                        <div className="button-container-section-2">
                            <a href="https://gmgordon15.github.io/the-odds-checker-real/" id="project-2-button-1" target="_blank"><button className="section-2-buttons">Live</button></a>
                            <a href="https://github.com/gmgordon15/the-odds-checker-real"  id="project-2-button-2" target="_blank"><button className="section-2-buttons">Code </button></a>
                        </div>
                    </div>
                </div>


                <div className="individual-project-container" data-aos="fade-down">
                    <div className="project-picture">
                        <img src={CharitPic} alt=""/>
                    </div>

                    <div className="project-discription-container" >
                        <h4>ChartIT.</h4>
                        <div className="underline"></div>
                        <p>Chart it is a web application that allows users to create various graphs and export these graphs as PDFs.  Users can input data, labels, and change the title of the graph.  
                            Once their graph is complete they can export their graph/project as a PDF to share with others. 
                            <br></br><br></br>
                            Technologies: HTML, CSS, JavaScript, Chartjs, PDFjs
                            </p>
                        <div className="button-container-section-2">
                            <a href="https://gmgordon15.github.io/chart-project/" id="project-2-button-1" target="_blank"><button className="section-2-buttons">Live</button></a>
                            <a href="https://github.com/gmgordon15/chart-project"  id="project-2-button-2" target="_blank"><button className="section-2-buttons">Code </button></a>
                        </div>
                    </div>
                </div>


                <div className="individual-project-container" id="project-3" data-aos="fade-down">
                    <div className="project-picture">
                        <img src={RoseAnalytics} alt=""/>
                    </div>

                    <div className="project-discription-container">
                        <h4>Rose Anaytics</h4>
                        <div className="underline"></div>
                        <p>Rose Analytics is a static web page created with React.  This project was designed to showcase my abilities to create professional business websites.    
                            This website has a smooth scroll feature which allows users to navigate the website quickly and efficiently.
                            <br></br><br></br>Technologies: React, Scroll JS
                            </p>
                        <div className="button-container-section-2">
                        <a href="https://gmgordon15.github.io/sass-demo-site/" id="project-2-button-1" target="_blank"><button className="section-2-buttons">Live</button></a>
                            <a href="https://github.com/gmgordon15/sass-demo-site/tree/main/sass-demo-site"  id="project-2-button-2" target="_blank"><button className="section-2-buttons">Code </button></a>
                        </div>
                    </div>
                </div>



            </div>

            
        </div>
    )
}

export default SectionTwo
