let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
let themeToggler = document.querySelector('#theme-toggler');
themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
};

const firebaseConfig = {
    apiKey: "AIzaSyAD14W84nWF1H5zz2ax7eywH8qs6f7j6_E",
    authDomain: "ckmwebform.firebaseapp.com",
    databaseURL: "https://ckmwebform-default-rtdb.firebaseio.com",
    projectId: "ckmwebform",
    storageBucket: "ckmwebform.appspot.com",
    messagingSenderId: "462045081219",
    appId: "1:462045081219:web:ba7f7ba024ae350cb275b6",
    measurementId: "G-WGRHZV7BHC"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var contsctFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e){
      e.preventDefault();

      var name = getElementVal('name');
      var email = getElementVal('email');
      var subject = getElementVal('subject');
      var message = getElementVal('message');

      saveMessage(name, email, subject, message);

      document.querySelector('.alert').style.display = 'block';

      setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
      }, 3000);

      document.getElementById('contactForm').reset();
  }

  const saveMessage = (name, email, subject, message) => {
      var newContactForm = contsctFormDB.push();

      newContactForm.set({
          name: name,
          email:  email,
          subject: subject,
          message: message,

      });
  }

  const getElementVal = (id) =>{
      return document.getElementById(id).value;

  }