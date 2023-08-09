import React, { useEffect, useState } from 'react';
import { FiFilm } from 'react-icons/fi'
import { BiStar } from 'react-icons/bi'
import { FaDesktop } from 'react-icons/fa'

import { GiStarfighter, GiSaberAndPistol } from 'react-icons/gi'
import { ImCompass2 } from 'react-icons/im'
import { TbMickeyFilled } from 'react-icons/tb'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillSetting } from 'react-icons/ai'
import { BiSolidUser, BiSearchAlt2 } from 'react-icons/bi'
import HomePage from './HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { isNavBarOpen } from '../store/slices/hamburgerSlice';
import SideNavbar from './SideNavbar';

const Header = () => {
  const hamburger = useSelector(state => state.NavbarControl.isOpen)
  // const [hamburger, setHamburger] = useState(isOpen);

  const dispatch = useDispatch();
  const handleBurger = () => {
    dispatch(isNavBarOpen(!hamburger))

  }

  return (
    <>
      <div>
        <div className="flex flex-row justify-around items-center  bg-black h-12 ">

          {/* Hamburger */}
          <div className="w-[25%] h-12 flex items-center ">
            <GiHamburgerMenu
              className={`${hamburger ? 'block' : 'hidden'
                } text-3xl text-white w-16 sm:hidden`}
              onClick={handleBurger}
            />
          </div>

          {/* input field and search */}
          <div className="flex items-center justify-between ">

            <BiSearchAlt2 className="bg-black text-white text-3xl pt-2 border-b-2" />
            <input
              type="text"
              className="text-white bg-black outline-none border-b-2 text-xl "
              placeholder=" search"
            />
            {/* user */}
            <BiSolidUser className="text-white text-3xl " />
          </div>



        </div>
        <SideNavbar />


      </div>


    </>
  )
}

export default Header