function GeneraTimer() {
  this.generalTime = 0;
  this.start = false;
}

function Arrow1(){
  this.currentTime = 0;
}

function Arrow2(){
  this.currentTime = 0;
}

Arrow1.prototype = new GeneraTimer();
Arrow2.prototype = new GeneraTimer();
  // * instances
var arrow1 = new Arrow1(),
    arrow2 = new Arrow2();
  // * starter
var start = document.getElementById('btn').addEventListener('click', starting);

function starting() {
  arrow1.start = true;

  if(arrow1.start == true){
    // * Caching variable
    var doc = document;

    var int = setInterval(function() {
      var elem1 = doc.getElementById('arrow1'),
          elem2 = doc.getElementById('arrow2');
        // * incrementing arrows individual timer
      Math.floor(arrow1.currentTime++/20);
      Math.floor(arrow2.currentTime++/10/60);
        // * elems (incrementing general time for arrows)
      elem1.style.transform = "rotate(" + Math.floor(arrow1.generalTime++/10*6) + "deg)";
      elem2.style.transform = "rotate(" + Math.floor(arrow2.generalTime++/10/60) + "deg)";
        // * arrows (checked)
      if(arrow1.currentTime++/20 >= '60'){
        arrow1.currentTime = 0;
      }
    },100);
      // * pause
    var pause = doc.getElementById('pause-btn').addEventListener('click', function() {
      alert('Прошло ' + Math.floor(arrow2.currentTime++/10/60) + ' минут и ' + Math.floor(arrow1.currentTime++/20) + ' секунд(ы).');
      clearInterval(int);
    })
  }
}
