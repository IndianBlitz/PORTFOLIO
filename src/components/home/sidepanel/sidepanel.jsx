// import { useState } from "react";
import style from "./sidepanel.module.css"

const Sidepanel = function (props){

   
    function changediv1(){
         props.fetchval(1);
    }

    function changediv2(){
        props.fetchval(2);
   }

   function changediv3(){
        props.fetchval(3);
    }

    function changediv4(){
        props.fetchval(4);
    }




    return(
        <>
        <div className={style.sidepanel}>
        <h2 className={style.scroll_name}>Scrolldown</h2>

      

        </div>  

          
        <div className={style.changediv}>
                
            <h1 className={style.home_h2} onClick={changediv1}>Home</h1>

            <h2 className={style.skill_h2} onClick={changediv2}>Skills</h2>
            <h2 className={style.works_h2} onClick={changediv3}>Works</h2>
            <h2 className={style.about_h2} onClick={changediv4}>About</h2>
        </div>
        

        </>
    );
}

export default Sidepanel;