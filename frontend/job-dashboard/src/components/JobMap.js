import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function JobMap({ jobs }) {

  return (

    <div style={{ marginTop: "40px" }}>

      <h2>Global Hiring Map</h2>

      <MapContainer
        center={[20,0]}
        zoom={2}
        style={{ height: "400px", width: "100%" }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {jobs.slice(0,50).map((job, index) => (

          <Marker key={index} position={[20,0]}>

            <Popup>
              {job.title} <br/>
              {job.company}
            </Popup>

          </Marker>

        ))}

      </MapContainer>

    </div>

  );
}

export default JobMap;