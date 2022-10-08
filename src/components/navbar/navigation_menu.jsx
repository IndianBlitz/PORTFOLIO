import styles from "./navigation_menu.module.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import MenuRoutes from "./menu_routes";

import { useState } from "react";





const NavigationMenu =function(props){

 

function openNav(){
    
    document.getElementById("myNav").style.height = "100%";

}
function closeNav(){
  
    document.getElementById("myNav").style.height = "0%";

}
    
    
    
    return(
        <>
         

    <div id="myNav"className={styles.overlay}>
        <button  className={styles.closebtn} onClick={closeNav}>&times;</button>
            <MenuRoutes />

     </div>

       
    <span id="myNav" onClick={openNav}>open</span>
     
        
        </>
    );
}



export default NavigationMenu;