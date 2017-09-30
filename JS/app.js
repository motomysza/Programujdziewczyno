'use strict';

document.addEventListener('DOMContentLoaded', function() {
 console.log("ok");   
    
    var forDropdown = document.querySelector('.for-dropdown');
    console.log(forDropdown);
    var menu = document.querySelector('.dropdown');
    console.log(menu);
    
    forDropdown.addEventListener('mouseover', function() {
        menu.style.display = 'block';
    });
    
    forDropdown.addEventListener('mouseout', function() {
        menu.style.display = 'none';
    });
    var buttons = document.querySelectorAll('.read-more');
    console.log(buttons[0].previousElementSibling);
    buttons[0].addEventListener('click', function() {
        var textArea = this.previousElementSibling;
        //console.log(textArea);
        //textArea.style.display = 'block';
        //this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';  
        if (textArea.style.display === 'none' || textArea.style.display === '') {
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        } else {
            textArea.style.display = 'none';
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
                 }
    });
});