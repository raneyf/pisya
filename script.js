var shop=document.getElementById('openShop');
var back=document.getElementById('back');
var button = document.getElementById("click-me");
var upgrade1Button=document.getElementById('upgrade1');
var count = 0;
var upgrade0=0;
var counter = document.getElementById("counter");

shop.addEventListener('click',function(){
  shop.classList.add('hidden');
  back.classList.remove('hidden');
  upgrade1Button.classList.remove("hidden");
});
back.addEventListener('click',function(){
  shop.classList.remove('hidden');
  back.classList.add('hidden');
  upgrade1Button.classList.add('hidden');
});
upgrade1Button.addEventListener('click',function(){
  count=count-10;
  upgrade0=upgrade0+1;
  counter.innerHTML = count;
});
button.addEventListener('click', function(){
  count++;
  count=count+upgrade0;
  counter.innerHTML = count;
});
