import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import t from "../images/man.png" 
//import t from "../images/Tharindu.jpeg"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">

        
          <Fade bottom>
          
          <div>
            <h2 align="left">
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
             
            </div>
          </Fade>
          
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade>
            <div className="image-wrapper1">
              <img src={t} alt="about"></img>
            </div>
          </Fade>
         
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "dehipitiya055@gmail.com"
              }`}
              className="primary-btn"
            >
              Let's chat
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
