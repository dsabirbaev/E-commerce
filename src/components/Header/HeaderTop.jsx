

import "./style.scss";

const HeaderTop = () => {
    return (
        <div className="flex items-center justify-between px-5 h-[54px] bg-black">
            <a href="#" className="font-bold text-white">eclo <span className="text-green-400">market</span></a>
            <button className="text-white bg-[#82b440] px-5 py-[5px] rounded-md hover:opacity-[0.9]">Buy now</button>
        </div>
    );
};

export default HeaderTop;