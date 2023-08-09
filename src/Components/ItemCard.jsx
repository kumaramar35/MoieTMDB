import React from 'react';
import { IMAGE_URL } from '../constants/Base_Url';

const ItemCard = ({ data }) => {
  return (
    <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 hover:transition-transform hover:duration-300 ease-in-out h-80">
      
        <img
          src={IMAGE_URL + data.poster_path}
          alt={data.title}
          className="h-full w-full object-fill"
        />
       
        <div className="p-4">
          {/* <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="text-gray-600">{data.release_date}</p> */}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-75 transition-opacity duration-300 hover:opacity-100">
          <div className="flex flex-col items-center">
          <h3 className="text-white text-lg font-semibold text-center">{data.title || data.name}</h3>
          <p className="text-gray-400 text-sm">Release Date - {data.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
