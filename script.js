function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
      }
}
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

function validateForm() {
    
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  



  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById( "subject-error");
  const messageError = document.getElementById( "message-error");
  

  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
 

  let isValid = true;

  if (name=== "" || /\d/.test(name)) {
      nameError.textContent =
          "Please enter your name properly.";
      isValid = false;
  }

  if (email === "" || !email.includes("@")){
      emailError.textContent =
          "Please enter your email properly";
      isValid = false;
  }

  if (subject === "" ||  /\d/.test(subject)) {
      subjectError.textContent =
          "Please enter your subject properly";
      isValid = false;
  }

  if (message === "" ||  /\d/.test(message)) {
    messageError.textContent =
        "Please enter your message properly";
    isValid = false;
}

      
  
  
  return isValid;
 
}
