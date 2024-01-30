import React from 'react'
import logo from '../img/logo.png'
// import  Link  from 'react-scroll'
function Header() {
  return (
    <div className='py-6 '>
        <div className="container mx-auto"> 
         <div className="flex justify-between items-center ">
            <a href="#" >
                <img src={logo} alt="" className='lg:w-[80px] w-[90px] ' />
            </a>

            <button className='btn btn-sm '>
              <a href="#contact" className=''>Contact me</a>
            </button>
         </div>
        </div>
    </div>
  )
}

export default Header