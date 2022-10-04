<?php
	function conectar($db){
		try{
			$conn=new PDO("mysql:host=127.0.0.1;dbname=$db;charset=utf8",'root','');	
			return $conn;
		}catch(PDOException $e){
			echo"Error: ".$e->getMessage();
		}
	}
?>