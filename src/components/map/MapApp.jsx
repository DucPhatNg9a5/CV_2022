import React, { Fragment } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import * as calgaryLibraries from "../../data/Calgary_library.json";

// import PropTypes from 'prop-types'

const MapApp = (props) => {
  const position = [51.048615, -114.070847];

  return (
    <Fragment>
      <Map center={position} zoom={13} className="main">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {calgaryLibraries.data.map((library, index) => {
          let [lat, lon] = library[26].slice(1, 3);
          let lib_name = library[8];
          let lib_postal = library[9];
          let [open, close] = library.slice(12, 14);
          let lib_address = JSON.parse(library[27][0]);

          return (
            <Marker key={index} position={[lat, lon]}>
              <Popup>
                <h5>{lib_name}</h5>
                <p>
                  <strong>Weekday hours: </strong>
                  {open} - {close}
                </p>
                <p>
                  <strong>Address: </strong>
                  {lib_address.address}
                </p>
                <p>
                  <strong>Postal code: </strong>
                  {lib_postal}
                </p>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </Fragment>
  );
};

// MapApp.propTypes = {}

export default MapApp;
