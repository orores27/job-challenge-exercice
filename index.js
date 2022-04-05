/* Toggle between showing and hiding the navigation menu links when the user clicks ont the hamburger menu / bar icon */


let icone = document.getElementById("icon") ;
    icone.addEventListener('click', menuDefile);

function menuDefile() {
    
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }