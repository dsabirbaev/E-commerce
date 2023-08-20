


import "./style.scss";

const index = () => {
    return (
        <section className="pt-[100px]">
              <div className="container">
                <div className="register-email relative h-[578px] w-full  bg-[#F8FAFC]  rounded-[40px]">
            
                    <img
                        className="w-[600px] h-[658px] absolute bottom-0 right-0"
                        src="https://ciseco-reactjs.vercel.app/static/media/promo3.9002024e8eda57df7e8e.png"
                        alt=""
                    />
                    <div className="flex flex-col z-30 pt-[95px] pl-[96px] ">
                        <h2 className="text-[48px] text-[#0F172A] font-semibold leading-[48px] max-w-[419px] mb-5">
                            Don't miss out on special offers
                        </h2>
                        <p className="text-[#6B7280] leading-[24px] text-[16px] max-w-[467px] mb-[40px]">
                            Register to receive news about the latest, savings
                            combos, discount codes...
                        </p>
                        <ul className="max-w-[512px] flex flex-col gap-y-5 mb-[40px]">
                            <div className="flex items-center justify-start gap-[16px]">
                                <span className="text-[#6B21A8] font-medium h-[24px] w-[34.63px] rounded-full bg-[#F3E8FF] flex items-center justify-center text-[12px]">
                                    01
                                </span>
                                <p className="font-medium">Savings combos</p>
                            </div>
                            <div className="flex items-center justify-start gap-[16px]">
                                <span className="text-[#1E40AF] font-medium w-[34.63px] h-[24px] rounded-full bg-[#DBEAFE] flex items-center justify-center text-[12px]">
                                    02
                                </span>
                                <p className="font-medium">Freeship </p>
                            </div>
                            <div className="flex items-center justify-start gap-[16px]">
                                <span className="text-[#991B1B] font-medium w-[34.63px] h-[24px] rounded-full bg-[#FEE2E2] flex items-center justify-center text-[12px]">
                                    03
                                </span>
                                <p className="font-medium">
                                    Premium magazines
                                </p>
                            </div>
                        </ul>
                        <div className="flex items-center justify-between z-30 bg-[#fff] rounded-full border-[1px] border-solid border-[#E5E7EB] w-[384px] h-[44px]  pr-[4px] pl-[16px]">
                            <input
                                type="email"
                                className=" outline-none border-none w-[300px] "
                                placeholder="Enter your email"
                            />
                            <button className="w-[36px] h-[36px] rounded-full bg-[#0F172A] hover:opacity-[0.8] flex items-center justify-center">
                                <i className='bx bx-arrow-back text-white rotate-[180deg]'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;