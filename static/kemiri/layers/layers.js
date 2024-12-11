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
var format_BatasDesaPaubokolJoined_2 = new ol.format.GeoJSON();
var features_BatasDesaPaubokolJoined_2 = format_BatasDesaPaubokolJoined_2.readFeatures(json_BatasDesaPaubokolJoined_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_BatasDesaPaubokolJoined_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaPaubokolJoined_2.addFeatures(features_BatasDesaPaubokolJoined_2);
var lyr_BatasDesaPaubokolJoined_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesaPaubokolJoined_2, 
                style: style_BatasDesaPaubokolJoined_2,
                popuplayertitle: "Batas Desa Paubokol Joined",
                interactive: true,
                title: '<img src="styles/legend/BatasDesaPaubokolJoined_2.png" /> Batas Desa Paubokol Joined'
            });
var format_LahanKemiri_3 = new ol.format.GeoJSON();
var features_LahanKemiri_3 = format_LahanKemiri_3.readFeatures(json_LahanKemiri_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_LahanKemiri_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanKemiri_3.addFeatures(features_LahanKemiri_3);
var lyr_LahanKemiri_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahanKemiri_3, 
                style: style_LahanKemiri_3,
                popuplayertitle: "Lahan Kemiri",
                interactive: true,
                title: '<img src="styles/legend/LahanKemiri_3.png" /> Lahan Kemiri'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_BatasDesaPaubokolJoined_2.setVisible(true);lyr_LahanKemiri_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_BatasDesaPaubokolJoined_2,lyr_LahanKemiri_3];
lyr_BatasDesaPaubokolJoined_2.set('fieldAliases', {'FID': 'FID', 'id': 'id', });
lyr_LahanKemiri_3.set('fieldAliases', {'id': 'id', });
lyr_BatasDesaPaubokolJoined_2.set('fieldImages', {'FID': '', 'id': '', });
lyr_LahanKemiri_3.set('fieldImages', {'id': '', });
lyr_BatasDesaPaubokolJoined_2.set('fieldLabels', {'FID': 'hidden field', 'id': 'hidden field', });
lyr_LahanKemiri_3.set('fieldLabels', {'id': 'hidden field', });
lyr_LahanKemiri_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});