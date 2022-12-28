
//define accordian variable 

let acc = document.getElementsByClassName('accordion');

//loop through accordion items

for (let i = 0; i < acc.length; i++) {
    console.log(acc[i]);
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,*/
       
    this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    
        console.log(panel);

    if (panel.style.display === "block") {
          panel.style.display = "none";
    } else {
          panel.style.display = "block";
    }
      });
    } 


    //! HELPFUL LINKS
    //! getElementsByClassName: https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
    //! this keyword: https://www.w3schools.com/js/js_this.asp
    //! classList: https://www.w3schools.com/jsref/prop_element_classlist.asp
    //! for loops: https://www.w3schools.com/js/js_loop_for.asp
    //! nextElementSibling: https://www.w3schools.com/js/js_loop_for.asp
    //! HTML DOM element objects, properties and methods: https://www.w3schools.com/jsref/dom_obj_all.asp
    