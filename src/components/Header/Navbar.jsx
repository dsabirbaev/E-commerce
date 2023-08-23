

import "./style.scss";
import logo from "../../assets/icons/logo.svg";

import { NavLink, Link } from "react-router-dom";

import { LoginOutlined, UserOutlined, CarryOutOutlined, HeartOutlined, BulbOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState, useEffect, useRef } from "react";

import user from "../../assets/images/user.png";
const Navbar = () => {

    const isAuth = localStorage.getItem("token");
    const [profile, setProfile] = useState(false);
    const handleProfileToggle = () => {
        setProfile(!profile);
    };

    function logOut() {
        localStorage.clear();
    }

    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setProfile(false);
            }
        }    
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="h-[80px] bg-white flex items-center">
            <nav className="nav flex items-center justify-between w-full">
                <Link to="/"><img className="object-cover object-center w-[200px] h-[80px]" src={logo} alt="logo" /></Link>

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
                    {
                        isAuth ?
                            <div className="flex gap-x-1">
                                <span onClick={handleProfileToggle} className="relative w-[48px] h-[48px] hover:bg-slate-100 rounded-full flex items-center justify-center"><i className='bx bx-user text-[25px]'></i>
                                    {
                                        profile ?
                                            <div ref={dropdownRef} className="absolute top-[130%] right-[0%] bg-white rounded-2xl px-4 py-5 w-[280px]">
                                                <div className="flex items-center gap-x-[14px] mb-8">
                                                    <img className="w-[48p] h-[48px] rounded-full object-cover object-center" src={user} alt="user" />
                                                    <div>
                                                        <h2 className="text-[16px] font-semibold text-[#334155]">User</h2>
                                                        <p className="text-medium text-[12px] text-[#334155]">Los Angeles, CA</p>
                                                    </div>
                                                </div>
                                                <ul className="user-list text-[14px] font-medium text-[#334155] flex flex-col gap-y-2 mb-6">
                                                    <li className="hover:bg-slate-100 relative pl-[30px] p-2 rounded-md"><Link to="/profile"><UserOutlined className="absolute left-1 text-[18px]" /> My Account</Link></li>
                                                    <li onClick={(e) => {e.stopPropagation()}} className="hover:bg-slate-100 relative pl-[30px] p-2 rounded-md"><a href="#"><CarryOutOutlined className="absolute left-1 text-[18px]" /> My Order</a></li>
                                                    <li onClick={(e) => {e.stopPropagation()}} className="hover:bg-slate-100 relative pl-[30px] p-2 rounded-md"><a href="#"><HeartOutlined className="absolute left-1 text-[18px]" /> Wishlist</a></li>
                                                </ul>
                                                <ul className="text-[14px] font-medium text-[#334155] flex flex-col gap-y-2">
                                                    <li onClick={(e) => {e.stopPropagation()}} className="hover:bg-slate-100 relative pl-[30px] p-2 rounded-md flex items-center justify-between"><BulbOutlined className="absolute left-1 text-[18px]" /> Dark theme
                                                    <label class="relative inline-flex items-center mr-5 cursor-pointer">
                                                        <input  type="checkbox" value="" class="sr-only peer"/>
                                                        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                        
                                                    </label>
                                                    </li>
                                                    <li onClick={(e) => {e.stopPropagation()}} className="hover:bg-slate-100 relative pl-[30px] p-2 rounded-md"><a href="#"><FormOutlined className="absolute left-1 text-[18px]" /> Help</a></li>
                                                    <li onClick={logOut} className="hover:bg-slate-100 relative pl-[30px] p-2 rounded-md"><a href="#"><LogoutOutlined className="absolute left-1 text-[18px]" /> Log out</a></li>
                                                </ul>
                                            </div> :
                                            null
                                    }

                                </span>

                                <span className="w-[48px] h-[48px] hover:bg-slate-100 rounded-full flex items-center justify-center"><i className='bx bx-cart-alt text-[25px]'></i></span>
                            </div>

                            : <NavLink to="/login" className="w-[48px] h-[48px] hover:bg-slate-100 rounded-full flex items-center justify-center text-[22px]"><LoginOutlined /></NavLink>
                    }



                </div>
            </nav>
        </div>
    );
};

export default Navbar;