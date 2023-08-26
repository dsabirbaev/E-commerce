import { useState, useEffect } from "react";

import "./style.scss";

import axios from "axios";
const baseURL = "http://eclo.uz:8080/api";
const imgPath = "http://eclo.uz:8080";
import Brand from "../../components/UI/Brand/Brand";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

const index = () => {
    const [brand, setBrand] = useState([]);

    async function getBrand() {
        try {
            const response = await axios.get(`${baseURL}/common/brands`);
            setBrand(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getBrand();
    }, [])
    return (

        <section className="py-[100px]" >
            <div className="container">

                <div className="flex gap-x-5">
                    <aside className="w-[25%] rounded-md shadow p-5">
                        <div className="mb-10">
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Categories</h3>
                            <ul className="text-sm font-medium text-gray-900 bg-white  dark:bg-gray-700  dark:text-white">
                                <li className="w-full hover:shadow-lg">
                                    <div className="flex items-center pl-3">
                                        <input id="backpack" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="backpack" className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Backpacks</label>
                                    </div>
                                </li>

                                <li className="w-full hover:shadow-lg">
                                    <div className="flex items-center pl-3">
                                        <input id="travel" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="travel" className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Travel Bags</label>
                                    </div>
                                </li>

                                <li className="w-full hover:shadow-lg">
                                    <div className="flex items-center pl-3">
                                        <input id="laptop" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="laptop" className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Laptop Sleeves</label>
                                    </div>
                                </li>

                                <li className="w-full hover:shadow-lg">
                                    <div className="flex items-center pl-3">
                                        <input id="organization" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="organization" className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Organization</label>
                                    </div>
                                </li>

                                <li className="w-full hover:shadow-lg">
                                    <div className="flex items-center pl-3">
                                        <input id="accessories" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="accessories" className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Accessories</label>
                                    </div>
                                </li>
                            </ul>

                        </div>

                        <div>
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Sizes</h3>
                            <ul className="text-sm font-medium text-gray-900 bg-white  dark:bg-gray-700  dark:text-white">
                                <li className="w-full hover:shadow-lg">
                                    <div className="flex items-center pl-3">
                                        <input id="xs" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="xs" className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">XS</label>
                                    </div>
                                </li>

                                <li className="w-full hover:shadow-lg">
                                    <div className="flex items-center pl-3">
                                        <input id="s" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="s" className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">S</label>
                                    </div>
                                </li>

                                <li className="w-full hover:shadow-lg">
                                    <div className="flex items-center pl-3">
                                        <input id="m" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="m" className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">M</label>
                                    </div>
                                </li>

                                <li className="w-full hover:shadow-lg">
                                    <div className="flex items-center pl-3">
                                        <input id="l" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="l" className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">L</label>
                                    </div>
                                </li>

                                <li className="w-full hover:shadow-lg">
                                    <div className="flex items-center pl-3">
                                        <input id="xl" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="xl" className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">XL</label>
                                    </div>
                                </li>

                                <li className="w-full hover:shadow-lg">
                                    <div className="flex items-center pl-3">
                                        <input id="2xl" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label htmlFor="2xl" className="w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">2XL</label>
                                    </div>
                                </li>
                            </ul>

                        </div>



                    </aside>

                    <div className="wrapper  w-[75%]">
                        <div className="brands flex h-[330px] relative">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={3}
                                slidesPerGroup={2}
                                pagination={{ clickable: true }}
                                modules={[ Pagination, Autoplay]}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                centeredSlides={true}
                             
                                className="brand-slider"
                                
                            >
                                {
                                    brand.map((item) => (
                                        <SwiperSlide className="flex pt-[10px] justify-center">
                                            <Brand key={item.id} case={item} path={{ imgPath }} />
                                        </SwiperSlide>

                                    ))
                                }

                            
                            </Swiper>


                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default index;