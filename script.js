var massiveText=[
    'Здравствуйте.',
    'привет.',
    'добрый день.'
];
var randomNum=Math.floor(Math.random()*3);
alert(massiveText[randomNum]);

var count = 0;
var button = document.getElementById("click-me");
var counter = document.getElementById("counter");
button.addEventListener('click', function(){
  count++;
  counter.innerHTML = count;
});
