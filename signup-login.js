//Sign Up

var signUp = (e) => {
  let formData = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value,
    pw1: document.getElementById("pass1").value,
    pw2: document.getElementById("pass2").value,
  };

  localStorage.setItem("formData", JSON.stringify(formData));
  JSON.parse(localStorage.getItem("formData"));
  console.log(localStorage.getItem("formData"));
  e.preventDefault();
  console.log(formData);

  {
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    if (pass1 !== pass2) {
      alert("Password does not match");
    } else {
      alert(`Hi ${formData.firstname}! You have signed up successfully.`);
    }
  }
}
  //Login page:-

  const login = (e) => {
    let loginData = {
      email: document.getElementById("email").value,
      pw2: document.getElementById("pass2").value,
    };
    console.log(localStorage.getItem("loginData"));
    e.preventDefault();

    console.log(loginData);

    const registerData = JSON.parse(localStorage.getItem("formData"));
    if (
      registerData.email === loginData.email &&
      registerData.pw2 === loginData.pw2
    ) {
      alert("User is Aunthenticated");
    } else {
      if (registerData.email !== loginData.email) {
        alert("Email is Incorrect");
      } else {
        if (registerData.pw2 !== loginData.pw2) {
          alert("Password is incorrect!");
        }
      }
    }
  }

