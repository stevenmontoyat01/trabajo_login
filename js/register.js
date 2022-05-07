//DEFINITION OF ID.
//INPUTS AND BUTTONS.
const verifyName= document.querySelector('#registerName');
const nameUser = document.querySelector('#userName');
const registerPassword = document.querySelector('#registerPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const buttonRegister =  document.querySelector('#myButton');

//definicion de elementos html
const alertName = document.querySelector('#alertWarning');
const alertUser = document.querySelector('#alertUser');
const alertPassword =document.querySelector('#alertPassword');
const confiPassword=document.querySelector('#ConfiPassword');
//definicion of event
buttonRegister.addEventListener('click',clickAction);
verifyName.addEventListener('keyup',fullName);
nameUser.addEventListener('keyup',verifyUser);
registerPassword.addEventListener('keyup',firstPassword);
confirmPassword.addEventListener('keyup',verifyUser);

//almacenimiento
function clickAction() {
}
//-------------------------------------------------------------------

//FUNCION DE FULL NAME
function fullName(event){
    //exprecion irregular para validar caracteres especiales
    const regex = /^[a-z A-Z \s]*$/;
    if (regex.test(event.target.value)){
        let longitud= verifyName.value.length;
        if(longitud <= 3){
            alertName.textContent= `ingrese mas de 3 caracteres en el espacio`;
            verifyName.style.border = "1px solid red";
        }else{
            alertName.textContent= " ";
            verifyName.style.border = "1px solid #fff";
        }
        if(longitud === 0){
            alertName.textContent= " ";
            verifyName.style.border = "1px solid #fff";
        }
    }else{
        alertName.textContent = `ha introducido un caracter invalido`;
        verifyName.style.border = "1px solid red";
    }
}
//FUNCTION USER NAMER
function verifyUser(){
    let longitud= nameUser.value.length;
    if(longitud <= 3){
        alertUser.textContent= `ingrese mas de 3 caracteres en el espacio`;
        nameUser.style.border = "1px solid red";
    }else{
        alertUser.textContent= " ";
        nameUser.style.border = "1px solid #fff";
    }
    if(longitud === 0){
        alertUser.textContent= " ";
        nameUser.style.border = "1px solid #fff";
    }
}

function firstPassword(){
    let longitud= registerPassword.value.length;
    if(longitud <= 3){
        alertPassword.textContent= `ingrese mas de 3 caracteres en el espacio`;
        registerPassword.style.border = "1px solid red";
    }else{
        alertPassword.textContent= " ";
        registerPassword.style.border ="1px solid #fff";
    }
    if(longitud === 0){
        alertPassword.textContent= " ";
        registerPassword.style.border ="1px solid #fff";
    }
}

//------------------------------------------------------------------------