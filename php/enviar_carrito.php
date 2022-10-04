<?php
	$host="localhost";
	$bd_nombre="libros";
	$username="root";
	$password="";
	$conexion=new PDO("mysql:host=$host;dbname=$bd_nombre","root","");
	if($conexion==true){
    echo"La conexión con la base de datos se ha establecido de manera exitosa.";
	}else{
  	echo"Ha ocurrido un error en la conexión con la base de datos alphabooks";
	}
	$nombre_libro=$_POST['nombre_libro'];
	$insertar_articulo=´INSERT´;
?>