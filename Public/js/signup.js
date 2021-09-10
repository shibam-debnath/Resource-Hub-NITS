/*global $, document, window, setTimeout, navigator, console, location*/
$(document).ready(function () {

    'use strict';

    var usernameError = true,
        emailError    = true,
        passwordError = true,
        passConfirm   = true;

    // Detect browser for css purpose
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.form form label').addClass('fontSwitch');
    }

    // Label effect
    $('input').focus(function () {

        $(this).siblings('label').addClass('active');
    })
    //Form validation
    $('input').blur(function () {

        //User Name
        if ($(this).hasClass('name')) {
            if ($(this).val().length === 0) {
                $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
                $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                usernameError = false;
            }
        }
        //Email
        if ($(this).hasClass('email')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('Please type your email address').fadeIn().addClass('properDisplay').parent('.form-group').addClass('hasError');
                emailError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().removeClass('properDisplay').parent('.form-group').removeClass('hasError');
                emailError = false;
            }
        }

        //PassWord
        if ($(this).hasClass('pass')) {
            if ($(this).val().length < 8) {
                $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
                passwordError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                passwordError = false;
            }
        }

        //PassWord confirmation
        if ($('.pass').val() !== $('.passConfirm').val()) {
            $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
            passConfirm = false;
        } else {
            $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
            passConfirm = false;
        }

        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


    // form switch
    $('a.switch').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();

        if ($('a.switch').hasClass('active')) {
            $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        } else {
            $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
        }
    });


    // Form submit
    $('form.signup-form').submit(function (event) {
        console.log("I m here")

        if (usernameError == true || emailError == true || passwordError == true || passConfirm == true) {
            event.preventDefault();
            $('.name, .email, .pass, .passConfirm').blur();
        } else {
            $('form.signup-form').submit();
        }
    });

    // Reload page
    $('a.profile').on('click', function () {
        location.reload(true);
    });


});

function passwordfnlog(){
    var x = document.getElementById("loginPassword");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

var eye = document.getElementById("eye");
var x = document.getElementById("password");
x.addEventListener("click", function(){
    eye.style.display = "block";
})

var eye2 = document.getElementById("eye2");
var x = document.getElementById("passwordCon");
x.addEventListener("click", function(){
    eye2.style.display = "block";
})

var eye3 = document.getElementById("eye3");
var x = document.getElementById("loginPassword");
x.addEventListener("click", function(){
    eye3.style.display = "block";
})

// var eye1 = document.getElementById("eye1");
// var x = document.getElementById("loginPassword");
// x.addEventListener("click", function(){
//     eye1.style.display = "block";
// })

function passwordfnsign(){
    var x1 = document.getElementById("password");
    var y1 = document.getElementById("signup-hide1");
    var z1 = document.getElementById("signup-hide2");
    if(x1.type === 'password'){
        x1.type = "text";
        y1.style.display = "block";
        z1.style.display = "none";
    } else {
        x1.type = "password";
        y1.style.display = "none";
        z1.style.display = "block";
    }
}

function passwordfnsign2(){
    var x1 = document.getElementById("passwordCon");
    var y1 = document.getElementById("signup-hide3");
    var z1 = document.getElementById("signup-hide4");
    if(x1.type === 'password'){
        x1.type = "text";
        y1.style.display = "block";
        z1.style.display = "none";
    } else {
        x1.type = "password";
        y1.style.display = "none";
        z1.style.display = "block";
    }
}

function passwordfnsign3(){
    var x1 = document.getElementById("loginPassword");
    var y1 = document.getElementById("login-hide1");
    var z1 = document.getElementById("login-hide2");
    if(x1.type === 'password'){
        x1.type = "text";
        y1.style.display = "block";
        z1.style.display = "none";
    } else {
        x1.type = "password";
        y1.style.display = "none";
        z1.style.display = "block";
    }
}