<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type,Authorization");
use \Firebase\JWT\JWT;
require_once "./vendor/firebase/php-jwt/src/JWT.php";
include("funciones.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$conexion = mysqli_connect("localhost", "transportes", "transportes", "empresaTransporte");
$headers = apache_request_headers();

if($conexion){
    $respuesta = array();
    switch($request->action){
        // logIn
        case 1:
        $user = $request->user;
        $pass = md5($request->pass);
        $sql = "SELECT * FROM users WHERE nickName = ? && password = ?";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("ss",$user,$pass);
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows == 1){
            $respuesta['ret'] = "ok";
            $time = time();
            $key = "ejemplo";
            $token = array (
                'iat' => $time,
                'exp' => $time + (60 * 60),
                'idUser' => $user,
                'passUser' => $pass
            );
            $jwt = JWT::encode($token, $key);
            
            $respuesta['token'] = $jwt;
            //echo $user
        }
        else{
            $respuesta['ret'] = "notok";
        }
        
        break;
        // comprobarConexion
        case 2:
        print_r($headers);
  $token = obtenerToken($headers);
 echo $token;
        
  $key = "ejemplo";
  
  if($token != "null"){
    $decoded = JWT::decode($token, $key, array('HS256'));
    if(comprobarLogin($decoded->idUser,$decoded->passUser)){
        $respuesta['ret'] = "ok";
    }
    else{
        
        $respuesta['ret'] = "notok";
    }
  }
  else{
    print_r("here");
      $respuesta ['ret'] = "notok";
  }
  
        break;
        case 3:
        //crearTransportista
        
        if($request->datos->nombre != null && $request->datos->apellido1 != null && $request->datos->direccion != null && $request->datos->ciudad != null && $request->datos->provincia != null && $request->datos->pais != null && $request->datos->email != null && $request->datos->telefono != null && $request->datos->matricula != null && $request->datos->cp != null){
            if(strlen($request->datos->telefono) == 9){
                if(filter_var($request->datos->email,FILTER_VALIDATE_EMAIL)){
                    if(preg_match("|\d{4}\w{3}|",$request->datos->matricula)){
                        if(comprobarMatricula($request->datos->matricula) == false){
                            if(insertarTransportista($request->datos) == true){
                                $respuesta['error']="null";
                                $respuesta['ret']="ok";
                            }
                            else{
                                $respuesta['error']="Error en la insercion";
                                $respuesta['ret']="notok";
                            }
                        }
                        else{
                            $respuesta['error']="Matricula ya existente";
                            $respuesta['ret']="notok";
                        }
                    }
                    //matricula syntax
                    else{
                        $respuesta['error']="Matricula con mal syntaxis";
                        $respuesta['ret']="notok";
                    }
                }
                //email
                else{
                    $respuesta['error']="Correo incorrecto";
                    $respuesta['ret']="notok";
                }
            }
            //telefono
            else{
                $respuesta['error']="Telefono incorrecto";
                $respuesta['ret']="notok";
            }
        }
        else{
            $respuesta['error']="Campos sin rellenar";
            $respuesta['ret']="notok";
        }
        break;
        //log out
        case 4:
       
            //if(comprobarLogin($decoded->idUser,$decoded->passUser)){
                $filtroAux = trim($request->filtro);
                $filtro = "%".$filtroAux."%";
                $sql = "SELECT * FROM transportistas WHERE matricula LIKE ?";
                $stmt = $conexion->prepare($sql);
                $stmt->bind_param("s",$filtro);
                $stmt->execute();
                $result = $stmt->get_result();
                $stmt->store_result();
                $cont = 0;
                while($row = $result->fetch_assoc()){
                    $respuesta['transportistas'][$cont] = $row;
                    $cont++;
                }
                
                $respuesta['ret'] = "ok";
            //}
           // else{
           //     $respuesta['ret'] = "notok";
           // }
        
        break;
        case 5:
        /* $token = obtenerToken($headers);
        $key = "ejemplo";
        
        if($token != "null"){ */
            // $decoded = JWT::decode($token, $key, array('HS256'));
            // if(comprobarLogin($decoded->idUser,$decoded->passUser)){
                $texto = "%".$request->campoTexto."%";
                if($request->campoTexto != null && $request->fechaInicio != null){
                    $sql = "SELECT * FROM pedidos WHERE matricula_trans LIKE ? AND (fecha BETWEEN ? AND ?)";
                    $stmt = $conexion->prepare($sql);
                    $stmt->bind_param("sss",$texto,$request->fechaInicio,$request->fechaFin);
                }
                else if($request->campoTexto == null && $request->fechaInicio != null){
                    $sql = "SELECT * FROM pedidos WHERE fecha BETWEEN ? AND ?";
                    $stmt = $conexion->prepare($sql);
                    $stmt->bind_param("ss",$request->fechaInicio,$request->fechaFin);
                }
                else if($request->campoTexto != null && $request->fechaInicio == null){
                    $sql = "SELECT * FROM pedidos WHERE matricula_trans LIKE ?";
                    $stmt = $conexion->prepare($sql);
                    $stmt->bind_param("s",$texto);
                }
                else{
                    $sql = "SELECT * FROM pedidos";
                    $stmt = $conexion->prepare($sql);
                    
                
                }
                
                
                $stmt->execute();
                $result = $stmt->get_result();
                $stmt->store_result();
                $cont = 0;
                while($row = $result->fetch_assoc()){
                    $respuesta['pedidos'][$cont] = $row;
                    $cont++;
                }
                
                $respuesta['ret'] = "ok";
        //     }
        //     else{
        //         $respuesta['ret'] = "notok";
        //     }
        // }
        // else{
        //     $respuesta ['ret'] = "notok";
        // }
        break;
        case 6:
        $user = $request->user;
        $pass = $request->pass;
        $sql = "SELECT * FROM transportistas WHERE matricula = ? && password = ?";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("ss",$user,$pass);
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows == 1){
            $respuesta['ret'] = "ok";
            $time = time();
            $key = "ejemplo";
            $token = array (
                'iat' => $time,
                'exp' => $time + (60 * 60),
                'idUser' => $user,
                'passUser' => $pass
            );
            //echo $user
        }
        else{
            $respuesta['ret'] = "notok";
        }
        break;
        case 7:
        
        $sql = "UPDATE `transportistas` SET `password`= ?, `apellido1` = ?, `apellido2` = ?, `direccion` = ?, `provincia` = ?, `ciudad` = ?, `CP` = ?, `telefono` = ?, `email` = ? WHERE matricula = ?";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("ssssssssss",$request->datos->password1,$request->datos->apellido1,$request->datos->apellido2,$request->datos->direccion,$request->datos->provincia, $request->datos->ciudad,$request->datos->codPost,$request->datos->telefono,$request->datos->email,$request->matricula);
        if($stmt->execute()){
            
            $respuesta['ret'] = "ok";
        }
        else{
            $respuesta['ret'] = "notok";
        }
        break;
        case 8:
        $sql = "SELECT * FROM transportistas WHERE matricula = ?";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("s",$request->matricula);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->store_result();
        $cont = 0;
        while($row = $result->fetch_assoc()){
            $respuesta['transportistas'][$cont] = $row;
            $cont++;
        }
        
        $respuesta['ret'] = "ok";

        break;
        case 9:
        $sql = "SELECT * FROM pedidos WHERE matricula_trans = ?";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("s",$request->matricula);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->store_result();
        $cont = 0;
        while($row = $result->fetch_assoc()){
            $respuesta['pedidos'][$cont] = $row;
            $cont++;
        }
        $respuesta['ret'] = "ok";
        break;
    }
}
else{
    $respuesta['error']="BBDD Error";
}
$respuesta = json_encode($respuesta);
echo $respuesta;
?>