
import { useState } from "react";

import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
const baseURL = "http://eclo.uz:8080/api";

const index = () => {
    document.title = "Eclo | Registration";

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    async function registerForm() {
        try {
          const newUser = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            password: password,
          };
          const response = await axios.post(`${baseURL}/auth/register`, newUser);
          console.log(response.data);
        } catch (error) {
          console.log(error.message);
        }
    }
    
    async function sendCode(number){
        const num = number
        console.log(typeof num)
        
        const response = await axios.post(`${baseURL}/auth/register/send-code`, { phone: num });
        
        console.log(typeof num)
        console.log(response);
        console.log(response.data);
    }
    
    const onRegister = (e) => {
        e.preventDefault();
        registerForm();
        sendCode(phoneNumber);
    };
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/" className="flex items-center mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-[300px] h-8 mr-2 object-cover object-center" src={logo} alt="logo" />
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Registration
                        </h1>
                        <form onSubmit={onRegister} className="space-y-4 md:space-y-6">

                            <div>
                                <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" name="first-name" id="first-name" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" name="last-name" id="last-name" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required />
                            </div>

                            <div>
                                <label htmlFor="p-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" name="p-number" id="p-number" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+998XXXXXXXXX" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;