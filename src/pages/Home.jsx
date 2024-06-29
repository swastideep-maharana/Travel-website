import React from "react";
import video from "../assets/video/main.mp4";
import Hero from "../components/Hero/Hero";
import Place from "../components/Places/Place";
import Bannerimg from "../components/Bannerimg/Bannerimg";
import Poster from "../assets/cover-women.jpg";

const Home = () => {
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
        <Place />
        <Bannerimg img={Poster} />
      </div>
    </>
  );
};

export default Home;
