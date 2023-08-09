import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiFilm } from 'react-icons/fi'
import { BiStar } from 'react-icons/bi'
import { FaDesktop } from 'react-icons/fa'

import { GiStarfighter, GiSaberAndPistol } from 'react-icons/gi'
import { ImCompass2 } from 'react-icons/im'
import { TbMickeyFilled } from 'react-icons/tb'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { isNavBarOpen } from '../store/slices/hamburgerSlice'
import { Link, useLocation } from 'react-router-dom'

const SideNavbar = () => {
  const location = useLocation();
  const hamburger =  useSelector(state => state.NavbarControl.isOpen)
  // const [hamburger, setHamburger] = useState(navStatus);
  const dispatch = useDispatch();
  const handleBurger = () => {
    if(window.innerWidth< 640){
    // setHamburger(!hamburger)
    dispatch(isNavBarOpen(!hamburger))
    // console.log(navStatus)
    }
  }

  return (
    < >
      <div
          className={`${hamburger ? 'hidden sm:block' : 'block'
            } ease-in duration-1000`}
          onClick={handleBurger} >
          {/* test  */}

          <div className=' fixed top-0 left-0 flex flex-col bg-black h-screen sm:w-auto md:w-[20%] sm:block z-20 border-r-4'>
            <div className="logo text-red-600  text-9xl font-extrabold italic  flex justify-center">CI</div>
            <hr className='mt-2 pt-[1px] border-none  bg-slate-800  ' />
            <div className="categories text-slate-500 pt-2 text-xl">
              Categories x
            </div>
            <div className="subCategories text-white ml-5 ">

            

              <Link to ='/' >
              <div className="popular flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <FiFilm className='text-2xl' />Popular</div>
              </Link>

              <Link to='/topRated' >
              <div className="top-rated flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <BiStar className='text-2xl' />Top Rated</div>
              </Link>

              <Link to='/upcoming'  >
              <div className="up-coming flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> 
              <FaDesktop className='text-2xl' />Upcoming</div>
              </Link>

            </div>
            <hr className='mt-3 pt-[1px] border-none  bg-slate-800  ' />

            {/* G E N R E S */} 

            <div className="genres  text-slate-500 pt-2 text-xl">Genres</div>

            <div className="subCategories text-white ml-5 ">
              <div className="Action flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <GiStarfighter className='text-2xl' />Action</div>
              <div className="Adventures flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <ImCompass2 className='text-2xl' />Adventures</div>
              <div className="Animation flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <TbMickeyFilled className='text-2xl' />Animations</div>
              <div className="Comedy flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <BsFillEmojiSmileFill className='text-2xl' />Comedy</div>
              <div className="Crime flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <GiSaberAndPistol className='text-2xl' />Crime</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SideNavbar
