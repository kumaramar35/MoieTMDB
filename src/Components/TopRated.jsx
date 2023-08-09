import React, { useEffect, useState } from 'react'
import Header from '../Pages/Header'
import axios from 'axios';
import { TOP_RATED } from '../constants/Base_Url';
import ItemCard from './ItemCard';

const TopRated = () => {
    const [topRated ,setTopRated] = useState([]);

     const fetchTopRated = () =>{
        axios.get(TOP_RATED)
        .then(res =>{
            console.log(res.data.results)
            setTopRated(res.data.results)
        })
     }
    useEffect(()=>{
        fetchTopRated();
    },[])
  return (
    <>
      <Header />
      <div className='sm:flex md:flex lg:flex' >
      <div className='sm:w-[100%] md:w-[120%] bg-slate-500 '></div>
      <div className="flex flex-col  sm:flex-wrap sm:flex-row ">
      {topRated && topRated.length > 0 && topRated.map((item,index) =>(
        <ItemCard key={index} data ={item} />
       ))}
       </div>
       </div>
    </>
  )
}

export default TopRated
