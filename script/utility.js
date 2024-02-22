function addBackgroundColour(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-red-800');
}


function addHidden(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function getTextValueInNum(elementId){
    const element = document.getElementById(elementId).innerText;
    const converted = parseInt(element);
   return converted;
}

