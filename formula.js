const capital = document.getElementById('capital');
const tInteres = document.getElementById("tInteres");
const tiempo =  document.getElementById("tiempo");
const enviar = document.getElementById("enviar");
const periodo = document.getElementById("periodo");
const resultado = document.getElementById("resultado");
const inputs = document.getElementById("vidrio__inputs");
const resultados = document.getElementById("vidrio__resultados");
let presionarEnviar = false;

const interesCompuesto = (capital,tInteres,tiempo)=>{
    let capitalFinal
    for(i=0; i < tiempo; i++){
        let interes = capital / 100 * tInteres;
        let valorFinal = capital + interes;
        capital = valorFinal;
        capitalFinal = capital;
        const li = document.createElement('ul');
        li.innerHTML = `En el periodo ${i + 1} tus rendimientos fueron de: ${interes.toFixed(2)}<br>`;
        periodo.appendChild(li);
    }
    resultado.innerHTML = `El resultado es de ${capitalFinal.toFixed(2)}`;
}

enviar.addEventListener("click", (e)=>{
    if(presionarEnviar == false){
        const valorCapital = Number(capital.value);
        const valorInteres = Number(tInteres.value);
        const valorTiempo = Number(tiempo.value);
        inputs.style.display="none";
        resultados.style.display ="flex";
        presionarEnviar = true;
        interesCompuesto(valorCapital,valorInteres,valorTiempo);
    }
})

