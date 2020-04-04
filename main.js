const addContrast= document.getElementById('addContrast')
const invertedMode= document.getElementById('invertedMode')

const body=document.getElementsByTagName('body')[0]

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

addSomeContrast();
addInvertedMode()