
// Next six lines highlight the dt elements when clicked
var addClass = 'color';
var $cols = $('dt');

$cols.click(function(e) {
    $(this).toggleClass(addClass);
});






// Working on toggling answer from invisible class to be visible when clicked
$('dd').click(function(e) {
    $('.toggle').toggleClass('invisible');
});






// Adding functionality to highlight width of dt element