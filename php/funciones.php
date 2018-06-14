
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
function comprobarMatricula($matricula){
    $conexion = mysqli_connect("localhost", "transportes", "transportes", "empresaTransporte");
$sql = "SELECT MATRICULA FROM transportistas WHERE MATRICULA = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("s",$matricula);
$stmt->execute();
$stmt->store_result();
    if($stmt->num_rows == 1){
        return true;
    }
    else{
        return false;
    }
}
function comprobarLogin($user,$pass){
    $conexion = mysqli_connect("localhost", "transportes", "transportes", "empresaTransporte");
    $sql = "SELECT * FROM USERS WHERE nickName = ? && password = ?";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("ss",$user,$pass);
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows == 1){
            
            return true;
    
            //echo $user
        }
        else{
            return false;
        }
}
function obtenerToken($headers){
    $token = "null";
    if(isset($headers['Authorization'])){
        $matches = array();
        preg_match('/Token (.*)/', $headers['Authorization'], $matches);
        if(isset($matches[1])){
            
          $token = $matches[1];
        }
      }
      return $token;
}
function insertarTransportista($datos){
    $password = $datos->matricula."%".$datos->nombre;
    $conexion = mysqli_connect("localhost", "transportes", "transportes", "empresaTransporte");
$sql = "INSERT INTO transportistas (matricula,password, nombre, apellido1,apellido2, fechaNac, direccion, ciudad, provincia, pais, email, telefono, CP) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
$stmt = $conexion->prepare($sql);
mandarEmail($datos->email,$datos->matricula,$password);
$stmt->bind_param("sssssssssssii",$datos->matricula,$password,$datos->nombre,$datos->apellido1,$datos->apellido2,$datos->fechaNac,$datos->direccion,$datos->ciudad,$datos->provincia,$datos->pais,$datos->email,$datos->telefono,$datos->cp);
        if($stmt->execute()){
            mysqli_close($conexion);
            return true;
            
        }
        else{
            mysqli_close($conexion);
            return false;
        }
}
function mandarEmail($email,$matricula,$password){
$mail = new PHPMailer();
          $mail->SMTPAutoTLS = false;
          $mail->SMTPDebug = 0;                                 // Enable verbose debug output
          $mail->isSMTP();                                      // Set mailer to use SMTP
          $mail->Host = 'webmail.letslearn.es';              // Specify main and backup SMTP servers
          $mail->SMTPAuth = true;                               // Enable SMTP authentication
          $mail->SMTPSecure = false;                            // Enable TLS encryption, `ssl` also accepted
          //$mail->SMTPAuth = false;
          //$mail->SMTPSecure = false;
          $mail->Username = 'appmovil@letslearn.es';      // SMTP username
          $mail->Password = 'mandayona7';                         // SMTP password
          $mail->Port = 25;                                    // TCP port to connect to

          //Recipients
          $mail ->charSet = "UTF-8";
          $mail->setFrom('appmovil@letslearn.es', 'TRANS CARGO');
          $mail->addAddress($email);
          $mail->addReplyTo('appmovil@letslearn.es', 'NO REPLY');
          $mail->isHTML(false);
                                      // Set email format to HTML
          $mail->Subject = 'Trans Cargo Registro';
          $mail->Body = "Bienvenido a Trans Cargo, aqui tiene sus datos de usuario \n\r<br> <p>User: $matricula </p> \n\r <p>Password: $password </p></body></html>";
          $mail->Send();
}
?>