const menuGeneros=document.getElementById("generos-menu");
const menuMiCuenta=document.getElementById("menu-mi-cuenta");
const generosDesplegado=document.getElementById("generos-desplegado");
const menuMiCuentaDesplegado=document.getElementById("mi-cuenta-desplegado");
const cancelarBusqueda=document.getElementById("cancelar-busqueda");
const barraBusqueda=document.getElementById("barra-busqueda");
const contenedorCarrito=document.getElementById("carrito-seccion-productos");
const contenedorGeneralCarrito=document.getElementById("contenedor-carrito");
const nroArticulosContador=document.getElementById("numero-articulos");
let contadorCarrito=0;
contadorCarrito=parseInt(nroArticulosContador.textContent);
const carritoBoton=document.getElementById("carrito-boton");
const hpylpf=document.getElementById("HPYLPF");
const esdla3=document.getElementById("ESDLA3");
const fcent=document.getElementById("FCENTRI");
const pqchr=document.getElementById("PEQCHAIR");
const elantris=document.getElementById("ELANTRIS");
const cuervo=document.getElementById("CUERVO");
let bandera=false;
carritoBoton.addEventListener("click",()=>{
  
  if(bandera==false){
    contenedorGeneralCarrito.style.visibility="visible";
    bandera=true;
  }
  else{
    contenedorGeneralCarrito.style.visibility="hidden";
    bandera=false;
  }
});
hpylpf.addEventListener("click",()=>{
  const XHR=new XMLHttpRequest();
  XHR.open('GET','php/leer_carrito.php',true);
  XHR.send();
  XHR.addEventListener('load',()=>{

  });
  contenedorCarrito.innerHTML=contenedorCarrito.innerHTML+`
      <div>
                  <img src='img/productos/Harry_Potter_y_la_piedra_filosofal.jpg'>
              </div>
              <div class="cont-info-prod">
                  <h2>Harry Potter y la piedra filosofal</h2>
                  <h2>Cantidad: 1</h2>
                  <h2>$359.00</h2>
             
          </div>       
        `;
    contadorCarrito++;
    nroArticulosContador.textContent=contadorCarrito;
});
esdla3.addEventListener("click",()=>{
  contenedorCarrito.innerHTML+=`
        <div>
                  <img src='img/productos/ESDLA_El_retorno_del_rey.png'>
              </div>
              <div class="cont-info-prod">
                  <h2>El señor de los anillos: el retorno del rey</h2>
                  <h2>Cantidad: 1</h2>
                  <h2>$209.00</h2>
          </div>   
  `;
    contadorCarrito++;
    nroArticulosContador.textContent=contadorCarrito;
});
fcent.addEventListener("click",()=>{
  contenedorCarrito.innerHTML+=`
        <div>
                  <img src='img/productos/La_fuerza_centrifuga.png'>
              </div>
              <div class="cont-info-prod">
                  <h2>La fuerza centrífuga</h2>
                  <h2>Cantidad: 1</h2>
                  <h2>$250.00</h2>
          </div>   
  `;
  contadorCarrito++;
    nroArticulosContador.textContent=contadorCarrito;
});
pqchr.addEventListener("click",()=>{
  contenedorCarrito.innerHTML+=`
        <div>
                  <img src='img/productos/Pequeño_chairo_ilustrado.png'>
              </div>
              <div class="cont-info-prod">
                  <h2>Pequeño chairo ilustrado</h2>
                  <h2>Cantidad: 1</h2>
                  <h2>$165.00</h2>
          </div>   
  `;
  contadorCarrito++;
    nroArticulosContador.textContent=contadorCarrito;
});
elantris.addEventListener("click",()=>{
  contenedorCarrito.innerHTML+=`
        <div>
                  <img src='img/productos/fantasia_libros/elantris.png'>
              </div>
              <div class="cont-info-prod">
                  <h2>Elantris</h2>
                  <h2>Cantidad: 1</h2>
                  <h2>$340.00</h2>
          </div>   
  `;
  contadorCarrito++;
    nroArticulosContador.textContent=contadorCarrito;
});

cuervo.addEventListener("click",()=>{
  const XHR=new XMLHTTPRequest();
  XHR.open('POST','php/enviar_carrito.php',ture);
  XHR.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  XHR.send('nombre_libro=El cuervo');
});

menuGeneros.addEventListener("mouseover",()=>generosDesplegado.style.visibility="visible");
menuGeneros.addEventListener("mouseout",()=>generosDesplegado.style.visibility="hidden");
generosDesplegado.addEventListener("mouseover",()=>generosDesplegado.style.visibility="visible");
generosDesplegado.addEventListener("mouseout",()=>generosDesplegado.style.visibility="hidden");
menuMiCuenta.addEventListener("mouseover",()=>menuMiCuentaDesplegado.style.visibility="visible");
menuMiCuenta.addEventListener("mouseout",()=>menuMiCuentaDesplegado.style.visibility="hidden");
menuMiCuentaDesplegado.addEventListener("mouseover",()=>menuMiCuentaDesplegado.style.visibility="visible");
menuMiCuentaDesplegado.addEventListener("mouseout",()=>menuMiCuentaDesplegado.style.visibility="hidden");
barraBusqueda.addEventListener("keyup",()=>{
  if(barraBusqueda.value!=""){
  cancelarBusqueda.style.visibility="visible";
}else{
  cancelarBusqueda.style.visibility="hidden";
}
});

cancelarBusqueda.addEventListener("click",()=>{
  barraBusqueda.value="";
  barraBusqueda.focus();
  cancelarBusqueda.style.visibility="hidden";
}
);
// recuadroLibro.addEventListener("mouseover",()=>{
//         capaOpacaLibro.style.background="transparent";
//         recuadroLibro.style.background="#ffd5f4";
//         recuadroLibro.style.boxShadow="5px 5px #5763ff"
// });
// recuadroLibro.addEventListener("mouseout",()=>{
//   capaOpacaLibro.style.background="rgba(0,0,0,.1)";
//   recuadroLibro.style.background="#DFBFD8";
//   recuadroLibro.style.boxShadow="5px 5px rgba(0,0,0,.3)";
// });

// barraBusqueda.addEventListener("mouseout",()=>barraBusqueda.style.border="1px solid #ff7957");
// barraBusqueda.addEventListener("click",()=>barraBusqueda.style.border="1px solid #e7c140");
