document.getElementById('mbr').addEventListener('click',()=>{
    window.open('https://robertodsouza.github.io/MBritoEng/', '_blank');
});

document.getElementById('mara').addEventListener('click',()=>{
    window.open('https://robertodsouza.github.io/Maranata-Sevicos-Efraim-Gesso/', '_blank');
});

document.getElementById('cemj').addEventListener('click',()=>{
    window.open('https://robertodsouza.github.io/ColegioCemj#/Home', '_blank');
});


document.getElementById('cep').addEventListener('click',()=>{
    window.open('https://robertodsouza.github.io/Busque-Pelo-CEP/', '_blank');
});



document.getElementById('mbr2').addEventListener('click',()=>{
    window.open('https://github.com/RobertoDSouza/MBritoEng', '_blank');
});

document.getElementById('mara2').addEventListener('click',()=>{
    window.open('https://github.com/RobertoDSouza/ColegioCemj', '_blank');
});

document.getElementById('cemj2').addEventListener('click',()=>{
    window.open('https://github.com/RobertoDSouza/ColegioCemj', '_blank');
});


document.getElementById('cep2').addEventListener('click',()=>{
    window.open('https://github.com/RobertoDSouza/Busque-Pelo-CEP', '_blank');
});



const targteanime= document.querySelectorAll('[data-anime]');
const animationClass='animated';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight*3)/4);
    targteanime.forEach((e)=>{
        if((windowTop) > e.offsetTop){
            e.classList.add(animationClass);
        }else{
            e.classList.remove(animationClass);
        }
    })
}

window.addEventListener('scroll',()=>{
    animeScroll();
})




const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Vou fazer um mini Game!", "Ou talvez um conversor de arquivos...?"
, "Quem sabe uma calculadora de sono...?", "Aguarde! Será legal :D"];
let typingDelay = 70;
let erasingDelay = 30;
let newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

