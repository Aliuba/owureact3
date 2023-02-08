import {Outlet} from "react-router-dom";

import css from "./PostsPage.module.css"
import Posts from "../../components/Posts/Posts";


const PostsPage = () => {
    return (
        <div className={css.PostsPage}>
            <div>
                <Posts/>
            </div>
            <Outlet/>
        </div>
    );
};

export default PostsPage;