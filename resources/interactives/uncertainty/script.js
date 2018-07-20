window.onload = function() {

  var odometerValue = {value: 150000};
  var odometer = document.getElementById("odometerValue");
  var randomFactor = {value: 0};

  var tl = new TimelineMax({repeat: -1});

  function odometerTween() {
    let newtl = new TimelineMax();
    newtl.to(odometerValue, 1, {value: 150000 + ( Math.random() - 0.5 ) * 100000 * randomFactor.value ** 8, roundProps:"value", onUpdate:updateHandler, ease:Linear.easeNone});
  }

  function arrowTween() {
    let newtl = new TimelineMax();
    let rotationFactor = 1 - (randomFactor.value);
    newtl.to('#arrow', 1, {rotation: (Math.random() - 0.5) * 720 * rotationFactor, ease:Linear.easeNone});
  }

  TweenMax.set('#circle', {scaleX: 0.25, scaleY:2});

  tl.to('#circle', 6, {scaleX: 2, scaleY:0.25});
  tl.to(randomFactor, 6, {value:1,
    onUpdate : function(){
      odometerTween();
      arrowTween();
    }}, 0);
  tl.delay(2);
  tl.to('#circle', 6, {scaleX: 0.25, scaleY:2});
  tl.to(randomFactor, 6, {value:0,
    onUpdate : function(){
      odometerTween();
      arrowTween();
    }}, 6);
  tl.delay(2);

  function updateHandler() {
    odometer.innerHTML = odometerValue.value;
  }

}
