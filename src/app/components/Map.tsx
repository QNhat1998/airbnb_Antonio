"use client";

import L from "leaflet";
import {
  MapContainer,
  Marker,
  TileLayer,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  center?: number[];
}

const url =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <MapContainer
      center={
        (center as L.LatLngExpression) || [
          51, -0.09,
        ]
      }
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    >
      <TileLayer
        url={url}
        attribution={attribution}
      />
      {center && (
        <Marker
          position={center as L.LatLngExpression}
        />
      )}
    </MapContainer>
  );
};

export default Map;
