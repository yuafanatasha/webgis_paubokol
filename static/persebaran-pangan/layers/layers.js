ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32751").setExtent([538549.516224, 9061616.274816, 550292.897771, 9071914.952131]);
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
var format_Umbi_3 = new ol.format.GeoJSON();
var features_Umbi_3 = format_Umbi_3.readFeatures(json_Umbi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_Umbi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Umbi_3.addFeatures(features_Umbi_3);
var lyr_Umbi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Umbi_3, 
                style: style_Umbi_3,
                popuplayertitle: "Umbi",
                interactive: true,
    title: 'Umbi<br />\
    <img src="styles/legend/Umbi_3_0.png" /> Bengkuang<br />\
    <img src="styles/legend/Umbi_3_1.png" /> Jahe<br />\
    <img src="styles/legend/Umbi_3_2.png" /> Kencur<br />\
    <img src="styles/legend/Umbi_3_3.png" /> Kunyit<br />\
    <img src="styles/legend/Umbi_3_4.png" /> Kunyit Putih<br />\
    <img src="styles/legend/Umbi_3_5.png" /> Lengkuas<br />\
    <img src="styles/legend/Umbi_3_6.png" /> Porang<br />\
    <img src="styles/legend/Umbi_3_7.png" /> Singkong Kuning<br />\
    <img src="styles/legend/Umbi_3_8.png" /> Singkong Putih<br />\
    <img src="styles/legend/Umbi_3_9.png" /> Temulawak<br />\
    <img src="styles/legend/Umbi_3_10.png" /> Ubi Jahe<br />\
    <img src="styles/legend/Umbi_3_11.png" /> Ubi Kuning<br />\
    <img src="styles/legend/Umbi_3_12.png" /> Ubi Ungu<br />'
        });
var format_BiotaAir_4 = new ol.format.GeoJSON();
var features_BiotaAir_4 = format_BiotaAir_4.readFeatures(json_BiotaAir_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_BiotaAir_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiotaAir_4.addFeatures(features_BiotaAir_4);
var lyr_BiotaAir_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BiotaAir_4, 
                style: style_BiotaAir_4,
                popuplayertitle: "Biota Air",
                interactive: true,
    title: 'Biota Air<br />\
    <img src="styles/legend/BiotaAir_4_0.png" /> Belut<br />\
    <img src="styles/legend/BiotaAir_4_1.png" /> Udang<br />'
        });
var format_LainLain_5 = new ol.format.GeoJSON();
var features_LainLain_5 = format_LainLain_5.readFeatures(json_LainLain_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_LainLain_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LainLain_5.addFeatures(features_LainLain_5);
var lyr_LainLain_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LainLain_5, 
                style: style_LainLain_5,
                popuplayertitle: "Lain-Lain",
                interactive: true,
    title: 'Lain-Lain<br />\
    <img src="styles/legend/LainLain_5_0.png" /> Ayam Hutan<br />\
    <img src="styles/legend/LainLain_5_1.png" /> Babi Hutan<br />\
    <img src="styles/legend/LainLain_5_2.png" /> Musang<br />\
    <img src="styles/legend/LainLain_5_3.png" /> Pandan<br />\
    <img src="styles/legend/LainLain_5_4.png" /> Rusa<br />\
    <img src="styles/legend/LainLain_5_5.png" /> Sirih<br />\
    <img src="styles/legend/LainLain_5_6.png" /> Tebu<br />\
    <img src="styles/legend/LainLain_5_7.png" /> Ulat Bambu<br />\
    <img src="styles/legend/LainLain_5_8.png" /> Ulat Kemiri<br />'
        });
var format_Buah_6 = new ol.format.GeoJSON();
var features_Buah_6 = format_Buah_6.readFeatures(json_Buah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_Buah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buah_6.addFeatures(features_Buah_6);
var lyr_Buah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buah_6, 
                style: style_Buah_6,
                popuplayertitle: "Buah",
                interactive: true,
    title: 'Buah<br />\
    <img src="styles/legend/Buah_6_0.png" /> Alpukat<br />\
    <img src="styles/legend/Buah_6_1.png" /> Asam<br />\
    <img src="styles/legend/Buah_6_2.png" /> Belimbing<br />\
    <img src="styles/legend/Buah_6_3.png" /> Buah Naga<br />\
    <img src="styles/legend/Buah_6_4.png" /> Jambu Air<br />\
    <img src="styles/legend/Buah_6_5.png" /> Jambu Biji<br />\
    <img src="styles/legend/Buah_6_6.png" /> Jambu monyet<br />\
    <img src="styles/legend/Buah_6_7.png" /> Jambu Monyet<br />\
    <img src="styles/legend/Buah_6_8.png" /> Jeruk<br />\
    <img src="styles/legend/Buah_6_9.png" /> Jeruk Nipis<br />\
    <img src="styles/legend/Buah_6_10.png" /> Kelapa<br />\
    <img src="styles/legend/Buah_6_11.png" /> Kelapa Bali<br />\
    <img src="styles/legend/Buah_6_12.png" /> Kemiri<br />\
    <img src="styles/legend/Buah_6_13.png" /> Kersen<br />\
    <img src="styles/legend/Buah_6_14.png" /> Kokoa<br />\
    <img src="styles/legend/Buah_6_15.png" /> Mangga<br />\
    <img src="styles/legend/Buah_6_16.png" /> Markisa<br />\
    <img src="styles/legend/Buah_6_17.png" /> Nanas<br />\
    <img src="styles/legend/Buah_6_18.png" /> Nanas Bogor<br />\
    <img src="styles/legend/Buah_6_19.png" /> Nangka<br />\
    <img src="styles/legend/Buah_6_20.png" /> Pepaya<br />\
    <img src="styles/legend/Buah_6_21.png" /> Pinang<br />\
    <img src="styles/legend/Buah_6_22.png" /> Pisang Bugis<br />\
    <img src="styles/legend/Buah_6_23.png" /> Pisang Manis<br />\
    <img src="styles/legend/Buah_6_24.png" /> Rambutan<br />\
    <img src="styles/legend/Buah_6_25.png" /> Salak<br />\
    <img src="styles/legend/Buah_6_26.png" /> Sirsak<br />\
    <img src="styles/legend/Buah_6_27.png" /> Sukun<br />\
    <img src="styles/legend/Buah_6_28.png" /> Terung<br />'
        });
var format_SerealiadanKacangKacangan_7 = new ol.format.GeoJSON();
var features_SerealiadanKacangKacangan_7 = format_SerealiadanKacangKacangan_7.readFeatures(json_SerealiadanKacangKacangan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_SerealiadanKacangKacangan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SerealiadanKacangKacangan_7.addFeatures(features_SerealiadanKacangKacangan_7);
var lyr_SerealiadanKacangKacangan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SerealiadanKacangKacangan_7, 
                style: style_SerealiadanKacangKacangan_7,
                popuplayertitle: "Serealia dan Kacang-Kacangan",
                interactive: true,
    title: 'Serealia dan Kacang-Kacangan<br />\
    <img src="styles/legend/SerealiadanKacangKacangan_7_0.png" /> Balam<br />\
    <img src="styles/legend/SerealiadanKacangKacangan_7_1.png" /> Jagung<br />\
    <img src="styles/legend/SerealiadanKacangKacangan_7_2.png" /> Kacang Tanah<br />\
    <img src="styles/legend/SerealiadanKacangKacangan_7_3.png" /> Padi<br />'
        });
var format_Sayur_8 = new ol.format.GeoJSON();
var features_Sayur_8 = format_Sayur_8.readFeatures(json_Sayur_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_Sayur_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sayur_8.addFeatures(features_Sayur_8);
var lyr_Sayur_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sayur_8, 
                style: style_Sayur_8,
                popuplayertitle: "Sayur",
                interactive: true,
    title: 'Sayur<br />\
    <img src="styles/legend/Sayur_8_0.png" /> Kangkung<br />\
    <img src="styles/legend/Sayur_8_1.png" /> Katuk<br />\
    <img src="styles/legend/Sayur_8_2.png" /> Kecipir<br />\
    <img src="styles/legend/Sayur_8_3.png" /> Kelor<br />\
    <img src="styles/legend/Sayur_8_4.png" /> Kemangi<br />\
    <img src="styles/legend/Sayur_8_5.png" /> Labu Siam<br />\
    <img src="styles/legend/Sayur_8_6.png" /> Rebung<br />\
    <img src="styles/legend/Sayur_8_7.png" /> Selada Air<br />\
    <img src="styles/legend/Sayur_8_8.png" /> Serai<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_BatasDesaPaubokolJoined_2.setVisible(true);lyr_Umbi_3.setVisible(true);lyr_BiotaAir_4.setVisible(true);lyr_LainLain_5.setVisible(true);lyr_Buah_6.setVisible(true);lyr_SerealiadanKacangKacangan_7.setVisible(true);lyr_Sayur_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_BatasDesaPaubokolJoined_2,lyr_Umbi_3,lyr_BiotaAir_4,lyr_LainLain_5,lyr_Buah_6,lyr_SerealiadanKacangKacangan_7,lyr_Sayur_8];
lyr_BatasDesaPaubokolJoined_2.set('fieldAliases', {'FID': 'FID', 'id': 'id', });
lyr_Umbi_3.set('fieldAliases', {'Nomor': 'Nomor', 'Varietas': 'Varietas', 'Lintang': 'Lintang', 'Bujur': 'Bujur', 'Ketinggian': 'Ketinggian', 'Akurasi': 'Akurasi', 'Lokasi': 'Lokasi', 'Foto': 'Foto', 'Dokumen': 'Dokumen', 'Jenis': 'Jenis', });
lyr_BiotaAir_4.set('fieldAliases', {'Nomor': 'Nomor', 'Varietas': 'Varietas', 'Lintang': 'Lintang', 'Bujur': 'Bujur', 'Ketinggian': 'Ketinggian', 'Akurasi': 'Akurasi', 'Lokasi': 'Lokasi', 'Foto': 'Foto', 'Dokumen': 'Dokumen', 'Jenis': 'Jenis', });
lyr_LainLain_5.set('fieldAliases', {'Nomor': 'Nomor', 'Varietas': 'Varietas', 'Lintang': 'Lintang', 'Bujur': 'Bujur', 'Ketinggian': 'Ketinggian', 'Akurasi': 'Akurasi', 'Lokasi': 'Lokasi', 'Foto': 'Foto', 'Dokumen': 'Dokumen', 'Jenis': 'Jenis', });
lyr_Buah_6.set('fieldAliases', {'Nomor': 'Nomor', 'Varietas': 'Varietas', 'Lintang': 'Lintang', 'Bujur': 'Bujur', 'Ketinggian': 'Ketinggian', 'Akurasi': 'Akurasi', 'Lokasi': 'Lokasi', 'Foto': 'Foto', 'Dokumen': 'Dokumen', 'Jenis': 'Jenis', });
lyr_SerealiadanKacangKacangan_7.set('fieldAliases', {'Nomor': 'Nomor', 'Varietas': 'Varietas', 'Lintang': 'Lintang', 'Bujur': 'Bujur', 'Ketinggian': 'Ketinggian', 'Akurasi': 'Akurasi', 'Lokasi': 'Lokasi', 'Foto': 'Foto', 'Dokumen': 'Dokumen', 'Jenis': 'Jenis', });
lyr_Sayur_8.set('fieldAliases', {'Nomor': 'Nomor', 'Varietas': 'Varietas', 'Lintang': 'Lintang', 'Bujur': 'Bujur', 'Ketinggian': 'Ketinggian', 'Akurasi': 'Akurasi', 'Lokasi': 'Lokasi', 'Foto': 'Foto', 'Dokumen': 'Dokumen', 'Jenis': 'Jenis', });
lyr_BatasDesaPaubokolJoined_2.set('fieldImages', {'FID': 'TextEdit', 'id': 'TextEdit', });
lyr_Umbi_3.set('fieldImages', {'Nomor': 'TextEdit', 'Varietas': 'TextEdit', 'Lintang': 'TextEdit', 'Bujur': 'TextEdit', 'Ketinggian': 'TextEdit', 'Akurasi': 'TextEdit', 'Lokasi': 'TextEdit', 'Foto': 'ExternalResource', 'Dokumen': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_BiotaAir_4.set('fieldImages', {'Nomor': 'TextEdit', 'Varietas': 'TextEdit', 'Lintang': 'TextEdit', 'Bujur': 'TextEdit', 'Ketinggian': 'TextEdit', 'Akurasi': 'TextEdit', 'Lokasi': 'TextEdit', 'Foto': 'ExternalResource', 'Dokumen': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_LainLain_5.set('fieldImages', {'Nomor': 'TextEdit', 'Varietas': 'TextEdit', 'Lintang': 'TextEdit', 'Bujur': 'TextEdit', 'Ketinggian': 'TextEdit', 'Akurasi': 'TextEdit', 'Lokasi': 'TextEdit', 'Foto': 'ExternalResource', 'Dokumen': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Buah_6.set('fieldImages', {'Nomor': 'TextEdit', 'Varietas': 'TextEdit', 'Lintang': 'TextEdit', 'Bujur': 'TextEdit', 'Ketinggian': 'TextEdit', 'Akurasi': 'TextEdit', 'Lokasi': 'TextEdit', 'Foto': 'ExternalResource', 'Dokumen': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_SerealiadanKacangKacangan_7.set('fieldImages', {'Nomor': 'TextEdit', 'Varietas': 'TextEdit', 'Lintang': 'TextEdit', 'Bujur': 'TextEdit', 'Ketinggian': 'TextEdit', 'Akurasi': 'TextEdit', 'Lokasi': 'TextEdit', 'Foto': 'ExternalResource', 'Dokumen': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Sayur_8.set('fieldImages', {'Nomor': 'TextEdit', 'Varietas': 'TextEdit', 'Lintang': 'TextEdit', 'Bujur': 'TextEdit', 'Ketinggian': 'TextEdit', 'Akurasi': 'TextEdit', 'Lokasi': 'TextEdit', 'Foto': 'ExternalResource', 'Dokumen': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_BatasDesaPaubokolJoined_2.set('fieldLabels', {'FID': 'hidden field', 'id': 'hidden field', });
lyr_Umbi_3.set('fieldLabels', {'Nomor': 'hidden field', 'Varietas': 'inline label - always visible', 'Lintang': 'hidden field', 'Bujur': 'hidden field', 'Ketinggian': 'hidden field', 'Akurasi': 'hidden field', 'Lokasi': 'inline label - always visible', 'Foto': 'no label', 'Dokumen': 'hidden field', 'Jenis': 'hidden field', });
lyr_BiotaAir_4.set('fieldLabels', {'Nomor': 'hidden field', 'Varietas': 'inline label - always visible', 'Lintang': 'hidden field', 'Bujur': 'hidden field', 'Ketinggian': 'hidden field', 'Akurasi': 'hidden field', 'Lokasi': 'inline label - always visible', 'Foto': 'no label', 'Dokumen': 'hidden field', 'Jenis': 'hidden field', });
lyr_LainLain_5.set('fieldLabels', {'Nomor': 'hidden field', 'Varietas': 'inline label - always visible', 'Lintang': 'hidden field', 'Bujur': 'hidden field', 'Ketinggian': 'hidden field', 'Akurasi': 'hidden field', 'Lokasi': 'inline label - always visible', 'Foto': 'no label', 'Dokumen': 'hidden field', 'Jenis': 'hidden field', });
lyr_Buah_6.set('fieldLabels', {'Nomor': 'hidden field', 'Varietas': 'inline label - always visible', 'Lintang': 'hidden field', 'Bujur': 'hidden field', 'Ketinggian': 'hidden field', 'Akurasi': 'hidden field', 'Lokasi': 'inline label - always visible', 'Foto': 'no label', 'Dokumen': 'hidden field', 'Jenis': 'hidden field', });
lyr_SerealiadanKacangKacangan_7.set('fieldLabels', {'Nomor': 'hidden field', 'Varietas': 'inline label - always visible', 'Lintang': 'hidden field', 'Bujur': 'hidden field', 'Ketinggian': 'hidden field', 'Akurasi': 'hidden field', 'Lokasi': 'inline label - always visible', 'Foto': 'no label', 'Dokumen': 'hidden field', 'Jenis': 'hidden field', });
lyr_Sayur_8.set('fieldLabels', {'Nomor': 'hidden field', 'Varietas': 'inline label - always visible', 'Lintang': 'hidden field', 'Bujur': 'hidden field', 'Ketinggian': 'hidden field', 'Akurasi': 'hidden field', 'Lokasi': 'inline label - always visible', 'Foto': 'no label', 'Dokumen': 'hidden field', 'Jenis': 'hidden field', });
lyr_Sayur_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});