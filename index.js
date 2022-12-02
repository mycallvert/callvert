/* <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access -->
<!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access -->
<!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access -->
<!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> */



const imshit = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) =>{
   entries.forEach(ENTRY =>{

      ENTRY.target.classList.toggle("show-text", ENTRY.isIntersecting)
     
   })
},{
    
    
});



imshit.forEach(p => {
   observer.observe(p)
})


/* <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access -->
<!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access -->
<!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access -->
<!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> <!-- this after need access --> */

const cusan = document.querySelectorAll('.col-lg-4');

const observer2 = new IntersectionObserver((entries) =>{
   entries.forEach(ENTRY =>{

      ENTRY.target.classList.toggle("show-text", ENTRY.isIntersecting)
     
   })
},{
    
    
});



cusan.forEach(p => {
   observer2.observe(p)
})


const textshit = document.querySelectorAll('.text_anima');

const observer3 = new IntersectionObserver((entries) =>{
   entries.forEach(ENTRY =>{

      ENTRY.target.classList.toggle("show-text", ENTRY.isIntersecting)
     
   })
},{
    
    
});



textshit.forEach(m => {
   observer3.observe(m)
})
