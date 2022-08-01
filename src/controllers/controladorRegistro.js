import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

let boton=document.getElementById("botonRegistro")
let email=document.getElementById("email")
console.log(email)
let password=document.getElementById("password")

boton.addEventListener("click",function(evento){
    evento.preventDefault()
    email=email.value
    password=password.value
    console.log(email,password)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("bienbenido")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert("upss"+errorMessage)
      });
    


})

