
import "./style.scss";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
const index = () => {
    return (
        <header className="fixed left-0 top-0 z-50 w-full bg-white dark:bg-gray-800">
            {/* <HeaderTop/> */}
            <div className="container">
                <Navbar/>
            </div>
        </header>
    );
};

export default index;