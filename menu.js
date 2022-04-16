var bttMenu = document.querySelector(".menu");
var iconMenu = bttMenu.querySelector(".icon");
var menu = document.getElementById("menu");
menu.status = false;

var nav = document.getElementsByTagName("nav")[0];

bttMenu.addEventListener("click", function() {
    iconMenu.classList.toggle("active");
    menu.classList.toggle("active");

    if (menu.status) {
        scroller.start();
        onScrollMenu(scroller.scroll.instance.scroll.y);
    } else {
        scroller.stop();
        if (nav.classList.contains("scroll")) {
            nav.classList.remove("scroll");
        }
    }
    menu.status = !menu.status;
});

var menuList = menu.querySelector(".list").children;
var menuCover = menu.querySelector(".listCover").children;

for (let i = 0; i < menuList.length; i++) {
    menuList[i].img = menuCover[i]

    menuList[i].addEventListener("mouseenter", menuItemEnter);
    menuList[i].addEventListener("mouseleave", menuItemLeave);
}

function menuItemEnter() {
    this.img.classList.add("display");
}

function menuItemLeave() {
    this.img.classList.remove("display");
}

function onScrollMenu(scrollY) {
    if (scrollY > window.innerHeight - 100) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }
}