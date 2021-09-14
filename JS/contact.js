const form = document.querySelector('#contact-form');



let name = document.querySelector("input[name=name]");
let email = document.querySelector("input[name=email]");
let phone = document.querySelector("input[name=phone]");
let subject = document.querySelector("input[name=subject]");
let message = document.querySelector("textarea[name=message");



const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneReg = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;

name.addEventListener('input', validate);
email.addEventListener('input', validate);
phone.addEventListener('input', validate);
subject.addEventListener('input', validate);
message.addEventListener('input', validate);

let formValid = false;
let success = document.getElementById("contact-success");
let phoneFail = document.getElementById("phone-fail");
let messageFail = document.getElementById("message-fail");



form.addEventListener('submit', function(e) {
  //phone validation
  if (phoneReg.test(phone.value)) {
  phone.classList.add('input-area');
  phone.classList.remove('input-invalid');
  phoneFail.classList.remove("alert-show");
  phoneFail.classList.add("alert-hide");

  } else {
  phone.classList.remove('input-area');
  phone.classList.add('input-invalid');
  phoneFail.classList.add("alert-show");
  phoneFail.classList.remove("alert-hide");
  success.classList.add("alert-hide");
    e.preventDefault();
  }
  //message length validation
  if (message.value.length <= 5) {
    message.classList.remove('input-area');
    message.classList.add('input-invalid');
    messageFail.classList.add("alert-show");
    messageFail.classList.remove("alert-hide");
    success.classList.add("alert-hide")
    e.preventDefault();
  } else {
    message.classList.add('input-area');
    message.classList.remove('input-invalid');
    messageFail.classList.remove("alert-show");
    messageFail.classList.add("alert-hide");

  }

  if (formValid == false) {
    e.preventDefault();
  }

  return true;
});


//Validate upon typing.

function validate (e) {
  // console.log(e.target.name);

  let target = e.target;

  if(target.name == 'name'){
    // name validation
    if (target.value.length == 0) {
      target.classList.remove('input-area');
      target.classList.add('input-invalid');
      formValid = false;
    } else {
      target.classList.add('input-area');
      target.classList.remove('input-invalid');
      formValid = true;

    }
  }
  if(target.name == 'email'){
    // email validation
    if (emailReg.test(target.value)) {
      target.classList.add('input-area');
      target.classList.remove('input-invalid');
      formValid = true;

    } else {
      target.classList.remove('input-area');
      target.classList.add('input-invalid');
      formValid = false;
    }
  }
  if(target.name == 'phone'){
    //phone validation
    if (target.value.length == 0) {
      target.classList.remove('input-area');
      target.classList.add('input-invalid');
      formValid = false;
    } else {
      target.classList.add('input-area');
      target.classList.remove('input-invalid');
      formValid = true;

    }
  }
  if(target.name == 'subject'){
    // subject field
    if (target.value.length == 0) {
      target.classList.remove('input-area');
      target.classList.add('input-invalid');
      formValid = false;
    } else {
      target.classList.add('input-area');
      target.classList.remove('input-invalid');
      formValid = true;

    }
  }
  if(target.name == 'message'){
    //message field
    if (target.value.length <= 5) {
      target.classList.remove('input-area');
      target.classList.add('input-invalid');
      formValid = false;
    } else {
      target.classList.add('input-area');
      target.classList.remove('input-invalid');
      formValid = true;
    }
  }

};


const exitButton = document.getElementsByClassName("close-button");

function closeSubmit() {
let item = event.target.parentNode;
// console.log(item);
item.classList.remove("alert-show")
item.classList.add("alert-hide")
}
