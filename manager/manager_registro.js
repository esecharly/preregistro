$(document).ready(function (){

    function valida_vacios(){
        if ($('#registro_nombre').val() =="") {
            swal('Upps', 'Ingresa tu nombre por favor', 'warning')
            return false;
        }
    };

    $('#btn_registro_usuario').click(function (){

    });
});