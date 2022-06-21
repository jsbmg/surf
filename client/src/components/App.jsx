import { useState, useEffect } from 'react'
import '../App.css'

import NavBar from './NavBar';

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const newLocations = await fetch('api/locations');
        // const json = newLocations.body;
        console.log(newLocations);
        const json = await newLocations.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }

    fetchLocations();
  },[]);

  return (
    <div className="App bg-white text-black">
      <NavBar />
      {/*
      <Map />
      <Forecast />
      */}
    </div>
  )
}

export default App
