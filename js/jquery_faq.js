
// Next six lines highlight the dt elements when clicked
var addClass = 'color';
var $cols = $('dt');

$cols.click(function(e) {
    $(this).toggleClass(addClass);
});






// Working on toggling answer from invisible class to be visible when clicked. class will be removed when you click on button to show answer.
// $('dd').click(function(e) {
//     $('.toggle').toggleClass('invisible');
// });

$("buttonFirst").click(function() {
    $('dd').toggleClass("invisible");
});


// Adding functionality to highlight width of dt element