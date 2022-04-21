$(document).ready(function(){
    $("#form1").submit(function(e){
        e.preventDefault();
        var use = $("#user").val();
        let msjMostrar = "";
        let envioCorrecto = false;

        if(use.trim().length <4 || use.length>7){
            msjMostrar += "El nombre no tiene la longitud correcta<br>";
            envioCorrecto = true;
        }
        
        var letraUser = use.charAt(0);
        if(!esMayuscula(letraUser)){
            msjMostrar += "Es minuscula<br>";
            envioCorrecto = true;
        }

        if(envioCorrecto){
            $("#mensajes").html(msjMostrar);
        }
        else{
            $("#mensajes").html("Formulario Enviado.");
        }

    });

    function esMayuscula(letra){
        return letra == letra.toUpperCase();
    }
})