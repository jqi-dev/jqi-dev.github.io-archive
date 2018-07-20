function toggle(id) {
 var div = document.getElementById(id);
 div.style.opacity = div.style.opacity == 0 ? 1 : 0;
 div.style.display = div.style.display == "block" ? "none" : "block";
 }

 function toggleimage(id) {
   var div = document.getElementById(id);
   div.style.opacity = div.style.opacity == 0 ? 1 : 0;
   div.style.display = div.style.display == "flex" ? "none" : "flex";
 }
