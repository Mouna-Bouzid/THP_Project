const addContrast= document.getElementById('addContrast')
const invertedMode= document.getElementById('invertedMode')
const psychedelicMode= document.getElementById('psychedelic')
const body=document.getElementsByTagName('body')[0]
const html=document.getElementsByTagName('html')[0]
const modal=document.getElementById('myModal')
const header= document.getElementsByTagName('header')[0]
var closeModal = document.getElementsByClassName("close")[0];
var colorAuto = document.getElementById('colorAuto')



// addcontrast // psychedelic mode // night mode
function styleFunction(element, addClass, arr){
    element.addEventListener('click', function(){
    if(element.innerHTML=== arr[1]){
        body.classList.add(addClass)
        element.innerHTML=arr[0]
    }
    else{
        body.classList.remove(addClass)
        element.innerHTML=arr[1]  
    }
    
})
}

function addSomeContrast(){
    styleFunction(addContrast, "contrast", ["Less Contrast", "More Contrast"]);
}
function addInvertedMode(){
    styleFunction(invertedMode, "inverted", ["Normal Mode", "Inverted Mode"]);
}
function addpsychedelicMode(){
    styleFunction(psychedelicMode, "psychedelic", ["Normal Mode", "Psychedelic Mode"]);
}

//modal Ad
setTimeout( 
function() {
    modal.style.display = "flex";
  }, 10000)

closeModal.addEventListener('click', function(){
  modal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

//on scroll  
window.onscroll = ()=>{
  
body.classList>=1 ? x=body.classList[body.classList.length - 1]: x=body.classList.value;

if (x==="" || x==="contrast") { 
  if ((document.body.scrollTop > 0 || document.documentElement.scrollTop > 30)&&(x==="" || x==="contrast")){
  header.style.backgroundColor = "white";
  body.classList>= 1? x=body.classList[body.classList.length - 1]: x=body.classList.value;
} 
else{ 
  header.style.backgroundColor = "#031327";
}
}
  } 
  

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//color changes Auto
var colorValue=0;
var toAdd=5;
colorEffect=(colorValue, toAdd)=>{
  var color= "hsl(" + colorValue + ", 80%, 60%)";
  (colorValue + toAdd) > 360 ? colorValue=0 : colorValue += toAdd;
  colorAuto.style.color=color
  setTimeout(()=>colorEffect(colorValue, toAdd), 1000/20)
 }

//Appel
colorEffect(colorValue, toAdd)
addSomeContrast();
addInvertedMode();
addpsychedelicMode();