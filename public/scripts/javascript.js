window.onscroll = function () { myFunction() };

var header = document.getElementById("navbar");
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

function myFunction() {
    if (window.pageYOffset > h) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function scrollSection(scroll) {
    var navItem = document.getElementById(scroll)
    navItem.scrollIntoView();
}