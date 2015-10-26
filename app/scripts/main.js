// jshint devel:true
'use strict';

var inputData;

document.addEventListener('DOMContentLoaded', function() {

    inputData = [
    {
        percent: 21,
        color: '#e64c65'
    },
    {
        percent: 48,
        color: '#10a8ab'
    },
    {
        percent: 32,
        color: '#4fc4f6'
    },
    {
        percent: 9,
        color: '#fcb150'
    }
];

    if(document.getElementById('doughChart')) {
        donutDrawer('doughChart', inputData);
   	}

});
