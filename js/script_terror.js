const menuGeneros=document.getElementById("generos-menu");
const menuMiCuenta=document.getElementById("menu-mi-cuenta");
const generosDesplegado=document.getElementById("generos-desplegado");
const menuMiCuentaDesplegado=document.getElementById("mi-cuenta-desplegado");
menuGeneros.addEventListener("mouseover",()=>generosDesplegado.style.visibility="visible");
menuGeneros.addEventListener("mouseout",()=>generosDesplegado.style.visibility="hidden");
generosDesplegado.addEventListener("mouseover",()=>generosDesplegado.style.visibility="visible");
generosDesplegado.addEventListener("mouseout",()=>generosDesplegado.style.visibility="hidden");
menuMiCuenta.addEventListener("mouseover",()=>menuMiCuentaDesplegado.style.visibility="visible");
menuMiCuenta.addEventListener("mouseout",()=>menuMiCuentaDesplegado.style.visibility="hidden");
menuMiCuentaDesplegado.addEventListener("mouseover",()=>menuMiCuentaDesplegado.style.visibility="visible");
menuMiCuentaDesplegado.addEventListener("mouseout",()=>menuMiCuentaDesplegado.style.visibility="hidden");