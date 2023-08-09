import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Carousel } from "@material-tailwind/react";
import axios from 'axios';
import { BASE_URL, IMAGE_URL } from '../constants/Base_Url';
import ItemCard from './ItemCard';

const Display = () => {
    const navStatus = useSelector(state => state.NavbarControl.isOpen);
    const [nowPlaying , setNowPlaying] = useState([]);
axios.get(BASE_URL)
.then(res =>{
    setNowPlaying(res.data.results);
    // console.log(res.data.results)
})

    return (
        <>
            <div className='flex'>
                <div className='sm:w-[30%] md:w-[18%] bg-slate-500 '></div>
                <div className="sm:w-[100%] md:w-[100%] text-5xl bg-slate-300 sm:pl-12 ">

                    {/* CRAUSEL  */}

                    <Carousel
                        className="rounded-xl h-fit"
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                            }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                        // autoplay='true'
                        // autoplayDelay='3000'
                        loop='true'
                    >
                    {nowPlaying && nowPlaying.length > 0 && nowPlaying.map((item,index)=> {
                        if(index >5){
                            return
                        }
                        return (<img src={IMAGE_URL+item.poster_path} alt={'Image '+ index} className="max-h-screen w-full object-fill" key={index}></img>)
                         
                    })}
                     
                     
                   
                    </Carousel>
                    <div className="flex flex-col sm:flex-wrap sm:flex-row">
                   { nowPlaying && nowPlaying.length > 0 && nowPlaying.map((item,index)=> 
                        <ItemCard  key={index} data ={item} />
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Display
