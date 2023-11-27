// getting current date element
let date = document.getElementById("currentdate");
d = new Date();
date.innerHTML = d.toDateString() + " " + d.toLocaleTimeString() + " " +"PST";




