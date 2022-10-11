import { BrowserRouter as Router, Switch, Route,Routes, Link } from 'react-router-dom';

import style from "./worksnavbutton.module.css"



const WorkNavButton =function(){
    return(
        <>
      <a href='/work' className={style.btn}> Explore Works</a>
        </>
    )
}

export default WorkNavButton;