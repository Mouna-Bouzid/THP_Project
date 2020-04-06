const addContrast= document.getElementById('addContrast')
const invertedMode= document.getElementById('invertedMode')
const psychedelicMode= document.getElementById('psychedelic')
const body=document.getElementsByTagName('body')[0]
const html=document.getElementsByTagName('html')[0]
const modal=document.getElementById('myModal')
const header= document.getElementsByTagName('header')[0]
var closeModal = document.getElementsByClassName("close")[0];

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

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.classList.value===""){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      header.style.backgroundColor = "rgb(255, 255, 255, 0.98)";
    } else {
     header.style.backgroundColor = "#031327";
    }
  }
}

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  


addSomeContrast();
addInvertedMode();
addpsychedelicMode();