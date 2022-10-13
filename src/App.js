
import Homepage from './pages/home/homepage';
import './App.css';
import Skillpage from './pages/skills/skillpage';
import Workpage from './pages/works/workpage';
import Aboutpage from './pages/about/aboutpage';
import Navbar from './components/navbar/navbar';
import ShowDiv from './components/home/ShowDiv/showdiv';

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
} from "react-router-dom";
import HamburgerMenu from './components/Main/HamburgerMenu';
import Card from './components/skills/card';



import linkedin from "/home/blitz/Desktop/Portfoilo/portfolio/src/images/linkedin_log.ico";



const router = createBrowserRouter([
  {
    path: "/",
    element:  <Homepage/>,
  },
  {
    path:"/skill",
    element:<Skillpage/>,
  },
  {
    path:"/work",
    element:<Workpage/>,
  },
  {
    path:"/about",
    element:<Aboutpage/>,
  }

]);





function App() {
  return (
    <>


<h1 className="main_name">siddharth mathur</h1>
   

<a href='https://www.linkedin.com/in/siddharth-mathur01/' target="blank" className='linkedinImg'>
    <img src={linkedin} alt="linkedin_img" className='img'/>
</a>

<RouterProvider router={router} />

<HamburgerMenu/>





    {/* <Skillpage/> */}
    
    
   
    {/* <Homepage/> */}
      {/* <Navbar/> */}
      {/* <ShowDiv/> */}
    
    </>
  );
}

export default App;
