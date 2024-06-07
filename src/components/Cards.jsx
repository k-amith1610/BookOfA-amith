import React from 'react';
import { MdStars } from 'react-icons/md';

const Cards = ({ item }) => {
    return (
        <>
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl my-5 hover:scale-105 transition-transform duration-200 dark:text-black">
                <figure className="h-96">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title text-lg font-semibold">
                        {item.name}
                        <div className="flex items-center ml-2">
                            <div className="badge badge-secondary">{item.type}</div>
                            {item.type === "Premium" && <MdStars className="ml-1 text-yellow-500" />}
                        </div>
                    </h2>
                    <p className="text-sm text-gray-600">{item.title}</p>
                    <div className="card-actions justify-between mt-4">
                        <div className="badge badge-outline h-10 flex items-center justify-center bg-red-600 text-white">${item.price}.00</div>
                        <div className="badge badge-outline h-10 flex items-center justify-center bg-green-500 text-white cursor-pointer hover:bg-green-600 transition-colors">Buy Now</div>
                        <div className="badge badge-outline h-10 flex items-center justify-center bg-blue-500 text-white">{item.category}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
