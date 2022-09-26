const PSW1 = document.getElementById("password1");
const PSW2 = document.getElementById("password2");
const CREATE_ACC_BTN = document.querySelector("button");

function checkPassword(e) {
  if (PSW1.value != PSW2.value) {
    document.querySelector(".psw-error").style.display = "block";
    PSW1.classList.add("psw-error-border");
    PSW2.classList.add("psw-error-border");
    console.log("passwords did not match");
    e.preventDefault();
  } else document.querySelector(".psw-error").style.display = "none";
  console.log("passwords OK");
}

CREATE_ACC_BTN.addEventListener("click", checkPassword);
