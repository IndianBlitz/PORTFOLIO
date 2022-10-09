// import { useState } from "react";
import Heading from "../../components/home/Centre/heading";

import moonlight from "/home/blitz/Desktop/Portfoilo/portfolio/src/images/moonlight.svg";
import moon from "/home/blitz/Desktop/Portfoilo/portfolio/src/images/moon.svg";

import lightcloud from "/home/blitz/Desktop/Portfoilo/portfolio/src/images/b_cloud01.svg";
import lightcloud2 from "/home/blitz/Desktop/Portfoilo/portfolio/src/images/b_cloud02.svg";

import darkcloud from "/home/blitz/Desktop/Portfoilo/portfolio/src/images/cloud1.svg";
import darkcloud2 from "/home/blitz/Desktop/Portfoilo/portfolio/src/images/cloud2.svg";
import darkcloud3 from "/home/blitz/Desktop/Portfoilo/portfolio/src/images/cloud3.svg";

import "./homepage.css";
import Sidepanel from "../../components/home/sidepanel/sidepanel";
import { useState,} from "react";

import SkillNavButton from "../../components/home/Buttons/skillnavbutton";
import Boxed from "../../3dmodels/box";

import { Canvas,} from "@react-three/fiber";
import WorkNavButton from "../../components/home/Buttons/worksnavbutton";
import AboutMeNavButton from "../../components/home/Buttons/aboutmenavbutton";

// three js

const Homepage = function () {
  const [divIndex, setdivIndex] = useState(1);

  function getvalue(number) {
    setdivIndex(number);
  }

  function SetDiv(index) {
    if (index === 1) {
      //  home page
      return (
        <>
          <div className="homePage">
            <Heading />
            <Sidepanel fetchval={getvalue} />

            <h1 className="portfolio_heading">PORTFOLIO</h1>

            <img src={moonlight} alt="error" className="moonlight_img" />
            <img src={moon} alt="error" className="moon_img" />

            <img src={darkcloud} alt="error" className="darkcloud1_img" />

            <img src={lightcloud} alt="error" className="lightcloud1_img" />
            <img src={lightcloud2} alt="error" className="lightcloud2_img" />

            <img src={darkcloud2} alt="error" className="darkcloud2_img" />
            <img src={darkcloud3} alt="error" className="darkcloud3_img" />
          </div>
        </>
      );
    }

    // skills section
    else if (index === 2) {
      return (
        <div className="homePage_skills">
          <div className="model">
            <Canvas>
              <pointLight position={[5, 5, 5]} />
              <Boxed />
            </Canvas>
          </div>

          <h1 className="homePage_skills_heading">
            SKI<br></br>LLS
          </h1>
          <SkillNavButton />

          <Sidepanel fetchval={getvalue} />
        </div>
      );
    } 
    
    
    

    // Work section
    else if (index === 3) {
      return (
        <div className="homePage_Works">

<div className="model">
            <Canvas>
              <pointLight position={[5, 5, 5]} />
              <Boxed />
            </Canvas>
          </div>

        <h1 className="homePage_works_heading">
            WORKS
          </h1>
          <WorkNavButton/>

          

         
          <Sidepanel fetchval={getvalue} />

         
        </div>
      );
    } 
    
    
    
    
    
    
    
    
    
    // About Me section
    
    else {
      return (
        <div className="homePage_About">
          
          <div className="model">
            <Canvas>
              <pointLight position={[5, 5, 5]} />
              <Boxed />
            </Canvas>
          </div>
       <h1 className="homePage_about_heading">
            ABOUT<br></br>ME
          </h1>
        <AboutMeNavButton/>
          <Sidepanel fetchval={getvalue} />
        
        </div>
      );
    }
  }

  return (
    <>
      <div className="homePage_container">{SetDiv(divIndex)}</div>
    </>
  );
};

export default Homepage;
