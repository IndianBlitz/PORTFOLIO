// import { useState } from "react";
import style from "./sidepanel.module.css"

const Sidepanel = function (props){





    return(
        <>
      <div className={style.sidepanel}>
            
            <div className={style.white_line}></div>
            <div className={style.changediv}>
                    
                    <h1 className={style.home_h2} >Home</h1>
        
                    <h2 className={style.skill_h2} >Skills</h2>
                    <h2 className={style.works_h2} >Works</h2>
                    <h2 className={style.about_h2} >About</h2>
                </div>

      

        </div>  

          
      
        

        </>
    );
}

export default Sidepanel;