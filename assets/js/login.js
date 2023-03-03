//variables
const contenedor_login_register = document.getElementById("container__login-register");
const formulario_login = document.getElementById("form__login");
const formulario_register = document.getElementById("form__register");
const caja_trasera_login = document.getElementById("login__box-back");
const caja_trasera_register = document.getElementById("register__box-back");
const btn_registrarse = document.getElementById("button__register");
const btn_iniciarSesion = document.getElementById("button__start-session");

//funciones
const anchoPagina = () =>{
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display ="block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

const iniciarSesion = () =>{

    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

const visualRegister = () =>{
    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

//llamando funciones

anchoPagina();
window.addEventListener("resize", anchoPagina);
btn_registrarse.addEventListener("click", visualRegister);
btn_iniciarSesion.addEventListener("click", iniciarSesion);
