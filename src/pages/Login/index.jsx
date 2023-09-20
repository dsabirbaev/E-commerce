import { useState } from "react";

import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import useAuth from "../../services/auth/useAuth";

const index = () => {

  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");



  const loginForm = () => {

    const loginData = {
      phoneNumber: phoneNumber,
      password: password
    }
    useAuth.login(loginData).then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        toast.success("Login successful!", { autoClose: 1000 });
        setTimeout(() => {
          navigate("/");
        }, 1000)
      
    }).catch((err) => {
      toast.error("Login failed! Please check your account!", { autoClose: 1500 });
      console.log(err.response.data)
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    loginForm();
  }

  document.title = "Eclo | Login"

  return (
    <section className="bg-gray-50 relative">
      <ToastContainer />
      <Link to="/" className="absolute top-5 left-5"><button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Back</button></Link>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="w-[300px] h-8 mr-2 object-cover object-center" src={logo} alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Log in to your account
            </h1>
            <form onSubmit={onSubmit} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Your phone number</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" name="phonenumber" id="number" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="+998XXXXXXXXX" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
              </div>
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log in</button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;