import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import t from "../images/dehipitiya.png" 

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>ABOUT ME</h1>
              <div>
              <h1 align="center" >WHO AM I?</h1>
              </div>
              
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <Fade>
            <div className="image-wrapper1">
              <img src={t} alt="about"></img>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default About
