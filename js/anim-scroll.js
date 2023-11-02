
/*let title = document.querySelectorAll(".title");*///recuperation des titres
 /*

    for(let i=0;i<title.length;i++){ //boucle pour insersion liste
let title_select=title[i]
console.log(title_select)
*/
const observer = new IntersectionObserver(entries => {

    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting ) {
        // Add the animation class
        entry.target.classList.add('title-animation');
      }/*
      if (entry.isIntersecting ='.story__article::after'){
        animation: flowerTurn $speed-flower  linear infinite;
        entry.target.classList.add('animation');
     
    }; */
 });} );
  
 
  observer.observe(document.querySelector('.story .title'));
  observer.observe(document.querySelector('#studio .title'));
  observer.observe(document.querySelector('.main-character .title'));/**/
 observer.observe(document.querySelector('#place .title'));
 observer.observe(document.querySelector('#oscars .title'));

 /*
 const observer_flower = new IntersectionObserver(entries => {

  // Loop over the entries
  entries.forEach(entry => {

    if (entry.isIntersecting =='.story__article::after'){
     animation: flowerTurn   linear infinite;
     element.style.setProperty("$speed-flower", "1000ms");
       entry.target.classList.add('animation: flowerTurn 1000ms  linear infinite');
     element.style.setProperty("animation", " flowerTurn 1000ms  linear infinite");
    }
    })} );
observer_flower.observe(document.querySelector('.story__article::after'));*/

/*
var element = document.getElementById("element");
element.style.setProperty("$speed-flower", "$speed-flower2");


addEventListener("scroll", (event) => {});

onscroll = (event) => {
  
};*/
/*
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position

}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});*//**/
const root = document.documentElement;
console.log(root)

window.addEventListener("scroll", () => {
var vertical=-1;
setInterval(function() {
 if (window.scrollY != vertical) {
   vertical=window.scrollY;
   root.style.setProperty("--speed", "3000ms");
  } 
  else {
    root.style.setProperty("--speed","12000ms");
  }/**/
}, 500);});
