



import "./style.scss";
import user from "../../assets/images/user.png";

const index = () => {
    return (
        <section className="py-[100px] bg-[#F3F4F6B3] rounded-[40px]">
            <div className="container">
                <div className=" flex flex-col">
                    <h2 className="text-[32px] text-[#111827] font-semibold mb-[57px]">The latest news. <span className="text-[#6B7280]">From the Ciseco blog</span></h2>
                    <div className="flex justify-between mb-5">
                        <div className="flex flex-col">
                            <div className="relative latest-news_pic w-[584px] h-[438px] border rounded-[40px] mb-[31px] cursor-pointer">
                                <div className="latest-news_socials">
                                    <span className="text-[18px] absolute top-[20px] right-[20px] bg-white w-[25px] h-[25px] rounded-full flex items-center justify-center"><i className='bx bxl-facebook'></i></span>
                                    <span className="text-[18px] absolute top-[50px] right-[20px] bg-white w-[25px] h-[25px] rounded-full flex items-center justify-center"><i className='bx bxl-twitter'></i></span>
                                    <span className="text-[18px] absolute top-[80px] right-[20px] bg-white w-[25px] h-[25px] rounded-full flex items-center justify-center"><i className='bx bxl-linkedin'></i></span>
                                    <span className="text-[18px] absolute top-[110px] right-[20px] bg-white w-[25px] h-[25px] rounded-full flex items-center justify-center"><i className='bx bxl-instagram'></i></span>
                                </div>
                            </div>
                            <h4 className="cursor-pointer hover:text-blue-500 text-[24px] font-medium w-[544px] mb-[15px]">in arcu cursus euismod quis viverra nibh cras pulvinar mattis</h4>
                            <p className="text-[#6B7280] text-[16px] max-w-[544px] font-light mb-[25px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero perspiciatis ullam ea? Nihil accusamus similique debitis tempore mollitia? Aperiam.</p>
                            <div className="flex items-center gap-x-1">
                                <img src={user} alt="user" className="w-[27px] h-[27px] object-cover object-center rounded-full" />
                                <div className="text-[14px]">
                                    Nevaeh Henry <span className="text-[#6B7280]">·May 20, 2021</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div className="flex">
                                <div className="w-[369px] flex flex-col justify-evenly">
                                    <h4 className="cursor-pointer hover:text-blue-500 text-[16px]">Et leo duis ut diam quam nulla porttitor massa id</h4>
                                    <p className="text-[16px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem</p>

                                    <div className="flex items-center gap-x-1">
                                        <img src={user} alt="user" className="w-[27px] h-[27px] object-cover object-center rounded-full" />
                                        <div className="text-[14px]">
                                            Nevaeh Henry <span className="text-[#6B7280]">·May 20, 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <img className="w-[194px] h-[194px] rounded-[25px]" src="https://images.pexels.com/photos/10343245/pexels-photo-10343245.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                            </div>
                            <div className="flex">
                                <div className="w-[369px] flex flex-col justify-evenly">
                                    <h4 className="cursor-pointer hover:text-blue-500 text-[16px]">Et leo duis ut diam quam nulla porttitor massa id</h4>
                                    <p className="text-[16px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem</p>

                                    <div className="flex items-center gap-x-1">
                                        <img src={user} alt="user" className="w-[27px] h-[27px] object-cover object-center rounded-full" />
                                        <div className="text-[14px]">
                                            Nevaeh Henry <span className="text-[#6B7280]">·May 20, 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <img className="w-[194px] h-[194px] rounded-[25px]" src="https://images.pexels.com/photos/10343245/pexels-photo-10343245.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                            </div>
                            <div className="flex">
                                <div className="w-[369px] flex flex-col justify-evenly">
                                    <h4 className="cursor-pointer hover:text-blue-500 text-[16px]">Et leo duis ut diam quam nulla porttitor massa id</h4>
                                    <p className="text-[16px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem</p>

                                    <div className="flex items-center gap-x-1">
                                        <img src={user} alt="user" className="w-[27px] h-[27px] object-cover object-center rounded-full" />
                                        <div className="text-[14px]">
                                            Nevaeh Henry <span className="text-[#6B7280]">·May 20, 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <img className="w-[194px] h-[194px] rounded-[25px]" src="https://images.pexels.com/photos/10343245/pexels-photo-10343245.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                            </div>
                        </div>
                    </div>

                    <button className=" text-[14px] font-medium bg-white hover:bg-transparent hover:border-sky-300 rounded-full px-5 py-3 border mx-auto">Show all blog articles</button>
                </div>
            </div>
        </section>
    );
};

export default index;