
const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const msg = document.getElementById("msg");
const mail = document.getElementById("mail");
const submit = document.getElementById("submit");

let allErrorDiv = document.querySelectorAll(".errorDiv"); // wählt alle mit der class errorDiv

let errorMessageName = [];
let errorMessageMsg = [];
let errorMessageMail = [];


name.addEventListener("input", checkInputName);
//mail.addEventListener("input", checkInputMail);
//msg.addEventListener("input", checkInputMsg);



function checkInputName() {

    let errorName = [];

    errorName.push(checkEmpty(name, errorMessageName)); //push = append
    errorName.push(checkMinMax(name, 3,100,errorMessageName)); // checkEmpty                      returns boolean

    if (errorName.includes(false)) {
        //showError(inputName.id);
        allErrorDiv[0].textContent = errorMessageName.join(""); // join = append ("" = ohne seperator)
    }
    else {
        allErrorDiv[0].textContent = ""
    }
}

function checkMinMax(inp, min, max, arrayMessage) {
    if (inp.value.length < min) {
        arrayMessage[1] = "Mindestens" + min + "Zeichen\n";
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
        arrayMessage[0] = "Bitte geben Sie einen Namen ein\n";
        return false;
    }
    else {
        arrayMessage[0] = "";
        return true;
    }
}
