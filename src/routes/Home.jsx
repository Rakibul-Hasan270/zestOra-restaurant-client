import About from "../layout/About/About";
import Carousel from "../layout/banner/Carousel";
import TabItem from "../layout/TabItem/TabItem";

const Home = () => {
    return (
        <div className="space-y-20">
            <Carousel></Carousel>
            <TabItem></TabItem>
            <About></About>
        </div>
    );
};

export default Home;