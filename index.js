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
 
 document.querySelector('.hamburger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-active');
  })
