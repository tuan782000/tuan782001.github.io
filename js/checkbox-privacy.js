function checkboxPrivacy() {
    var checkBox = document.getElementById("checkbox--privacy-policy");
    if (checkBox.checked == true) {
        document.getElementById('check').style.opacity = '0';
    } else {
        document.getElementById('check').style.opacity = '1';
    }
}