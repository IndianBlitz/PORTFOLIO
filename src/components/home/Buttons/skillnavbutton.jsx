import { BrowserRouter as Router, Switch, Route,Routes, Link } from 'react-router-dom';
import Skillpage from '../../../pages/skills/skillpage';
import style from "./skillnavbutton.module.css"



const SkillNavButton =function(){
    return(
        <>
        <button className={style.btn}> Explore Skills</button>
        </>
    )
}

export default SkillNavButton;