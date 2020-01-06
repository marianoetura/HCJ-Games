var fire = document.getElementById("fire");
var reload = document.getElementById("reload");

fire.addEventListener("click",RouletteFire);
reload.addEventListener("click",RouletteReload);

let gun = [0,0,0,0,0,0];
let capacity = 6;
let c = 0;
let b = 0;
function RouletteRReload(){
    //wait(1000)
    document.getElementById("imagen").src="https://i.imgur.com/aCcPPPe.gif";
    if (c === 6){
        c=0;
       return
    }
    let bullet = Math.trunc(Math.random() * (6 - 0) + 0);
    if (bullet%2==0){
       gun[c]=1
       b++
    }
    document.getElementById("bullet"+c).style.backgroundColor="blue"
    //alert("Cargada posicion: "+(1+c))
    document.getElementById("respuesta").textContent="Cargada Posicion:"+(1+c);
    if (c === 5){
        document.getElementById("respuesta").textContent="Hay: "+b+" balas en el arma";
        b=0;
    }
    document.getElementById("bullet"+c).title=(c+1)
    c++
    //RouletteRReload()
}

function RouletteReload() {
    let bullet = Math.trunc(Math.random() * (6 - 0) + 0);
    gun[bullet]=1;
    document.getElementById("imagen").src="https://i.imgur.com/aCcPPPe.gif";
    for (j=0; j<capacity; j++){
        let actual = "bullet"+j
        var elemento = document.getElementById(actual)
        elemento.style.backgroundColor="blue";
    }
    document.getElementById("respuesta").textContent="Gun Loaded Suscesfully"
    //alert("Gun Loaded Suscesfully");
}

position = 0;
function RouletteFire(){
    counter = 0;
    for (j=0;j<capacity;j++) {
        counter++;
        if(gun[j]==1){
            break;
        }
        if (counter==capacity){
            //alert("Recargue el Arma por favor");
            document.getElementById("respuesta").textContent="Reload the Gun Please"
            return
        }
    }
    let actual = "bullet"+position
    var elemento = document.getElementById(actual)
    if (gun[position]==1){
        elemento.style.backgroundColor="red";
        document.getElementById("imagen").src="https://media1.tenor.com/images/4e3cd9d445d972c97fc2f154856c4d85/tenor.gif?itemid=7897285";
        //alert("RIP (F)");
        document.getElementById("respuesta").textContent="RIP (F)"
        gun[position]=0;
        position=0;
    } else {
        document.getElementById("imagen").src="https://media.tenor.com/images/be2abdc7be5262c1e2d3e2c9d7656a51/tenor.gif";
        elemento.style.backgroundColor="green";
        //alert("*Click")
        document.getElementById("respuesta").textContent="*Click"
        position++
    }
}

//Esto esta horrible, no hacerlo en casa

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }