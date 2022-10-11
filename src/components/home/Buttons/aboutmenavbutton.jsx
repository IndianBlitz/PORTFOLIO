import { BrowserRouter as Router, Switch, Route,Routes, Link } from 'react-router-dom';

import style from "./aboutmenavbutton.module.css"



const AboutMeNavButton =function(){
    return(
        <>
       <a href='/about' className={style.btn}> About Me</a>
        </>
    )
}

export default AboutMeNavButton;