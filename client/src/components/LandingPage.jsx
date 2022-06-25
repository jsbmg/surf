import React from 'react';

import News from './News';
import {Link} from 'react-router-dom';
import BgVideo from './BgVideo';

function LandingPage() {
  return (
    <>
    <div className="text-myblack pt-4 bg-mywhite border-opacity-30 border-2 border-turquoise shadow-2xl rounded-md m-8 p-4">
      <h2 className="font-bold pb-2 pt-2 text-center">Welcome!</h2>
      <div className="text-left">
        <p className="pb-2">Surf Signal helps you find where to surf next by providing an interactive map and 16 day forecast for your local surf spots.</p>
        <li>Discover spots using
        the <Link className='text-turquoise' to="/map">interactive map</Link>
        </li>
        <li>Check out conditions at your favorite spots by
          visiting the <Link className='text-turquoise' to="/forecast">forecasts page</Link></li>
        <h2 className="font-bold pb-2 pt-4 text-center">News</h2>
        <News
          date={"6/24/2022"}
          news={"User profiles in the works"}
        />
        <News
          date={"6/22/2022"}
          news={"New landing page has been added"}
        />
        <News
          date={"6/21/2022"}
          news={"Swell Signal reaches minimum functionality"}
        />
        <News
          date={"6/19/2022"}
          news={"Development begins"}
        />
      </div>
    </div>
  </>
  )
}

export default LandingPage;
