
// Next six lines highlight the dt elements when clicked
var addClass = 'color';
var $cols = $('dt');

$cols.click(function(e) {
    $(this).toggleClass(addClass);
});


// Button that shows answers to FAQs when pressed
$(".buttonFirst").click(function() {
    $('dd').toggleClass("invisible");
});

// Create a button that, when clicked, makes the last li in each ul have a yellow background. First one (commented out) works but only for the last li. Second one does not work at all but was in the walkthrough.
//     $(".buttonSecond").click(function() {
//         $('li').last().css('background-color', '#BDB76B').css('color', 'black');
//     });

$(".buttonSecond").click(function() {
    $("ul").each(function () {
        $(this).children().last().toggleClass("#BDB76B");
    });
});

// TODOS left:
// When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
// When any list item is clicked, first li of the parent ul should have a font color of blue.