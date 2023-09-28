
import { useEffect,useState } from "react";
import useUser from "../../services/user/useUser";
// const baseURL = "http://eclo.uz:8080/api";
import "./style.scss";
const index = () => {

    const getToken = localStorage.getItem("token");
    
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        passportSerialNumber: "",
        birthDate: "",
        region: "",
        district: "",
        address: "",
        imagePath: ""
    });
   
    const [avatar, setAvatar] = useState('');
   
    // const [name, setName] = useState("");
    // const [surname, setSurname] = useState("");
    // const [passportSerialNumber, setPassportSerialNumber] = useState("");
    // const [birthData, setBirthData] = useState("");
    // const [region, setRegion] = useState("");
    // const [district, setDistrict] = useState("");
    // const [address, setAddress] = useState("");

    async function getProfile() {
        try{
            const response = await useUser.profile();
            setData(response.data);
            console.log(response.data);  
        }catch(error){
            console.log(error.message);
        }
    }


    console.log("dd " + avatar);

    const updateAccount = {
        firstName: data.firstName,
        lastName: data.lastName,
        passportSerialNumber: data.passportSerialNumber,
        birthDate: data.birthDate,
        region: data.region,
        district: data.district,
        address: data.address,
        imagePath: data.imagePath
    }

 
    async function updateProfile() {
        try {
            const response = await axios.put(`${baseURL}/user/profile/userId`, updateAccount, {
                headers: {
                    'Authorization': `Bearer ${getToken}`
                }
            });
            console.log("Profile updated successfully:", response.data);
            setData(response.data); 
        } catch (error) {
            console.log(error.message);
        }
    }

   
   
   

    function submitHandle(e){
        e.preventDefault();
        updateProfile()
    }

   
    document.title = `Eclo | ${data.firstName}`;

    useEffect(() => {
        getProfile();
    }, [])
    
    
    return (
        <section className="py-[100px]">
            <div className="container">
                <div className="flex items-center justify-center">
                    <div className="w-[800px] rounded-lg p-5">
                        <h2 className="text-[#0F172A] text-[36px] font-semibold mb-5">Account</h2>
                        <p className="text-[18px] text-[#6B7280] mb-12"><span className="text-[#0F172A] font-semibold">Enrico Cole</span>, ciseco@gmail.com · Los Angeles, CA</p>


                        <ul className="flex items-center text-[16px] text-[#64748B] fone-medium gap-x-12 border-y-[1px] py-10 mb-12">
                            <li><a href="#">Account info</a></li>
                            <li><a href="#">Save lists</a></li>
                            <li><a href="#">My order</a></li>
                            <li><a href="#">Change password</a></li>
                            <li><a href="#">Change Billing</a></li>
                        </ul>

                        <h2 className="font-semibold text-[30px] text-[#0F172A] mb-8">Account infomation</h2>

                        
                        <form onSubmit={submitHandle} className="flex gap-x-16">
                            <img className="w-[128px] h-[128px] rounded-full bg-slate-400" src={avatar} alt="avatar" />
                            <div className="w-[80%]">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input value={data.firstName} onChange={(e) => setData(prevData => ({ ...prevData, firstName: e.target.value }))} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input value={data.lastName} onChange={(e) => setData(prevData => ({ ...prevData, lastName: e.target.value }))} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                </div>

                                <div className="relative z-0 w-full mb-8 group">
                                    <input value={data.passportSerialNumber} onChange={(e) => setData(prevData => ({ ...prevData, passportSerialNumber: e.target.value }))} type="text" name="floating_passport_serial_number" id="floating_passport_serial_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label htmlFor="floating_passport_serial_number" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Passport Serial Number</label>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input value={data.birthDate} onChange={(e) => setData(prevData => ({ ...prevData, birthDate: e.target.value }))} type="date" name="floating_birth" id="floating_birth" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="floating_birth" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birth Date</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input value={data.region} onChange={(e) => setData(prevData => ({ ...prevData, region: e.target.value }))} type="text" name="floating_region" id="floating_region" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="floating_region" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Region</label>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input value={data.district} onChange={(e) => setData(prevData => ({ ...prevData, district: e.target.value }))} type="text" name="floating_district" id="floating_district" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="floating_district" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">District</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input value={data.address} onChange={(e) => setData(prevData => ({ ...prevData, address: e.target.value }))} type="text" name="floating_address" id="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                        <label htmlFor="floating_address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                    </div>
                                </div>

                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update account</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;