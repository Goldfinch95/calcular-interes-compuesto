//todo recorrer los objetos con map

const inputCapital = document.getElementById('input__capital');
const inputInterestTime = document.getElementById("input__interest-time");
const inputTime =  document.getElementById("input__time");
const btnSend = document.getElementById("button__send");
const btnDelete = document.getElementById("button__trash")
const liPeriodsData = document.getElementById("periods__data");
const result = document.getElementById("result__data");
const boxInputs = document.getElementById("glass__box-inputs");
const boxResult = document.getElementById("glass__box-results");
const btnBack = document.getElementById("button__back");
const btnDownloadCSV = document.getElementById("button__download-csv");
let pressSendButton = false;
let pressBackButton = false;

data = [];


const getInputsValues = ()=>{
    const capitalValue = Number(inputCapital.value);
    const interestValue = Number(inputInterestTime.value);
    const timeValue = Number(inputTime.value);
    return  {capitalValue, interestValue, timeValue}
}

const calculateCompoundInterest = (capital,tInterest,time)=>{
    const results = [];
    let capitalFinal
    for(i=0; i < time; i++){
        let interest = capital / 100 * tInterest;
        let finalValue = capital + interest;
        results.push(interest)
        capital = finalValue;
        capitalFinal = capital;
    }
    return {results,capitalFinal};
}

const showResultsBox = () =>{
    if(pressSendButton == false){
        boxInputs.style.display="none";
        boxResult.style.display ="flex";
        pressSendButton = true;
    }
}

const showInputsBox = ()=>{
    if(pressBackButton == false){
        boxInputs.style.display= "";
        boxResult.style.display ="none";
        pressSendButton = false;
    }
}

const addList = (interest, capitalFinal)=>{
    console.log(interest, capitalFinal)
    for(i=0; i < interest[i]; i++){
        let li = document.createElement('ul');
        li.innerHTML = `En el periodo ${i + 1} tus rendimientos fueron de: ${interest[i].toFixed(2)}<br>`;
        liPeriodsData.appendChild(li);
    }
    result.innerHTML = `El resultado es de ${capitalFinal.toFixed(2)}`;
}

const deleteInputValues = ()=>{
    document.getElementById('input__capital').value= '';
    document.getElementById('input__interest-time').value= '';
    document.getElementById('input__time').value = '';
}

const uploadData = (interest, capitalFinal)=>{
    for(i= 0 ; i < interest[i]; i++){
    data.push({
        periodo: `${i + 1}`,
        rendimientos: `${interest[i].toFixed(2)}`,
        total: capitalFinal.toFixed(2),
    })}
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


btnSend.addEventListener("click",()=>{
    const {capitalValue, interestValue, timeValue} = getInputsValues();
    const {results, capitalFinal} = calculateCompoundInterest(capitalValue, interestValue, timeValue);
    showResultsBox();
    addList(results,capitalFinal);
})

btnDelete.addEventListener("click", ()=>{
    deleteInputValues();
})

btnBack.addEventListener("click",()=>{
    showInputsBox();
    deleteInputValues();
})

btnDownloadCSV.addEventListener("click", () =>{
    const {capitalValue, interestValue, timeValue} = getInputsValues();
    const {results, capitalFinal} = calculateCompoundInterest(capitalValue, interestValue, timeValue);
    uploadData(results,capitalFinal);
    descargarCsv("archivo-csv", json2csv.parse(data));
})












/*let pressSendButton = false;
let pressBackButton = false;

const data = [];
const valores = [];*/

/*
const calculateCompoundInterest = (capital,tInterest,time)=>{
    const results = [];
    let capitalFinal
    for(i=0; i < time; i++){
        let interest = capital / 100 * tInterest;
        let finalValue = capital + interest;
        results.push(interest)
        capital = finalValue;
        capitalFinal = capital;
        //uploadData(interest, capitalFinal);
    }
    return {results,capitalFinal};
}

const deleteInputData = ()=>{
    document.getElementById('input__capital').value= '';
    document.getElementById('input__interest-time').value= '';
    document.getElementById('input__time').value = '';
}

const sendingData = ()=>{
    if(pressSendButton == false){
        const capitalValue = Number(inputCapital.value);
        const interestValue = Number(inputInterestTime.value);
        const timeValue = Number(inputTime.value);
        boxInputs.style.display="none";
        boxResult.style.display ="flex";
        pressSendButton = true;
        addData(capitalValue,interestValue,timeValue);
        const result = calculateCompoundInterest(capitalValue,interestValue,timeValue);
        console.log(result);
        addList(result.results,result.capitalFinal);

        /*registerCsv();*/
 //   }
//}
/*
const addData = (capitalValue,interestValue,timeValue)=>{
    valores.push({
        capital: capitalValue,
        timeInterest: interestValue,
        time: timeValue
    })
    /*console.log(valores);*/
//}

/*
const addList = (interest, capitalFinal)=>{
    for(i=0; i < interest[i]; i++){
        let li = document.createElement('ul');
        li.innerHTML = `En el periodo ${i + 1} tus rendimientos fueron de: ${interest[i].toFixed(2)}<br>`;
        liPeriodsData.appendChild(li);
    }
    result.innerHTML = `El resultado es de ${capitalFinal.toFixed(2)}`;
        //li.innerHTML = '';
}



const uploadData = (interest, capitalFinal)=>{
    data.push({
        periodo: `${i + 1}`,
        rendimientos: `${interest.toFixed(2)}`,
        total: capitalFinal,
    })
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
*/
/*const registerCsv = async()=>{
    const url = 'http://localhost:3000/add/data'
    const objects = data;
    const answer = await fetch(url,{body: JSON.stringify(objects), method: "POST", headers:{ "Content-type": "application/json; charset=UTF-8" }});
    if(answer.status == 200){
        console.log("received data");
    }
    else{
        console.log("data not received");
    }
}*/

/*
btnDelete.addEventListener("click", ()=>{
    deleteInputData();
})


btnSend.addEventListener("click", (e)=>{
    sendingData();
})

btnBack.addEventListener("click", ()=>{
    if(pressBackButton == false){
        boxInputs.style.display= "";
        boxResult.style.display ="none";
        pressSendButton = false;
        deleteInputData();
    }
    
})

btnDownloadCSV.addEventListener("click", () =>{
    descargarCsv("archivo-csv", json2csv.parse(data))
})
*/

