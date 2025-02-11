var lowerBound = document.querySelector('#lower');
var upperBound = document.querySelector('#upper');

var calculate = document.querySelector('#calculate');

var result = document.querySelector('#result');

if (!!window.Worker) {
  var myWorker = new Worker('worker.js');

  calculate.onclick = function() {
    document.getElementById("loading").style.display = 'block';
    myWorker.postMessage([lowerBound.value, upperBound.value]);
    console.log( '[script.js] - Message posted to worker.js' );
  }

  myWorker.onmessage = function(e) {
    document.getElementById("loading").style.display = 'none';
    result.textContent = e.data;
    console.log( '[script.js] - Message received from worker.js' );
  }
}