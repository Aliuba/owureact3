import {Route, Routes} from "react-router-dom";


import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import CommentsDetailsPage from "./pages/CommentsDetailsPage/CommentsDetailsPage";



const App = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>

                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={'../posts/:postId'} element={<CommentsDetailsPage/>}/>
                        <Route path={':postId'} element={<CommentsDetailsPage/>}/>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':postId'} element={<PostDetailsPage/>}/>
                    </Route>

                    <Route path={"*"} element={<NotFoundPage/>}/>>
                </Route>

            </Routes>

        </div>

    );
}

export default App;
