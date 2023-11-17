
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
      if (entry.isIntersecting /*== observer*//*!= '#place'*/) {
        // Add the animation class
        entry.target.classList.add('title-animation');
      }/*
      else{
        entry.target.classList.remove('title-animation');
      }
      */
 });} );
  
 
  observer.observe(document.querySelector('.story .title'));
  observer.observe(document.querySelector('#studio .title'));
  observer.observe(document.querySelector('.main-character .title'));/**/
 observer.observe(document.querySelector('#place .title'));
 observer.observe(document.querySelector('#oscars .title'));


const root = document.documentElement;
console.log(root)

window.addEventListener("scroll", () => {
var vertical=-1;

var horizontal=-1;
const declanche_clouds=1440;
const declanche_clouds2=2000;

setInterval(function() {
 if (window.scrollY != vertical) {
   vertical=window.scrollY;
  /* console.log(vertical);*/
   root.style.setProperty("--speed", "3000ms");

  } /**/
  else {
    root.style.setProperty("--speed","12000ms");
  }
  
 if(window.scrollY > declanche_clouds & window.scrollY < declanche_clouds2)  {
horizontal= Math.round(300-(((1948-window.scrollY)/5)*3));
/*console.log(vertical);
console.log(horizontal);*/
    root.style.setProperty("--mouv_clouds","-"+horizontal+"px");
  }
}, 500);});


/*

window.addEventListener("scroll", () => {
  const declanche_clouds=1448;
 if(window.scrollY > declanche_clouds )  {


    root.style.setProperty("--mouv_clouds", "300px");
  }
});

(&(window.scrollY < 1948))*/

//**script fermeture menu */
const Burger= document.querySelector(".burger_menu");
console.log(Burger);
// Burger.setAttribute("display", "block");changer src de l'image
const Nav= document.querySelector("#site-navigation");
console.log(Nav)
let LiPresent = document.querySelectorAll(".burger_menu li a");//recuperation des a
console.log(LiPresent);/**/

for (let i=0; i<LiPresent.length;i++){
  let Liclick=LiPresent[i]
  Liclick.addEventListener("click",(event)=>{
    Li=event.target
    if (Li)

    Nav.classList.remove("toggled");//Suppression d'une class
   
   })
}