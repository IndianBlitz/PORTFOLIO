import Skill from "../../components/skills/display_skills";
import "./skillpage.css";

import data from "./programmingLanguageData.js"
import data2 from "./Frameworks.js"
import data3 from "./Extra.js";




const Skillpage = function () {
  return (
    <>
      <div className="container">

        <section className="Skill_main">
            <h1 className="skill_heading">SKILLS</h1>
            <h1 className="skill_heading2">SKILLS</h1>
            <h1 className="skill_heading3">SKILLS</h1>

          
        </section>

        

        <section className="Skill_programming_languages">
          <h2 className="Skill_pf_heading" >Programming languages</h2>

          <div className="tester">
            
          {data.map(function(currentElement,index){
                  return <Skill
                  key={data[index].id}
                   name=  {data[index].name}
                   percent = {data[index].percent}
                   background = {data[index].backgroundcolor}
                  />
                  
              })}
              <br></br>

          </div>
             
         
        </section>


        <section className="Skill_FrameWorks">
                <h2 className="Skill_frame_heading" >Frameworks</h2>

          <div className="tester_frame">
            
          {data2.map(function(currentElement,index){
                  return <Skill
                  key={data2[index].id}
                  name=  {data2[index].name}
                  percent = {data2[index].percent}
                  background = {data2[index].backgroundcolor}
                  />
                  
              })}
            

        </div>
        </section>





        <section className="Skill_extra">
         <h2 className="Skill_extra_heading" >Extra</h2>
         <div className="tester_frame">
         {data3.map(function(currentElement,index){
                  return <Skill
                  key={data3[index].id}
                  name=  {data3[index].name}
                  percent = {data3[index].percent}
                  background = {data3[index].backgroundcolor}
                  />
                  
              })}
              
          </div>
              
        </section>  











        <section className="Skill_DSA"></section>
      </div>
    </>
  );
};

export default Skillpage;
