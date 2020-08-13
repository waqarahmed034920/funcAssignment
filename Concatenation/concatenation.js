var i = 0;
var txtName = document.getElementById('txtname');
var txtEmail = document.getElementById('txtEmail');
var txtPhone = document.getElementById('txtPhone');

var lblName = document.getElementById('lblName');
var lblPhone = document.getElementById('lblPhone');
var lblEmail = document.getElementById('lblEmail');

var btn = document.getElementById('btnAdd');
btn.addEventListener('click', onAddClick);

function onAddClick() {
    var isNameValid = false;
    var isEmailValid = false;
    var isPhoneValid = false;

    if (txtName.value === '' || txtName.value == null) {
        lblName.style.display = 'block';
        isNameValid = false;
    } else {
        lblName.style.display = 'none';
        isNameValid = true;
    }

    if (txtEmail.value === '' || txtEmail.value == null) {
        lblEmail.style.display = 'block';
        isEmailValid = false;
    } else {
        lblEmail.style.display = 'none';
        isEmailValid = true;
    }

    if (txtPhone.value === '' || txtPhone.value == null) {
        lblPhone.style.display = 'block';
        isPhoneValid = false;
    } else {
        lblPhone.style.display = 'none';
        isPhoneValid = true;
    }

    if (isNameValid && isPhoneValid && isEmailValid) {
        Addline();
        txtName.value = '';
        txtEmail.value = '';
        txtPhone.value = '';
    }

}

function Addline() {
    i = i + 1;
    var tbody = document.getElementById('datatable');
    var str = "<tr><td>" + i
        + "</td><td>" + txtName.value
        + "</td><td>" + txtEmail.value
        + "</td><td>" + txtPhone.value
        + "</td></tr>";
    tbody.innerHTML = tbody.innerHTML + str;
} 