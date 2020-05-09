let body = document.body

let usernameValue = document.getElementById("username").value

let password = document.getElementById("password")

let confirmPassword = document.getElementById("confirm-password")

let email = document.getElementById("email")

let confirmEmail = document.getElementById("confirm-email")

confirmPassword.addEventListener("input",()=> {
  console.log(event.target.value)
  if (confirmPassword.value != password.value){
    confirmPassword.setCustomValidity("Password didn't match")
  } else {
    confirmPassword.setCustomValidity("");
  }
})

confirmEmail.addEventListener("input", () => {
  if (confirmEmail.value != email.value){
    confirmEmail.setCustomValidity("email didn't match")
  } else {
    confirmEmail.setCustomValidity("");
  }
})

console.log(usernameValue)
console.log(password)