var wms_layers = [];

var format_Demografi_0 = new ol.format.GeoJSON();
var features_Demografi_0 = format_Demografi_0.readFeatures(json_Demografi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Demografi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Demografi_0.addFeatures(features_Demografi_0);
var lyr_Demografi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Demografi_0, 
                style: style_Demografi_0,
                interactive: true,
                title: '<img src="styles/legend/Demografi_0.png" /> Demografi'
            });

        var lyr_Satellite_1 = new ol.layer.Tile({
            'title': 'Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Maps_2 = new ol.layer.Tile({
            'title': 'Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_KesesuaianPermukiman_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Kesesuaian Permukiman",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KesesuaianPermukiman_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11676511.657211, -1000194.878408, 12779731.657211, -628314.323713]
                            })
                        });
var format_BatasKabKot_4 = new ol.format.GeoJSON();
var features_BatasKabKot_4 = format_BatasKabKot_4.readFeatures(json_BatasKabKot_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabKot_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabKot_4.addFeatures(features_BatasKabKot_4);
var lyr_BatasKabKot_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKabKot_4, 
                style: style_BatasKabKot_4,
                interactive: true,
                title: '<img src="styles/legend/BatasKabKot_4.png" /> Batas Kab/Kot'
            });

lyr_Demografi_0.setVisible(true);lyr_Satellite_1.setVisible(true);lyr_Maps_2.setVisible(true);lyr_KesesuaianPermukiman_3.setVisible(true);lyr_BatasKabKot_4.setVisible(true);
var layersList = [lyr_Demografi_0,lyr_Satellite_1,lyr_Maps_2,lyr_KesesuaianPermukiman_3,lyr_BatasKabKot_4];
lyr_Demografi_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'Kab/Kot', 'WADMPR': 'Provinsi', 'SUM_Pendud': 'Jumlah Penduduk', 'SUM_jumlah': 'Jumlah KK', 'SUM_pria': 'Jumlah Pria', 'SUM_wanita': 'Jumlah Wanita', });
lyr_BatasKabKot_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'Provinsi', 'SUM_Pendud': 'Jumlah Penduduk', 'SUM_jumlah': 'Jumlah KK', 'SUM_pria': 'Jumlah Pria', 'SUM_wanita': 'Jumlah Wanita', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Demografi_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUM_Pendud': 'TextEdit', 'SUM_jumlah': 'TextEdit', 'SUM_pria': 'TextEdit', 'SUM_wanita': 'TextEdit', });
lyr_BatasKabKot_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUM_Pendud': 'TextEdit', 'SUM_jumlah': 'TextEdit', 'SUM_pria': 'TextEdit', 'SUM_wanita': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Demografi_0.set('fieldLabels', {'OBJECTID': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'SUM_Pendud': 'inline label', 'SUM_jumlah': 'inline label', 'SUM_pria': 'inline label', 'SUM_wanita': 'inline label', });
lyr_BatasKabKot_4.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUM_Pendud': 'no label', 'SUM_jumlah': 'no label', 'SUM_pria': 'no label', 'SUM_wanita': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BatasKabKot_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});