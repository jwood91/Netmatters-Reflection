

function toggleNav() {
    $(`#sideNavContainer`).toggleClass('isOpen');
    $(`#hamburger`).toggleClass('is-active');
    }




// $(document).ready(function(){
//   $("#sticker").sticky({topSpacing:0});
// });






  // /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  // function toggleNav() {
  //   let x = document.getElementById("mainContent");
  //   let y = document.getElementById("sideNav");
  //   let z = window.matchMedia("min-width: 992px");
  //
  //   if (x.style.transform > "translate(0px)" || y.style.width > "0px") {
  //     x.setAttribute("style", "transform: translate(-0px); transition: 0.5s;");
  //     y.setAttribute("style", "width: 0px; transition: 0.5s;");
  //   } else if (z.matches) {
  //       x.setAttribute("style", "transform: translate(-375px); transition: 0.5s;");
  //       y.setAttribute("style", "width: 375px; transition: 0.5s;");
  //     }
  //     else {
  //        x.setAttribute("style", "transform: translate(-275px); transition: 0.5s;");
  //        y.setAttribute("style", "width: 275px; transition: 0.5s;");
  //   }
  //   console.log(x.style.transform)
  // }
