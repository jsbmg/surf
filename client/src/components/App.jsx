import React, { useState, useEffect } from 'react';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';

import BgVideo from './BgVideo';
import EmptyForecast from './forecast/EmptyForecast';
import Forecast from './forecast/Forecast';
import LandingPage from './LandingPage';
import Map from './Map';
import NavBar from './NavBar';
import Placeholder from './Placeholder';

function App() {
  const [locations, setLocations] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [startingCoords, setStartingCoords] = useState([32.7, -117.16]);

  const changeLocation = (location, route) => {
    setCurrentLocation(location);
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/locations');
        const locationList = await response.json();
        setLocations(locationList);
        /*
         * Get the user's location if they consent to geolocation.
         * Otherwise set a default value.
         */
        if ("geolocation" in navigator) {
          const pos = await new Promise(resolve =>
            navigator.geolocation.getCurrentPosition(resolve)
          );
          setStartingCoords([pos.coords.latitude, pos.coords.longitude])
        } else {
          /* Use good ol San Diego as a fallback, for now */
          setStartingCoords([32.7152, -117.1611]);
        }
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    })();
  },[]);

  if (!loaded) { return null; }

  return (
    <section className="relative h-screen flex flex-col items-center
      justify-center text-center text-white py-0 px-3">
    <BgVideo />
      <div className="App flex flex-col video-content h-screen w-screen">
        <BrowserRouter>
          <NavBar
            locations={locations}
            changeLocation={changeLocation}
          />
          <div  className="flex flex-col h-screen items-center gap-8">
            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/map" element={
                <Map
                  locations={locations}
                  currentLocation={currentLocation}
                  startingCoords={startingCoords}
              />}
              />
              <Route path="/forecast/:id" element={
                <Forecast locations={locations} />
                }
              />
              <Route
                path="/forecast"
                element={
                  <EmptyForecast
                    locations={locations}
                    userCoordinates={startingCoords}
                  />
                }
              />
              <Route path="/login" element={<Placeholder/>} />
              <Route path="/signup" element={<Placeholder/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      <Outlet />
    </section>
  )
}

export default App
