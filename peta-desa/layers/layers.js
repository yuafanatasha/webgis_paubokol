ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32751").setExtent([537505.804571, 9062516.576371, 548314.042132, 9069266.652144]);
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
var format_LN_BatasDesaPaubokol_3 = new ol.format.GeoJSON();
var features_LN_BatasDesaPaubokol_3 = format_LN_BatasDesaPaubokol_3.readFeatures(json_LN_BatasDesaPaubokol_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_LN_BatasDesaPaubokol_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LN_BatasDesaPaubokol_3.addFeatures(features_LN_BatasDesaPaubokol_3);
var lyr_LN_BatasDesaPaubokol_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LN_BatasDesaPaubokol_3, 
                style: style_LN_BatasDesaPaubokol_3,
                popuplayertitle: "LN_Batas Desa Paubokol",
                interactive: true,
                title: '<img src="styles/legend/LN_BatasDesaPaubokol_3.png" /> LN_Batas Desa Paubokol'
            });
var format_Sungai_4 = new ol.format.GeoJSON();
var features_Sungai_4 = format_Sungai_4.readFeatures(json_Sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_Sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_4.addFeatures(features_Sungai_4);
var lyr_Sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_4, 
                style: style_Sungai_4,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_4.png" /> Sungai'
            });
var format_JaringanJalan_5 = new ol.format.GeoJSON();
var features_JaringanJalan_5 = format_JaringanJalan_5.readFeatures(json_JaringanJalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_JaringanJalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_5.addFeatures(features_JaringanJalan_5);
var lyr_JaringanJalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_5, 
                style: style_JaringanJalan_5,
                popuplayertitle: "Jaringan Jalan",
                interactive: true,
    title: 'Jaringan Jalan<br />\
    <img src="styles/legend/JaringanJalan_5_0.png" /> Jalan Lain<br />\
    <img src="styles/legend/JaringanJalan_5_1.png" /> Jalan Lokal<br />'
        });
var format_Bangunan_6 = new ol.format.GeoJSON();
var features_Bangunan_6 = format_Bangunan_6.readFeatures(json_Bangunan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_Bangunan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_6.addFeatures(features_Bangunan_6);
var lyr_Bangunan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_6, 
                style: style_Bangunan_6,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_6.png" /> Bangunan'
            });
var format_Posyandu_7 = new ol.format.GeoJSON();
var features_Posyandu_7 = format_Posyandu_7.readFeatures(json_Posyandu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_Posyandu_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Posyandu_7.addFeatures(features_Posyandu_7);
var lyr_Posyandu_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Posyandu_7, 
                style: style_Posyandu_7,
                popuplayertitle: "Posyandu",
                interactive: true,
                title: '<img src="styles/legend/Posyandu_7.png" /> Posyandu'
            });
var format_KantorDesa_8 = new ol.format.GeoJSON();
var features_KantorDesa_8 = format_KantorDesa_8.readFeatures(json_KantorDesa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_KantorDesa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorDesa_8.addFeatures(features_KantorDesa_8);
var lyr_KantorDesa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorDesa_8, 
                style: style_KantorDesa_8,
                popuplayertitle: "Kantor Desa",
                interactive: true,
                title: '<img src="styles/legend/KantorDesa_8.png" /> Kantor Desa'
            });
var format_Sekolah_9 = new ol.format.GeoJSON();
var features_Sekolah_9 = format_Sekolah_9.readFeatures(json_Sekolah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_Sekolah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_9.addFeatures(features_Sekolah_9);
var lyr_Sekolah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_9, 
                style: style_Sekolah_9,
                popuplayertitle: "Sekolah",
                interactive: true,
                title: '<img src="styles/legend/Sekolah_9.png" /> Sekolah'
            });
var format_Polindes_10 = new ol.format.GeoJSON();
var features_Polindes_10 = format_Polindes_10.readFeatures(json_Polindes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_Polindes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polindes_10.addFeatures(features_Polindes_10);
var lyr_Polindes_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polindes_10, 
                style: style_Polindes_10,
                popuplayertitle: "Polindes",
                interactive: true,
                title: '<img src="styles/legend/Polindes_10.png" /> Polindes'
            });
var format_TempatIbadah_11 = new ol.format.GeoJSON();
var features_TempatIbadah_11 = format_TempatIbadah_11.readFeatures(json_TempatIbadah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_TempatIbadah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_11.addFeatures(features_TempatIbadah_11);
var lyr_TempatIbadah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_11, 
                style: style_TempatIbadah_11,
                popuplayertitle: "Tempat Ibadah",
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_11.png" /> Tempat Ibadah'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_BatasDesaPaubokolJoined_2.setVisible(true);lyr_LN_BatasDesaPaubokol_3.setVisible(true);lyr_Sungai_4.setVisible(true);lyr_JaringanJalan_5.setVisible(true);lyr_Bangunan_6.setVisible(true);lyr_Posyandu_7.setVisible(true);lyr_KantorDesa_8.setVisible(true);lyr_Sekolah_9.setVisible(true);lyr_Polindes_10.setVisible(true);lyr_TempatIbadah_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_BatasDesaPaubokolJoined_2,lyr_LN_BatasDesaPaubokol_3,lyr_Sungai_4,lyr_JaringanJalan_5,lyr_Bangunan_6,lyr_Posyandu_7,lyr_KantorDesa_8,lyr_Sekolah_9,lyr_Polindes_10,lyr_TempatIbadah_11];
lyr_BatasDesaPaubokolJoined_2.set('fieldAliases', {'FID': 'FID', 'id': 'id', });
lyr_LN_BatasDesaPaubokol_3.set('fieldAliases', {'FID': 'FID', 'id': 'id', });
lyr_Sungai_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JaringanJalan_5.set('fieldAliases', {'id': 'id', 'Jenis': 'Jenis', });
lyr_Bangunan_6.set('fieldAliases', {'id': 'id', });
lyr_Posyandu_7.set('fieldAliases', {'id': 'id', });
lyr_KantorDesa_8.set('fieldAliases', {'id': 'id', });
lyr_Sekolah_9.set('fieldAliases', {'id': 'id', });
lyr_Polindes_10.set('fieldAliases', {'id': 'id', });
lyr_TempatIbadah_11.set('fieldAliases', {'id': 'id', });
lyr_BatasDesaPaubokolJoined_2.set('fieldImages', {'FID': 'TextEdit', 'id': 'TextEdit', });
lyr_LN_BatasDesaPaubokol_3.set('fieldImages', {'FID': 'TextEdit', 'id': 'TextEdit', });
lyr_Sungai_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JaringanJalan_5.set('fieldImages', {'id': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Bangunan_6.set('fieldImages', {'id': '', });
lyr_Posyandu_7.set('fieldImages', {'id': '', });
lyr_KantorDesa_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Sekolah_9.set('fieldImages', {'id': 'TextEdit', });
lyr_Polindes_10.set('fieldImages', {'id': 'TextEdit', });
lyr_TempatIbadah_11.set('fieldImages', {'id': 'TextEdit', });
lyr_BatasDesaPaubokolJoined_2.set('fieldLabels', {'FID': 'hidden field', 'id': 'hidden field', });
lyr_LN_BatasDesaPaubokol_3.set('fieldLabels', {'FID': 'hidden field', 'id': 'hidden field', });
lyr_Sungai_4.set('fieldLabels', {'NAMOBJ': 'hidden field', 'TIPSNG': 'hidden field', 'KLSSNG': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'NAMWS': 'hidden field', 'NAMDAS': 'hidden field', 'STATUS': 'hidden field', 'WMAX': 'hidden field', 'DBTMAX': 'hidden field', 'SLPRT': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_JaringanJalan_5.set('fieldLabels', {'id': 'hidden field', 'Jenis': 'hidden field', });
lyr_Bangunan_6.set('fieldLabels', {'id': 'hidden field', });
lyr_Posyandu_7.set('fieldLabels', {'id': 'hidden field', });
lyr_KantorDesa_8.set('fieldLabels', {'id': 'hidden field', });
lyr_Sekolah_9.set('fieldLabels', {'id': 'hidden field', });
lyr_Polindes_10.set('fieldLabels', {'id': 'hidden field', });
lyr_TempatIbadah_11.set('fieldLabels', {'id': 'hidden field', });
lyr_TempatIbadah_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});