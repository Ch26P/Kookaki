

const observer = new IntersectionObserver(entries => {

  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {

      entry.target.classList.add('title-animation'); // Add the animation class
    }
    if (!entry.isIntersecting) {
      entry.target.classList.remove('title-animation');
    }

  });
});


observer.observe(document.querySelector('.story .title'));
observer.observe(document.querySelector('#studio .title'));
observer.observe(document.querySelector('.main-character .title'));
observer.observe(document.querySelector('#place .title'));
observer.observe(document.querySelector('#oscars .title'));


const root = document.documentElement;
console.log(root)

window.addEventListener("scroll", () => {
  var vertical = -1;

  var horizontal = -1;
  const declanche_clouds = 1440;
  const declanche_clouds2 = 2000;

  setInterval(function () {
    if (window.scrollY != vertical) {
      vertical = window.scrollY;
      /* console.log(vertical);*/
      root.style.setProperty("--speed", "3000ms");

    } /**/
    else {
      root.style.setProperty("--speed", "12000ms");
    }

    if (window.scrollY > declanche_clouds & window.scrollY < declanche_clouds2) {
      horizontal = Math.round(300 - (((1948 - window.scrollY) / 5) * 3));
      /*console.log(vertical);
      console.log(horizontal);*/
      root.style.setProperty("--mouv_clouds", "-" + horizontal + "px");
    }
  }, 500);
});


let LienPresent = document.querySelectorAll(".burger_menu li a");//recuperation des a
console.log(LienPresent);/**/

/*script fermeture menu */
const Burger = document.querySelector(".menu-toggle");
console.log(Burger);
const Siteheader = document.querySelector(".site-header");
// Burger.setAttribute("display", "block");changer src de l'image
const Nav = document.querySelector("#site-navigation");
console.log(Nav)

for (let i = 0; i < LienPresent.length; i++) {

  let Lienclick = LienPresent[i]
  Lienclick.addEventListener("click", (event) => {
    Lien = event.target
    if (Lien) {

      Nav.classList.remove("toggled");//Suppression d'une class
      Siteheader.classList.remove("full");
      Burger.setAttribute( 'aria-expanded', 'false' );
    }
  })

}
for (let a = 0; a < 2; a++) {

//  let Burgerclick = Burger
  Burger.addEventListener('click', function () {
    Nav.classList.toggle('toggled');

    if (Burger.getAttribute('aria-expanded') === 'true') {
      Siteheader.classList.remove("full");
      a=0;
    } else {
      Siteheader.classList.add("full");
      a=1;
    }
  });
}