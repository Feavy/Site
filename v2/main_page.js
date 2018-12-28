(function(){

    var view = document.querySelector("#view");
    var movieDiv = document.querySelector("#lastVideos");
    var player = document.querySelector("#player");
    var frame = document.querySelector("#movie > iframe");
    var closeButton = document.querySelector("#player > img");

    const API_KEY = "AIzaSyD1BMaKNBYtnZnYfJBS8EoxrSsCZynCGcs";

    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet%2Cid&channelId=UCi47f3U6x83XMQcAorJm5hQ&maxResults=20&order=date&key="+API_KEY).then((response) => {
        response.json().then((result) => {
            for(let i = 0; i < 6; i++){
                let id = result.items[i].id.videoId;
                let imgPath = result.items[i].snippet.thumbnails.high.url;
                let elem = document.createElement("div");
                let elem2 = document.createElement("p");
                elem2.innerHTML = result.items[i].snippet.title;
                elem.appendChild(elem2);
                elem.addEventListener("click", () => {
                    openPlayer(id);
                });
                elem.classList.add("miniature");
                elem.style.backgroundImage = `url(${imgPath})`;
                movieDiv.appendChild(elem);
            }
        });
    });
    
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
    

//////////////////////////

// FIREBASE Articles///

var config = {
    apiKey: "AIzaSyBakUQDSo38juqasSQoatakDodCIP6gQQI",
    authDomain: "sniikzy-200717.firebaseapp.com",
    projectId: "sniikzy-200717"
};
firebase.initializeApp(config);

var news = document.getElementById("news");

var isLoading = true;

var loadingText = document.getElementById("loadingText");

var db = firebase.firestore();
var articleRef = db.collection("articles");

function pushArticles(callback, startIndex){
    function treatData(querySnapshot) {
        querySnapshot.forEach(pushArticle);
        isLoading = false;
    }

    function pushArticle(doc) {
        let id = doc.data().id;
        let title = doc.data().title;
        let categorie = doc.data().categorie;
        let date = doc.data().date;

        news.innerHTML = `<div class="partContent">
                        <h1>${title}</h1>
                        <div>${doc.data().content}</div>
                    </div>`;
        callback(id);
    }
    
    articleRef.orderBy("id", "desc").limit(1).get().then(treatData);
}

pushArticles(function(id){
    loadingText.style.display = "none";
});

})();