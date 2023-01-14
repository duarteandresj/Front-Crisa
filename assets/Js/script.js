//Login
//form control
const $inputUsername=document.querySelector("#username");
const $usernameHelp=document.querySelector("#usernameHelp");
const $btnSubmit=document.querySelector("#btn-submit")
$btnSubmit.addEventListener("click",()=>{
    let texto=$inputUsername.value;
    if(!onlyLetters(texto)){
        alert("Username invalido")
    }
}
)


function onlyLetters(string1){
    let reg=/[a-z]{1,15}\S$/
return reg.test(string1);
}