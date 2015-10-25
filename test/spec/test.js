(function () {
  'use strict';

  var canvasElement;

  describe('Check input array to Charting functions is correct', function () {
    describe('check the percentages add up to 100', function () {


    	beforeEach(function() {
    		canvasElement = document.createElement('canvas');
    		canvasElement.id = 'doughChart';
    		document.body.appendChild(canvasElement); 
  		});

      it('summing all graph values should equal 100', function () {

      	var totalInput = 0;
      	console.log(inputData.length);
      	for(var i=0; i < inputData.length; i++) {
      		console.log(JSON.stringify(inputData[i]));
      		totalInput = totalInput + inputData[i].value;
      	};

        expect(totalInput).toEqual(100);
      });
    });
  });
})();
