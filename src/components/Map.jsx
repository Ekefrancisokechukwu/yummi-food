import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY_MAP,
  });

  if (!isLoaded) return <h1>Loading...</h1>;

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map"
    >
      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
};

// AIzaSyACSIx08v8U00Mz0tXlsf1R3k8Q1jCQ6QY
