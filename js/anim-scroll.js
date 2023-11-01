
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
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('title-animation');
      }
    });
 } );
  
 
  observer.observe(document.querySelector('.story .title'));
  observer.observe(document.querySelector('#studio .title'));
  observer.observe(document.querySelector('.main-character .title'));/**/
 observer.observe(document.querySelector('#place .title'));
 observer.observe(document.querySelector('#oscars .title'));