

import "./style.scss";
import logo from "../../assets/icons/logo.svg";

import { NavLink, Link } from "react-router-dom";

import { LoginOutlined, UserOutlined, CarryOutOutlined, HeartOutlined, BulbOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState, useEffect, useRef } from "react";

import user from "../../assets/images/user.png";
import axios from "axios";
const baseURL = "http://eclo.uz:8080/api";
const Navbar = () => {

    const isAuth = localStorage.getItem("token");
    const [profile, setProfile] = useState(false);
    const [info, setInfo] = useState([]);
    const [searchInput, setSearchInput] = useState(false);
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

    async function getInfo() {
        try{
            const response = await axios.get(`${baseURL}/user/profile/userId`, {
                headers: {
                    'Authorization': `Bearer ${isAuth}`
                }
            })
            setInfo(response.data);
        }catch(error){
            console.log(error.message);
        }
    }
    useEffect(() => {
        getInfo();
        
    }, [])
    localStorage.setItem("name", info.firstName);
    return (
        <div className="h-[80px] bg-white flex items-center">
            <nav className="nav flex items-center justify-between w-full">
                <Link to="/"><img className="object-cover object-center w-[200px] h-[80px]" src={logo} alt="logo" /></Link>

                {
                    searchInput ? 
                    <form className="w-[500px]">   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="default-search" class="outline-none block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." />
                            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                     :
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
                        
                }

                <div className="flex items-center gap-x-1 cursor-pointer">
                    <span onClick={() => setSearchInput(!searchInput)} className="w-[48px] h-[48px] hover:bg-slate-100 rounded-full flex items-center justify-center"><i className='bx bx-search text-[25px]'></i></span>
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
                                                        <h2 className="text-[16px] font-semibold text-[#334155]">{localStorage.getItem("name")}</h2>
                                                        <p className="text-medium text-[12px] text-[#334155]">{localStorage.getItem("region") ? localStorage.getItem("region") : "QR | Nukus"}</p>
                                                    </div>
                                                </div>
                                                <ul className="user-list text-[14px] font-medium text-[#334155] flex flex-col gap-y-2 mb-6">
                                                    <li className="hover:bg-slate-100 relative pl-[30px] p-2 rounded-md"><Link to="/profile"><UserOutlined className="absolute left-1 text-[18px]" /> My Account</Link></li>
                                                    <li onClick={(e) => { e.stopPropagation() }} className="hover:bg-slate-100 relative pl-[30px] p-2 rounded-md"><a href="#"><CarryOutOutlined className="absolute left-1 text-[18px]" /> My Order</a></li>
                                                    <li onClick={(e) => { e.stopPropagation() }} className="hover:bg-slate-100 relative pl-[30px] p-2 rounded-md"><a href="#"><HeartOutlined className="absolute left-1 text-[18px]" /> Wishlist</a></li>
                                                </ul>
                                                <ul className="text-[14px] font-medium text-[#334155] flex flex-col gap-y-2">
                                                    <li onClick={(e) => { e.stopPropagation() }} className="hover:bg-slate-100 relative pl-[30px] p-2 rounded-md flex items-center justify-between"><BulbOutlined className="absolute left-1 text-[18px]" /> Dark theme
                                                        <label class="relative inline-flex items-center mr-5 cursor-pointer">
                                                            <input type="checkbox" value="" class="sr-only peer" />
                                                            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                                                        </label>
                                                    </li>
                                                    <li onClick={(e) => { e.stopPropagation() }} className="hover:bg-slate-100 relative pl-[30px] p-2 rounded-md"><a href="#"><FormOutlined className="absolute left-1 text-[18px]" /> Help</a></li>
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