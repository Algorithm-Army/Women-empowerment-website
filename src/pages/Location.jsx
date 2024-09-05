import { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

function Location() {
  const mapRef = useRef();
  const getPosition = (loc)=>{
    setLocation({
      loaded: true,
      coordinate: {lat: loc.coords.latitude, lon: loc.coords.longitude},
      zoom: 15
    })
  }
  navigator.geolocation.getCurrentPosition(getPosition);
  
  const [location, setLocation] = useState({
    loaded: false,
    coordinate: {lat: 22.516565, lon: 88.4171622},
    popup: "This is a popup",
    zoom: 17
  }); 
  // const customIcon = new Icon({
  //   iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
  //   iconSize: [38,38]
  // });
  return (
    <>
      <div className="mapBox">
        <div className="map-sidebar">
          <h3>Live Location Tracking</h3>
        </div>
        <MapContainer
          ref={mapRef}
          center={location.coordinate}
          zoom={location.zoom}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {location.loaded && !location.error &&(
            <Marker position={location.coordinate}>
            <Popup>
              {location.popup}
            </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </>
  );
}
export default Location;
