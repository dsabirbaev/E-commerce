



import "./style.scss";
import { HeartOutlined } from '@ant-design/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

const index = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <h2 className="text-[30px] text-[#111827] font-semibold">New Arrivals. <span className="text-[#6B7280]">REY backpacks & bags</span></h2>

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
                            <div className="w-[294px]">
                                <div className="rounded-2xl bg-[#f8fafc] relative h-[253px]">
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/5.9ddc0dff360795c6f5b5.png" alt="clothes" />
                                    <span className="absolute top-3 right-2 w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center"><HeartOutlined className="text-red-500" /></span>
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
                                        <h2 className="font-semibold text-[16px]">Leather Gloves</h2>
                                        <p className="text-slate-500 font-medium mb-5">Perfect mint green</p>
                                        <div className="flex items-center justify-between">
                                            <p className="border-green-500 border rounded-md text-green-500 font-semibold px-2 py-1 w-fit">$42.00 </p>
                                            <span className="text-slate-400 text-[18px]"><i class='bx bxs-star text-yellow-400'></i> 4.9</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[294px]">
                                <div className="rounded-2xl bg-[#f8fafc] relative h-[253px]">
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/sport-6.38e1be2735a4eab88fc6.png" alt="clothes" />
                                    <span className="absolute top-3 right-2 w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center"><HeartOutlined className="text-red-500" /></span>
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
                                        <h2 className="font-semibold text-[16px]">Manhattan Toy WRT</h2>
                                        <p className="text-slate-500 font-medium mb-5">New design 2023</p>
                                        <div className="flex items-center justify-between">
                                            <p className="border-green-500 border rounded-md text-green-500 font-semibold px-2 py-1 w-fit">$30.00 </p>
                                            <span className="text-slate-400 text-[18px]"><i class='bx bxs-star text-yellow-400'></i> 4.9</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[294px]">
                                <div className="rounded-2xl bg-[#f8fafc] relative h-[253px]">
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/8.cb062df1bb925627f03d.png" alt="clothes" />
                                    <span className="absolute top-3 right-2 w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center"><HeartOutlined className="text-red-500" /></span>
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
                                        <h2 className="font-semibold text-[16px]">Ella Leather Tote</h2>
                                        <p className="text-slate-500 font-medium mb-5">Cream pink</p>
                                        <div className="flex items-center justify-between">
                                            <p className="border-green-500 border rounded-md text-green-500 font-semibold px-2 py-1 w-fit">$145.00 </p>
                                            <span className="text-slate-400 text-[18px]"><i class='bx bxs-star text-yellow-400'></i> 4.9</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[294px]">
                                <div className="rounded-2xl bg-[#f8fafc] relative h-[253px]">
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/sport-2.3a02c7c2b3c71fe9329c.png" alt="clothes" />
                                    <span className="absolute top-3 right-2 w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center"><HeartOutlined className="text-red-500" /></span>
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
                                        <h2 className="font-semibold text-[16px]">Jump Rope Kids</h2>
                                        <p className="text-slate-500 font-medium mb-5">Classic green</p>
                                        <div className="flex items-center justify-between">
                                            <p className="border-green-500 border rounded-md text-green-500 font-semibold px-2 py-1 w-fit">$68.00 </p>
                                            <span className="text-slate-400 text-[18px]"><i class='bx bxs-star text-yellow-400'></i> 4.9</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[294px]">
                                <div className="rounded-2xl bg-[#f8fafc] relative h-[253px]">
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/9.838d27ae66ef44d4a73b.png" alt="clothes" />
                                    <span className="absolute top-3 right-2 w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center"><HeartOutlined className="text-red-500" /></span>
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
                                        <h2 className="font-semibold text-[16px]">Wool Cashmere Jacket</h2>
                                        <p className="text-slate-500 font-medium mb-5">Matte black</p>
                                        <div className="flex items-center justify-between">
                                            <p className="border-green-500 border rounded-md text-green-500 font-semibold px-2 py-1 w-fit">$12.00 </p>
                                            <span className="text-slate-400 text-[18px]"><i class='bx bxs-star text-yellow-400'></i> 4.9</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <div className="button-next-slide w-[40px] h-[40px] absolute top-0 right-0 cursor-pointer hover:border duration-200 rounded-full flex items-center justify-center">
                            <i className='bx bx-right-arrow-alt text-[25px]' ></i>
                        </div>
                        <div className="button-prev-slide w-[40px] h-[40px] cursor-pointer absolute top-0 right-[45px] hover:border duration-200 rounded-full flex items-center justify-center">
                            <i className='bx bx-left-arrow-alt text-[25px]'></i>
                        </div>
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default index;