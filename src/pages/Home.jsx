import React from "react";
import video from "../assets/video/main.mp4";
import Hero from "../components/Hero/Hero";
import Place from "../components/Places/Place";
import Bannerimg from "../components/Bannerimg/Bannerimg";
import Poster from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import Blogs from "./Blogs";
import Banner from "../components/Banner/Banner";
import Popup from "../components/Popup/Popup";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px]
            w-full object-cover z-[-1]"
          >
            <source src={video} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Place handleOrderPopup={handleOrderPopup} />
        <Bannerimg img={Poster} />
        <Blogs />
        <Banner />
        <Bannerimg img={Banner2} />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
