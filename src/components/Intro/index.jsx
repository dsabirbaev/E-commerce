

import "./style.scss";
import { Carousel } from 'antd';

const index = () => {
    return (
        <section className="bg-green-100 dark:bg-gray-700 pt-[80px]">
            <div className="container">
                <Carousel autoplay>
                    <div className="w-full">
                        <div className="carousel-intro-one flex flex-col h-[690px] justify-center">
                            <h4 className="text-[20px] text-[#334155] dark:text-white font-medium mb-4">In this season, find the best 🔥</h4>
                            <h1 className="w-[550px] text-[48px] text-[#0F172A] dark:text-white font-bold mb-8 leading-[1.2]">Exclusive collection for everyone</h1>
                            <button className="self-start bg-[#0F172A] text-white text-[16px] py-5 px-[36px] rounded-full font-semibold flex items-center gap-x-2 hover:opacity-[0.8] dark:border dark:border-white">Explore now <i className='bx bx-search text-[25px]'></i></button>
                        </div>
                    </div>
                    <div>
                        <div className="carousel-intro-two flex flex-col h-[690px] justify-center">
                            <h4 className="text-[20px] text-[#334155] dark:text-white font-medium mb-4">In this season, find the best 🔥</h4>
                            <h1 className="w-[550px] text-[48px] text-[#0F172A] dark:text-white font-bold mb-8 leading-[1.2]">Exclusive collection for everyone</h1>
                            <button className="self-start bg-[#0F172A] text-white text-[16px] py-5 px-[36px] rounded-full font-semibold flex items-center gap-x-2 hover:opacity-[0.8] dark:border dark:border-white">Explore now <i className='bx bx-search text-[25px]'></i></button>
                        </div>
                    </div>
                    <div>
                        <div className="carousel-intro-three flex flex-col h-[690px] justify-center">
                            <h4 className="text-[20px] text-[#334155] dark:text-white font-medium mb-4">In this season, find the best 🔥</h4>
                            <h1 className="w-[550px] text-[48px] text-[#0F172A] dark:text-white font-bold mb-8 leading-[1.2]">Exclusive collection for everyone</h1>
                            <button className="self-start bg-[#0F172A] text-white text-[16px] py-5 px-[36px] rounded-full font-semibold flex items-center gap-x-2 hover:opacity-[0.8] dark:border dark:border-white">Explore now <i className='bx bx-search text-[25px]'></i></button>
                        </div>
                    </div>

                </Carousel>

            </div>
        </section>
    );
};

export default index;