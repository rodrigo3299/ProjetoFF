
 
const firebaseConfig = {
  apiKey: "AIzaSyCxIUeMYxFbcr43Ggfrw-jNKaP9iCnC6nw",
  authDomain: "projetoff-f59d2.firebaseapp.com",
  projectId: "projetoff-f59d2",
  storageBucket: "projetoff-f59d2.appspot.com",
  messagingSenderId: "14040077594",
  appId: "1:14040077594:web:8bec86a2b255df89cd08a3"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');
 
  loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const password = passwordField.value;
 
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log("Usuário logado : ", user)
    })
    .catch((error)=>{
      const errorMessage = error.message;
      console.error("Erro de autenticação : ", errorMessage)
    });
  });

function createEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
 
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(user =>{
        console.log('usuario ', user);
        alert('Usuario criado e logado');
    }).catch(err=>{
        console.error("Erro ao criar usuario", err );
    });
}
 
 
 
 
function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
 
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
        alert('Usuário logado');
    })
    .catch(err =>{
        console.log('error', error)
    })
}
 