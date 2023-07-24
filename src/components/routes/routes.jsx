import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Signup from "../Singup/Singup";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
            ,
            {
                path: '/login',
                element: <Login />
            }
            ,
            {
                path: '/singup',
                element: <Signup />
            }
        ]
    }
])
export default routes;