import React from 'react'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from 'react-google-maps'
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer'

const data = [
  { lat: 37.782551, lng: -122.445368 },
  { lat: 37.782745, lng: -122.444586 },
  { lat: 37.782842, lng: -122.443688 },
  { lat: 37.782919, lng: -122.442815 },
  { lat: 37.782992, lng: -122.442112 },
  { lat: 37.7831, lng: -122.44146 }
]

const GMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={props.currentLocation}>
      <HeatmapLayer
        data={props.data.map(
          ({ lat, lng }) => new window.google.maps.LatLng(lat, lng)
        )}
      />
      {props.isMarkerShown && <Marker position={props.currentLocation} />}
    </GoogleMap>
  ))
)

const Map = ({ height, currentLocation }) => (
  <GMap
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places,visualization"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height }} />}
    mapElement={<div style={{ height: `100%` }} />}
    currentLocation={currentLocation}
    data={data}
  />
)

export default Map
