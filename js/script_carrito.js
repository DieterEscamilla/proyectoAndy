const menuGeneros=document.getElementById("generos-menu");
const menuMiCuenta=document.getElementById("menu-mi-cuenta");
const generosDesplegado=document.getElementById("generos-desplegado");
const menuMiCuentaDesplegado=document.getElementById("mi-cuenta-desplegado");
const cancelarBusqueda=document.getElementById("cancelar-busqueda");
const masCantidadLibros=document.getElementById("boton-mas-cantidad");
const menosCantidadLibros=document.getElementById("boton-menos-cantidad");
const displayCantidadLibros=document.getElementById("display-cantidad-libros");
const montoTotalCompra=document.getElementById("monto-total");
let cantidadLibros=1;
let montoTotalNumero=0;
menuGeneros.addEventListener("mouseover",()=>generosDesplegado.style.visibility="visible");
menuGeneros.addEventListener("mouseout",()=>generosDesplegado.style.visibility="hidden");
generosDesplegado.addEventListener("mouseover",()=>generosDesplegado.style.visibility="visible");
generosDesplegado.addEventListener("mouseout",()=>generosDesplegado.style.visibility="hidden");
menuMiCuenta.addEventListener("mouseover",()=>menuMiCuentaDesplegado.style.visibility="visible");
menuMiCuenta.addEventListener("mouseout",()=>menuMiCuentaDesplegado.style.visibility="hidden");
menuMiCuentaDesplegado.addEventListener("mouseover",()=>menuMiCuentaDesplegado.style.visibility="visible");
menuMiCuentaDesplegado.addEventListener("mouseout",()=>menuMiCuentaDesplegado.style.visibility="hidden");
 montoTotalNumero=parseInt(montoTotalCompra.textContent);
masCantidadLibros.addEventListener("click",()=>{
      cantidadLibros++;
      displayCantidadLibros.textContent=cantidadLibros;
      montoTotalCompra.textContent=montoTotalNumero*cantidadLibros;
      
});
menosCantidadLibros.addEventListener("click",()=>{
  if(cantidadLibros>1){
      cantidadLibros--;
      displayCantidadLibros.textContent=cantidadLibros;
      montoTotalCompra.textContent=montoTotalCompra.textContent-montoTotalNumero;
  }
});


