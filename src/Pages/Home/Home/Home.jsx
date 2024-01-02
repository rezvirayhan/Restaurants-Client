import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CoverContact from "../CoverContact/CoverContact";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <CoverContact></CoverContact>
        </div>
    );
};

export default Home;