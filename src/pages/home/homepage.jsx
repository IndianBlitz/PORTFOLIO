
// import { useState } from "react";
import Heading from "../../components/home/Centre/heading";



import teste from "/home/blitz/Desktop/Portfoilo/portfolio/src/images/Mediamodifier-Design (2).svg"
import moonlight from "/home/blitz/Desktop/Portfoilo/portfolio/src/images/moonlightstars.svg"
import skills from "/home/blitz/Desktop/Portfoilo/portfolio/src/images/skills_img.jpg"



import "./homepage.css"
import Sidepanel from "../../components/home/sidepanel/sidepanel";
import { useState } from "react";
import NavigationMenu from "../../components/navbar/navigation_menu";
import Navbar from "../../components/navbar/navbar";
import ShowDiv from "../../components/home/ShowDiv/showdiv";




const Homepage= function(){

const [divIndex,setdivIndex] = useState(1);

function getvalue(number){
    
    // console.log("Number is " ,number )
    setdivIndex(number);
    console.log("div is index",divIndex);


}

// function check(){
//     console.log("clicked");
// }


function SetDiv(index){
        
    
    
    if(index===1){ //  home page
    return(
        <>
         {/* <ShowDiv/> */}
       
        <div className="homePage" >
       
            <Heading />
            <Sidepanel fetchval={getvalue}/>
            
            <img src={teste} alt="error" className="homepage_img"/>
        </div>

       
        </>
    )

}


    else if(index===2){
        return(

            <div className="homePage_skills">
            {/* <Navbar/> */}
            <Sidepanel fetchval={getvalue}/>
                    
                <h1 style={{color:"white" , fontSize:"4rem"}}>Skills</h1>
            
                <img src={moonlight} alt="error" className="mooonlight_img"/>
                <img src={skills} alt="error" className="skills_img"/>
                
            
            </div>

        )
    }
    else if(index===3){
        return (
     <div className="homePage_Works">
        {/* <Navbar/> */}
        <Sidepanel fetchval={getvalue}/>
            <img src={moonlight} alt="error" className="mooonlight_img"/>

            <h1 style={{color:"white" , fontSize:"4rem"}}>Works</h1>
        </div>

        )
    }
    else{
        return(
            <div className="homePage_About">
            {/* <Navbar/> */}
            <Sidepanel fetchval={getvalue}/>
            <h1 style={{color:"white" , fontSize:"4rem"}}>About</h1>
            <img src={moonlight} alt="error" className="mooonlight_img"/>
               
           
            
            </div>
        );

    }
}






return(
    <>

<div className="homePage_container">




{SetDiv(divIndex)}


    
</div>







        </>
    );
}


export default Homepage;



