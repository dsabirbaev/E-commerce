
import "./style.scss";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
const index = () => {
    return (
        <header>
            <HeaderTop/>
            <div className="container">
                <Navbar/>
            </div>
        </header>
    );
};

export default index;