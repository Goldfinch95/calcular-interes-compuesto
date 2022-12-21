const capital = document.getElementById('capital');
const tInteres = document.getElementById("tInteres");
const tiempo =  document.getElementById("tiempo");
const enviar = document.getElementById("enviar");
const periodo = document.getElementById("periodo");
const resultado = document.getElementById("resultado");
const inputs = document.getElementById("vidrio__inputs");
const resultados = document.getElementById("vidrio__resultados");
const descargar = document.getElementById("descargar");
let presionarEnviar = false;

const data = [];

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
        data.push({
            periodo: `${i + 1}`,
            rendimientos: `${interes.toFixed(2)}`,
            total: capitalFinal,
        })
    }
    resultado.innerHTML = `El resultado es de ${capitalFinal.toFixed(2)}`;
}

const descargarCsv = (filename, csvData)=>{
    const enlace = document.createElement("a");
    enlace.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
    enlace.setAttribute("download", filename);
    enlace.style.display = "none";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
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

descargar.addEventListener("click", () =>{
    descargarCsv("archivo-csv", json2csv.parse(data))
})


