require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 4,
          center: [-98,37]
        });

        var featureLayer = new FeatureLayer({
           portalItem: {
            id: "521da83c7244493b97b300f485669067"    
          }
        });
        map.add(featureLayer);
   
        var featureLayerB = new FeatureLayer({
           portalItem: {
            id: "2b8b3326960c4cb7833b7546db6d0502"    
         }
       });
        map.add(featureLayerB)
   
   var webmap = new WebMap({
        portalItem: { 
          id: "7a7d92cef2c442c1a352d902e1f2f577"
        }
      });

 });