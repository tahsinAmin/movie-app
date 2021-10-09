import React from 'react';
import { useSelector } from 'react-redux'
import {getAllMovies} from '../features/movies/moviesSlice'
import MovieCard from './MovieCard'


const MovieListing = () => {
   const movies = useSelector(getAllMovies);
   // console.log(movies);
   let renderMovies = "";
   
   renderMovies = movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
         <MovieCard key={index} data={movie}/>
      ))
   ) : (<div className='movies-error'><h3>{movies.error}</h3></div>)
   return (
      <div className='movie-wrapper p-2'>
         <div className="movie-list my-5 mx-0 ">
            <h2 className='text-white mb-2 font-bold'>Movies</h2>
            <div className="movie-container grid grid-cols-6 gap-2">{renderMovies}</div>
         </div>
      </div>
   );
};

export default MovieListing;