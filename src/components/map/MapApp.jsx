import React, { Fragment } from "react";
import "leaflet/dist/leaflet.css";
import { Map, Marker, Popup, TileLayer, LayersControl } from "react-leaflet";
import * as calgaryLibraries from "../../data/Calgary_library.json";
import L from "leaflet";
// import PropTypes from 'prop-types'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapApp = (props) => {
  const { BaseLayer, Overlay } = LayersControl;
  const position = [51.048615, -114.070847];

  return (
    <Fragment>
      <Map center={position} zoom={13} className="main">
        <LayersControl position="topright">
          <BaseLayer name="street" checked>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </BaseLayer>

          <BaseLayer name="satellite">
            <TileLayer
              url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </BaseLayer>

          {calgaryLibraries.data.map((library, index) => {
            let [lat, lon] = library[26].slice(1, 3);
            let lib_name = library[8];
            let lib_postal = library[9];
            let [open, close] = library.slice(12, 14);
            let lib_address = JSON.parse(library[27][0]);

            return (
              <Overlay checked name={lib_name}>
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
              </Overlay>
            );
          })}
        </LayersControl>
      </Map>
    </Fragment>
  );
};

// MapApp.propTypes = {}

export default MapApp;
