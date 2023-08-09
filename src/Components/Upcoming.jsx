import React, { useEffect, useState } from 'react'
import Header from '../Pages/Header'
import axios from 'axios';
import {  UPCOMING } from '../constants/Base_Url';
import ItemCard from './ItemCard';
import { useLocation } from 'react-router';

const Upcoming = () => {
    const location = useLocation();
    console.log(location.pathname)
    const [upcoming ,setUpcoming] = useState([]);

     const fetchUpcoming = () =>{
        axios.get(UPCOMING)
        .then(res =>{
            console.log(res.data.results)
            setUpcoming(res.data.results)
        })
     }
    useEffect(()=>{
        fetchUpcoming();
    },[])
  return (
    <>
      <Header />
      <div className='sm:flex md:flex lg:flex' >
      <div className='sm:w-[100%] md:w-[120%] bg-slate-500 '></div>
      <div className="flex flex-col  sm:flex-wrap sm:flex-row ">
      {upcoming && upcoming.length > 0 && upcoming.map((item,index) =>(
        <ItemCard key={index} data ={item} />
       ))}
       </div>
       </div>
    </>
  )
}

export default Upcoming
