var shop=document.getElementById('openShop');
var back=document.getElementById('back');
var settings=document.getElementById('settings');
var button = document.getElementById("click-me");
var upgrade1Button=document.getElementById('upgrade1');
var upgrade2Button=document.getElementById('upgrade2');
var upgrade3Button=document.getElementById('upgrade3');
var upgrade4Button=document.getElementById('upgrade4');
var upgrade5Button=document.getElementById('upgrade5');
var backsettings=document.getElementById('backsettings');
var grey=document.getElementById('grey');
var popUp=document.getElementById('popUp');
var popUpClose=document.getElementById('close');
var popUpText=document.getElementById('mistake');
var count = 0;
var upgrade0=0;
var counter = document.getElementById("counter");

popUpClose.addEventListener('click',function(){
  grey.classList.add('hidden');
  popUp.classList.add('hidden');
});
document.addEventListener('keydown', function(event){
  if(event.keyCode=13){
    button.blur();
  }
});

shop.addEventListener('click',function(){
  shop.classList.add('hidden');
  back.classList.remove('hidden');
  upgrade1Button.classList.remove("hidden");
  upgrade2Button.classList.remove('hidden');
  upgrade3Button.classList.remove('hidden');
  upgrade4Button.classList.remove('hidden');
  upgrade5Button.classList.remove('hidden');
  settings.classList.add('hidden');
});
back.addEventListener('click',function(){
  shop.classList.remove('hidden');
  back.classList.add('hidden');
  upgrade1Button.classList.add("hidden");
  upgrade2Button.classList.add('hidden');
  upgrade3Button.classList.add('hidden');
  upgrade4Button.classList.add('hidden');
  upgrade5Button.classList.add('hidden');
  settings.classList.remove('hidden');
});
upgrade1Button.addEventListener('click',function(){
  if(10>count){
    popUp.classList.remove('hidden');
    grey.classList.remove('hidden');
    popUpText.textContent='Ошибка! Вы должны набрать не менее 10 кликов.';
  }
  else{
    count=count-10;
    upgrade0=upgrade0+1;
    counter.innerHTML = count;
  }

});

upgrade2Button.addEventListener('click',function(){
  if(20>count){
    popUp.classList.remove('hidden');
    grey.classList.remove('hidden');
    popUpText.textContent='Ошибка! Вы должны набрать не менее 20 кликов.';
  }
  else{
  count=count-20;
  upgrade0=upgrade0+2;
  counter.innerHTML = count;
}

});

upgrade3Button.addEventListener('click',function(){
  if(30>count){
    popUp.classList.remove('hidden');
    grey.classList.remove('hidden');
    popUpText.textContent='Ошибка! Вы должны набрать не менее 30 кликов.';
  }
  else{
  count=count-30;
  upgrade0=upgrade0+3;
  counter.innerHTML = count;
}

});
upgrade4Button.addEventListener('click',function(){
  if(40>count){
    popUp.classList.remove('hidden');
    grey.classList.remove('hidden');
    popUpText.textContent='Ошибка! Вы должны набрать не менее 40 кликов.';
  }
  else{
  count=count-40;
  upgrade0=upgrade0+4;
  counter.innerHTML = count;
}

});
upgrade5Button.addEventListener('click',function(){
  if(50>count){
    popUp.classList.remove('hidden');
    grey.classList.remove('hidden');
    popUpText.textContent='Ошибка! Вы должны набрать не менее 50 кликов.';
  }

  else{
  count=count-50;
  upgrade0=upgrade0+5;
  counter.innerHTML = count;
}

});
button.addEventListener('click', function(){  
  count++;
  count=count+upgrade0;
  counter.innerHTML = count;
});
settings.addEventListener('click',function(){
  shop.classList.add('hidden');
  backsettings.classList.remove('hidden');
  settings.classList.add('hidden');
});
backsettings.addEventListener('click',function(){
  shop.classList.remove('hidden');
  backsettings.classList.add('hidden');
  settings.classList.remove('hidden');
});
