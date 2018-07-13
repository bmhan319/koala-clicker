//get element, add a listener
var koala = document.getElementById("koala");
koala.addEventListener("click", clickCount);
//koala.onclick = clickCount;

var count = 0;

//handler function
function clickCount() {
  count++;
//output to HTML
  var displayCounter = document.getElementById("title")
  displayCounter.innerHTML = count;
}

 
function myFunction(){
if (count==9||count==19){
  document.getElementById("color").style.color="red";
} else {
  document.getElementById("color").style.color="blue";
}
}