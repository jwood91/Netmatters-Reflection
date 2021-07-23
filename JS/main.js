$(document).ready(function() {

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

let headerHeight = $('#scroll-header').outerHeight();
let lastScrollTop = 0;

$('#scroll').scroll(function() {
      clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function() {
          let st = $('#scroll').scrollTop();
          /*scroll down */
          if (st > lastScrollTop && st > headerHeight) {
            if ($('#scroll-header').hasClass('nav-up') || $('#scroll-header').hasClass('nav-down-shown')) {
              $('#scroll-header').removeClass('nav-up').removeClass('nav-down-shown').addClass('nav-down')
              console.log("scroll down conditional complete")
            }
          }
          /* scroll at page top */
          else if (st == 0 && $(`#scroll-header`).hasClass('nav-down')) {
            $('#scroll-header').removeClass('nav-down').addClass('nav-up');
            console.log("scrolled  to top conditional complete")
            }
            else if (st <= headerHeight) {
              /* empty to stop next conditional firing */

            } else if (st < lastScrollTop && st > headerHeight) {
              if ($('#scroll-header').hasClass('nav-down')) {
                $('#scroll-header').removeClass('nav-down').addClass('nav-down-shown')
              }
            }
            console.log("Haven't scrolled in 250ms!");
            lastScrollTop = st;
          }, 250));
      }
    );






    /* toggle the side navigation and the hamburger transform on click */
    function toggleNav() {
      $('#overlay').toggleClass('show-overlay');
      $(`#overlay`).toggleClass('isOpen');
      $(`#hamburger`).toggleClass('is-active');
      $(`#scroll`).toggleClass('scroll-freeze')
      $(`#sideNavContainer`).toggleClass('isOpen')
    };

    function sideNavHide() {
      if ($(`#sideNavContainer`).hasClass('isOpen')) {
        $(`#overlay`).removeClass('show-overlay');
        $(`#overlay`).removeClass('isOpen');
        $(`#sideNavContainer`).removeClass('isOpen');
        $(`#hamburger`).removeClass('is-active');
        $(`#scroll`).removeClass('scroll-freeze');

        };
      };
