import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

function Map({locations, currentLocation, startingCoords}) {
  const mapRef = useRef(false);

  if (currentLocation) {
    /* Set the view to the current location
     * if the map ref doesn't exist then the location
     * can be set with the map's center prop
     */
    if (mapRef.current) {
      mapRef.current.setView([currentLocation.latitude, currentLocation.longitude]);
    } else {
      startingCoords = [currentLocation.latitude, currentLocation.longitude];
     }
  }

  return (
    <div className="align-center md:w-1/2 md:h-3/4 w-full h-full pt-8">
      <MapContainer
        ref={mapRef}
        attributionControl={false}
        className="h-full w-full rounded-md border-2 border-turquoise shadow-2xl"
        center={startingCoords}
        zoom={8}
        scrollWheelZoom={true}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((l, i) => (
        <Marker key={i} position={[l.latitude, l.longitude]}>
          <Popup className="cursor-pointer">
            <b>{l.name}</b>
            <div><Link to={`/forecast/${i}`}>View</Link></div>
            <div><a>Save</a></div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
   </div>
  )
}

export default Map;
