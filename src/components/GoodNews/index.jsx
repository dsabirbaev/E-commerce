



import "./style.scss";
import user from "../../assets/images/user.png";
import man from "../../assets/images/man.png";
import { Rate } from 'antd';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,  Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

const index = () => {

    return (
        <section className="py-[100px]">
            <div className="container">

                <div className="flex flex-col">

                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-[36px] font-semibold mb-5">Good news from far away 🥇</h2>
                        <p className="text-[20px] text-[#6B7280] mb-10">Let's see what people think of Ciseco</p>

                        <div className="flex items-center justify-between w-[800px] mb-10">
                            <img src={user} alt="user" className="w-[60px] h-[60px] rounded-full" />
                            <img src={man} alt="man" />
                            <img src={user} alt="user" className="w-[60px] h-[60px] rounded-full" />
                        </div>
                    </div>
                    <div>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            loop={true}
                            className="good-news-slider"
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            
                        >
                            <SwiperSlide className="flex items-center justify-center">
                                <div className="text-center max-w-[600px] pb-10">
                                    <p className="text-[24px] text-center mb-5 text-[#0F172A]">Great quality products, affordable prices, fast and friendly delivery. I very recommend.</p>
                                    <h2 className="text-[24px] font-semibold mb-2">Tiana Abie</h2>
                                    <Rate allowHalf defaultValue={5} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex items-center justify-center">
                                <div className="text-center max-w-[600px] pb-10">
                                    <p className="text-[24px] text-center mb-5 text-[#0F172A]">Great quality products, affordable prices, fast and friendly delivery. I very recommend.</p>
                                    <h2 className="text-[24px] font-semibold mb-2">Tiana Abie</h2>
                                    <Rate allowHalf defaultValue={5} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex items-center justify-center">
                                <div className="text-center max-w-[600px] pb-10">
                                    <p className="text-[24px] text-center mb-5 text-[#0F172A]">Great quality products, affordable prices, fast and friendly delivery. I very recommend.</p>
                                    <h2 className="text-[24px] font-semibold mb-2">Tiana Abie</h2>
                                    <Rate allowHalf defaultValue={5} />
                                </div>
                            </SwiperSlide>

                            
                        </Swiper>
                    </div>

                
                </div>


            </div>
        </section>
    );
};

export default index;