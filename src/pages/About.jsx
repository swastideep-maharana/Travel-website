import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Welcome to Travel Website , your ultimate destination for
            discovering the world's most breathtaking places and creating
            unforgettable memories. Founded with a passion for travel and a
            commitment to excellence, we aim to provide our clients with
            personalized and unique travel experiences. Whether you are seeking
            a relaxing beach vacation, an adventurous mountain trek, or an
            immersive cultural journey, our team of experienced travel experts
            is here to guide you every step of the way. We believe that travel
            is not just about the destination, but about the journey and the
            stories you bring back. Our mission is to make your travel dreams
            come true by offering exceptional service, handpicked destinations,
            and tailored itineraries that cater to your individual preferences
            and needs. Join us on this exciting journey and let's explore the
            world together!
          </p>
          <br />
          <p>
            Explore all corners of the world with us Discover new places,
            experience different cultures, and embark on unforgettable
            adventures with our travel guides and tips.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
