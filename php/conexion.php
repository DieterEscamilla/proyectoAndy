<!DOCTYPE html>
<html>
<head>
	<title>CALCULADROA BÁSICA PHP</title>
	<style>
		.formulario{
			display:flex;
			flex-wrap:wrap;
			width:100%;
		}
		.cont-numeros{
			width:100%;
		}
		.cont-btns{
			display:flex;
			flex-wrap: wrap;

			width:100%
		}
		.btn{
			padding:20px;
			margin:50px;
			
			
			background:skyblue;
		}


	</style>
</head>
<body>

	<form class="formulario">
		<div class="cont-numeros">
			<input class="in-numero" type="number" name="">
			<input class="in-numero" type="number" name="">
		</div>
		<div class="cont-btns">		
			<button class="btn">SUMAR</button>
			<button class="btn">RESTAR</button>
			<button class="btn">DIVIDIR</button>
			<button class="btn">MULTIPLICAR</button>
			<button class="btn">MÓDULO</button>
		</div>
	</form>
</body>
</html>