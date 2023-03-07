//variables
const containerLoginRegister = document.getElementById("container__login-register");
const formLogin = document.getElementById("form__login");
const formRegister = document.getElementById("form__register");
const loginBoxBack = document.getElementById("login__box-back");
const registerBoxBack = document.getElementById("register__box-back");
const btnRegister = document.getElementById("button__register");
const btnStartSession = document.getElementById("button__start-session");

//funciones
const resizePageWidth = () =>{
    if(window.innerWidth > 850){
        loginBoxBack.style.display = "block";
        registerBoxBack.style.display ="block";
    }else{
        registerBoxBack.style.display = "block";
        registerBoxBack.style.opacity = "1";
        loginBoxBack.style.display = "none";
        formLogin.style.display = "block";
        formRegister.style.display = "none";
        containerLoginRegister.style.left = "0px";
    }
}

const accessTheLoginForm = () =>{

    if(window.innerWidth > 850){
        formRegister.style.display = "none";
        containerLoginRegister.style.left = "10px";
        formLogin.style.display = "block";
        registerBoxBack.style.opacity = "1";
        loginBoxBack.style.opacity = "0";
    }else{
        formRegister.style.display = "none";
        containerLoginRegister.style.left = "0px";
        formLogin.style.display = "block";
        registerBoxBack.style.display = "block";
        loginBoxBack.style.display = "none";
    }
}

const accessTheRegistrationForm = () =>{
    if(window.innerWidth > 850){
        formRegister.style.display = "block";
        containerLoginRegister.style.left = "410px";
        formLogin.style.display = "none";
        registerBoxBack.style.opacity = "0";
        loginBoxBack.style.opacity = "1";
    }else{
        formRegister.style.display = "block";
        containerLoginRegister.style.left = "0px";
        formLogin.style.display = "none";
        registerBoxBack.style.display = "none";
        loginBoxBack.style.display = "block";
        loginBoxBack.style.opacity = "1";
    }
}

//llamando funciones

resizePageWidth();
window.addEventListener("resize", resizePageWidth);
btnRegister.addEventListener("click", accessTheRegistrationForm);
btnStartSession.addEventListener("click", accessTheLoginForm);
