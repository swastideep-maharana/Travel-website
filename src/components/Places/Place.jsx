import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/pic1.jpg";
import Img2 from "../../assets/places/pic2.jpg";
import Img3 from "../../assets/places/pic3.jpg";
import Img4 from "../../assets/places/pic4.jpg";
import Img5 from "../../assets/places/pic5.jpg";
import Img6 from "../../assets/places/pic6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Manali",
    location: "Himachal Pradesh",
    Description:
      "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass.",
    price: 1000,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    Description:
      "The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year while giving birth to their 14th child, Gauhara Begum.[10][11] Construction started in 1632, and the mausoleum was completed in 1648, while the surrounding buildings and garden were finished five years later",
    price: 1000,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Maldives",
    location: "South Asia",
    Description:
      "The Maldives, officially the Republic of Maldives, and historically known as the Maldive Islands, is a country and archipelagic state in South Asia in the Indian Ocean. The Maldives is southwest of Sri Lanka and India, about 750 kilometres from the Asian continent's mainland.",
    price: 1000,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "Australia",
    Description:
      "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs.",
    price: 1000,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "California",
    Description:
      "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes",
    price: 1000,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Las Vegas",
    location: "Nevada",
    Description:
      "Las Vegas, often known as Sin City or simply Vegas, is the most populous city in the U.S. state of Nevada and the county seat of Clark County. The Las Vegas Valley metropolitan area is the largest within the greater Mojave Desert, and second-largest in the Southwestern United States.",
    price: 1000,
    type: "Cultural Relax",
  },
];

const Place = ({ handleOrderPopup }) => {
  return (
    <>
      <div className=" py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Place;
