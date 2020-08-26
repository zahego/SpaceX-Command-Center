import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import '../../../Styles/MainContent.css';
import { Map, WebMap, WebScene } from '@esri/react-arcgis';

const MapRendering = ({w, n, zoom}) => {
    const mapRef = useRef();
    
    if(typeof w!=='number'){
        w=-118.3526;
        
    }
    if(typeof n!=='number'){
        n=33.9164;

    }
    if(typeof zoom!=='number'){
        zoom=13;
    }
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
            center: [w, n],
            zoom: {zoom}
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

    return (
    /*<div className="webmap" ref={mapRef}/>*/
    <div style={{height:"400px", width: "94vw", padding: "2vw"}}>
         <Map
        class="full-screen-map"
        mapProperties={{ basemap: 'satellite' }}
    />
        </div>);
};

export default MapRendering;