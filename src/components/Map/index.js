import React from 'react'
import { Map as MapLeaflet, TileLayer, Marker } from 'react-leaflet'
import PropTypes from 'prop-types'
import './style.css'

export default function Map(props) {
  return (
    <MapLeaflet center={props.center} zoom="15" onclick={props.onClick}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.marker} />
    </MapLeaflet>
  )
}

Map.propTypes = {
  center: PropTypes.number,
  marker: PropTypes.number,
  onClick: PropTypes.func
}
