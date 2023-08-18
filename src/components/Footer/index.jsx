
import "./style.scss";
import logo from "../../assets/icons/logo.svg";
const index = () => {
    return (
        <footer className="pt-[120px] pb-[80px] border-t-2">
            <div className="container">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-y-6">
                        <img src={logo} alt="logo" />
                        <ul className="flex flex-col gap-y-3 text-[14px]">
                            <li><a href="#" className="flex items-center gap-x-1"><span className="text-white w-[22px] h-[22px] flex items-center justify-center rounded-full bg-blue-600"><i className='bx bxl-facebook'></i></span> Facebook</a></li>
                            <li><a href="#" className="flex items-center gap-x-1"><span className="text-white w-[22px] h-[22px] flex items-center justify-center rounded-full bg-red-600"><i className='bx bxl-youtube'></i></span> Youtube</a></li>
                            <li><a href="#" className="flex items-center gap-x-1"><span className="text-white w-[22px] h-[22px] flex items-center justify-center rounded-full bg-sky-600"><i className='bx bxl-telegram'></i></span> Telegram</a></li>
                            <li><a href="#" className="flex items-center gap-x-1"><span className="text-white w-[22px] h-[22px] flex items-center justify-center rounded-full bg-sky-400"><i className='bx bxl-twitter'></i></span> Twitter</a></li>
                        </ul>
                    </div>
                    <ul className="text-[14px] flex flex-col gap-y-4 w-[120px]">
                        <li><a href="#" className="font-semibold">Getting started</a></li>
                        <li><a href="#" className="hover:font-semibold">Release Notes</a></li>
                        <li><a href="#" className="hover:font-semibold">Upgrade Guide</a></li>
                        <li><a href="#" className="hover:font-semibold">Browser Support</a></li>
                        <li><a href="#" className="hover:font-semibold">Dark Mode</a></li>
                    </ul>
                    <ul className="text-[14px] flex flex-col gap-y-4 w-[120px]">
                        <li><a href="#" className="font-semibold">Explore</a></li>
                        <li><a href="#" className="hover:font-semibold">Prototyping</a></li>
                        <li><a href="#" className="hover:font-semibold">Design systems</a></li>
                        <li><a href="#" className="hover:font-semibold">Pricing</a></li>
                        <li><a href="#" className="hover:font-semibold">Security</a></li>
                    </ul>
                    <ul className="text-[14px] flex flex-col gap-y-4 w-[120px]">
                        <li><a href="#" className="font-semibold">Resources</a></li>
                        <li><a href="#" className="hover:font-semibold">Best practices</a></li>
                        <li><a href="#" className="hover:font-semibold">Support</a></li>
                        <li><a href="#" className="hover:font-semibold">Developers</a></li>
                        <li><a href="#" className="hover:font-semibold">Learn design</a></li>
                    </ul>
                    <ul className="text-[14px] flex flex-col gap-y-4 w-[120px]">
                        <li><a href="#" className="font-semibold">Community</a></li>
                        <li><a href="#" className="hover:font-semibold">Discussion Forums</a></li>
                        <li><a href="#" className="hover:font-semibold">Code of Conduct</a></li>
                        <li><a href="#" className="hover:font-semibold">Contributing</a></li>
                        <li><a href="#" className="hover:font-semibold">API Reference</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default index;