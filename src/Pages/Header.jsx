import React, { useState } from 'react';
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

const Header = () => {
  const [hamburger, setHamburger] = useState(true);

  const handleBurger = () => {
    setHamburger(!hamburger)
  }

  const [isOpen, setIsOpen] = useState(false);


  return (
    // <div className='flex flex-col '>
    //     <div className="logo md:text-red-600  text-7xl font-extrabold italic  flex justify-center">CI</div>
    //     <hr className='mt-2 pt-[1px] border-none  bg-slate-800  '/>
    //     <div className="categories text-slate-500 pt-2 text-xl">
    //     Categories x
    //     </div>
    //     <div className="subCategories text-white ml-5 ">
    //       <div className="popular flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <FiFilm  className='text-2xl'/>Popular</div>
    //       <div className="top-rated flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <BiStar className='text-2xl'/>Top Rated</div>
    //       <div className="up-coming flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <FaDesktop className='text-2xl' />Upcoming</div>
    //     </div>
    //     <hr className='mt-3 pt-[1px] border-none  bg-slate-800  '/>

    //     {/* G E N R E S */}

    //     <div className="genres  text-slate-500 pt-2 text-xl">Genres</div>

    //     <div className="subCategories text-white ml-5 ">
    //       <div className="popular flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <GiStarfighter  className='text-2xl'/>Action</div>
    //       <div className="top-rated flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <ImCompass2 className='text-2xl'/>Adventures</div>
    //       <div className="up-coming flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <TbMickeyFilled className='text-2xl' />Animations</div>
    //       <div className="up-coming flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <BsFillEmojiSmileFill className='text-2xl' />Comedy</div>
    //       <div className="up-coming flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <GiSaberAndPistol className='text-2xl' />Crime</div>
    //     </div>
    // </div>
    //  bg-black h-screen
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

            <BiSolidUser className="text-white text-3xl " />
          </div>

          {/* user */}

        </div>





        <div
          className={`${hamburger ? 'hidden sm:block' : 'block'
            } ease-in duration-1000`}
          onClick={handleBurger} >
          {/* test  */}

          <div className=' fixed top-0 left-0 flex flex-col bg-black h-screen sm:w-[30%] md:w-[22%] sm:block z-20 border-r-4'>
            <div className="logo text-red-600  text-9xl font-extrabold italic  flex justify-center">CI</div>
            <hr className='mt-2 pt-[1px] border-none  bg-slate-800  ' />
            <div className="categories text-slate-500 pt-2 text-xl">
              Categories x
            </div>
            <div className="subCategories text-white ml-5 ">
              <div className="popular flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <FiFilm className='text-2xl' />Popular</div>
              <div className="top-rated flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <BiStar className='text-2xl' />Top Rated</div>
              <div className="up-coming flex items-center gap-x-6 font-semibold mt-1 pt-2 text-xl"> <FaDesktop className='text-2xl' />Upcoming</div>
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

      </div>


    </>
  )
}

export default Header