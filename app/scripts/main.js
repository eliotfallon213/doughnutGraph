// jshint devel:true
'use strict';

var myDoughnutChart;
var inputData;

document.addEventListener('DOMContentLoaded', function() {

    inputData = [
    {
        value: 21,
        color: '#e64c65',
        highlight: '#e64c65',
        label: 'iOS'
    },
    {
        value: 48,
        color: '#10a8ab',
        highlight: '#10a8ab',
        label: 'Mac'
    },
    {
        value: 32,
        color: '#fcb150',
        highlight: '#fcb150',
        label: 'Win'
    },
    {
        value: 9,
        color: '#4fc4f6',
        highlight: '#4fc4f6',
        label: 'Linux'
    }
];

	var options = {
    	percentageInnerCutout: 65,
    	segmentShowStroke: false,
    	responsive: true
	};

    if(document.getElementById('doughChart')) {
    	var ctx = document.getElementById('doughChart').getContext('2d');

   		myDoughnutChart = new Chart(ctx).Doughnut(inputData, options);
   	}

});
