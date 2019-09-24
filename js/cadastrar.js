function validar() {
    var senha = document.getElementById("senha");
    var senha1 = document.getElementById("senha1");
    var email = document.getElementById("email");

    if (!senha.checkValidity()) {
        document.getElementById("msgstatus").innerHTML = senha.validationMessage;
        document.getElementById("msgstatus").style.color = "red";
        document.getElementById("senha").focus();
    }

    if (!senha1.checkValidity()) {
        document.getElementById("msgstatus").innerHTML = senha1.validationMessage;
        document.getElementById("msgstatus").style.color = "red";
        document.getElementById("senha1").focus();
    }

    if (!email.checkValidity()) {
        document.getElementById("msgstatus").innerHTML = email.validationMessage;
        document.getElementById("msgstatus").style.color = "red";
        document.getElementById("email").focus();
    }
    else {
        document.getElementById("msgstatus").innerHTML = "cadastro realizado com sucesso";
        document.getElementById("msgstatus").style.color = "blue";
    }

}

