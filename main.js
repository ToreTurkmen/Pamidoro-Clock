//varaible

var workTitle = document.getElementById('work');
var breakTitle = document.getElementById('break');
 

var workTime = 25;
var breakTime = 5;
var seconds = "00";


//display
window.onload = () => {
  document.getElementById('minutes').innerHTML = workTime;
  document.getElementById('seconds').innerHTML = seconds;
  
  workTitle.classList.add('active');

}

//start timer 

function start() {
  //change button
  document.getElementById('start').style.display = "none";
  document.getElementById('reset').style.display = "block";
  
  
  
  //change th time
  seconds = 59;

  var workMinutes = workTime - 1;
  var breakMinutes = breakTime - 1;

  breakCount = 0;

  //count down
  var timerFunction = () => {
    //change the display
    document.getElementById('minutes').innerHTML = workMinutes;
    document.getElementById('seconds').innerHTML = seconds;

    //start
    seconds = seconds - 1;

    if(seconds === 0) {
      workMinutes = workMinutes  - 1;
      if(workMinutes === - 1) {
        if(breakCount % 2 === 0 ){
          //start break
          workMinutes = breakMinutes;
          breakCount ++

          //change the pianel
          workTitle.classList.remove('active');
          breakTitle.classList.add('active');

        } else {
          //continue work
          workMinutes = workTime;
          breakCount ++
          //change the pianel
          breakTitle.classList.remove('active');
          workTitle.classList.add('active');
          
        }

      }

      seconds = 59;

    }

  }
  //start countdown
  setInterval(timerFunction, 1000);
}