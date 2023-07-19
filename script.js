let click = 1;
let pa = 101325;
let psi = 14.6959;
let metros=0;
let operacion = 0;
let cambiarOperacion = 0;
let cambiarOperacionToPsi = 0;
const button = document.getElementById("presion-circle");
let densidad = document.getElementById("densidad").value;
let gravedad = document.getElementById("gravedad").value;
//Fondo Atmosfera
let on = document.getElementById("on");
let off = document.getElementById("off");
let fondo = document.getElementById("fondo");
let sistemaMetrico = document.getElementById("metrico");
let sistemaAtmosfera = document.getElementById("sistema-atmosfera");
let sistemaIngles = document.getElementById("ingles");

//Banderas logicas
let Fondoatmosfera= true;
let Altura = false;
metrico = true;
atmosfera = false;
ingles = false;
FlagDesague = false;

let height = parseInt(window.innerHeight);


var elemento = document.getElementById("contenedor-base-visual"); // Reemplaza "miElemento" con el ID real de tu elemento
var estilo = window.getComputedStyle(elemento);
var alto2 = estilo.getPropertyValue("top");
console.log("Pantalla:"+height);
////console.log(alto2);
////console.log("Top del contenedor base visual:"+alto2);
////console.log("Altura del contenedor:"+(height-parseFloat(alto2)));
let RestanteAlto = height-parseFloat(alto2);
elemento = document.getElementById("span-agua"); // Reemplaza "miElemento" con el ID real de tu elemento
estilo = window.getComputedStyle(elemento);
altoAgua = estilo.getPropertyValue("bottom");
////console.log("Bottom del agua:"+altoAgua);
////console.log("Altura del agua:"+(RestanteAlto-parseFloat(altoAgua)));
//let alturaEstanque = RestanteAlto-parseFloat(altoAgua);
let alturadelAgua = RestanteAlto-parseFloat(altoAgua);
var elemento2 = document.getElementById("span-agua"); // Reemplaza "miElemento" con el ID real de tu elemento
var estilo2 = window.getComputedStyle(elemento2);
var alto3 = estilo2.getPropertyValue("height");
////console.log("Altura del agua verdadera:"+alto3);

////console.log("2%:"+(2/100)*270+"px");
var elemento = document.getElementById("contenedor-base-visual"); // Reemplaza "miElemento" con el ID real de tu elemento
var estilo = window.getComputedStyle(elemento);
var alto2 = estilo.getPropertyValue("height");
let porcentaje = (2/100)*parseFloat(alto2);
////console.log("Altura del agua final:"+(alturadelAgua-porcentaje));

var elemento = document.getElementById("contenedor-base-visual"); // Reemplaza "miElemento" con el ID real de tu elemento
var estilo = window.getComputedStyle(elemento);
var alto2 = estilo.getPropertyValue("top");
////console.log("0.1m: "+(parseFloat(alto2) + porcentaje));

let altoEstanque = parseFloat(alto2);
let calcularHeight = alturadelAgua - porcentaje;

////console.log("Altura:"+calcularHeight);


//Calcular alto fuera del estanque
var primaryElement3 = document.querySelector(".span-presion-circle"); // Reemplaza "miElemento" con el ID real de tu elemento
var primeryStyle3 = window.getComputedStyle(primaryElement3);
var propiedad3 = primeryStyle3.getPropertyValue("width");
//console.log("ancho presion:"+propiedad3);

let anchoPresion = 48;

var primaryElement = document.querySelector(".span-agua"); // Reemplaza "miElemento" con el ID real de tu elemento
var primeryStyle = window.getComputedStyle(primaryElement);
var propiedad = primeryStyle.getPropertyValue("left");
//console.log("ancho span1:"+propiedad);
let principioEstanque = parseFloat(propiedad);

var primaryElement2 = document.querySelector(".span-agua"); // Reemplaza "miElemento" con el ID real de tu elemento
var primeryStyle2 = window.getComputedStyle(primaryElement2);
var propiedad2 = primeryStyle2.getPropertyValue("width");
//console.log("ancho span agua:"+propiedad2);

let finalEstanque = parseFloat(propiedad2)+principioEstanque;
//console.log("inicio:"+principioEstanque);
//console.log("final:"+finalEstanque);

document.getElementById("presion-circle").style.setProperty("--content", "'"+pa+" Pa'");

sistemaMetrico.addEventListener("change", () =>{
    if(sistemaMetrico.checked){
        metrico = true;
        atmosfera = false;
        ingles = false;
        //checked
        sistemaMetrico.checked = true;
        sistemaAtmosfera.checked = false;
        sistemaIngles.checked = false;
        //console.log("Metrico activo");
    }
});

sistemaAtmosfera.addEventListener("change", () =>{
    if(sistemaAtmosfera.checked){
        metrico = false;
        atmosfera = true;
        ingles = false;
        //checked
        sistemaMetrico.checked = false;
        sistemaAtmosfera.checked = true
        sistemaIngles.checked = false;
        //console.log("Atmosfera activo");
    }
});

sistemaIngles.addEventListener("change", () =>{
    if(sistemaIngles.checked){
        metrico = false;
        atmosfera = false;
        ingles = true;
        //checked
        sistemaMetrico.checked = false;
        sistemaAtmosfera.checked = false;
        sistemaIngles.checked = true;
        //console.log("Ingles activo");
    }
});




on.addEventListener("change", function() {
    if (on.checked) {
      off.checked = false;
      fondo.style.background = "linear-gradient(to bottom, #10E0F8, #FFFFFF)";
      //console.log("Fondo Encendido");
      document.getElementById("metros").style.color ="black";
      //console.log("Fondo Apagado");
      document.getElementById("metros").style.color ="black";
      document.getElementById("range").style.border = "2px solid black";
      document.querySelectorAll(".rangeLabel").item(0).style.color ="black";
      Fondoatmosfera = true;
    }
  });

  off.addEventListener("change", function() {
    if (off.checked) {
      on.checked = false;
      fondo.style.background = "black";
      //console.log("Fondo Apagado");

      document.getElementById("metros").style.color ="white";
      document.getElementById("range").style.border = "2px solid grey";
      document.querySelectorAll(".rangeLabel").item(0).style.color ="white";
      Fondoatmosfera = false;
    }
  });




// Cuadricula
let cuadricula = document.getElementById("cuadricula");
  


cuadricula.addEventListener("change", () =>{
    if(cuadricula.checked){
        const NumeroLine = document.querySelectorAll(".line").length;
        for(let i = 0; i <= NumeroLine;i++){
          document.querySelectorAll(".line").item(i).style.display = "block";
          document.querySelectorAll(".n-line").item(i).style.display = "block";
        }
        //console.log("Cuadricula Activada");
    }else{
      const NumeroLine = document.querySelectorAll(".line").length;
      for(let i = 0; i <= NumeroLine;i++){
        document.querySelectorAll(".line").item(i).style.display = "none";
        document.querySelectorAll(".n-line").item(i).style.display = "none";
      }
    }
});



//Función cambio de parametros

function CambiarParametros(){
  densidad = document.getElementById("densidad").value;
  gravedad = document.getElementById("gravedad").value;
  if(densidad < 0){
    densidad = 1000;
    document.getElementById("densidad").value = 1000;
  }else if(densidad > 4000){
    densidad = 4000;
    document.getElementById("densidad").value = 4000;
  }

  if(densidad > 0 && densidad < 300){
    agua.style.backgroundColor = "#3e696e";
    aguaGrifo.style.backgroundColor = "#3e696e";
  }else if(densidad >= 300 && densidad < 500){
    agua.style.backgroundColor = "#2c6970";
    aguaGrifo.style.backgroundColor = "#2c6970";
  }else if(densidad >= 500 && densidad < 700){
    agua.style.backgroundColor = "#2f939e";
    aguaGrifo.style.backgroundColor = "#2f939e";
  }else if(densidad >= 700 && densidad < 900){
    agua.style.backgroundColor = "#29bbcb";
    aguaGrifo.style.backgroundColor = "#29bbcb";
  }else if(densidad >= 900 && densidad <= 1000){
    agua.style.backgroundColor = "#10E0F8";
    aguaGrifo.style.backgroundColor = "#10E0F8";
  }else if(densidad >= 1000 && densidad <= 1100){
    agua.style.backgroundColor = "#10f8ba";
    aguaGrifo.style.backgroundColor = "#10f8ba";
  }else if(densidad >= 1100 && densidad <= 1200){
    agua.style.backgroundColor = "#17d28a";
    aguaGrifo.style.backgroundColor = "#17d28a";
  }else if(densidad >= 1200 && densidad <= 1300){
    agua.style.backgroundColor = "#17d278";
    aguaGrifo.style.backgroundColor = "#17d278";
  }else if(densidad > 1300 && densidad <= 1700){
    agua.style.backgroundColor = "#10f89b";
    aguaGrifo.style.backgroundColor = "#10f89b";
  }else if(densidad > 1700 && densidad <= 2100){
    agua.style.backgroundColor = "#10f84e";
    aguaGrifo.style.backgroundColor = "#10f84e";
  }else if(densidad > 2100 && densidad <= 2500){
    agua.style.backgroundColor = "#68f738";
    aguaGrifo.style.backgroundColor = "#68f738";
  }else if(densidad > 2500 && densidad <= 2900){
    agua.style.backgroundColor = "#97ff21";
    aguaGrifo.style.backgroundColor = "#97ff21";
  }else if(densidad > 2900 && densidad <= 3300){
    agua.style.backgroundColor = "#d3ff21";
    aguaGrifo.style.backgroundColor = "#d3ff21";
  }else if(densidad > 3300 && densidad <= 3600){
    agua.style.backgroundColor = "#dfc61d";
    aguaGrifo.style.backgroundColor = "#dfc61d";
  }else if(densidad > 3600 && densidad <= 4000){
    agua.style.backgroundColor = "#ffdd00";
    aguaGrifo.style.backgroundColor = "#ffdd00";
  }

  if(gravedad < 0){
    document.getElementById("gravedad").value = 9.8;
  }
}

function ReiniciarParametros(){
  densidad = document.getElementById("densidad").value = "1000";
  gravedad = document.getElementById("gravedad").value = "9.8";
  densidad = 1000;
  gravedad = 9.8;

  if(densidad == 1000){
    agua.style.backgroundColor = "#10E0F8";
    aguaGrifo.style.backgroundColor = "#10E0F8";
  }
}

let enviar = document.getElementById("btn-interaccion-parametros");
let reiniciar = document.getElementById("btn-interaccion-parametros-reset");

enviar.addEventListener("click", CambiarParametros);
reiniciar.addEventListener("click", ReiniciarParametros);


    //Logica del range
    function getValue() {
      let rangeD = document.getElementById("range");
      let valueD = rangeD.value;
      document.getElementById("rangeInput").value = valueD;
      
    }

//Grifo - salida de agua
let grifo = document.getElementById("grifo");
let aguaGrifo = document.querySelector(".span-tubo-agua");
let agua = document.getElementById("span-agua");
let base = calcularHeight/3;//80.5
let FlagWidth = false;
let saveRangeValor = 0 ;
let alto = window.innerHeight;

function waterGrifo(){
  let rangeValor = document.getElementById("rangeInput").value;

  if(rangeValor == 1){
    //base = 79;

    base = calcularHeight/3.14;
    if(saveRangeValor >= rangeValor){
      click++;
    }else{
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        click++;
        saveRangeValor = rangeValor;
    }
  }else if(rangeValor == 2){
    //base = 79;
    //console.log("7");

    base = calcularHeight/3.08;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
  }else if(rangeValor != 0){
    //console.log("8");
    base = calcularHeight/3;//80.5
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
        //console.log("actual:"+rangeValor);
        //console.log("Error");
        click++;
      }else{
        //console.log("save:"+saveRangeValor);
        //console.log("actual:"+rangeValor);
        aguaGrifo.style.width = "4.8%";
        setTimeout(() => {
          aguaGrifo.style.width = "0px";
        }, 800);
    
          agua.style.height =(base*rangeValor)+"px";
          FlagDesague = true;
          //console.log(click);
          click++;
          saveRangeValor = rangeValor;
      }
  }
}



grifo.addEventListener("click", () =>{

  waterGrifo();
  /*if(rangeValor <= 1 && rangeValor > 0){
    //base = 76;  
    //console.log("1");

    base = calcularHeight/3.2;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
    base = calcularHeight/3;
  }else if(rangeValor == 1.1){
    //base = 77;
    //console.log("2");

    base = calcularHeight/3.15;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
    base = calcularHeight/3;
  }else if(rangeValor >= 2.3 && rangeValor <= 2.4){
    //base = 79;
    //console.log("3");

    //console.log(calcularHeight);
    base = calcularHeight/3.07;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
    base = calcularHeight/3;
  }else if(rangeValor >= 2.5 && rangeValor <= 2.9){
    //base = 79;
    //console.log("3");

    //console.log(calcularHeight);
    base = calcularHeight/3.03;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
    base = calcularHeight/3;
  }else if(rangeValor > 2 && rangeValor < 2.3){
    //base = 79;
    //console.log("4");
    base = calcularHeight/3.07;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
    base = calcularHeight/3;
  }else if(rangeValor == 1.9){
    //base = 78;
    //console.log("5");

    base = calcularHeight/3.1;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
    base = calcularHeight/3;
  }else if(rangeValor > 1 && rangeValor < 1.9){
    //base = 78;
    //console.log("5");

    base = calcularHeight/3.119;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
    base = calcularHeight/3;
  }else if(rangeValor > 0.1 && rangeValor < 1){
    //base = 81;
    //console.log("6");

    base = calcularHeight/3;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
    base = calcularHeight/3;
  }else if(rangeValor == 2){
    //base = 79;
    //console.log("7");

    base = calcularHeight/3.07;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
    base = calcularHeight/3;
  }else if(rangeValor == 1){
    //base = 79;
    //console.log("7");

    base = calcularHeight/3.14;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
  }else if(rangeValor == 2){
    //base = 79;
    //console.log("7");

    base = calcularHeight/3.1;
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      //console.log("Error");
      click++;
    }else{
      //console.log("save:"+saveRangeValor);
      //console.log("actual:"+rangeValor);
      aguaGrifo.style.width = "4.8%";
      setTimeout(() => {
        aguaGrifo.style.width = "0px";
      }, 800);
  
      agua.style.height =(base*rangeValor)+"px";
      FlagDesague = true;
        //console.log(click);
        click++;
        saveRangeValor = rangeValor;
    }
  }else if(rangeValor != 0){
    //console.log("8");
    base = calcularHeight/3;//80.5
    if(saveRangeValor >= rangeValor){
      //console.log("save:"+saveRangeValor);
        //console.log("actual:"+rangeValor);
        //console.log("Error");
        click++;
      }else{
        //console.log("save:"+saveRangeValor);
        //console.log("actual:"+rangeValor);
        aguaGrifo.style.width = "4.8%";
        setTimeout(() => {
          aguaGrifo.style.width = "0px";
        }, 800);
    
          agua.style.height =(base*rangeValor)+"px";
          FlagDesague = true;
          //console.log(click);
          click++;
          saveRangeValor = rangeValor;
      }
  }*/
});



//Grifo - desague
let desague = document.getElementById("desague");
desague.addEventListener("click", () =>{
  if(FlagDesague){
    aguaGrifo.style.width = "0px";
    agua.style.height ="0px";
    FlagDesague = false;
    click++;
    saveRangeValor = 0;
  }
});

//Cambio en el ancho de la presion
let width = parseFloat(window.innerWidth);
setInterval(() => {
  width = parseFloat(window.innerWidth);
  if(width > 1080){
  anchoPresion = 49;
  }else if(width > 980 && width <= 1080){
    anchoPresion = 48;
  }else if(width <= 980 ){
    anchoPresion = 43;
  }
}, 100);

//Arrastrar presion
    // Mantén un seguimiento de la posición del mouse y la posición inicial del botón
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let posY = document.getElementById("posY");
    let posX = document.getElementById("posX");
    let strMetros = "";


    button.addEventListener("mousedown", dragMouseDown);


    function dragMouseDown(event) {
      // Guarda la posición inicial del mouse
      pos3 = event.clientX;
      pos4 = event.clientY;
      //console.log("Posición Antigua en x:"+pos3);
      //console.log("Posición Antigua en y:"+pos4);  
      // Establece un controlador de eventos para el movimiento del mouse
      document.addEventListener("mousemove", elementDrag);
    }
    
    function elementDrag(event) {
      // Calcula la nueva posición del botón
      //console.log();
      pos1 = pos3 - event.clientX;
      pos2 = pos4 - event.clientY;
      pos3 = event.clientX;
      pos4 = event.clientY;
      //console.log("Posición X:"+pos3);
      //console.log("Posición Y:"+pos4);
      // Establece la nueva posición del botón
      button.style.top = (button.offsetTop - pos2) + "px";
      button.style.left = (button.offsetLeft - pos1) + "px";
      let posicionX = button.offsetLeft - pos1;
      let posicionY = button.offsetTop - pos2;

      document.querySelector(".posY").innerHTML = "posY:"+posicionY;
      document.querySelector(".posX").innerHTML = "posX:"+posicionX;

      let alturaPed = (altoEstanque - 43) + porcentaje;
      let base = calcularHeight/30;
      /*//console.log(alturaPed+((base*9)+8)+"-"+(alturaPed+(base*10)+8));
      //console.log("ih="+(alturaPed));
      //console.log("eh="+(alturaPed+base));*/


      //console.log(posicionY);
      if(height != 0){
      if(saveRangeValor == 3){
        if(posicionY >= alturaPed && posicionY <= alturaPed + (base) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + (base+1) && posicionY <= alturaPed + (base*2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*2)) && posicionY <= alturaPed + ((base*3)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*3)) && posicionY <= alturaPed + ((base*4)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*4)) && posicionY <= alturaPed + ((base*5)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*5)) && posicionY <= alturaPed + ((base*6)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*6)) && posicionY <= alturaPed + ((base*7)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*7)) && posicionY <= alturaPed + ((base*8)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*8)) && posicionY <= alturaPed + ((base*9)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*9)) && posicionY <= alturaPed + ((base*10)+8) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*10)) && posicionY <= alturaPed + ((base*11)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 2.9){
        if(posicionY >= alturaPed + (base+1) && posicionY <= alturaPed + (base*2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*2)) && posicionY <= alturaPed + ((base*3)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*3)) && posicionY <= alturaPed + ((base*4)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*4)) && posicionY <= alturaPed + ((base*5)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*5)) && posicionY <= alturaPed + ((base*6)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*6)) && posicionY <= alturaPed + ((base*7)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*7)) && posicionY <= alturaPed + ((base*8)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*8)) && posicionY <= alturaPed + ((base*9)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*9)) && posicionY <= alturaPed + ((base*10)+8) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*10)) && posicionY <= alturaPed + ((base*11)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 2.8){
        if(posicionY >= alturaPed + ((base*2)) && posicionY <= alturaPed + ((base*3)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*3)) && posicionY <= alturaPed + ((base*4)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*4)) && posicionY <= alturaPed + ((base*5)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*5)) && posicionY <= alturaPed + ((base*6)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*6)) && posicionY <= alturaPed + ((base*7)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*7)) && posicionY <= alturaPed + ((base*8)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*8)) && posicionY <= alturaPed + ((base*9)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*9)) && posicionY <= alturaPed + ((base*10)+8) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*10)) && posicionY <= alturaPed + ((base*11)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 2.7){
        if(posicionY >= alturaPed + ((base*3)) && posicionY <= alturaPed + ((base*4)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*4)) && posicionY <= alturaPed + ((base*5)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*5)) && posicionY <= alturaPed + ((base*6)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*6)) && posicionY <= alturaPed + ((base*7)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*7)) && posicionY <= alturaPed + ((base*8)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*8)) && posicionY <= alturaPed + ((base*9)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*9)) && posicionY <= alturaPed + ((base*10)+8) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*10)) && posicionY <= alturaPed + ((base*11)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 2.6){
        if(posicionY >= alturaPed + ((base*4)) && posicionY <= alturaPed + ((base*5)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*5)) && posicionY <= alturaPed + ((base*6)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*6)) && posicionY <= alturaPed + ((base*7)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*7)) && posicionY <= alturaPed + ((base*8)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*8)) && posicionY <= alturaPed + ((base*9)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*9)) && posicionY <= alturaPed + ((base*10)+8) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*10)) && posicionY <= alturaPed + ((base*11)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 2.5){
        if(posicionY >= alturaPed + ((base*5)) && posicionY <= alturaPed + ((base*6)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*6)) && posicionY <= alturaPed + ((base*7)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*7)) && posicionY <= alturaPed + ((base*8)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*8)) && posicionY <= alturaPed + ((base*9)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*9)) && posicionY <= alturaPed + ((base*10)+8) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*10)) && posicionY <= alturaPed + ((base*11)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 2.4){
        if(posicionY >= alturaPed + ((base*6)) && posicionY <= alturaPed + ((base*7)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*7)) && posicionY <= alturaPed + ((base*8)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*8)) && posicionY <= alturaPed + ((base*9)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*9)) && posicionY <= alturaPed + ((base*10)+8) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*10)) && posicionY <= alturaPed + ((base*11)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 2.3){
        if(posicionY >= alturaPed + ((base*7)) && posicionY <= alturaPed + ((base*8)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*8)) && posicionY <= alturaPed + ((base*9)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*9)) && posicionY <= alturaPed + ((base*10)+8) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*10)) && posicionY <= alturaPed + ((base*11)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 2.2){
        if(posicionY >= alturaPed + ((base*8)) && posicionY <= alturaPed + ((base*9)) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*9)) && posicionY <= alturaPed + ((base*10)+8) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*10)) && posicionY <= alturaPed + ((base*11)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 2.1){
        if(posicionY >= alturaPed + ((base*9)) && posicionY <= alturaPed + ((base*10)+8) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*10)) && posicionY <= alturaPed + ((base*11)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 2){
        if(posicionY >= alturaPed + ((base*10)+4) && posicionY <= alturaPed + ((base*11)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 1.9){
        if(posicionY >= alturaPed + ((base*11)) && posicionY <= alturaPed + ((base*12)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 1.8){
        if(posicionY >= alturaPed + ((base*12)) && posicionY <= alturaPed + ((base*13)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 1.7){
        if(posicionY >= alturaPed + ((base*13)) && posicionY <= alturaPed + ((base*14)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 1.6){
        if(posicionY >= alturaPed + ((base*14)) && posicionY <= alturaPed + ((base*15)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 1.5){
        if(posicionY >= alturaPed + ((base*15)) && posicionY <= alturaPed + ((base*16)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 1.4){
        if(posicionY >= alturaPed + ((base*16)) && posicionY <= alturaPed + ((base*17)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 1.3){
        if(posicionY >= alturaPed + ((base*17)) && posicionY <= alturaPed + ((base*18)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 1.2){
        if(posicionY >= alturaPed + ((base*18)) && posicionY <= alturaPed + ((base*19)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 1.1){
        if(posicionY >= alturaPed + ((base*19)) && posicionY <= alturaPed + ((base*20)+9) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*20)) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 1){
        if(posicionY >= alturaPed + ((base*20)+4.5) && posicionY <= alturaPed + ((base*21)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 0.9){
        if(posicionY >= alturaPed + ((base*21)) && posicionY <= alturaPed + ((base*22)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.9;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 0.8){
        if(posicionY >= alturaPed + ((base*22)) && posicionY <= alturaPed + ((base*23)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.8;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 0.7){
        if(posicionY >= alturaPed + ((base*23)) && posicionY <= alturaPed + ((base*24)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.7;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 0.6){
        if(posicionY >= alturaPed + ((base*24)) && posicionY <= alturaPed + ((base*25)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false; 
        }else if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.6;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 0.5){
        if(posicionY >= alturaPed + ((base*25)) && posicionY <= alturaPed + ((base*26)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.5;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 0.4){
        if(posicionY >= alturaPed + ((base*26)) && posicionY <= alturaPed + ((base*27)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.4;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 0.3){
        if(posicionY >= alturaPed + ((base*27)) && posicionY <= alturaPed + ((base*28)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.3;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 0.2){
        if(posicionY >= alturaPed + ((base*28)) && posicionY <= alturaPed + ((base*29)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.2;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 0.1){
        if(posicionY >= alturaPed + ((base*29)) && posicionY <= alturaPed + ((base*30)+2) && posicionX >= (principioEstanque-anchoPresion) && posicionX <= (finalEstanque-anchoPresion)){
          metros = 0.1;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }else if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
      if(saveRangeValor == 0){
        if(posicionY => 0 && posicionY < 265){
          metros = 0;
            Altura = true;
            document.getElementById("metros").innerText = "Metros:"+metros;
        }else{
          metros = 0;
          document.getElementById("metros").innerText = "Metros:"+metros;
          Altura = false;
        }
      }
    }

      function CalcularPresion(){
        densidad = document.getElementById("densidad").value;
        gravedad = document.getElementById("gravedad").value;
        operacion = densidad * gravedad * metros;
      }

      function CalcularPresionAtm(){
        CalcularPresion();
        cambiarOperacion = operacion / 101325;
        operacion2 = Number(cambiarOperacion.toFixed(4));
        //console.log("number:"+operacion2);
      }

      function ConvertirAtmToPSI(){
        CalcularPresionAtm();
        cambiarOperacionToPsi = operacion2*psi;
        cambiarOperacionToPsi = Number(cambiarOperacionToPsi.toFixed(4));
        //console.log("number2:"+cambiarOperacionToPsi);

      }

      //Condiciones para la variación de parametros
      if(metrico){
        if(Altura && Fondoatmosfera){//Si está arriba del estanque y con atmosfera
          pa = 101325
          button.style.setProperty("--content", "'"+pa+" Pa'");//Por defecto
        }else if(!Fondoatmosfera && !FlagDesague || Altura){//Si está sin atmosfera y sin agua o arriba del estanque
          button.style.setProperty("--content", "'0 Pa'");//Por defecto
        }else if(!Altura && !FlagDesague && Fondoatmosfera){
          pa = 101325
          button.style.setProperty("--content", "'"+pa+" Pa'");//Por defecto
        }else if(!Altura && FlagDesague && Fondoatmosfera){//Si está en el estanque y con agua, con atmosfera
          CalcularPresion();
          pa = 101325
          operacion = operacion + pa;
          operacion = Number(operacion.toFixed(4));
          button.style.setProperty("--content", "'"+operacion+" Pa'");//Variante
        }else if(!Altura && FlagDesague && !Fondoatmosfera){//Si está en el estanque y con agua, sin atmosfera
          CalcularPresion();
          operacion = Number(operacion.toFixed(4));
          button.style.setProperty("--content", "'"+operacion+" Pa'");//Variante
        }
      }else if(atmosfera){
        if(Altura && Fondoatmosfera){
          pa = 1;
          button.style.setProperty("--content", "'"+pa+" Atm'");//Por defecto
        }else if(!Fondoatmosfera && !FlagDesague || Altura){
          button.style.setProperty("--content", "'0 Atm'");//Por defecto
        }else if(!Altura && !FlagDesague && Fondoatmosfera){
          pa = 1;
          button.style.setProperty("--content", "'"+pa+" Atm'");//Por defecto
        }else if(!Altura && FlagDesague && Fondoatmosfera){
          CalcularPresionAtm();
          result = parseFloat(operacion2);
          result +=1;
          result = Number(result.toFixed(4));
          button.style.setProperty("--content", "'"+result+" Atm'");//Por defecto
        }else if(!Altura && FlagDesague && !Fondoatmosfera){
          CalcularPresionAtm();
          result = parseFloat(operacion2);
          result = Number(result.toFixed(4));
          button.style.setProperty("--content", "'"+result+" Atm'");//Por defecto
        }
      }else if(ingles){
        if(Altura && Fondoatmosfera){
          button.style.setProperty("--content", "'"+psi+" Psi'");//Por defecto
        }else if(!Fondoatmosfera && !FlagDesague || Altura){
          button.style.setProperty("--content", "'0 Psi'");//Por defecto
        }else if(!Altura && !FlagDesague && Fondoatmosfera){
          button.style.setProperty("--content", "'"+psi+" Psi'");//Por defecto
        }else if(!Altura && FlagDesague && Fondoatmosfera){
          ConvertirAtmToPSI();
          cambiarOperacionToPsi = parseFloat(cambiarOperacionToPsi);
          cambiarOperacionToPsi = cambiarOperacionToPsi + psi;
          cambiarOperacionToPsi = Number(cambiarOperacionToPsi.toFixed(4));
          //cambiarOperacionToPsi = cambiarOperacionToPsi + psi;
          button.style.setProperty("--content", "'"+cambiarOperacionToPsi+" Psi'");//Por defecto
        }else if(!Altura && FlagDesague && !Fondoatmosfera){
          ConvertirAtmToPSI();
          cambiarOperacionToPsi = Number(cambiarOperacionToPsi.toFixed(4));
          button.style.setProperty("--content", "'"+cambiarOperacionToPsi+" Psi'");//Por defecto
        }
      }

    }
    


    // Agrega un controlador de eventos para soltar el botón del mouse
    document.addEventListener("mouseup", closeDragElement);
    
    function closeDragElement() {
      // Elimina el controlador de eventos del mouse
      document.removeEventListener("mousemove", elementDrag);
    }
