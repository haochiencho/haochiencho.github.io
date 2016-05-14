/**
 * Created by briancho on 4/30/16.
 */

var myDataRef = new Firebase('https://dazzling-torch-3292.firebaseio.com/');

$( "#next1" ).click(function() {
    email = $('#email').val();
    password = $('#password').val();
});

$( "#next2" ).click(function() {
    twitter = $('#twitter').val();
    facebook = $('#facebook').val();
    google = $('#google').val();
});


$( "#next3" ).click(function() {
    first_name = $('#firstNameInput').val();
    last_name = $('#lastNameInput').val();
    phone_number = $('#phone_number').val();
    comment = $('#comment').val();

    myDataRef.push({ email: email, password: password, twitter: twitter, facebook: facebook, google: google, first_name: first_name, last_name: last_name, phone_number: phone_number, comment: comment});
    window.location.href = "../browse_template/index.html";

});




