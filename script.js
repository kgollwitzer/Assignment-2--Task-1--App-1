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
            id: "f01f0eda766344e29f42031e7bfb7d04"    
         }
       });
        map.add(featureLayerB)
   
   var webmap = new WebMap({
        portalItem: { 
          id: "dbf6aef9cd454dc09f95710c7f219251"
        }
      });
 });
