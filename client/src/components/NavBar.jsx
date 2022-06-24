import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = "m-auto cursor-pointer hover:text-darkblue";
const navStyle = `bg-turquoise text-mywhite bg-opacity-90  flex flex-col md:flex-row
                  md:justify-center sm:gap-8 md:gap-24 p-6 w-screen inline-flex
                  items-center border-b-2 border-opacity-90 border-neon`;

import Search from './Search';

function NavBar({locations, changeLocation}) {
  return (
    <div className={navStyle}>
      <div className="flex flex-col md:flex-row gap-4 inline-flex items-center">
        <img
          src='../../assets/304052.svg'
          alt='Icon depicting wave'
          className='h-12 cursor-pointer object-cover'
        />
        <h1 id="App-logo" className="text-4xl cursor-pointer font-bold">
          Swell Signal
        </h1>
      </div>
      <div className="flex gap-8 text-lg">
        <div className={linkStyle}>
          <Link to="/map">Map</Link>
        </div>
        <div className={linkStyle}>
          <Link to="/forecast">Forecasts</Link>
        </div>
        <div className={linkStyle}>
          <Link to="/login">Login</Link>
        </div>
        <div className={linkStyle + " text-yellow text-xl"}>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
      <Search
        locations={locations}
        handleMapMove={changeLocation}
      />
    </div>
  )
}

export default NavBar;
