var map = new OpenLayers.Map({
    div: "map",
    layers: [
        new OpenLayers.Layer.WMS(
            "WMS", "http://vmap0.tiles.osgeo.org/wms/vmap0",
            {layers: "basic"}
        ),
        new OpenLayers.Layer.Vector("KML", {
            strategies: [new OpenLayers.Strategy.Fixed()],
            protocol: new OpenLayers.Protocol.HTTP({
                url: "kml/test1.kml",
                format: new OpenLayers.Format.KML({
                    extractStyles: true, 
                    extractAttributes: true,
                    maxDepth: 2
                })
            })
        })
    ],
    center: new OpenLayers.LonLat(140,40),
    zoom: 7
});
