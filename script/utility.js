function addBackgroundColour(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-red-800');
}

function removeBackgroundColour(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-red-800');
}

function getTextValueInNum(elementId){
    const element = document.getElementById(elementId).innerText;
    const converted = parseInt(element);
   return converted;
}

