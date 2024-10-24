import React, { useState } from 'react'

const ChangeAddress = ({setAddress,setIsModelOpen}) => {
  const [newAddress,setNewAddress] = useState("")
  const onClose = () => {
     setAddress(newAddress)
     setIsModelOpen(false)
  }
  return (
    <div>
        <input type="text" placeholder='Enter new Address' className='border p-2 w-full mb-4'
        onChange={(e) => setNewAddress(e.target.value)}/>
        {console.log(newAddress)}
        
        <div className='flex justify-end'>
            <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2'
            onClick={() => setIsModelOpen(false)}>Cancel</button>
            <button className='px-4 py-2 text-white rounded bg-blue-500'
            onClick={onClose}>Save Address</button>
        </div>
    </div>
  )
}

export default ChangeAddress