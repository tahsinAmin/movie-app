import React from 'react';
import {Link} from 'react-router-dom'
import user from '../images/user.png'

const Header = () => {
   return (
      <div className='header bg-gray-400 h-12 py-0 px-12 flex items-center justify-between'>
      <Link to='/'>
         <div className='logo text-white text-2xl font-semibold'>Movie App</div>
      </Link>
         
         <div className='user-image'>
            <img className='h-12' src={user} alt="user" />
         </div>
        
      </div>
   );
};



export default Header;