
window.addEventListener("keyup",(e)=>{
     if (e.keyCode == 113) {
       document.querySelector("body").classList.toggle("dark-theme");
     }
})

// let numero = parseInt(prompt("Dime un numero"));

// let numeroSumar = 0;

// while(numeroSumar < numero){
//     numeroSumar++;
//     console.log(numeroSumar)
// }



 let btnA = document.querySelector(".move1");
 let btnB = document.querySelector(".move2");

 let closeModal = document.querySelector(".ri-close-line");
 let closeModal2 = document.querySelector(".close2");
   let modalDw = document.querySelector(".modal-services");
   	let modalDw2 = document.querySelector(".modal-services2");



closeModal.addEventListener("click",function(){
	cerrarModal(modalDw);
})
closeModal2.addEventListener("click",function(){
	cerrarModal(modalDw2)
})

btnB.addEventListener("click",function(e){
    modalDw.classList.add("active")
    e.preventDefault()
})

btnA.addEventListener("click",function(e){
	modalDw2.classList.add("active")
	e.preventDefault();

})

function cerrarModal(modal){
      	modal.classList.remove("active")
}

let moon = document.querySelector(".ri-moon-fill");

moon.addEventListener("click",function(){

	moon.classList.toggle("ri-sun-fill");

	let body = document.querySelector("body");

	body.classList.toggle("dark-theme")
    
})

// let contentSlide = document.querySelector(".content-slide");

// let viewSlide = document.querySelectorAll(".view-slide");

// let contando = 1;

// let contar = 1;
// let intervalo = 2500;



// let arrowLeft = document.querySelector(".ri-arrow-left-s-line");

// let arrowRight = document.querySelector(".ri-arrow-right-s-line");

// // setInterval(function(){
// //     slider()
// // },intervalo)
 

// arrowRight.addEventListener("click",sliderRight)

// function sliderRight(e){

        
//         let width = viewSlide[0].clientWidth;

//         contentSlide.style.transform = "translate("+ (-width * contando) + "px";
//         contentSlide.style.transition = "transform 1s";
//         contando++;
//         if (contando === viewSlide.length) {
//             contando = 2;
//         }
// }

// arrowLeft.addEventListener("click",sliderleft)
    
  
//   function sliderleft(){
//         let width2 = viewSlide[0].clientWidth;

//         contentSlide.style.transform = "translate("+ (-width2 * contando) + "px";
//         contentSlide.style.transition = "transform 1s";
//         contando--;

//         if (contando === -1) {
//             contando = 0;
//             console.log(contando)
//         }
//   }


  let  swiper = new Swiper('.swiper-container', {
      cssMode: true,
      loop:true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
         mousewheel: true,
    });
       

  let pageOne = document.getElementById('pageOne');
  let pageTwo = document.getElementById('pageTwo');
  let pageTree = document.getElementById('pageTree');



  pageOne.addEventListener("click",()=>{
      window.open("https://abelsirius.github.io/PeruTravel/");
  })


  pageTwo.addEventListener("click",()=>{
      window.open("https://abelsirius.github.io/PaginaWeb/");
  })

  pageTree.addEventListener("click",()=>{
      window.open("file:///C:/Users/PC-011/OneDrive%20-%20CIBERTEC/Desktop/CSS,%20JS%20Y%20HTML/Pagina%20web%203/index.html");
  }) 
         

  /* ----------------------- Navigator nav ----------- */


  function closeNavUl (){
     let nav = document.querySelector('.nav__data');
     nav.classList.remove('active')
     const iconBugerToggle = document.getElementById('burger_icon');
     iconBugerToggle.className = 'ri-function-line';
  }


  const arrLinks = document.querySelectorAll('.link_nav a');


  arrLinks.forEach(function(link){
        
     link.addEventListener('click',closeNavUl)

  })



  /* ------------------- toggle burger ---------------- */ 


  const iconBugerToggle = document.getElementById('burger_icon');

  iconBugerToggle.addEventListener('click',function(){
      
      if(iconBugerToggle.classList.contains('ri-function-line')){
        iconBugerToggle.className = 'ri-close-line'
      }
      else{
        iconBugerToggle.className = 'ri-function-line'
      }

  })

  /* ------------ dowmload ----------- */ 
//   function download(filename, text) {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/doc;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);
  
//     element.style.display = 'none';
//     document.body.appendChild(element);
  
//     element.click();
  
//     document.body.removeChild(element);
//   }
  
//   // Start file download.
  

//   document.getElementById('descargar-cv').addEventListener("click", function(){
//     // Generate download of hello.txt file with some content
//     var filename = 'abelCv.doc'
    
//     download(filename, text);
// }, false);// Api WhatsApp
let btnSubmit = document.querySelector('btn-submit');
let formWhatsApp = document.querySelector('.form_api');
const sendMensaje = (e) =>{
   e.preventDefault()
	consolé.log("hola mundo");
   let name = document.querySelector('.namE');
   let text = document.querySelector('.mensaje_api');
   let url = "https://api.whatsapp.com/send?phone=51926488675&text=Nombre: %0A" + name.value + "%0a%0AMensaje: %0A" + text.value + "%0A";
   if(name.value.length > 0 && text.value.length > 0){
    window.open(url)
    name.value = '';
    text.value = '';
   }else{
       if(formWhatsApp.lastElementChild.classList.contains('error-whatsapp') === false){
        let error = document.createElement('H3');
        error.classList.add('error-whatsapp')
        error.textContent = "Por favor rellene los campos";
        error.style.color = '#fa4e4e';
        error.style.padding = '0 0 8px 0'
        formWhatsApp.appendChild(error)
       }
   }
}

formWhatsApp.addEventListener('submit',sendMensaje);
alert("hola");


const sendMe = (e) ={alert(e)};

btnSubmit.addEventListener('click',sendMe);
