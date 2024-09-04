import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function Location() {
  return (
    <>
      <div className="mapBox">
        <div className="map-sidebar">
          <h3>Live Location Tracking</h3>
        </div>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
export default Location;
