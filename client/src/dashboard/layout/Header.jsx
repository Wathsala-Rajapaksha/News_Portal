// eslint-disable-next-line no-unused-vars
import React from 'react'
import profile from '../../assets/profile.png'

const Header = () => {
  return (
    <div className='fixed p1-4 w-{calc(100vw-250px)} top-4 z-50'>
      <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-white'>
         <input type= "text" placeholder='search' className='h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-green-500 outline-0'/>
        <div className='mr-4'>
          <div className='flex gap-x-2'>
           <div className='flex flex-col items-end justify-center'>
             <span>Menu Wathsala</span>
             <span>Admin</span>
           </div> 
           <img className='w-10 h-10 rounded-full' src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header


