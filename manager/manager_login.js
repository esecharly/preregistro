$(document).ready(function(){

    $('#btn_sesion').click(function(){
        /* console.log($('#nombre').val());
        console.log($('#password').val()); */

        $.ajax({
            type:"POST",
            data:{
                "nombre": $('#nombre').val(),
                "password": $('#password').val()
            },
            url:"control/control_login.php",
            success: r=>{
                console.log(r);
            }
        });            

    });
});

//15 minutos
//un lenguaje y su importancia
//como se hace una expresion regular en ese lenguajes
//2 ejemplos de expresiones relevantes o de uso
