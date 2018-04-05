(function(){

var content = document.getElementById("content");
var menu = document.getElementById("menu");
var menuHidder = document.getElementById("menu_hidder");
var menuButton = document.getElementById("menu_button");
var isMenuHidden = false;
var isMobile = false;

window.addEventListener("resize", onWindowResized);
onWindowResized();

var elems = document.querySelectorAll("#menu a");
for(let elem of elems){
    if(elem.hash){
        let id = elem.hash.slice(1);
        elem.onclick = () => {
            scrollTo(id);
            return false;
        };
    }
}

content.addEventListener("click", () => {
    if(isMobile && !isMenuHidden){
        hideMenu();
    }
});

menuButton.addEventListener("click", () => {
    if(!isMenuHidden)
        hideMenu();
    else
        showMenu();
});

menuHidder.addEventListener("click", () => {

    if(!isMenuHidden)
        hideMenu();
    else
        showMenu();
});

function onWindowResized(){
     if(window.innerWidth >= 1076){
         showMenu();
         isMobile = false;
     }else if(window.innerWidth <= 768){
        hideMenu();
        isMobile = true;
     }else{
         isMobile = false;
     }
}

function hideMenu(){
    menuButton.src = "menu.png";
    menu.style.left = "-80%";
    menu.style.display = "block";
    menuHidder.style.left = "0px";
    menuHidder.innerHTML = ">";
    content.style.margin = "auto";
    if(!isMobile){
        content.style.position = "static";
    }
    isMenuHidden = true;
}

function showMenu(){
    menuButton.src = "close.png";
    menu.style.left = "0%";
    menu.style.display = "block";
    menuHidder.style.left = "22.3%";
    menuHidder.innerHTML = "<";
    content.style.position = "";
    content.style.left = "";
    isMenuHidden = false;
}

function scrollTo(id){
    if(isMobile){
        hideMenu();
    }
    var current = window.pageYOffset;
    var offset = document.getElementById(id).offsetTop;
    var diff = (offset-current)/60;
    var count = 0;
    function scroll(){
        window.scrollBy(0, diff);
        if(count < 60){
            count++;
            window.setTimeout(scroll, 1000/60);
        }else{
            window.scrollTo(0, offset-50);
        }
    }
    scroll();
    //window.scrollTo(0, offset-50);
    console.log("scroll to "+offset);
}

})();