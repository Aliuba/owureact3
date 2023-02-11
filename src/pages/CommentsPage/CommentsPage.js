
import {Outlet} from "react-router-dom";

import Comments from "../../components/Comments/Comments";
import css from "./CommentsPage.module.css"

const CommentsPage = () => {
    return (
        <div className={css.ComPage}>
            <Comments/>
            <Outlet/>

        </div>
    );
};

export default CommentsPage;