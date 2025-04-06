var count = 0;
var button = document.getElementById("click-me");
var counter = document.getElementById("counter");
button.addEventListener('click', function(){
  count++;
  counter.innerHTML = count;
});
