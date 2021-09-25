import React from 'react'
import { GoogleMap, LoadScript , Marker} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  filter: 'sepia(100%) hue-rotate(190deg) saturate(400%)',
  borderRadius: '5px'
};

const center = {
 /* lat: -3.745,
  lng: -38.523*/
  lat: 44.8164391,
  lng: 20.4629678
};

const GoogleMp = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC9dqaWZSlgze1hJ65uOoLuC06vMR14CfU"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
      >
           <Marker position={center}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMp



