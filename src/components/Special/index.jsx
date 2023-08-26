












import "./style.scss";

const index = () => {
    return (
        <section className="pt-[150px]">
           <div className="container">
                <div className="special-offer h-[570px] bg-[#FEFCE8] dark:bg-gray-500 rounded-[50px] flex gap-x-5">
                    
                    <img className="mt-[-100px]" src="https://ciseco-reactjs.vercel.app/static/media/promo2.9278c86b3a2f01d6666e.png" alt="kid" />
                    <div className="flex flex-col items-start pt-[100px]">
                        {/* <img
                            src="https://ciseco-reactjs.vercel.app/static/media/logo.95d47bbac8db6c1e8f997bbf26ca05cf.svg"
                            alt=""
                            className="cursor-pointer mb-[45px]"
                        /> */}
                        <h2 className="dark:text-white font-bold tracking-wider text-[40px]">Eclo</h2>
                        <h2 className="text-[48px] w-[450px] font-semibold  tracking-[-1.5px] leading-[67.8px] mb-5 dark:text-white">
                            Special offer <span className="block">in kids products</span>
                        </h2>
                        <p className="max-w-[441px] text-[#64748B] text-[16px] mb-8 dark:text-white">
                            Fashion is a form of self-expression and
                            autonomy at a particular period and place.
                        </p>
                        <button className="w-[164.17px] h-[52px] bg-[#0F172A] dark:bg-transparent dark:border dark:border-gray-900 hover:opacity-80  shadow-2xl rounded-full text-center text-white cursor-pointer">
                            Discover more
                        </button>
                    </div>
                </div>
           </div> 
        </section>
    );
};

export default index;