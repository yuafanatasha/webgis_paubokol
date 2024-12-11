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
var format_SMI_Polygon_2 = new ol.format.GeoJSON();
var features_SMI_Polygon_2 = format_SMI_Polygon_2.readFeatures(json_SMI_Polygon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_SMI_Polygon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMI_Polygon_2.addFeatures(features_SMI_Polygon_2);
var lyr_SMI_Polygon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMI_Polygon_2, 
                style: style_SMI_Polygon_2,
                popuplayertitle: "SMI_Polygon",
                interactive: true,
    title: 'SMI_Polygon<br />\
    <img src="styles/legend/SMI_Polygon_2_0.png" /> 0 - 0,2<br />\
    <img src="styles/legend/SMI_Polygon_2_1.png" /> 0,2 - 0,4<br />\
    <img src="styles/legend/SMI_Polygon_2_2.png" /> 0,4 - 0,6<br />\
    <img src="styles/legend/SMI_Polygon_2_3.png" /> 0,6 - 0,8<br />\
    <img src="styles/legend/SMI_Polygon_2_4.png" /> 0,8 - 1<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_SMI_Polygon_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_SMI_Polygon_2];
lyr_SMI_Polygon_2.set('fieldAliases', {'VALUE': 'VALUE', 'Bobot': 'Bobot', });
lyr_SMI_Polygon_2.set('fieldImages', {'VALUE': 'TextEdit', 'Bobot': 'TextEdit', });
lyr_SMI_Polygon_2.set('fieldLabels', {'VALUE': 'no label', 'Bobot': 'hidden field', });
lyr_SMI_Polygon_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});