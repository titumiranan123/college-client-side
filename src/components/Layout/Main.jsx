import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Share/Navbar";
import Footer from "../Share/Footer";

const Main = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <div>
            {
                location.pathname === '/login' || location.pathname === '/singup' ? <></> : <Navbar />
            }
            <Outlet />
            {
                location.pathname === '/login' || location.pathname === '/singup' ? <></> : <Footer />
            }

        </div>
    );
};

export default Main;