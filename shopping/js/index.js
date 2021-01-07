var dt = document.querySelector('.dt');
var dd = document.querySelector('.dd').querySelectorAll('li');
dt.onchick = function () {
    dd.style.diplay = 'block';
}
