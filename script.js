/* function acao() {
    document.write("executando ....<br/>");
} 

temporizador
setInterval(acao, 2000);

setInterval(()=>{document.write("Executando atraves do arrow function ... <br/>")
},1000);

clearInterval(timer);

var time = setInterval(()=>{document.write("Executando atraves do arrow function ... <br/>")
},1000);*/

//outro temporizador
function acao2(){
    document.write("Executando com o setTimeout <br/>");
}

setTimeout(acao2, 3000)

setTimeout(()=>{
    document.write("Executando com arrow funcition")
}, 4000);