/*NAVIGATION*/
let navElements = document.querySelectorAll('.navigation-item')
console.log(navElements);
navElements.forEach(item =>
    item.addEventListener('click', function () {
        let currentActiveElement = document.getElementsByClassName('navigation-item active');
        currentActiveElement[0].className = currentActiveElement[0].className.replace(' active', '');
        this.className += ' active';
    })
);