clickHeading=document.querySelector(".heading");
popup=document.querySelector(".popup");
cross=document.querySelector(".cross");
body=document.querySelector("body")
overlay=document.querySelector(".overlay");

clickHeading.addEventListener('click',()=>{
    clickHeading.parentElement.style.display='none';
    overlay.classList.add('active');
    popup.classList.add('open');
  


})
cross.addEventListener('click',()=>{
    clickHeading.parentElement.style.display='flex';
    overlay.classList.remove('active');
    popup.classList.remove('open');
   
})

overlay.addEventListener('click',()=>{
    clickHeading.parentElement.style.display='flex';
    overlay.classList.remove('active');
    popup.classList.remove('open');
   
})

