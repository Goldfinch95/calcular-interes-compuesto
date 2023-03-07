const inputEmailLogin = document.getElementById("input__email");
const inputPasswordLogin = document.getElementById("input__password");
const inputNameRegister = document.getElementById("input__register-name");
const inputEmailRegister = document.getElementById("input__register-email");
const inputUserRegister = document.getElementById("input__register-user");
const inputPasswordRegister = document.getElementById("input__register-password");
const btnLoginForm = document.getElementById("button__login");
const btnRegisterForm = document.getElementById("button__to-register");


const registerUser = async()=>{
    const url = 'http://localhost:3000/register/login'
    const data = {
        name: inputNameRegister.value,
        email: inputEmailRegister.value,
        user: inputUserRegister.value,
        password: inputPasswordRegister.value
    }
    const answer = await fetch(url,{body: JSON.stringify(data), method: "POST", headers:{ "Content-type": "application/json; charset=UTF-8" }})
    if(answer.status == 200){
        console.log("user register");
    }
    else{
        console.log("user no register,try again");
    }
}

const verifyUser = async ()=>{
    const verifyUrl = 'http://localhost:3000/verify/login'
    const data = {
        email: inputEmailLogin.value,
        password: inputPasswordLogin.value
    }
    const answer = await fetch(verifyUrl,{body: JSON.stringify(data), method: "POST", headers:{ "Content-type": "application/json; charset=UTF-8" }})
    if(answer.status == 200){
        console.log('User is in the database');
        window.location = "index.html";
    }else{
        console.log('user is NOT in the database');
    }
}

btnLoginForm.addEventListener("click", (e)=>{
    e.preventDefault();
    verifyUser();
})

btnRegisterForm.addEventListener("click", (e)=>{
    e.preventDefault();
    registerUser();
})


