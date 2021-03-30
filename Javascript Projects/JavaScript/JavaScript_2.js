// Form validation //
function validateForm() {
    var d1 = document.forms["contact_form"]["fname"].value;
    var d2 = document.forms["contact_form"]["lname"].value;
    var d3 = document.forms["contact_form"]["email"].value;
    var d4 = document.forms["contact_form"]["phone"].value;
    if (d1, d2, d3, d4 == "") {
        alert("Please complete the form.");
        return false;
    }
    else {
        alert("Your information has been submitted.")
    }
}