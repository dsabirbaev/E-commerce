
import "./style.scss";
import Intro from "../Intro";
import Discover from "../Discover";
import Arrivals from "../Arrivals";
import Service from "../Service";
import Earn from "../Earn";
import Exploring from "../Exploring";
import Trending from "../Trending";
import Special from "../Special";
import Chosen from "../Chosen";
import Shop from "../Shop";
import Register from "../Register";
import Sellers from "../Sellers";
import LatestNews from "../LatestNews";
import GoodNews from "../GoodNews";

const index = () => {
    return (
        <main>
            <Intro/> 
            <Discover/> 
            <Arrivals/> 
            <Service/> 
            <Earn/>      
            <Exploring/>    
            <Trending/>  
            <Special/>  
            <Chosen/>  
            <Shop/>  
            <Register/>  
            <Sellers/>  
            <LatestNews/>  
            <GoodNews/>
        </main>
    );
};

export default index;