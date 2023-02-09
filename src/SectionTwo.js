import React from 'react'

import TheOddsPicture from './pictures/TheODDsGettr.png'
import CharitPic from './pictures/ChartItPic.png'
import RoseAnalytics from './pictures/RoseAnalyticsPic.png'



function SectionTwo() {
    return (
        <div className="Section-2-Container" id="SectionTwo">
            <div className="Title-2-Container">
                <h2>Projects</h2>
            </div>
            <div className="projects-content-container">
                <div className="individual-project-container">
                    <div className="project-picture">
                        <img src={TheOddsPicture} alt=""/>
                    </div>

                    <div className="project-discription-container">
                        <h4>The ODDs Gettr</h4>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                        <div className="button-container-section-2">
                            <a href="https://gmgordon15.github.io/the-odds-checker-real/" id="project-2-button-1" target="_blank"> <button className="section-2-buttons">Live</button></a>
                            <a href="https://github.com/gmgordon15/the-odds-checker-real"  id="project-2-button-2" target="_blank"><button className="section-2-buttons">Code </button></a>
                        </div>
                    </div>
                </div>


                <div className="individual-project-container" >
                    <div className="project-picture">
                        <img src={CharitPic} alt=""/>
                    </div>

                    <div className="project-discription-container">
                        <h4>ChartIT.</h4>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                        <div className="button-container-section-2">
                            <button className="section-2-buttons" id="project-2-button-1">Live</button>
                            <button className="section-2-buttons" id="project-2-button-2">Code</button>
                        </div>
                    </div>
                </div>


                <div className="individual-project-container" id="project-3">
                    <div className="project-picture">
                        <img src={RoseAnalytics} alt=""/>
                    </div>

                    <div className="project-discription-container">
                        <h4>Rose Anaytics</h4>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                        <div className="button-container-section-2">
                            <button className="section-2-buttons" id="project-2-button-1">Live</button>
                            <button className="section-2-buttons" id="project-2-button-2">Code</button>
                        </div>
                    </div>
                </div>



            </div>

            
        </div>
    )
}

export default SectionTwo
