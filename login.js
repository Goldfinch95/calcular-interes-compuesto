const user = document.getElementById("user");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const h4 = document.getElementById('errorLogin');




const login = async()=>{
    const url = 'http://localhost:3000/user/verify';
    const data = {
        usuario: user.value,
        password: password.value
    }
    const respuesta = await fetch(url, {body: JSON.stringify(data), method: "POST", headers: { "Content-type": "application/json; charset=UTF-8" }})
    if(respuesta.status == 200){
        window.location = "index.html"
    }
    else{
        const error = document.createElement('h4');
        error.innerHTML = "No se ha encotrado al usuario, intentelo de nuevo";
        h4.appendChild(error);
    }
}

loginBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    login();

});