const email = document.getElementById("input__email");
const password = document.getElementById("input__password");
const inputName = document.getElementById("input__register-name");
const inputEmail = document.getElementById("input__register-email");
const inputUser = document.getElementById("input__register-user");
const inputPassword = document.getElementById("input__register-password");
const btnLogin = document.getElementById("button__login");
const btnRegisterSecond = document.getElementById("button__to-register");


const register = async()=>{
    const url = 'http://localhost:3000/register/login'
    const data = {
        name: inputName.value,
        email: inputEmail.value,
        user: inputUser.value,
        password: inputPassword.value
    }
    const answer = await fetch(url,{body: JSON.stringify(data), method: "POST", headers:{ "Content-type": "application/json; charset=UTF-8" }})
    if(answer.status == 200){
        console.log("user register");
    }
    else{
        console.log("user no register,try again");
    }
}

const verify = async ()=>{
    const verifyUrl = 'http://localhost:3000/verify/login'
    const data = {
        email: email.value,
        password: password.value
    }
    const answer = await fetch(verifyUrl,{body: JSON.stringify(data), method: "POST", headers:{ "Content-type": "application/json; charset=UTF-8" }})
    if(answer.status == 200){
        console.log('User is in the database');
        window.location = "index.html";
    }else{
        console.log('user is NOT in the database');
    }
}

btnLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    verify();
})

btnRegisterSecond.addEventListener("click", (e)=>{
    e.preventDefault();
    register();
})


