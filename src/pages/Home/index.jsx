
import "./style.scss";


import Intro from "../../components/Intro";

import Discover from "../../components/Discover";
import Arrivals from "../../components/Arrivals";
import Service from "../../components/Service";
import Earn from "../../components/Earn";
import Exploring from "../../components/Exploring";
import Trending from "../../components/Trending";
import Special from "../../components/Special";
import Chosen from "../../components/Chosen";
import Shop from "../../components/Shop";
import Register from "../../components/Register";
import Sellers from "../../components/Sellers";
import LatestNews from "../../components/LatestNews";
import GoodNews from "../../components/GoodNews";

const index = () => {

    document.title = "Eclo";
    return (
        
        <div>
            <Intro/>
            <Discover/> 
            <Arrivals/> 
            <Service/> 
            <Earn/>      
            {/* <Exploring/>    
            <Trending/>   */}
            <Special/>  
            <Chosen/>  
            <Shop/>  
            <Register/>  
            <Sellers/>  
            <LatestNews/>  
            <GoodNews/>
        </div>     
    
    );
};

export default index;