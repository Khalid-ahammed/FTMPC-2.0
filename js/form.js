// Form validation

function validateform() {
    validateemail();
    validateName();
    validatenum();

    if (validateemail() === false || validateName() === false || validatenum() === false)
        return false;
    else
        return true;
}

function validateemail() {
    var x = document.querySelector("#email").value.trim();
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        document.querySelector("#email").parentElement.querySelector("p").textContent = "not a valid email";
        document.querySelector("#email").focus();
        document.querySelector("#email").select();
        return false;
    } else {
        document.querySelector("#email").parentElement.querySelector("p").textContent = "";
    }
}

function validateName() {
    let name = document.querySelector("#fname");
    let nameValue = name.value.trim();
    let array = nameValue.split('');
    if (nameValue.length < 3) {
        name.parentElement.querySelector("p").textContent = "Name must contain at least 3 letters";
        name.focus();
        name.select();
        return false;
    } else {
        name.parentElement.querySelector("p").textContent = "";
        let count = 0;
        let char = 0;
        for (let i = 0; i < nameValue.length; i++) {
            char = array[i];
            if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char == " ") || (char == ".")) {} else {
                count++;
            }
        }
        if (count > 0 || count < 0) {
            name.parentElement.querySelector("p").textContent = "should not contain any number or special character";
            name.focus();
            name.select();
            return false;
        } else {
            name.parentElement.querySelector("p").textContent = "";
        }
    }
}

function validatenum() {
    let n = document.querySelector("#fnum");
    let nValue = n.value.trim();
    one = nValue.charAt(0);
    two = nValue.charAt(1);
    if (nValue.length < 11 || nValue.length > 11 || (one > 0 || one < 0) || (two > 1 || two < 1)) {
        n.parentElement.querySelector("p").textContent = "Not a valid Mobile No.";
        n.focus();
        n.select();
        return false;
    } else {
        n.parentElement.querySelector("p").textContent = "";
    }
}