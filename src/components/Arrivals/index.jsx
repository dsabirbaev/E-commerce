

import React, { useState } from "react";

import "./style.scss";
import { HeartOutlined } from '@ant-design/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';



const index = () => {

    const [like, setLike] = useState(false);
    return (
        <section className="pt-[100px]">
            <div className="container">
                <div>
                    <h2 className="text-[30px] text-[#111827] font-semibold dark:text-white">New Arrivals. <span className="text-[#6B7280]">REY backpacks & bags</span></h2>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide",
                        }}
                        className="arrivals-slide"
                    >
                        <SwiperSlide>
                            <div className="w-[294px] cursor-pointer dark:border dark:border-gray-500 rounded-2xl">
                                <div className="arrivals-card-img rounded-2xl bg-[#f8fafc] relative h-[253px] overflow-hidden">
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/5.9ddc0dff360795c6f5b5.png" alt="clothes" />
                                    <span onClick={() => setLike(!like)} className="absolute top-3 right-2 w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center">
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke={like ? "red" : "#000"} fill={like ? "red" : "#fff"}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </span>
                                    <div className="size absolute bottom-[-50px] left-2 font-semibold text-[13px] flex gap-x-2">
                                        <span className="rounded-lg w-[50px] h-[50px] flex items-center justify-center bg-white">XS</span>
                                        <span className="rounded-lg w-[50px] h-[50px] flex items-center justify-center bg-white">S</span>
                                        <span className="rounded-lg w-[50px] h-[50px] flex items-center justify-center bg-white">M</span>
                                        <span className="rounded-lg w-[50px] h-[50px] flex items-center justify-center bg-white">L</span>
                                        <span className="rounded-lg w-[50px] h-[50px] flex items-center justify-center bg-white">XL</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex mb-5 gap-x-2">
                                        <span className="w-[18px] h-[18px] bg-red-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-green-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-pink-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-yellow-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-blue-500 rounded-full"></span>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[16px] dark:text-white">Leather Gloves</h2>
                                        <p className="text-slate-500 font-medium mb-5 dark:text-white">Perfect mint green</p>
                                        <div className="flex items-center justify-between">
                                            <p className="border-green-500 border rounded-md text-green-500 font-semibold px-2 py-1 w-fit">$42.00 </p>
                                            <span className="text-slate-400 text-[18px] dark:text-white"><i class='bx bxs-star text-yellow-400'></i> 4.9</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[294px] cursor-pointer dark:border dark:border-gray-500 rounded-2xl">
                                <div className="rounded-2xl bg-[#f8fafc] relative h-[253px]">
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/sport-6.38e1be2735a4eab88fc6.png" alt="clothes" />
                                    <span onClick={() => setLike(!like)} className="absolute top-3 right-2 w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center">
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke={like ? "red" : "#000"} fill={like ? "red" : "#fff"}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </span>
                                </div>
                                <div className="p-5">
                                    <div className="flex mb-5 gap-x-2">
                                        <span className="w-[18px] h-[18px] bg-red-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-green-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-pink-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-yellow-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-blue-500 rounded-full"></span>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[16px] dark:text-white">Manhattan Toy WRT</h2>
                                        <p className="text-slate-500 font-medium mb-5 dark:text-white">New design 2023</p>
                                        <div className="flex items-center justify-between">
                                            <p className="border-green-500 border rounded-md text-green-500 font-semibold px-2 py-1 w-fit">$30.00 </p>
                                            <span className="text-slate-400 text-[18px] dark:text-white"><i class='bx bxs-star text-yellow-400'></i> 4.9</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[294px] cursor-pointer dark:border dark:border-gray-500 rounded-2xl">
                                <div className="rounded-2xl bg-[#f8fafc] relative h-[253px]">
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/8.cb062df1bb925627f03d.png" alt="clothes" />
                                    <span onClick={() => setLike(!like)} className="absolute top-3 right-2 w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center">
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke={like ? "red" : "#000"} fill={like ? "red" : "#fff"}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </span>
                                </div>
                                <div className="p-5">
                                    <div className="flex mb-5 gap-x-2">
                                        <span className="w-[18px] h-[18px] bg-red-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-green-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-pink-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-yellow-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-blue-500 rounded-full"></span>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[16px] dark:text-white">Ella Leather Tote</h2>
                                        <p className="text-slate-500 font-medium mb-5 dark:text-white">Cream pink</p>
                                        <div className="flex items-center justify-between">
                                            <p className="border-green-500 border rounded-md text-green-500 font-semibold px-2 py-1 w-fit">$145.00 </p>
                                            <span className="text-slate-400 text-[18px] dark:text-white"><i class='bx bxs-star text-yellow-400'></i> 4.9</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[294px] cursor-pointer dark:border dark:border-gray-500 rounded-2xl">
                                <div className="rounded-2xl bg-[#f8fafc] relative h-[253px]">
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/sport-2.3a02c7c2b3c71fe9329c.png" alt="clothes" />
                                    <span onClick={() => setLike(!like)} className="absolute top-3 right-2 w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center">
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke={like ? "red" : "#000"} fill={like ? "red" : "#fff"}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </span>
                                </div>
                                <div className="p-5">
                                    <div className="flex mb-5 gap-x-2">
                                        <span className="w-[18px] h-[18px] bg-red-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-green-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-pink-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-yellow-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-blue-500 rounded-full"></span>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[16px] dark:text-white">Jump Rope Kids</h2>
                                        <p className="text-slate-500 font-medium mb-5 dark:text-white">Classic green</p>
                                        <div className="flex items-center justify-between">
                                            <p className="border-green-500 border rounded-md text-green-500 font-semibold px-2 py-1 w-fit">$68.00 </p>
                                            <span className="text-slate-400 text-[18px] dark:text-white"><i class='bx bxs-star text-yellow-400'></i> 4.9</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[294px] cursor-pointer dark:border dark:border-gray-500 rounded-2xl">
                                <div className="rounded-2xl bg-[#f8fafc] relative h-[253px]">
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/9.838d27ae66ef44d4a73b.png" alt="clothes" />
                                    <span onClick={() => setLike(!like)} className="absolute top-3 right-2 w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center">
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke={like ? "red" : "#000"} fill={like ? "red" : "#fff"}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </span>
                                </div>
                                <div className="p-5">
                                    <div className="flex mb-5 gap-x-2">
                                        <span className="w-[18px] h-[18px] bg-red-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-green-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-pink-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-yellow-500 rounded-full"></span>
                                        <span className="w-[18px] h-[18px] bg-blue-500 rounded-full"></span>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[16px] dark:text-white">Wool Cashmere Jacket</h2>
                                        <p className="text-slate-500 font-medium mb-5 dark:text-white">Matte black</p>
                                        <div className="flex items-center justify-between">
                                            <p className="border-green-500 border rounded-md text-green-500 font-semibold px-2 py-1 w-fit">$12.00 </p>
                                            <span className="text-slate-400 text-[18px] dark:text-white"><i class='bx bxs-star text-yellow-400'></i> 4.9</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <div className="button-next-slide w-[40px] h-[40px] absolute top-0 right-0 cursor-pointer hover:border duration-200 rounded-full flex items-center justify-center">
                            <i className='bx bx-right-arrow-alt text-[25px] dark:text-white' ></i>
                        </div>
                        <div className="button-prev-slide w-[40px] h-[40px] cursor-pointer absolute top-0 right-[45px] hover:border duration-200 rounded-full flex items-center justify-center">
                            <i className='bx bx-left-arrow-alt text-[25px] dark:text-white'></i>
                        </div>
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default index;