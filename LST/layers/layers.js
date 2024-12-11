var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LST_polygon_2 = new ol.format.GeoJSON();
var features_LST_polygon_2 = format_LST_polygon_2.readFeatures(json_LST_polygon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LST_polygon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LST_polygon_2.addFeatures(features_LST_polygon_2);
var lyr_LST_polygon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LST_polygon_2, 
                style: style_LST_polygon_2,
                popuplayertitle: "LST_polygon",
                interactive: true,
    title: 'LST_polygon<br />\
    <img src="styles/legend/LST_polygon_2_0.png" /> 26,1 - 29,1<br />\
    <img src="styles/legend/LST_polygon_2_1.png" /> 29,1 - 32<br />\
    <img src="styles/legend/LST_polygon_2_2.png" /> 32 - 35<br />\
    <img src="styles/legend/LST_polygon_2_3.png" /> 35 - 38<br />\
    <img src="styles/legend/LST_polygon_2_4.png" /> 38 - 41<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_LST_polygon_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_LST_polygon_2];
lyr_LST_polygon_2.set('fieldAliases', {'VALUE': 'VALUE', 'Bobot': 'Bobot', });
lyr_LST_polygon_2.set('fieldImages', {'VALUE': 'TextEdit', 'Bobot': 'TextEdit', });
lyr_LST_polygon_2.set('fieldLabels', {'VALUE': 'no label', 'Bobot': 'hidden field', });
lyr_LST_polygon_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});