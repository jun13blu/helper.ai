import React from 'react'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from 'react-google-maps'
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer'

const data = [
  { lat: 3.0675551, lng: 101.605368 },
  { lat: 3.0675745, lng: 101.604586 },
  { lat: 3.0675842, lng: 101.603688 },
  { lat: 3.0675919, lng: 101.602815 },
  { lat: 3.0675992, lng: 101.602112 },
  { lat: 3.06751, lng: 101.60146 }
]

const GMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={11} defaultCenter={props.currentLocation}>
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
