
//define accordian variable 

let acc = document.getElementsByClassName('accordion');

//loop through accordion items

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,*/
       
    this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
          panel.style.display = "none";
    } else {
          panel.style.display = "block";
    }
      });
    } 