ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32751").setExtent([539071.253004, 9062303.561769, 547551.845240, 9069740.847403]);
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
var format_AR_LULC_2 = new ol.format.GeoJSON();
var features_AR_LULC_2 = format_AR_LULC_2.readFeatures(json_AR_LULC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_AR_LULC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_LULC_2.addFeatures(features_AR_LULC_2);
var lyr_AR_LULC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_LULC_2, 
                style: style_AR_LULC_2,
                popuplayertitle: "AR_LULC",
                interactive: true,
    title: 'AR_LULC<br />\
    <img src="styles/legend/AR_LULC_2_0.png" /> Air<br />\
    <img src="styles/legend/AR_LULC_2_1.png" /> Hutan<br />\
    <img src="styles/legend/AR_LULC_2_2.png" /> Pemukiman<br />\
    <img src="styles/legend/AR_LULC_2_3.png" /> Semak<br />\
    <img src="styles/legend/AR_LULC_2_4.png" /> Tanah<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_AR_LULC_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_AR_LULC_2];
lyr_AR_LULC_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Nama_Lahan': 'Nama_Lahan', 'Bobot': 'Bobot', });
lyr_AR_LULC_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nama_Lahan': 'TextEdit', 'Bobot': 'TextEdit', });
lyr_AR_LULC_2.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'no label', 'Nama_Lahan': 'no label', 'Bobot': 'hidden field', });
lyr_AR_LULC_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});