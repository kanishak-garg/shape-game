var btn1 = document.getElementById('color');
var btn2 = document.getElementById('shape');
var box = document.getElementById('out');
var circle = document.getElementById('circle');
var square = document.getElementById('square');
var triangle = document.getElementById('triangle');
var a = ["red","green","blue","yellow"];
var b = [circle,square,triangle];
function color(){
	var i = a[Math.floor(Math.random()*a.length)];
	box.style.background = i;
}
function shape(){
	var j = b[Math.floor(Math.random()*b.length)];
	for(var t=0;t<b.length;t++)
	{
		if(b[t]==j)
		{
			j.style.display="block";
			continue;
		}
		b[t].style.display="none";
	}
	
}
btn1.addEventListener('click',color);
btn2.addEventListener('click',shape);