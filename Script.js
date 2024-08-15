$(document).ready(function () {

    $("#myForm").submit(function (e) {
        if (!formValidate()) {
            e.preventDefault();
        }
    });

});

function formValidate() {

    var firstName = $("#firstName").val();
    var firstNameError = $("#firstNameError");
    var middleName = $("#middleName").val();
    var middleNameError = $("#middleNameError");
    var lastName = $("#lastName").val();
    var lastNameError = $("#lastNameError");
    var email = $("#email").val();
    var emailError = $("#emailError");
    var password = $("#password").val();
    var passwordError = $("#passwordError");
    var confirmPassword = $("#confirmPassword").val();
    var confirmPasswordError = $("#confirmPasswordError");
    var department = $("#department").val();
    var selectedDepartmentErrorrsError = $("#selectedDepartmentError");
    var fileInput = $("#uploadUser")[0];
    var fileError = $("#fileError");

    // First name validations...
    if (firstName.trim() === "") {
        firstNameError.html("First Name can't be empty").css("color", "red");
        return false;
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
        firstNameError.html("First Name only contains Alphabetic values without any spaces").css("color", "red");
        return false;
    } else {
        firstNameError.html("Done....!").css("color", "green");
    }

    // Middle name validate
    if (middleName.trim() === '') {
        middleNameError.html('');
    } else if (!/^[a-zA-Z]+$/.test(middleName)) {
        middleNameError.html("Middle name only contains alphabetic value").css("color", "red");
        return false;
    } else {
        middleNameError.html('Done...!').css("color", "green");
    }

    // Last name validations....
    if (lastName.trim() === "") {
        lastNameError.html("Last Name can't be empty").css("color", "red");
        return false;
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
        lastNameError.html("Last Name only contains Alphabetic values without any spaces").css("color", "red");
        return false;
    } else {
        lastNameError.html("Done....!").css("color", "green");
    }

    // Email validations
    if (email.trim() === "") {
        emailError.html("Email can't be empty").css("color", 'red');
        return false;
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
        emailError.html("Email can only contain proper format").css("color", 'red');
        return false;
    } else {
        emailError.html("Done....!").css("color", "green");
    }

    // Password validations
    if (password.trim() === "") {
        passwordError.html("Password can't be empty").css("color", "red");
        return false;
    } else if (password.length <= 7) {
        passwordError.html("Password must contain at least 8 characters").css("color", "red");
        return false;
    } else if (confirmPassword.trim() === '') {
        confirmPasswordError.html("This field can't be empty").css("color", "red");
        return false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.html("Make sure password and reenter both match").css("color", "red");
        return false;
    } else {
        passwordError.html("Done....!").css("color", "green");
        confirmPasswordError.html("Done...!").css("color", "green");
    }

    // Course select validations
    if (department === "default") {
        selectedDepartmentErrorrsError.html("Please select any one Course").css("color", "red");
        return false;
    } else {
        selectedDepartmentErrorrsError.html("Done....!").css("color", "green");
    }

    // File upload validation
    if (fileInput.files.length > 0) {
        var fileSize = fileInput.files[0].size;
        var maxsize = 1024 * 1024;
        if (fileSize > maxsize) {
            fileError.html("File must be less than 1 MB").css("color", "red");
            return false;
        } else {
            fileError.html("Done....!").css("color", "green");
        }
    }

    return true;
}

// toggle clss class with select menu
$("#department").change(function () {
    changeFormStyle();
});
function changeFormStyle() {
    var selectedDepartment = $("#department").val();
    var labelsAndInputs = $('label, input');
    labelsAndInputs.removeClass("bca mca be me default-style");

    if (selectedDepartment === "sales") {
        labelsAndInputs.addClass("sales-department");
    } else if (selectedDepartment === "ME") {
        labelsAndInputs.addClass("me");
    } else if (selectedDepartment === "BE") {
        labelsAndInputs.addClass("be");
    } else if (selectedDepartment === "BCA") {
        labelsAndInputs.addClass("bca");
    } else if (selectedDepartment === "MCA") {
        labelsAndInputs.addClass("mca");
    } else {
        labelsAndInputs.addClass("default-style");
    }
}

