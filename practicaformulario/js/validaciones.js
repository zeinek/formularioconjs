var use = document.getElementById("user");

const form = document.getElementById("form1");
var msj = document.getElementById("mensajes");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let msjMostrar = "";
    let envioCorrecto = false;

    if(use.value.length <4 || use.value.length > 7){
        msjMostrar += "El nombre no tiene la longitud correcta<br>";
        envioCorrecto = true;
    }

    var letraUser = use.value.charAt(0);
    if(!esMayuscula(letraUser)){
        msjMostrar += "Es minuscula<br>";
        envioCorrecto = true;
    }

    if(envioCorrecto){
        msj.innerHTML = msjMostrar;
    }
    else{
        msj.innerHTML = "Formulario Enviado.";
    }
});

function esMayuscula(letra){
    return letra == letra.toUpperCase();
}