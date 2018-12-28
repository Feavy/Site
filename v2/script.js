(function(){

var menuButton = document.querySelector("#menu");
var buttons = document.querySelectorAll(".button");
var medias = document.querySelector("#medias");
var content = document.querySelector("#content");

var menuHidden = true;

window.addEventListener("resize", () => {

    let width = window.innerWidth;
    if(width > 768 && menuHidden){
        showMenu();
    }

});

content.addEventListener("click", () => {
    if(!menuHidden && window.innerWidth <= 768){
        hideMenu();
    }
});

menuButton.addEventListener("click", () => {
    if(menuHidden)
        showMenu();
    else
        hideMenu();
});

function showMenu(){
    for(let button of buttons){
        button.style.opacity = "1";
        button.style.visibility = "visible";
        medias.style.opacity = "1";
        medias.style.visibility = "visible";
        menuButton.src = "localhost:8000/Desktop/SniiKzy/images/close.png";
    }
    menuHidden = false;
}

function hideMenu(){
    for(let button of buttons){
        button.style.opacity = "0";
        button.style.visibility = "hidden";
        medias.style.opacity = "0";
        medias.style.visibility = "hidden";
        menuButton.src = "localhost:8000/Desktop/SniiKzy/images/menu.png"
    }
    menuHidden = true;
}
})();