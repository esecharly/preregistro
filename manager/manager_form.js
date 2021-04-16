$(document).ready(function(){
    
    let nombre;
    $('#btn_enviar').click(function(){
        nombre = $('nombre').val();

        recolector = "bandera_nombre="+nombre;
        
        $.ajax({
            type: 'POST',
            data: {
                "bandera_nombre": nombre
            },
            url: 'control/control_form.php',
            success: function(resultado){       //promesa
                console.log(resultado);
            }
        });


    })
});