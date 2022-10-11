import { BrowserRouter as Router, Switch, Route,Routes, Link } from 'react-router-dom';
import Skillpage from '../../../pages/skills/skillpage';
import style from "./skillnavbutton.module.css"



const SkillNavButton =function(){
    return(
        <>
        
        <a href='/skill' className={style.btn}> Explore Skills</a>
        </>
    )
}

export default SkillNavButton;