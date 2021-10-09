import React, {useEffect} from 'react';
import MovieListing from './MovieListing'
import movieApi from '../common/apis/movieApi'
import {APIKey} from '../common/apis/MovieApiKey'
import {addMovies} from '../features/movies/moviesSlice'
import { useDispatch } from "react-redux";

const Home = () => {
   const movieText = 'Harry';
   const dispatch = useDispatch();
   useEffect(() => {
      const fetchMovies = async () => {
         const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err) => {
            console.log("Err: ", err);
         });
         // console.log('The response from api', response);
         dispatch(addMovies(response.data))
      }
      fetchMovies();
   },);
   return (
      <div>
         <div className='banner-img'></div>
         <MovieListing/>
      </div>
   );
};

export default Home;