import React, { useEffect, useState } from 'react'
import { RiEmotionHappyLine } from "react-icons/ri";
import Cards from "./Cards";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Course = () => {


  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-of-a-amith-backend.vercel.app/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, [])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900">
        <div className="pt-36 justify-center items-center text-center ">
          <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you{" "}
            <span className="inline-flex items-center bg-gradient-to-r from-red-500 via-black to-red-500 text-transparent bg-clip-text ">
              Here!! <RiEmotionHappyLine className="fill-red-500 ml-1" />
            </span>
          </h1>
          <p className='mt-12'>
            Explore our extensive library of courses, meticulously curated to enhance your skills and knowledge. Whether you're looking to gain new insights or deepen your expertise, our selection of free and premium courses offers something for everyone. Start your learning journey with us and unlock new opportunities for personal and professional growth.
          </p>
          <Link to="/">
            <button className="bg-gradient-to-tr from-pink-400 to-red-500 text-white p-2 mt-12 rounded-lg w-28 h-12 hover:bg-gradient-to-br hover:text-lg">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {book.map((item) => {
            // console.log(item.id);
            return <Cards item={item} key={item.name} />;
          })}
        </div>
      </div>
    </>
  )
}

export default Course
