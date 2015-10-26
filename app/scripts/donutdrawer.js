// jshint devel:true
'use strict';
/* Since this is just one graph there is no requirement to load whole library.
 *  This function allows us to draw a graph more limited in how it can appear.
 *  If more flexibilty is required when the graph is used as part of a larger application the library may become more useful.
 */

var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) {
        return setTimeout(callback, 1);
    };

function donutDrawer(canvasId, dataSet) {

    //These are fixed for this graph, but could be made available to be varied, if the context of the graph use required it.
    var c = document.getElementById(canvasId);
    var X = c.width / 2;
    var Y = c.height / 2;
    var medianRadius = 169;
    var duration = 600;
    //

    var context = c.getContext("2d");
    var start = new Date().getTime();
    var end = start + duration;

    //callRender();

    var callRender = function() {
        context.clearRect(0, 0, c.width, c.height);

        //How far into the animation are we?
        var timestamp = new Date().getTime();
        var progress = Math.min((duration - (end - timestamp)) / duration, 1);

        var startPercent = 75; //sets initial offset
        var totalData = 0;
        for (var i = 0; i < dataSet.length; i++) {
            totalData = totalData + dataSet[i].percent;
        }

        var startPercent = 75;
        for (i = 0; i < dataSet.length; i++) {

            var startAngRad = (startPercent / totalData) * Math.PI * 2 * progress;
            var endAngRad = startAngRad + (dataSet[i].percent / totalData) * Math.PI * 2 * progress;

            drawDonut(startAngRad, endAngRad, dataSet[i].color);
            startPercent = startPercent + dataSet[i].percent;

        }

        // Redraw
        if (progress < 1) requestAnimationFrame(callRender);
    }();

    // drawDonut() function draws arc between two angles
    function drawDonut(sRadian, eRadian, color) {
        context.beginPath();
        context.lineWidth = 72;
        context.strokeStyle = color;
        context.arc(X, Y, medianRadius, sRadian, eRadian); // Outer: CCW
        context.stroke();
        context.closePath();
    }

}
