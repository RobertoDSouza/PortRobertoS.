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


function typingEffect() {
  const contactTexts = shuffleArray(['HTML + CSS','Bootstrap',
  'JavaScript ES6', 'React JS','Node Js','API', 'React Hooks','Git']);
  const typedtext = document.getElementsByClassName("typedtext")[0];
  let removing = false;
  let idx = char = 0;

  setInterval(() => { // We define the interval of the typing speed

      // If we do not reach the limit, we insert characters in the html
      if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

      // 15*150ms = time before starting to remove characters
      if (char == contactTexts[idx].length + 4) removing = true;

      // Removing characters, the last one always
      if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

      char++; // Next character

      // When there is nothing else to remove
      if (typedtext.innerHTML.length === 0) {

          // If we get to the end of the texts we start over
          if (idx === contactTexts.length - 1) idx = 0
          else idx++;

          char = 0; // Start the next text by the first character
          removing = false; // No more removing characters
      }

  }, 90); // Typing speed, 150 ms

}
typingEffect();
function shuffleArray(array) {
  let currentIndex = array.length,
      temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}



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

