
//define accordian variable 

const accordian = document.getElementsByClassName('container');

//loop through accordian items

for (i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}