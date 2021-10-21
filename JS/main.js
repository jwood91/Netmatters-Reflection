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
const scrollBarWidth = box.offsetWidth - box.clientWidth;

let lastScrollTop = 0;
let headerWidth = $(document).width() - scrollBarWidth;
let headerHeight = $('#scroll-header-sticky').outerHeight();

$(`#scroll`).scroll(function() {
      clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function() {
          let st = $(`#scroll`).scrollTop();
          /*scroll down */
          if (st > lastScrollTop && st > headerHeight) {
            if ($('#scroll-header-sticky').hasClass('nav-up') || $('#scroll-header-sticky').hasClass('nav-down-shown')) {
              $('#scroll-header-sticky').removeClass('nav-up').removeClass('nav-down-shown').addClass('nav-down')
              $(`#scroll-header`).removeClass('visible').addClass('invisible');
              // $('#image-slider-container').addClass('nav-top-margin')
              // console.log("scroll down conditional complete")
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
            // console.log("Haven't scrolled in 100ms!");
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


      var accordions = document.getElementsByClassName("accordion");

      for (var i = 0; i < accordions.length; i++) {
        accordions[i].onclick = function() {
          this.classList.toggle('is-open');

          var content = this.nextElementSibling;
          if (content.style.maxHeight) {
            // accordion is currently open, so close it
            content.style.maxHeight = null;
          } else {
            // accordion is currently closed, so open it
            content.style.maxHeight = content.scrollHeight + "px";
          }
        }
      }
