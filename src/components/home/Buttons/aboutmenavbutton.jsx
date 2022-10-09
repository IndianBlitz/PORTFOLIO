import { BrowserRouter as Router, Switch, Route,Routes, Link } from 'react-router-dom';

import style from "./aboutmenavbutton.module.css"



const AboutMeNavButton =function(){
    return(
        <>
        <button className={style.btn}>About Me</button>
        </>
    )
}

export default AboutMeNavButton;