
import AboutUs from "../../About/AboutUs";
import UserReviewSection from "../../Review/UserReviewSection";
import AllToys from "./AllToys/AllToys";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <AllToys></AllToys>
            <AboutUs></AboutUs>
            <UserReviewSection></UserReviewSection>
            
        </div>
    );
};

export default Home;