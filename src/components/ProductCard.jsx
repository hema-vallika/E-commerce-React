import React from 'react'
import { FaStar } from "react-icons/fa";
import { addToCart } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast';


const Productcard = ({product}) => {
  const dispatch = useDispatch()
  

  const handleAddToCart = (e,product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    toast.success('Your item is successfully added!!🎉🎊');
   

  }

  return (
    <Link to={`/product/${product.id}`}>
    <div className=' bg-white p-4 shadow rounded-md relative border transform transition-transform duration-300 hover:scale-100'>
        <img src={product.image} alt="" className='w-full h-48 object-contain  mb-4' />
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500'>${product.price}</p>
        <div className='flex items-center mb-2'>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500' />
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        </div>
        <div class="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all "
        onClick={(e) => handleAddToCart(e,product)}>
            <span class="group-hover:hidden">+</span>
            <span class="hidden group-hover:block">Add To Cart</span>
        </div>
    </div>
    </Link>
  )
}

export default Productcard