import React, { useState } from "react";
import Map ,{Marker, ScaleControl} from "react-map-gl";
import getCenter from 'geolib/es/getCenter';
import { CursorClickIcon } from "@heroicons/react/solid";

const MapComponent = ({data}) => {


    // transform object data
    const coordinates = data.map(item => ({
        longitude: item.long,
        latitude: item.lat
    }))
    const center = getCenter(coordinates)
    const [viewState, setViewState] = useState({
        longitude: center.longitude || -0.08452479386870405,
        latitude: center.latitude || 51.50996326851979,
        zoom: 11,
    }) 

  return (
    <Map
    //   mapLib={import("mapbox-gl")}
    //   initialViewState = {...initialViewState}
        {...viewState}
    //   initialViewState={{
    //     longitude: -122.4376,
    //     latitude: 36.7577,
    //     zoom: 11,
    //   }}
      style={{ width: '100%', height: '100%' }}
      
    onMove={evt => setViewState(evt.viewState)}
    //   onViewportChange={(nextViewPort) => console.log(nextViewPort)}
      mapStyle="mapbox://styles/tesarchndr/cllmffjnh013z01qp6bel7zu9"
      mapboxAccessToken={process.env.mapbox_key}
    >
        {/* {data.map((el) => (
            // console.log(el)
            <div key={el.long}>
                <Marker longitude={el.long} latitude={el.lat} offsetleft={-20} offsetTop={-10}>
                    <CursorClickIcon className="h-6 z-0"/>
                </Marker>
            </div>
        ))} */}
    </Map>
  );
};

export default MapComponent;
