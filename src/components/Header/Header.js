
import {NavLink} from "react-router-dom";


import css from './Header.module.css'



const Header = () => {
    return (
        <div className={css.Header}>

            <NavLink to={""}> home  </NavLink>
            <NavLink to={"posts"}> posts </NavLink>
            <NavLink to={"about"}> about  </NavLink>
            <NavLink to={"todos"}> todos  </NavLink>
            <NavLink to={"albums"}> albums </NavLink>
            <NavLink to={"comments"}> comments </NavLink>

        </div>
    );
};

export default Header;