import { BrowserRouter as Router, Switch, Route,Routes, Link } from 'react-router-dom';
import Homepage from '../../pages/home/homepage';
// import Homepage from '../../pages/home/homepage';
import Skillpage from '../../pages/skills/skillpage';

const MenuRoutes = function(props){



    return(
        
        <>
        <Router>

            <div>
           <Link to="/home"  >Home</Link>
            <Link to="/skills" >skills</Link>
            </div>

            <Routes>
                 <Route  path="/home" element={ <Homepage/> } />
                <Route  path="/skills" element={ <Skillpage/> } />
            </Routes>




        </Router>

        

        </>
       
    );
}

export default MenuRoutes;