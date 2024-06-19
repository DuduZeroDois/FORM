  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBWaHhu085J8dT1DhmmKU9Ffr6XL2iNfms",
    authDomain: "form-9fea8.firebaseapp.com",
    databaseURL: "https://form-9fea8-default-rtdb.firebaseio.com",
    projectId: "form-9fea8",
    storageBucket: "form-9fea8.appspot.com",
    messagingSenderId: "73284208490",
    appId: "1:73284208490:web:ae0ccdaad37ace1e750713"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  document.getElementById("env").addEventListener('click',function writeUserData(){
    const db = getDatabase(app);
    const naonome = document.getElementById("nome").value 
    const naogmail = document.getElementById("gmail").value 
    const naoass = document.getElementById("ass").value 
    const naomens = document.getElementById("Mens").value 
    set(ref(db, 'users/' + naonome), {
      username: naonome,
      email: naogmail,
      assunto: naoass,
      mensagem: naomens
    });
  })


//  import { getDatabase, ref, set } from "firebase/database";
//function writeUserData(userId, name, email, imageUrl) {
 // const db = getDatabase();
 // set(ref(db, 'users/' + userId), {
  //  username: name,
  //  email: email,
  //  profile_picture : imageUrl
//  });
//}
  