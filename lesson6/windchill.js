window.addEventListener("load",(event)=>{
var s = document.getElementById("speed").innerHTML;
var t = document.getElementById("temp").innerHTML;
t = parseInt(t);
s = parseInt(s);
var f = document.getElementById("wind");
f.innerHTML = (35.74+0.6215*t-35.75*Math.pow(s,0.16)+0.4275*t*Math.pow(s,0.16)).toFixed(2);
console.log('#wind')});