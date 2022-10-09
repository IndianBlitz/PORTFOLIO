import { BrowserRouter as Router, Switch, Route,Routes, Link } from 'react-router-dom';

import style from "./worksnavbutton.module.css"



const WorkNavButton =function(){
    return(
        <>
        <button className={style.btn}> Explore Works</button>
        </>
    )
}

export default WorkNavButton;