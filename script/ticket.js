
const allSeat = document.getElementsByClassName('kbd');



for (const seat of allSeat){
  seat.addEventListener("click",function(event){
    const seat = event.target.parentNode.childNodes[1].childNodes[1].innerText;
    const classType = event.target.parentNode.childNodes[1].childNodes[3].innerText;
    const price = event.target.parentNode.childNodes[1].childNodes[5].innerText;
    
    
    const limit = getTextValueInNum('total-seat');
    if(limit+1>4)
    {
      alert('limit crose')
      return;
    }
    event.target.style.backgroundColor = '#1DD100';
    event.target.style.color = 'white';
    // left seat
    const leftSeat = getTextValueInNum('left-seat');
    document.getElementById('left-seat').innerText = leftSeat-1;

    // selected seat

    const selectNoSeat = getTextValueInNum('total-seat');
    document.getElementById('total-seat').innerText = selectNoSeat+1;

    
    
    
    
    
    // appended class

    const selectedSeat = document.getElementById('selected-seat-container');
    // creat a apanded class
    const div = document.createElement("div");
    div.classList.add('flex')
    div.classList.add('justify-between')
    div.classList.add('ml-12')
    div.classList.add('mr-10')

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = seat;
    p2.innerText = classType;
    p3.innerText = price;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    selectedSeat.appendChild(div);

    
    totalCost(price)
    grandPrice()



  })
}

function totalCost(value){

  const price = getTextValueInNum('total-price');
  const sum = price + parseInt(value);
  document.getElementById('total-price').innerText = sum;

}

function grandPrice(id){

  const price = getTextValueInNum('total-price');
  if(id == undefined){
   
    const grandPrice = document.getElementById("Grand-total");
    grandPrice.innerHTML = price;
  }

  else{
  const cuppon = document.getElementById('cuppon').value;
    
  if(cuppon == 'NEW15'){
    const discount = price*0.15;
    const grandPrice = document.getElementById("Grand-total");
    grandPrice.innerHTML = price - discount;

  }
  else if(cuppon == 'Couple 20'){
    const discount = price*0.2;
    const grandPrice = document.getElementById("Grand-total");
    grandPrice.innerHTML = price - discount;
  }

  else{
    alert('Enter valid cuppon code')
  }

}
}

// hide the input box
document.getElementById('btn').addEventListener('click',function(event){
  grandPrice('btn');
  addHidden('hid');}
)


