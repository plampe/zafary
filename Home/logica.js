function cambioVentana(letra){
    console.log("inicia funcion");
    if(letra=="a"){
        console.log("if a");
        //document.getElementById('titulosHome').innerHTML = 'Zafary';
        const contDinamico  = document.getElementById('iFrame');
        contDinamico.setAttribute( 'src',  './home1.html');
    }else if(letra=="b"){
        console.log("if b");
        //document.getElementById('titulosHome').innerHTML = 'WhatzApp';
        const contDinamico  = document.getElementById('iFrame');
        contDinamico.setAttribute('src',  '../WhatZapp/whatZapp.html');
        
    }else if(letra=="c"){
        console.log("if c");
       // document.getElementById('titulosHome').innerHTML = 'Zpotify';
        const contDinamico  = document.getElementById('iFrame');
        contDinamico.setAttribute('src','../Zpotify/index.html');

    }


}
