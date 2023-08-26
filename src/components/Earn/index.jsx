import Logo from "../../assets/icons/logo.svg";

import "./style.scss";

const index = () => {
  return (
    <section className="pt-[100px]">
      <div className="container">
        <div className="wrapper flex items-center justify-between">
          <div className="left_side">
           
            <h2 className="text-[60px] font-semibold leading-[72px] tracking-[-1.5px] mb-[22px] dark:text-white">
              Earn free money with Ciseco
            </h2>
            <p className="mb-[49px] text-[16px] font-normal leading-[24px] dark:text-white">
              With Ciseco you will get freeship & savings combo...
            </p>
            <div className="flex items-center gap-5">
              <button className=" text-[16px] font-medium leading-[24px] py-[15px] px-[25px] bg-black rounded-full text-white hover:bg-opacity-[0.8]">
                Savings combo
              </button>
              <button className=" text-[16px] font-medium leading-[24px]  py-[15px] px-[25px] rounded-full border hover:bg-gray-200">
                Discover more
              </button>
            </div>
          </div>
          <div className="right_side">
            <img
              src="https://ciseco-reactjs.vercel.app/static/media/rightLargeImg.dd2356513f3941fd1981.png"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;

