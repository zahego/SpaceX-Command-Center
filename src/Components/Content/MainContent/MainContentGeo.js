import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import '../../../Styles/MainContent.css';

const MainContentGeo = () => {
    const mapRef = useRef();

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
        .then(([ArcGISMap, MapView]) => {
          const map = new ArcGISMap({
            basemap: 'topo-vector'
          });

          // load the map view at the ref's DOM node
          //center is [-w, n]
          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-118.3526, 33.9164],
            zoom: 13
          });

          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };
        });
      }
    );

    return <div className="webmap" ref={mapRef}/>;
};
export default MainContentGeo;