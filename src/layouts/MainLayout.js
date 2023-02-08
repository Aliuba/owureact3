import {Outlet, useNavigate} from "react-router-dom";


import Header from "../components/Header/Header";
import css from "./MainLayout.module.css"

const MainLayout = () => {

    const navigate = useNavigate()
    return (
        <div>
            <Header/>
            <div className={css.nav}>
                <button className={css.nav} onClick={() => navigate(-1)}>prev</button>
                <button onClick={() => navigate(1)}>next</button>
            </div>

            <Outlet/>
        </div>
    );
};

export default MainLayout;