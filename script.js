var h1Id=document.getElementyById('h11');
var buttonId=document.getElementyById('button1');
var counter=0;
buttonId.addEventListener('click',fuction(){
	counter++;
	h1Id.textContent='Кликов сделано:'+counter;
});	