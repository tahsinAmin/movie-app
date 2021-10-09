import React from 'react'
import {Link} from 'react-router-dom'

export default function MovieCard({data}) {
   return (
      <div className='card-item hover:scale-105 bg-white cursor-pointer m-4'>
         <Link to={`/movie/${data.imdbID}`}>
            <div className="card-inner">
               <div className="card-top h-150">
                  <img src={data.Poster} alt={data.Title} className='w-full h-full'/>
               </div>
               <div className="card-bottom">
                  <div className="card-info  text-gray-800 p-2">
                     <h4 className='text-md font-semibold mb-2'>{data.Title}</h4>
                     <p>{data.Year}</p>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   )
}
