$(document).ready(function() {

    function valida_vacios(){
        if ($('#registro_nombre').val() =="") {
            swal('Upps', 'Ingresa tu nombre por favor', 'warning');
            return false;
        }
        if ($('#registro_paterno').val() =="") {
            swal('Upps', 'Ingresa tu nombre por favor', 'warning');
            return false;
        }
        if ($('#registro_materno').val() =="") {
            swal('Upps', 'Ingresa tu nombre por favor', 'warning');
            return false;
        }
        if ($('#registro_nombre').val() =="") {
            swal('Upps', 'Ingresa tu nombre por favor', 'warning');
            return false;
        }
    };

    $('#btn_registro_usuario').click(function() {
        valida_vacios();
    });
});