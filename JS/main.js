$(document).ready(function() {
    let headerWidth = $(document).width() - scrollBarWidth;
    $('#scroll-header-sticky').css("width", headerWidth);
    /* Image Slider */
  $('.slider').slick({
    dots: true,
    arrows: false,
    rows: 1,
    slidesToShow: 1,
    slidesToScroll: 1,

  });



});

/* Cookie */

const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'netmatters_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {

    const acceptFn = event => {
        saveToStorage(storageType);
        overlaySeen.classList.remove('show-overlay');
        consentPopup.classList.add('hidden');
        scroll.classList.remove('scroll-freeze')
    }
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('cookie-accept');
    const overlaySeen = document.getElementById('overlay');
    const scroll = document.getElementById('scroll');
    acceptBtn.addEventListener('click', acceptFn);

    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
          overlaySeen.classList.add('show-overlay');
          overlaySeen.classList.add('cookie-overlay');
          scroll.classList.add('scroll-freeze');
          consentPopup.classList.remove('hidden');


        }, 200);
    }

};




/* script for the sticky nav bar */

$(window).resize(function() {
  headerWidth = $(document).width() - scrollBarWidth;
  $('#scroll-header-sticky').css("width", headerWidth);

});
const box = document.querySelector('#scroll');
const scrollBarWidth = box.offsetWidth - box.clientWidth; headerHeight = $('#scroll-header').outerHeight();
let lastScrollTop = 0;
let headerWidth = $(document).width() - scrollBarWidth;


$(`#scroll`).scroll(function() {
      clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function() {
          let st = $(`#scroll`).scrollTop();
          /*scroll down */
          if (st > lastScrollTop && st > headerHeight) {
            if ($('#scroll-header-sticky').hasClass('nav-up') || $('#scroll-header').hasClass('nav-down-shown')) {
              $('#scroll-header-sticky').removeClass('nav-up').removeClass('nav-down-shown').addClass('nav-down')
              $(`#scroll-header`).removeClass('visible').addClass('invisible');
              // $('#image-slider-container').addClass('nav-top-margin')
              console.log("scroll down conditional complete")
            }
          }
          /* scroll at page top */
          // else if (st <= 195 && $(`#scroll-header`).hasClass('nav-down') || $(`#scroll-header`).hasClass('nav-down-shown')) {
          //   $('#scroll-header').removeClass('nav-down').removeClass('nav-down-shown').addClass('nav-up');
          //   $('#image-slider-container').removeClass('nav-top-margin')
          //   console.log("scrolled  to top conditional complete")
          //   }
            else if (st == 0) {
              /* empty to stop next conditional firing */
              $(`#scroll-header`).removeClass('invisible').addClass('visible');
              // $(`#image-slider-container`).removeClass('nav-top-margin')
              $(`#scroll-header-sticky`).removeClass('nav-down-shown').removeClass('nav-down').addClass('nav-up');



            } else if (st < lastScrollTop && st > headerHeight) {
              if ($('#scroll-header-sticky').hasClass('nav-down')) {
                $('#scroll-header-sticky').removeClass('nav-down').addClass('nav-down-shown');
                $('#scroll-header-sticky').css("width", headerWidth);
              }
            }
            console.log("Haven't scrolled in 100ms!");
            lastScrollTop = st;
          }, 20));
      }
    );

//
// $(document).scroll(function() {
//   let st = $(document).scrollTop();
//   if ($('#scroll-header').hasClass('nav-down') && st <= headerHeight) {
//       $('#scroll-header').removeClass('nav-down').removeClass('nav-down-shown').addClass('nav-up');
//       $('#image-slider-container').removeClass('nav-top-margin')
//       console.log('top scrolled hidden nav')
//     }
//   else if ($('#scroll-header').hasClass('nav-down-shown') && st < lastScrollTop && st == 0) {
//     $('#scroll-header').removeClass('nav-down').removeClass('nav-down-shown').addClass('nav-up');
//     $('#image-slider-container').removeClass('nav-top-margin')
//     console.log("TOP SCROLLED SHOWN NAV")
//   }
//
// });





    /* toggle the side navigation and the hamburger transform on click */
    function toggleNav() {
      $('#overlay').toggleClass('show-overlay');
      $(`#overlay`).toggleClass('isOpen');
      $(`#hamburger`).toggleClass('is-active');
      $(`#scroll`).toggleClass('isOpen');
      $(`#scroll`).toggleClass('scroll-shown');
      $(`#scroll-header-sticky`).toggleClass('isOpen');




    };

    function sideNavHide() {
      if ($(`#scroll`).hasClass('isOpen')) {
        $(`#overlay`).removeClass('show-overlay');
        $(`#overlay`).removeClass('isOpen');
        $(`#scroll`).removeClass('isOpen');
        $(`#hamburger`).removeClass('is-active');
        $(`#scroll`).removeClass('scroll-shown');
        $(`#scroll-header-sticky`).removeClass('isOpen');


        };
      };


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

  function validate (e) {
    console.log(e.target.name);

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
  console.log(item);
  item.classList.remove("alert-show")
  item.classList.add("alert-hide")
}


import { Loader } from "@googlemaps/js-api-loader"
