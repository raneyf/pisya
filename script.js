var h1Id=document.getElementyById('h1');
var buttonId=document.getElementyById('button');
var counter=0;
buttonId.addEventListerner('click',function(){
  counter++;
  h1Id.textContent='Кликов сделано:'+counter;
})
