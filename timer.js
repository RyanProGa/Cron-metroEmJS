
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let tempo;

document.addEventListener('click', function(e){
    const elemento = e.target;

    if (elemento.classList.contains('zerar')){
        clearInterval(tempo);
        relogio.innerHTML='00:00:00';
        segundos = 0
    };

    if (elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(tempo)
        iniciaRelogio();
        
    };

    if (elemento.classList.contains('pausar')){
        relogio.classList.add('pausado');
        clearInterval(tempo);
        
    }
    
});
  
function iniciaRelogio(){

    tempo = setInterval(function(){
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    },1000)
}

function criaHoraDosSegundos(segundos){
    let data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone:'UTC'

    });
}





