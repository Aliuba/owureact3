import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import {Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                 <Route path={"/users"} element={<UsersPage/>}/>
                <Route path={"/posts"} element={<PostsPage/>}/>
            </Route>

        </Routes>
    );
}

export default App;
