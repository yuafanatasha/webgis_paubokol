ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32751").setExtent([539662.413543, 9062790.229634, 546570.180388, 9068848.183334]);
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
var format_Slopepercent_2 = new ol.format.GeoJSON();
var features_Slopepercent_2 = format_Slopepercent_2.readFeatures(json_Slopepercent_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_Slopepercent_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Slopepercent_2.addFeatures(features_Slopepercent_2);
var lyr_Slopepercent_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Slopepercent_2, 
                style: style_Slopepercent_2,
                popuplayertitle: "Slope (percent)",
                interactive: true,
    title: 'Slope (percent)<br />\
    <img src="styles/legend/Slopepercent_2_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Slopepercent_2_1.png" /> 20 - 41<br />\
    <img src="styles/legend/Slopepercent_2_2.png" /> 41 - 61<br />\
    <img src="styles/legend/Slopepercent_2_3.png" /> 61 - 81<br />\
    <img src="styles/legend/Slopepercent_2_4.png" /> 81 - 101<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Slopepercent_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Slopepercent_2];
lyr_Slopepercent_2.set('fieldAliases', {'VALUE': 'VALUE', 'Bobot': 'Bobot', });
lyr_Slopepercent_2.set('fieldImages', {'VALUE': 'TextEdit', 'Bobot': 'TextEdit', });
lyr_Slopepercent_2.set('fieldLabels', {'VALUE': 'no label', 'Bobot': 'hidden field', });
lyr_Slopepercent_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});