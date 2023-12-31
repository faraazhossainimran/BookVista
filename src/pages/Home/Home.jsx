import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import FeaturedRoom from "../../components/FeaturedRoom/FeaturedRoom";
import Promotions from "../../components/Promotions/Promotions";
import RoomsCarousel from "../../components/RoomsCarousel/RoomsCarousel";
import Rooms from "../Rooms/Rooms";
import FeaturedRooms from "./FeaturedRooms";
import ImageRorate from "./ImageRorate";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome to Bookvista</title>
      </Helmet>
      <Banner></Banner>
      <Promotions></Promotions>
      <NewsLetter></NewsLetter>
      <FeaturedRooms></FeaturedRooms>
      <RoomsCarousel></RoomsCarousel>
    </div>
  );
};

export default Home;
