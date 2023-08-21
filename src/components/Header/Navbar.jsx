

import "./style.scss";
import logo from "../../assets/icons/logo.svg";

import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="h-[80px] bg-white flex items-center">
            <nav className="flex items-center justify-between w-full">
                <a href="#"><img src={logo} alt="logo" /></a>

                <ul className="flex items-center gap-x-3 font-medium text-[15px]">
                    <li className="px-[16px] py-[10px] hover:bg-slate-100 rounded-full">
                        <NavLink to="/men">Men</NavLink>
                    </li>
                    <li className="px-[16px] py-[10px] hover:bg-slate-100 rounded-full">
                        <NavLink to="/women">Women</NavLink>
                    </li>
                    <li className="px-[16px] py-[10px] hover:bg-slate-100 rounded-full">
                        <NavLink to="/kids">Kids</NavLink>
                    </li>
                    <li className="px-[16px] py-[10px] hover:bg-slate-100 rounded-full">
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li className="px-[16px] py-[10px] hover:bg-slate-100 rounded-full">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className="flex items-center gap-x-1 cursor-pointer">
                    <span className="w-[48px] h-[48px] hover:bg-slate-100 rounded-full flex items-center justify-center"><i className='bx bx-search text-[25px]'></i></span>
                    <span className="w-[48px] h-[48px] hover:bg-slate-100 rounded-full flex items-center justify-center"><i className='bx bx-user text-[25px]'></i></span>
                    <span className="w-[48px] h-[48px] hover:bg-slate-100 rounded-full flex items-center justify-center"><i className='bx bx-cart-alt text-[25px]'></i></span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;