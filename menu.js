var bttMenu = document.querySelector(".menu");
var menu = document.getElementById("menu");
menu.status = false;

var iconMenu = bttMenu.querySelector(".icon");

var iconOpen = iconMenu.getElementsByClassName("open"),
    iconClose = iconMenu.getElementsByClassName("close");

bttMenu.addEventListener("click", function() {
    if (menu.status) {
        menu.classList.remove("active");
        for (var i = 0; i < iconOpen.length; i++) {
            iconOpen[i].beginElement();
        }
    } else {
        menu.classList.add("active");
        for (var i = 0; i < iconClose.length; i++) {
            iconClose[i].beginElement();
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