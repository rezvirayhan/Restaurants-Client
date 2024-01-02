import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CoverContact from "../CoverContact/CoverContact";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <CoverContact></CoverContact>
            <Featured></Featured>
            <PopularMenu></PopularMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;