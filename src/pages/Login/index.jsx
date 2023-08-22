import { useState } from "react";


import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import {Link, useNavigate} from "react-router-dom";

import { LeftOutlined } from '@ant-design/icons';
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
const baseURL = "http://eclo.uz:8080/api";


const index = () => {

  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
 
  async function logInForm(){
    
    try {
      const response = await axios.post(`${baseURL}/auth/login`, {
        phoneNumber: phoneNumber,
        password: password
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      toast.success("Login successful!", {autoClose: 2000});
      setTimeout(() => {
        navigate("/");
      }, 2000)
      
    } catch (err) {
      toast.error("Login failed! Please check your account!", {autoClose: 2000});
    } 
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    await logInForm(); 
  }



  return (
    <section className="bg-gray-50 dark:bg-gray-900 relative">
      <ToastContainer />
      <span className="absolute top-5 left-5" title="Back home"><Link className="h-[50px] w-[50px] border-sky-600 flex items-center justify-center border rounded-full text-[25px] hover:text-sky-600 hover:shadow" to="/"><LeftOutlined /></Link></span>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-[300px] h-8 mr-2 object-cover object-center" src={logo} alt="logo"/>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log in to your account
            </h1>
            <form onSubmit={onSubmit} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone number</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" name="phonenumber" id="number" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+998XXXXXXXXX" required/>
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button  type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;