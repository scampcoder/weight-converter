function weightConverter(valNum) {
  //1kg=2.20462lbs
  let valNum = valNum*2.2046;
  //set to no decimal places
  let n = valNum.toFixed(0);
  //place converted weight inside output <span>
    document.getElementById('outputPounds').innerHTML=n;
}
