import React from 'react';
import { useSelector } from 'react-redux'
import {getAllMovies, getAllShows} from '../features/movies/moviesSlice'
import MovieCard from './MovieCard'


const MovieListing = () => {
   const movies = useSelector(getAllMovies);
   const shows = useSelector(getAllShows);
   let renderMovies, renderShows = "";
   
   renderMovies = movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
         <MovieCard key={index} data={movie}/>
      ))
   ) : (<div className='movies-error'><h3>{movies.error}</h3></div>);

   renderShows = shows.Response === 'True' ? (
      shows.Search.map((show, index) => (
         <MovieCard key={index} data={show}/>
      ))
   ) : (<div className='movies-error'><h3>{shows.error}</h3></div>);

   return (
      <div className='movie-wrapper p-2'>
         <div className="movie-list my-5 mx-0 ">
            <h2 className='text-white mb-2 font-bold'>Movies</h2>
            <div className="movie-container grid grid-cols-6 gap-2">{renderMovies}</div>
         </div>
         <div className="show-list my-5 mx-0 ">
            <h2 className='text-white mb-2 font-bold'>Shows</h2>
            <div className="movie-container grid grid-cols-6 gap-2">{renderShows}</div>
         </div>
      </div>
   );

   
};

export default MovieListing;