
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <?php require_once 'app/config.php'; ?>
    <?php require_once 'app/dependencies.php'; ?>
</head>
<body>
    <?php
        if(isset($_GET['vista_solicitada'])){
            switch($_GET['vista_solicitada']){
                case 'tarjeta':
                    require_once 'view/card.php';
                    break;
                case 'nav':
                    require_once 'view/nav.php';
                    break;
                case 'form':
                    require_once 'view/form.php';
                    break;
                case 'login':
                    require_once 'view/login.php';
                    break;        
                
            }
        }else {
            require_once 'view/nav.php';
        }
    ?>
</body>
</html>