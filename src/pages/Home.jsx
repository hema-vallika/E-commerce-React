import React, { useEffect } from "react";
import { Categories,mockData } from "../assets/MockData";
import { FaArrowUpLong } from "react-icons/fa6";
import InfoSection from "../components/InfoSection"
import CategorySection from "../components/CategorySection";
import { setproducts } from "../redux/ProductSlice";
import {useSelector,useDispatch} from 'react-redux';
import Shop from "./Shop";
import ProductCard from "../components/ProductCard";





function Home() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.products)
  
  

  useEffect(() => {
    dispatch(setproducts(mockData))
  },[])

  return (
    <div className="bg-white mt-2 px-4  md:px-16 lg:px-24">
      
      <div className=" mx-auto py-4 h-[110vh] md:h-[400px] lg:h-[500px] flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5 rounded-full text-center uppercase">SHOP BY CATEGORIES</div>
          <ul className="space-y-4 bg-gray-200 mt-[1.5px] p-3 border  rounded-lg text-left">
            {Categories.map((category, index) => (
              <li key={index} className="  flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-600 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 grid grid-cols-1 md:grid-cols-2 mx-auto  relative">
            <img
              src="https://www.rootsdigital.com.sg/wp-content/uploads/2022/03/E-commerce-Hero-Illustration.png"
              alt=""
              className="h-full "
            />
            <div className="flex  items-center justify-center flex-col font-['Founders_Grotesk_X'] tracking-wider ">
              <p className="text-md mb-3 font-medium text-gray-500">Code With Hema</p>
              <h2 className="text-[4vw] font-bold mb-4 ">WELCOME TO E-SHOP</h2>
              <p className="text-[2vw] font-semibold mb-4">MILLIONS+ PRODUCTS</p>
              <button  className="flex items-center justify-center gap-3 px-5 py-2 hover:bg-red-500 hover:text-white rounded-full border-2 border-red-300 uppercase font-semibold ">SHOP NOW
              
             <span className="rotate-[45deg]">
              <FaArrowUpLong />
             </span>
          
              </button>
            </div>
        </div>
      </div>
      <InfoSection/>
      <CategorySection/>

      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center shadow-md">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 cursor-pointer ">
          {products?.slice(0,5).map(((product) => (
            <ProductCard key={product.id} product={product}/>
          )))}
        </div>
      </div>
      <Shop/>
    </div> 
    
  );
}

export default Home;
