
import { useState } from "react";

import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

import useAuth from "../../services/auth/useAuth";

const index = () => {
    document.title = "Eclo | Registration";
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const [codeInput, setCodeInput] = useState("");

    const [flag, setFlag] = useState(true);


    const registerForm = () => {

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            password: password,
        };
        useAuth.register(newUser).then((res) => {
            if (res.status == 200) {
                console.log("first api " + res);
                setTimeout(() => {
                    sendCode(phoneNumber);
                }, 1000)
                
            }
        }).catch((err) => {
            console.log("Registerform error " + err)
        })
    }

    const sendCode = (number) => {
        console.log("number " + number)

        useAuth.sendCode(number).then((res) => {
            console.log(res)
            if(res.status == 200){
                console.log("send-code working " + res);

                setFlag(false);
            }
        }).catch((err) => {
            console.log("sendCode error " + err.message)
            console.log("Error details:", err.response.data);
        })
    }

    
    const verify = (number, code) => {

        const verifyInfo = {
            phoneNumber: number,
            code: code
        }

        useAuth.verify(verifyInfo).then((res) => {
            if(res.status == 200){
                toast.success("Account created!", { autoClose: 1000 });

                setTimeout(() => {
                    navigate("/login");
                }, 1500)
            }
        }).catch((err) => {
            console.log("verify error " + err)
        })
    }

    const onRegister = (e) => {
        e.preventDefault();
        registerForm();
    };

    const onVerifyCode =  (e) => {
        e.preventDefault();
        verify(phoneNumber, Number(codeInput));
    }

    return (
        <section className="bg-gray-50">
            <ToastContainer />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/" className="flex items-center mb-4 text-2xl font-semibold text-gray-900 ">
                    <img className="w-[300px] h-8 mr-2 object-cover object-center" src={logo} alt="logo" />
                </Link>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Registration
                        </h1>

                        {
                            flag ?
                                <form onSubmit={onRegister} className="space-y-4 md:space-y-6 relative">


                                    <div>
                                        <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" name="first-name" id="first-name" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="First Name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" name="last-name" id="last-name" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Last Name" required />
                                    </div>

                                    <div>
                                        <label htmlFor="p-number" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                                        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" name="p-number" id="p-number" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="+998XXXXXXXXX" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required />
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-blue-600 hover:underline" href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                                    <p className="text-sm font-light text-gray-500">
                                        Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline">Login here</Link>
                                    </p>
                                </form>
                                :
                                <form onSubmit={onVerifyCode} className="mt-2 w-full flex justify-center items-center">
                                    <div className="w-[400px] rounded-2xl bg-white border shadow-md p-5">
                                        <h2 className="mb-4 font-bold">Verify Code</h2>
                                        <input value={phoneNumber} type="text" className="mb-4 outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="+998XXXXXXXXX" required />
                                        <input value={codeInput} onChange={(e) => setCodeInput(e.target.value)} type="text" className="mb-4 outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Code" required />
                                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send</button>
                                    </div>
                                </form>
                        }


                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;