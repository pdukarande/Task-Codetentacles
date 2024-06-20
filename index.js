const counter = document.querySelector('.counter');
let times = 0;
let id = setInterval(function(){
  counter.textContent = times*300;
  times++;
  if(times==101){
    window.clearInterval(id)
  }
},20)
function toggleNav() {
    var sidepanel = document.getElementById("mySidepanel");
    sidepanel.classList.toggle('open');  
  }
  function closeNav() {
    var sidepanel = document.getElementById("mySidepanel");
    sidepanel.classList.remove('open'); // Ensure the 'open' class is removed
  }


  

