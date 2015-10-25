    /* Since this is just one graph there is no requirement to load whole library.
    *  This function allows us to draw a graph more limited in how it can appear.
    *  If more flexibilty is required when the graph is used as part of a larger application the library may become more useful.
    */

    function donutDrawer(canvasId, dataSet) {

            var X = 180;
            var Y = 180;
            var outterRadius = 150;
            var innerRadius = 110;
 
            var c = document.getElementById(canvasId);
             

            var context = c.getContext("2d");
             

            drawDonut(Math.PI * 0.32, Math.PI * 0.5);

            drawDonut(Math.PI*0.5 , Math.PI* 1.5);

            drawDonut(Math.PI * 1.5, Math.PI*2);
             
            drawDonut(0, Math.PI*.32);
             
            //*******************************************************//\        
            // drawDonut() function drawes 2 full or partial circles inside each other one clockwise and the other is counter-clockwise
            function drawDonut(sRadian, eRadian){
                 
                context.beginPath();
                    context.arc(X, Y, medianRadius, sRadian, eRadian, false); // Outer: CCW
                    canvas.lineWidth = this.lineWidth;
                    canvas.strokeStyle = this.strockStyle;
                    ctx.stroke();
                context.closePath();
            }

    }
            