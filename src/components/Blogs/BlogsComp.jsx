import React from "react";
import BlogCard from "./BlogCard"; // Assuming BlogCard is a component
import Img1 from "../../assets/places/pic2.jpg";
import Img2 from "../../assets/places/pic1.jpg";
import Img3 from "../../assets/places/pic3.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "The 10 best places to visit in India",
    description: `India, a land of incredible diversity and cultural richness, offers travelers a myriad of captivating destinations. From the iconic Taj Mahal in Agra, a symbol of love and architectural brilliance, to the vibrant and historic Pink City of Jaipur with its stunning palaces and bustling bazaars, each place tells a unique story. In Kerala, often called "God's Own Country," visitors can immerse themselves in the serene backwaters and lush landscapes. Varanasi, one of the world's oldest continuously inhabited cities, provides a deeply spiritual experience along the ghats of the Ganges River. The state of Rajasthan, with its majestic forts and deserts, offers a royal journey through cities like Udaipur and Jaisalmer. Goa's pristine beaches and lively atmosphere contrast with Delhi's blend of ancient monuments and modern vibrancy. The stark beauty of Ladakh's high-altitude landscapes and monasteries offers a tranquil escape, while Mysore's regal heritage enchants with its magnificent palace. Lastly, the spiritual hubs of Rishikesh and Haridwar, nestled at the foothills of the Himalayas, invite seekers of peace and adventure alike. Together, these destinations showcase the multifaceted charm of India, making it a must-visit for any traveler.`,
    author: "John Doe",
    date: "June, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "The 10 best places to visit in India",
    description: `India, a land of incredible diversity and cultural richness, offers travelers a myriad of captivating destinations. From the iconic Taj Mahal in Agra, a symbol of love and architectural brilliance, to the vibrant and historic Pink City of Jaipur with its stunning palaces and bustling bazaars, each place tells a unique story. In Kerala, often called "God's Own Country," visitors can immerse themselves in the serene backwaters and lush landscapes. Varanasi, one of the world's oldest continuously inhabited cities, provides a deeply spiritual experience along the ghats of the Ganges River. The state of Rajasthan, with its majestic forts and deserts, offers a royal journey through cities like Udaipur and Jaisalmer. Goa's pristine beaches and lively atmosphere contrast with Delhi's blend of ancient monuments and modern vibrancy. The stark beauty of Ladakh's high-altitude landscapes and monasteries offers a tranquil escape, while Mysore's regal heritage enchants with its magnificent palace. Lastly, the spiritual hubs of Rishikesh and Haridwar, nestled at the foothills of the Himalayas, invite seekers of peace and adventure alike. Together, these destinations showcase the multifaceted charm of India, making it a must-visit for any traveler.`,
    author: "John Doe",
    date: "June, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "The 10 best places to visit in India",
    description: `India, a land of incredible diversity and cultural richness, offers travelers a myriad of captivating destinations. From the iconic Taj Mahal in Agra, a symbol of love and architectural brilliance, to the vibrant and historic Pink City of Jaipur with its stunning palaces and bustling bazaars, each place tells a unique story. In Kerala, often called "God's Own Country," visitors can immerse themselves in the serene backwaters and lush landscapes. Varanasi, one of the world's oldest continuously inhabited cities, provides a deeply spiritual experience along the ghats of the Ganges River. The state of Rajasthan, with its majestic forts and deserts, offers a royal journey through cities like Udaipur and Jaisalmer. Goa's pristine beaches and lively atmosphere contrast with Delhi's blend of ancient monuments and modern vibrancy. The stark beauty of Ladakh's high-altitude landscapes and monasteries offers a tranquil escape, while Mysore's regal heritage enchants with its magnificent palace. Lastly, the spiritual hubs of Rishikesh and Haridwar, nestled at the foothills of the Himalayas, invite seekers of peace and adventure alike. Together, these destinations showcase the multifaceted charm of India, making it a must-visit for any traveler.`,
    author: "John Doe",
    date: "June, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
