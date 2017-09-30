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
});