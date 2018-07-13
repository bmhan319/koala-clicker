//get element, add a listener
var koala = document.getElementById("koala");
koala.addEventListener("click", clickCount);
//koala.onclick = clickCount;

var count = 0;

//handler function
function clickCount() {
  count++;
//output to HTML
  var displayCounter = document.getElementById("counter")
  displayCounter.innerHTML = count;
}



