
const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const msg = document.getElementById("msg");
const mail = document.getElementById("mail");

let regMail = new RegExp ("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-z]+$");
let allErrorDiv = document.querySelectorAll(".errorDiv"); // wählt alle mit der class errorDiv

let errorMessageName = [];
let errorMessageMsg = [];
let errorMessageMail = [];


name.addEventListener("input", checkInputName);
msg.addEventListener("input", checkInputMsg);
mail.addEventListener("input", checkInputMail);
form.addEventListener("submit", formSubmission);



function checkInputName() {

    let errorName = [];

    errorName.push(checkEmpty(name, errorMessageName)); //push = append
    errorName.push(checkMinMax(name, 3,100,errorMessageName)); // check-function returns boolean

    if (errorName.includes(false)) {
        //showError(inputName.id);
        allErrorDiv[0].textContent = errorMessageName.join(""); // join = append ("" = ohne seperator)
    }
    else {
        allErrorDiv[0].textContent = ""
    }
}

function checkInputMsg () {
    let errorMsg = [];

    errorMsg.push(checkEmpty(msg, errorMessageMsg));

    if (errorMsg.includes(false)) {
        allErrorDiv[1].textContent = errorMessageMsg.join("");
    }
    else {
        allErrorDiv[1].textContent = "";
    }
}

function checkInputMail () {

    let errorMail = [];

    errorMail.push(checkMail(mail, errorMessageMail));
    errorMail.push(checkMinMax(mail, 5, 50, errorMessageMail));

    if (errorMail.includes(false)) {
        allErrorDiv[2].textContent = errorMessageMail.join("");
    }
    else {
        allErrorDiv[2].textContent = "";
    }
}

function checkMinMax(inp, min, max, arrayMessage) {
    if (inp.value.length < min) {
        arrayMessage[1] = "Mindestens " + min + " Zeichen\n";
        return false;
    }
    else if (inp.value.length > max) {
        arrayMessage[2] = "Maximal" + max + "Zeichen";
        return false;
    }
    else {
        arrayMessage[1] = "";
        arrayMessage[2] = "";
        return true;
    }
}

function checkEmpty(inp, arrayMessage) {
    //trim for deleting spaces out of the string
    if (inp.value.trim() === "") {
        arrayMessage[0] = "Bitte füllen Sie dieses Feld aus\n";
        return false;
    }
    else {
        arrayMessage[0] = "";
        return true;
    }
}

function checkMail(inp, arrayMessage) {
    if (!regMail.test(inp.value)) {
        arrayMessage[3] = "Format ungültig";
        return false;
    }
    else {
        arrayMessage[3] = "";
        return true;
    }
}

function formSubmission() {
    alert('Vielen Dank für die Eingabe! Aufgrund technischer Limitierungen wird Ihre Nachricht derzeit nicht weiterverarbeitet');
}
