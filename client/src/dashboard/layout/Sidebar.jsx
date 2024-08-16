// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className= 'w-[250px] h-screen fixed left-0 top-0 bg-white'>
        <div className = 'h- [70px] flex justify-center items-center' > 
            <Link>
                <img src="https://news-portal-mern.onrender.com/assets/logo-00ebaab6.png" alt="" />
            </Link>
      
      </div>
    </div>
  )
}

export default Sidebar
