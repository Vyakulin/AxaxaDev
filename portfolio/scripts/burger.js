const burger_button = document.getElementById('burger_check');
const burger_menu = document.getElementsByClassName('burger_menu');
const burger_opened = document.getElementById('burger_button1');
const burger_closed = document.getElementById('burger_button2');

burger_button.onclick = function() {
    if (burger_button.checked == true) {
        burger_menu[0].style.display = 'flex';
        burger_menu[0].classList.toggle('burger_open');
        burger_menu[0].classList.toggle('burger_close');
        burger_menu[0].style.translate = '0';
        burger_opened.style.display = 'none';
        burger_closed.style.display = 'block';
    } else {
        burger_menu[0].classList.toggle('burger_open');
        burger_menu[0].classList.toggle('burger_close');
        burger_menu[0].style.translate = '75vw 0';
        burger_closed.style.display = 'none';
        burger_opened.style.display = 'block'; 
    };
    
};