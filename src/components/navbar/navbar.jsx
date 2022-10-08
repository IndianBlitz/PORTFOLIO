
import styles from './navbar.module.css'; 
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import NavigationMenu from './navigation_menu';

const Navbar = function(){
    return (
       
        <>
        <nav className={styles.nav}>

            <h1 className={styles.name_navbar}>Siddharth Mathur</h1>

                <ul>
                <NavigationMenu/>
                </ul>
           

        </nav>


        
</>
       
    );
}

export default Navbar;