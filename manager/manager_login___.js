$(document).ready(function(){

    let nombre;
    let contrasenia;

    $('#btn_sesion').click(function(){
        /* console.log($('#nombre').val());
        console.log($('#password').val()); */

        nombre = $('#nombre').val();
        contrasenia = $('#password').val();

        recolector = "bandera_nombre="+nombre+
                    "&bandera_contrasenia="+contrasenia;

        $.ajax({
            type:"POST",
            data:recolector,
            url:"control/control_login.php",
            success: function(r){
                console.log(r);
            }
        });            

    });
});

//15 minutos
//un lenguaje y su importancia
//como se hace una expresion regular en ese lenguajes
//2 ejemplos de expresiones relevantes o de uso
