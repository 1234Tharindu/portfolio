import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
//import t from "../images/thari.jpg" 

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
        
          <Fade bottom>
            <h1 >What i Do?</h1>
          </Fade>

          <Fade >
          <h1>HERE ARE SOME OF MY EXPERTISE</h1>
          </Fade>
          <div>
          <div>
          <h2 >APP DEVELOPMENT</h2>
          <p>
            I also have knowledge of flutter ,React Native development and have experience in building android  application.I also have live app published on Google play store.
          </p>
          

          </div>

          <div>
          <h2 >Web DEVELOPMENT</h2>
          <p>
            I am full stack web developer(MERN) and build website using HTML,CSS,javascript,Reactjs.I have also good grasp on Node and Nosql(MongoDb).
          </p>
          </div>

          <div>
          <h2 >OTHER'S INTEREST </h2>
          <p>
            I also have decent hand in developing website with wordpress.Github are my other fields of interest.
          </p>
          </div>
          
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Work
