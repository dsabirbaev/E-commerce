

import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import About from "../pages/About";
import Contact from "../pages/Contact";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
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

                 <Route path="/login"  element={<Login/>}/>
                 <Route path="/signup"  element={<SignUp/>}/>
                 <Route path="/profile"  element={<Profile/>}/>
                 
                 <Route path="*"  element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default Router;