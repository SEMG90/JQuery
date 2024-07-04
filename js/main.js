// JQuery Code
"use strict";

// header
const btnToggle = document.querySelector(".btn-toggle");
btnToggle.addEventListener("click",function(){
    $(".nav-bar").animate({width:"25%"},1000,function(){})
})

const btnToggleClose = document.querySelector(".btn-toggle-close")
btnToggleClose.addEventListener("click",function(){
    $(".nav-bar").animate({width:"0%"},1000)
})


// section join-us
const countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
const counter = setInterval(function(){
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)); // get days numbers
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // get hours numbers
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)); // get minutes numbers
    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000)); // get seconds numbers
    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
    if(dateDiff < 0){
        clearInterval(counter);
        document.write("Happy New Year 2025")
    }

},1000)

// section contact us >> form
$(document).ready(function() {
    var $txtArea = $('textarea');
    var $chars   = $('#chars');
    var textMax = $txtArea.attr('maxlength');
  
    $chars.html(textMax + ' characters remaining');

    $txtArea.on('keyup', countChar);
    
    function countChar() {
        var textLength = $txtArea.val().length;
        var textRemaining = textMax - textLength;
        $chars.html(textRemaining + ' characters remaining');
    };
});


    