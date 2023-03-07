const inputCapital = document.getElementById('input__capital');
const inputInterestTime = document.getElementById("input__interest-time");
const inputTime =  document.getElementById("input__time");
const btnSend = document.getElementById("button__send");
const liPeriodsData = document.getElementById("periods__data");
const result = document.getElementById("result__data");
const boxInputs = document.getElementById("glass__box-inputs");
const boxResult = document.getElementById("glass__box-results");
const btnDownloadCSV = document.getElementById("button__download-csv");
let pressSendButton = false;

const data = [];

const calculateCompoundInterest = (capital,tInterest,time)=>{
    let capitalFinal
    for(i=0; i < time; i++){
        let interest = capital / 100 * tInterest;
        let finalValue = capital + interest;
        capital = finalValue;
        capitalFinal = capital;
        const li = document.createElement('ul');
        li.innerHTML = `En el periodo ${i + 1} tus rendimientos fueron de: ${interest.toFixed(2)}<br>`;
        liPeriodsData.appendChild(li);
        data.push({
            periodo: `${i + 1}`,
            rendimientos: `${interest.toFixed(2)}`,
            total: capitalFinal,
        })
    }
    result.innerHTML = `El resultado es de ${capitalFinal.toFixed(2)}`;
}

const descargarCsv = (filename, csvData)=>{
    const link = document.createElement("a");
    link.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
    link.setAttribute("download", filename);
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

btnSend.addEventListener("click", (e)=>{
    if(pressSendButton == false){
        const capitalValue = Number(inputCapital.value);
        const interestValue = Number(inputInterestTime.value);
        const timeValue = Number(inputTime.value);
        boxInputs.style.display="none";
        boxResult.style.display ="flex";
        pressSendButton = true;
        calculateCompoundInterest(capitalValue,interestValue,timeValue);
    }
})

btnDownloadCSV.addEventListener("click", () =>{
    descargarCsv("archivo-csv", json2csv.parse(data))
})


