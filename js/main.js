$(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        var email = $('#email').val();
        var reguexp = /([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/;
        if (reguexp.test(email)) {
            $("#result > p").html("The email is valid");
        } else {
            $("#result > p").html("The email is invalid");
        }
    });
});