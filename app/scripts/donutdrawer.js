    /* Since this is just one graph there is no requirement to load whole library.
     *  This function allows us to draw a graph more limited in how it can appear.
     *  If more flexibilty is required when the graph is used as part of a larger application the library may become more useful.
     */

    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
            return setTimeout(callback, 1);
        };

    function donutDrawer(canvasId, dataSet) {

        //These are fixed for this graph, but could be varied if required if the context of the graph use required it.
        var c = document.getElementById(canvasId);
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var medianRadius = 150;
        var duration = 2;
        //

        var context = c.getContext("2d");

        var start = new Date().getTime();
        var end = start + duration;

        function callRender() {
            context.clearRect(0, 0, canvas.width, canvas.height);

            //How far into the animation are we?
            var timestamp = new Date().getTime();
            var progress = Math.min((duration - (end - timestamp)) / duration, 1);

            for(var i=0; i<dataSet.length; i++){
                //Need to draw for each dataset
                drawDonut(Math.PI * 0.32, Math.PI * 0.5);    
            }
            


            // Redraw
            requestAnimationFrame(callRender);
        }

        //*******************************************************//\        
        // drawDonut() function drawes 2 full or partial circles inside each other one clockwise and the other is counter-clockwise
        function drawDonut(sRadian, eRadian, color) {
            context.beginPath();
            context.arc(X, Y, medianRadius, sRadian, eRadian, false); // Outer: CCW
            canvas.lineWidth = 143;
            canvas.strokeStyle = color;
            ctx.stroke();
            context.closePath();

            // Redraw

        }

    }
