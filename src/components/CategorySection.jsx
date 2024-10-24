import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const categories = [
  {
    title: "Men",
    imageUrl:
      "https://img.freepik.com/free-photo/portrait-man-shopping-buying-consumer-goods_23-2151669743.jpg?size=626&ext=jpg&ga=GA1.1.1379409164.1698087068&semt=ais_hybrid",
  },
  {
    title: "Women",
    imageUrl:
      "https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Kids",
    imageUrl:
      "https://images.unsplash.com/photo-1546226271-450e37cf85d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHMlMjBzaG9wcGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

function CategorySection() {
  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-66 transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src={category.imageUrl}
            alt=""
            className="h-full w-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-800 flex items-center justify-center gap-3 font-medium border border-black  py-1 px-3 rounded-full mt-2 text-center hover:bg-black hover:text-white">
              View All
              <span className="rotate-[45deg] hover:rotate-[90deg] transform duration-200">
                <FaArrowUpLong />
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
