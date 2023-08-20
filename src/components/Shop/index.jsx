



import "./style.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

const index = () => {
    return (
        <section className="pt-[100px]">
            <div className="container">
                <div>
                    <h2 className="text-[36px] font-semibold text-[#111827]">Shop by department</h2>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide",
                        }}
                        className="shop-slide"
                    >

                        <SwiperSlide>
                            <div className="w-[276px]">
                                <div className="rounded-[20px] bg-[#e0e7ff] cursor-pointer relative overflow-hidden">
                                    <span className="bg-black opacity-0 hover:opacity-[0.1] absolute left-0 top-0 w-full h-full transition-opacity"></span>
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/department1.8c732cf70fb1db8a427c.png" alt="clothes" />
                                </div>
                                <div className="text-center p-5">
                                    <h2 className="text-[18px] font-semibold mb-1">Travel Kits</h2>
                                    <p className="text-[14px] text-[#6B7280]">20+ categories</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[276px]">
                                <div className="rounded-[20px] bg-[#f1f5f9] cursor-pointer relative overflow-hidden">
                                    <span className="bg-black opacity-0 hover:opacity-[0.1] absolute left-0 top-0 w-full h-full transition-opacity"></span>
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/department2.0f6d094cc355eea274f9.png" alt="clothes" />
                                </div>
                                <div className="text-center p-5">
                                    <h2 className="text-[18px] font-semibold mb-1">Travel Kits</h2>
                                    <p className="text-[14px] text-[#6B7280]">20+ categories</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[276px]">
                                <div className="rounded-[20px] bg-[#e0f2fe] cursor-pointer relative overflow-hidden">
                                    <span className="bg-black opacity-0 hover:opacity-[0.1] absolute left-0 top-0 w-full h-full transition-opacity"></span>
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/department3.03411a1852db06674802.png" alt="clothes" />
                                </div>
                                <div className="text-center p-5">
                                    <h2 className="text-[18px] font-semibold mb-1">Travel Kits</h2>
                                    <p className="text-[14px] text-[#6B7280]">20+ categories</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[276px]">
                                <div className="rounded-[20px] bg-[#ffedd5] cursor-pointer relative overflow-hidden">
                                    <span className="bg-black opacity-0 hover:opacity-[0.1] absolute left-0 top-0 w-full h-full transition-opacity"></span>
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/department4.f4edc8706f19e8dbbd78.png" alt="clothes" />
                                </div>
                                <div className="text-center p-5">
                                    <h2 className="text-[18px] font-semibold mb-1">Travel Kits</h2>
                                    <p className="text-[14px] text-[#6B7280]">20+ categories</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-[276px]">
                                <div className="rounded-[20px] bg-[#e0e7ff] cursor-pointer relative overflow-hidden">
                                    <span className="bg-black opacity-0 hover:opacity-[0.1] absolute left-0 top-0 w-full h-full transition-opacity"></span>
                                    <img src="https://ciseco-reactjs.vercel.app/static/media/6.ed4616e785835c927ad1.png" alt="clothes" />
                                </div>
                                <div className="text-center p-5">
                                    <h2 className="text-[18px] font-semibold mb-1">Umbrella</h2>
                                    <p className="text-[14px] text-[#6B7280]">11+ categories</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="button-next-slide w-[40px] h-[40px] absolute top-0 right-0 cursor-pointer hover:border duration-200 rounded-full flex items-center justify-center">
                            <i class='bx bx-right-arrow-alt text-[25px]' ></i>
                        </div>
                        <div className="button-prev-slide w-[40px] h-[40px] cursor-pointer absolute top-0 right-[45px] hover:border duration-200 rounded-full flex items-center justify-center">
                            <i class='bx bx-left-arrow-alt text-[25px]'></i>
                        </div>
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default index;