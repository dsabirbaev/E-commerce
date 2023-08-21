

import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const Router = () => {
    return (
        <div>
            <Routes>
                 <Route path="/"  element={<Home/>}/>
                 <Route path="/men"  element={<Men/>}/>
                 <Route path="/women"  element={<Women/>}/>
                 <Route path="/kids"  element={<Kids/>}/>
                 <Route path="/about"  element={<About/>}/>
                 <Route path="/contact"  element={<Contact/>}/>

                 <Route path="*"  element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default Router;