

import "./style.scss";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

const index = () => {
    return (
        <section className="py-[100px]">
            <div className="container">
                <div>
                    <h2 className="text-[36px] font-semibold">Discover more. <span className="text-[#6B7280]">Good things are waiting for you</span></h2>
                   
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={2.7}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide",
                        }}
                        className="discover-slide"
                    >
                        <SwiperSlide className="flex items-center justify-center">
                            <div className="card-one discover-card bg-[#FEFCE8] rounded-2xl w-[494px] p-5 relative cursor-pointer overflow-hidden">
                                <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-[0.1] transition-opacity"></span>
                                <span className="text-[14px]">Explore new arrivals</span>
                                <h2 className="text-2xl font-semibold mb-10">Shop the latest <br /> from top brands</h2>
                                <button className="bg-white rounded-full text-[14px] font-medium px-[1.5rem] py-[0.875rem] shadow-lg">Show me all</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="flex items-center justify-center">
                            <div className="card-two bg-[#FEFCE8] rounded-2xl w-[494px] p-5 relative cursor-pointer overflow-hidden">
                                <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-[0.1] transition-opacity"></span>
                                <span className="text-[14px]">Digital gift cards</span>
                                <h2 className="text-2xl font-semibold mb-10">Give the gift  <br />  of choice</h2>
                                <button className="bg-white rounded-full text-[14px] font-medium px-[1.5rem] py-[0.875rem] shadow-lg">Show me all</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="flex items-center justify-center">
                            <div className="card-three bg-[#FEFCE8] rounded-2xl w-[494px] p-5 relative cursor-pointer overflow-hidden">
                                <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-[0.1] transition-opacity"></span>
                                <span className="text-[14px]">Sale collection</span>
                                <h2 className="text-2xl font-semibold mb-10">Up to <br />  80% off retail</h2>
                                <button className="bg-white rounded-full text-[14px] font-medium px-[1.5rem] py-[0.875rem] shadow-lg">Show me all</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="flex items-center justify-center">
                            <div className="card-one bg-[#FEFCE8] rounded-2xl w-[494px] p-5 relative cursor-pointer overflow-hidden">
                                <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-[0.1] transition-opacity"></span>
                                <span className="text-[14px]">Sale collection</span>
                                <h2 className="text-2xl font-semibold mb-10">Up to <br />  80% off retail</h2>
                                <button className="bg-white rounded-full text-[14px] font-medium px-[1.5rem] py-[0.875rem] shadow-lg">Show me all</button>
                            </div>
                        </SwiperSlide>
                        <div className="button-next-slide w-[30px] h-[30px] absolute top-0 right-0 cursor-pointer hover:border duration-200 rounded-full flex items-center justify-center">
                            <i class='bx bx-right-arrow-alt text-[20px]' ></i>
                        </div>
                        <div className="button-prev-slide w-[30px] h-[30px] cursor-pointer absolute top-0 right-[40px] hover:border duration-200 rounded-full flex items-center justify-center">
                            <i class='bx bx-left-arrow-alt text-[20px]'></i>
                        </div>
                    </Swiper>
                    {/* <div className="flex gap-x-5 absolute">
                        <div className="discover-card bg-[#FEFCE8] rounded-2xl w-[494px] p-5 relative cursor-pointer overflow-hidden">
                            <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-[0.1] transition-opacity"></span>
                            <span className="text-[14px]">Explore new arrivals</span>
                            <h2 className="text-2xl font-semibold mb-10">Shop the latest <br /> from top brands</h2>
                            <button className="bg-white rounded-full text-[14px] font-medium px-[1.5rem] py-[0.875rem] shadow-lg">Show me all</button>
                        </div>

                        <div className="discover-card bg-[#FEFCE8] rounded-2xl w-[494px] p-5 relative cursor-pointer overflow-hidden">
                            <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-[0.1] transition-opacity"></span>
                            <span className="text-[14px]">Digital gift cards</span>
                            <h2 className="text-2xl font-semibold mb-10">Give the gift  <br />  of choice</h2>
                            <button className="bg-white rounded-full text-[14px] font-medium px-[1.5rem] py-[0.875rem] shadow-lg">Show me all</button>
                        </div>

                        <div className="discover-card bg-[#FEFCE8] rounded-2xl w-[494px] p-5 relative cursor-pointer overflow-hidden">
                            <span className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-[0.1] transition-opacity"></span>
                            <span className="text-[14px]">Sale collection</span>
                            <h2 className="text-2xl font-semibold mb-10">Up to <br />  80% off retail</h2>
                            <button className="bg-white rounded-full text-[14px] font-medium px-[1.5rem] py-[0.875rem] shadow-lg">Show me all</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default index;