import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "./hamburgermenu.module.css"

const COLORS = {
  primaryDark: "#115b4c",
  primaryLight:"#B6EDC8" ,
  nocolor:"transparent"
};

const MenuLabel = styled.label`
  background-color: ${COLORS.nocolor};

  position: fixed;
  top: 0rem;
  right: 3rem;
  
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  z-index: 1000;
 
  text-align: center;
`;





const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;




const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 2rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 3rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;





const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;


function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>

        <List>
          <li>
          <a href="/" onClick={handleClick} >  <h1 className={style.names}>Home</h1> </a>
           
          </li>

          <li>
          <a href="/skill" onClick={handleClick}> <h1 className={style.names}>Skill</h1></a>
           
          </li>


          <li>
          <a href="/work" onClick={handleClick}><h1 className={style.names}>Work</h1></a>
           
          </li>




          <li>
          <a href="/about" onClick={handleClick}><h1 className={style.names}>About Me</h1></a>
           
          </li>


          
         
          
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;