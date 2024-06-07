import React, { useEffect, useState } from 'react';
import WebsiteName from './WebsiteName';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const Freebook = () => {


  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-of-a-amith-backend.vercel.app/book");
        console.log(res.data);
        setBook(res.data.filter((data) => data.type === "Free"));
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, [])


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-4 mt-20">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>Explore <WebsiteName />'s extensive library of free courses. Enhance your skills and knowledge with our expertly curated content, available at no cost!</p>
        </div>
        <div>
          <Slider {...settings} className="">
            {book.map((item) => {
              return <Cards item={item} key={item.name} />
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
