var view = document.querySelector("#view");
var movieDiv = document.querySelector("#lastVideos");
var player = document.querySelector("#player");
var frame = document.querySelector("#movie > iframe");
var closeButton = document.querySelector("#player > img");

var previousPageButton = document.getElementById("pre");
var nextPageButton = document.getElementById("post");

previousPageButton.addEventListener("click", previousPage);
nextPageButton.addEventListener("click", nextPage);

var nextPageToken;
var prevPageToken;

const API_KEY = "AIzaSyD1BMaKNBYtnZnYfJBS8EoxrSsCZynCGcs";

var lists = document.getElementById("lists");

var videos = [];

fetch("https://www.googleapis.com/youtube/v3/playlists?channelId=UCi47f3U6x83XMQcAorJm5hQ&maxResults=5&part=snippet&key="+API_KEY).then((response) => {
    response.json().then((result) => {
        console.log(result);
        for(let i = 0; i < result.items.length; i++){
            var l = document.createElement("li");
            l.innerHTML = `<a style="text-decoration: none; color:white; font-weight: bold;"href="https://www.youtube.com/playlist?list=${result.items[i].id}">${result.items[i].snippet.title}</a>`;
            lists.appendChild(l);
        }
    });
});

function addVideos(token){
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet%2Cid&channelId=UCi47f3U6x83XMQcAorJm5hQ&"+(token?"&pageToken="+token+"&" : "")+"maxResults=6&order=date&key="+API_KEY).then((response) => {
        response.json().then((result) => {
            nextPageToken = result.nextPageToken;
            prevPageToken = result.prevPageToken;
            if(prevPageToken)
                previousPageButton.classList.remove("disabled");
            else
                previousPageButton.classList.add("disabled");
            if(nextPageToken)
                nextPageButton.classList.remove("disabled");
            else
                nextPageButton.classList.add("disabled");
            for(let i = 0; i < result.items.length; i++){
                let id = result.items[i].id.videoId;
                let imgPath = result.items[i].snippet.thumbnails.high.url;
                if(imgPath.includes("photo.jpg"))
                    continue;
                let elem = document.createElement("div");
                let elem2 = document.createElement("p");
                elem2.style.color = "white";
                elem2.innerHTML = result.items[i].snippet.title;
                elem.appendChild(elem2);
                elem.addEventListener("click", () => {
                    openPlayer(id);
                });
                elem.classList.add("miniature");
                elem.style.backgroundImage = `url(${imgPath})`;
                movieDiv.appendChild(elem);
                videos.push(elem);
            }
        });
    });
}

closeButton.addEventListener("click", closePlayer);

function openPlayer(videoId){
    frame.src = "https://www.youtube.com/embed/"+videoId;
    player.style.visibility = "visible";
    player.style.opacity = "1";
    player.style.top = view.scrollTop+"px";
    view.style.overflowY = "hidden";
}

function closePlayer(){
    frame.src = "";
    player.style.visibility = "hidden";
    player.style.opacity = "0";
    view.style.overflowY = "auto";
}

function previousPage(){
    if(!prevPageToken)
        return;
    var l = videos.length;
    for(var i = 0; i < l; i++)
        videos.pop().remove();
    addVideos(prevPageToken);
}

function nextPage(){
    if(!nextPageToken)
        return;
    var l = videos.length;
    for(var i = 0; i < l; i++)
        videos.pop().remove();
    addVideos(nextPageToken);
}

addVideos();