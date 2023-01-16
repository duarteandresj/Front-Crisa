//Login
//form control
const $form = document.querySelector(".form");
const $inputUsername = document.querySelector("#username");
const $usernameHelp = document.querySelector("#usernameHelp");
const $btnSubmit = document.querySelector("#btn-submit");
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  let texto = $inputUsername.value;
  //   comprueba que no haya un nombre incorrecto
  if (!onlyLetters(texto)) {
    alert("Username invalido");
  } else {
    // crea el Json
    const datos = new FormData(e.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    const datosJson = JSON.stringify(datosCompletos);
    console.log(datosJson);

    fetch("http://localhost:8080/user/login", {
       method: 'Get',
       body: datos
    })
    .then( response => response.text() )
    .then( resultText => console.log(resultText) )
    .catch( err => console.log(err) )
}})

function onlyLetters(string) {
  let reg = /^[a-z]{1,15}\S$/;
  return reg.test(string);
}

// fetch("http://localhost:8080/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(datosCompletos),
// })
