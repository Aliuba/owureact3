import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarsPage} from "./pages";
import {AuthRequireLayout} from "./layouts";
import {LoginPage} from "./pages";
import {RegisterPage} from "./pages";


function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route index element={<Navigate to={'cars'}/>}/>

        <Route element={<AuthRequireLayout/>}>
          <Route path={'cars'} element={<CarsPage/>}/>
        </Route>

        <Route path={'login'} element={<LoginPage/>}/>
        <Route path={'register'} element={<RegisterPage/>}/>

      </Route>

    </Routes>
  );
}

export default App;
