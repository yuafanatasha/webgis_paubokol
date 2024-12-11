var size = 0;
var placement = 'point';

var style_LST_polygon_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("VALUE");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 26.081225 && value <= 29.060940) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,21,212,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 29.060940 && value <= 32.040654) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(1,136,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 32.040654 && value <= 35.020369) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,1,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 35.020369 && value <= 38.000083) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,94,1,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 38.000083 && value <= 40.979797) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,9,1,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
