//Ensures the DOM is loaded before we start manipulating anything. 

$(document).ready(function() {
});

// choose yellow button
$('.yellow').click(function() {
$('body').attr('class', 'mellow');
$('.main').css('background-color', '#FFE5B5');
$('.after').show();
$('.select').hide();
});

// choose rose button
$('.rose').click(function() {
$('body').attr('class', 'rosey');
$('.main').css('background-color', '#F2C7C7');
$('.after').show();
$('.select').hide();
});

// choose mint button
$('.mint').click(function() {
$('body').attr('class', 'blues');
$('.main').css('background-color', '#D4FAEB');
$('.after').show();
$('.select').hide();
});


