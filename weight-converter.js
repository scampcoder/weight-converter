function kgtolbs(valNum) {
  //1kg=2.20462lbs
  valNum = valNum*2.2046;
  //set to no decimal places
  let n = valNum.toFixed(0);
  //place converted weight inside output <span>
    document.getElementById('outputPounds').innerHTML=n;
}

function lbstokg(valNum){
  valNum = valNum/2.2046;
  let n = valNum.toFixed(0);
    document.getElementById('outputKilograms').innerHTML=n;
}
