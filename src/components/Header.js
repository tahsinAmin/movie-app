import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import user from '../images/user.png'

import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShows} from '../features/movies/moviesSlice'

const Header = () => {
   const dispatch = useDispatch();
   const [term, setTerm] = useState("")

   function submitHandler(e) {
      e.preventDefault();
      console.log(term);
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
      setTerm('')
   }

   return (
      <div className='header bg-gray-400 h-12 py-0 px-12 flex items-center justify-between'>      
         <div className='logo text-white text-2xl font-semibold'>
            <Link to='/'>Movie App</Link>
         </div>
         <div className="search-bar">
            <form onSubmit={submitHandler}>
               <input className='h-12 w-70' type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => setTerm(e.target.value)} />
               <button className='h-6' type='submit'><i className="fa fa-search"></i></button>
            </form>
         </div>

         <div className='user-image'>
            <img className='h-12' src={user} alt="user" />
         </div>
        
      </div>
   );
};



export default Header;
