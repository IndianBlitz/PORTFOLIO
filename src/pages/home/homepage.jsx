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

import SkillNavButton from "../../components/home/Buttons/skillnavbutton";
import Boxed from "../../3dmodels/box";

import { Canvas } from "@react-three/fiber";
import WorkNavButton from "../../components/home/Buttons/worksnavbutton";
import AboutMeNavButton from "../../components/home/Buttons/aboutmenavbutton";
import { useInView } from "react-intersection-observer";


// three js

const Homepage = function () {
  const [homeRef, homeView] = useInView({
    threshold: 1,
  });

  const [skillRef, skillView] = useInView({
    threshold: 1,
  });

  const [workRef, workView] = useInView({
    threshold: 1,
  });

  const [aboutRef, aboutView] = useInView({
    threshold: 1,
  });

  return (
    <>
      <div className="homePage_container">
        <section ref={homeRef}>
          {homeView ? (
            <div className="homePage">
              <Heading />
              <Sidepanel />

              <h1 className="portfolio_heading">PORTFOLIO</h1>

              <img src={moonlight} alt="error" className="moonlight_img" />
              <img src={moon} alt="error" className="moon_img" />

              <img src={darkcloud} alt="error" className="darkcloud1_img" />

              <img src={lightcloud} alt="error" className="lightcloud1_img" />
              <img src={lightcloud2} alt="error" className="lightcloud2_img" />

              <img src={darkcloud2} alt="error" className="darkcloud2_img" />
              <img src={darkcloud3} alt="error" className="darkcloud3_img" />
            </div>
          ) : (
            <div></div>
          )}
        </section>

        <section ref={skillRef}>
          {skillView ? (
            <div className="homePage_skills">
              <div className="model_div">
                <Canvas className="boxInner">
                  <pointLight position={[5, 5, 5]} />
                  <Boxed />
                </Canvas>
                <div className="boxOuter"></div>
              </div>


              <div class="animated-title">
                <div class="text-top">
                  <div>
                    
                    <span>SKI</span>
                  </div>
                </div>
                <div class="text-bottom">
                  <div>LLS</div>
                </div>
              </div>


              <SkillNavButton />

              <Sidepanel />
            </div>
          ) : (
            <div></div>
          )}
        </section>

        <section ref={workRef}>
          {workView ? (
            <div className="homePage_Works">
              <div className="model">
                <Canvas>
                  <pointLight position={[5, 5, 5]} />
                  <Boxed />
                </Canvas>
              </div>

              <h1 className="homePage_works_heading">WORKS</h1>
              <WorkNavButton />

              <Sidepanel />
            </div>
          ) : (
            <div></div>
          )}
        </section>

        <section ref={aboutRef}>
          {aboutView ? (
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
              <AboutMeNavButton />
              <Sidepanel />
            </div>
          ) : (
            <div></div>
          )}
        </section>
      </div>
    </>
  );
};

export default Homepage;
