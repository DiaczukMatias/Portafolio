import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../cssModules/Map.module.css";

const Map = () => {
  const position = [-34.6118, -58.4173];
  const maptilerKey = "2h3g0yiuz8fmiD4T5SdE";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <MapContainer center={position} zoom={12} className={styles.mapContainer}>
      <TileLayer
        url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${maptilerKey}`}
        attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a>'
      />
    </MapContainer>
  );
};

export default Map;
