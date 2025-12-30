ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-3341574.720946, 2530776.779459, 493779.815998, 4799223.055418]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_populaion_region_2 = new ol.format.GeoJSON();
var features_populaion_region_2 = format_populaion_region_2.readFeatures(json_populaion_region_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_populaion_region_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_populaion_region_2.addFeatures(features_populaion_region_2);
var lyr_populaion_region_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_populaion_region_2, 
                style: style_populaion_region_2,
                popuplayertitle: 'populaion_region',
                interactive: true,
    title: 'populaion_region<br />\
    <img src="styles/legend/populaion_region_2_0.png" /> 219965 - 1713765<br />\
    <img src="styles/legend/populaion_region_2_1.png" /> 1713765 - 3207566<br />\
    <img src="styles/legend/populaion_region_2_2.png" /> 3207566 - 4701366<br />\
    <img src="styles/legend/populaion_region_2_3.png" /> 4701366 - 6195167<br />\
    <img src="styles/legend/populaion_region_2_4.png" /> 6195167 - 7688967<br />' });
var format_PortsMaroc_3 = new ol.format.GeoJSON();
var features_PortsMaroc_3 = format_PortsMaroc_3.readFeatures(json_PortsMaroc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PortsMaroc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortsMaroc_3.addFeatures(features_PortsMaroc_3);
cluster_PortsMaroc_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PortsMaroc_3
});
var lyr_PortsMaroc_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PortsMaroc_3, 
                style: style_PortsMaroc_3,
                popuplayertitle: 'PortsMaroc',
                interactive: true,
                title: '<img src="styles/legend/PortsMaroc_3.png" /> PortsMaroc'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_populaion_region_2.setVisible(true);lyr_PortsMaroc_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_populaion_region_2,lyr_PortsMaroc_3];
lyr_populaion_region_2.set('fieldAliases', {'CODE_REGIO': 'CODE_REGIO', 'nom_region': 'nom_region', ' Marocains': ' Marocains', 'Etrangers': 'Etrangers', ' Populatio': ' Populatio', ' Menages': ' Menages', 'nom_arabe': 'nom_arabe', });
lyr_PortsMaroc_3.set('fieldAliases', {'id': 'id', 'NomDuPort': 'NomDuPort', 'DateDeCrea': 'DateDeCrea', 'FlotteHau': 'FlotteHau', 'FlotteCot': 'FlotteCot', 'FlotteArt': 'FlotteArt', });
lyr_populaion_region_2.set('fieldImages', {'CODE_REGIO': 'TextEdit', 'nom_region': 'TextEdit', ' Marocains': 'TextEdit', 'Etrangers': 'TextEdit', ' Populatio': 'TextEdit', ' Menages': 'TextEdit', 'nom_arabe': 'TextEdit', });
lyr_PortsMaroc_3.set('fieldImages', {'id': 'TextEdit', 'NomDuPort': 'TextEdit', 'DateDeCrea': 'DateTime', 'FlotteHau': 'TextEdit', 'FlotteCot': 'TextEdit', 'FlotteArt': 'TextEdit', });
lyr_populaion_region_2.set('fieldLabels', {'CODE_REGIO': 'header label - visible with data', 'nom_region': 'header label - visible with data', ' Marocains': 'header label - visible with data', 'Etrangers': 'header label - visible with data', ' Populatio': 'header label - visible with data', ' Menages': 'header label - visible with data', 'nom_arabe': 'header label - visible with data', });
lyr_PortsMaroc_3.set('fieldLabels', {'id': 'inline label - visible with data', 'NomDuPort': 'inline label - always visible', 'DateDeCrea': 'header label - visible with data', 'FlotteHau': 'header label - always visible', 'FlotteCot': 'header label - always visible', 'FlotteArt': 'header label - always visible', });
lyr_PortsMaroc_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});