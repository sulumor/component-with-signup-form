const inputs = document.querySelectorAll('input');
const errors = document.querySelectorAll('form span');
const button = document.querySelector('form button');
const img = document.querySelectorAll('form img')

button.addEventListener('click', verifInp);

function verifInp(e){
    e.preventDefault();
    
    isEmpty();
    isEmail();
    
}

function isEmpty(){
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value === ""){
            let text = `${inputs[i].name} cannont be empty`;
            errors[i].textContent = text;
            inputs[i].classList.add("error");
            inputs[i].setAttribute("placeholder", "");
            img[i].style.display = "inline";
        }else{
            errors[i].textContent = "";
            inputs[i].classList.remove("error");
            inputs[i].setAttribute("placeholder", `${inputs[i].name}`);
            img[i].style.display = "none";
        }   
    } 
}

function isEmail(){
    const regexEmail = /\S+@\S+\.\S+/;
    if(inputs[2].value !== ""){
        if(inputs[2].value.search(regexEmail) === -1){
            let text = "Looks like this is not an email";
            inputs[2].classList.add("error");
            errors[2].textContent = text;
            img[2].style.display = "inline";
        }
    }

}