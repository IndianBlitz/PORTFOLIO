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
import { useState,useRef,useEffect } from "react";
import NavigationMenu from "../../components/navbar/navigation_menu";
import Navbar from "../../components/navbar/navbar";
import ShowDiv from "../../components/home/ShowDiv/showdiv";
import SkillNavButton from "../../components/home/Buttons/skillnavbutton";
import Boxed from "../../3dmodels/box";

import { Canvas, useFrame } from '@react-three/fiber';



// three js






const Homepage = function () {
  const [divIndex, setdivIndex] = useState(1);

  function getvalue(number) {
    // console.log("Number is " ,number )
    setdivIndex(number);
    console.log("div is index", divIndex);
  }

  // function check(){
  //     console.log("clicked");
  // }

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
          <Canvas >
          <pointLight position={[5, 5, 5]} />
                  <Boxed/>
              </Canvas>
          </div>

              <h1 className="homePage_skills_heading">SKI<br></br>LLS</h1>
              <SkillNavButton/>

           
           
          <Sidepanel fetchval={getvalue} />

          
            
        </div>
      );
    } 
    
    
    
    
    
    else if (index === 3) {
      return (
        <div className="homePage_Works">
          {/* <Navbar/> */}
          <Sidepanel fetchval={getvalue} />

          <h1 style={{ color: "white", fontSize: "4rem" }}>Works</h1>
        </div>
      );
    } else {
      return (
        <div className="homePage_About">
          {/* <Navbar/> */}
          <Sidepanel fetchval={getvalue} />
          <h1 style={{ color: "white", fontSize: "4rem" }}>About</h1>
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
