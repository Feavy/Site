
//////////////////////////

// FIREBASE Articles///

var config = {
    apiKey: "AIzaSyBakUQDSo38juqasSQoatakDodCIP6gQQI",
    authDomain: "sniikzy-200717.firebaseapp.com",
    projectId: "sniikzy-200717"
};
firebase.initializeApp(config);

var isLoading = true;

var pageIndex = 0;
var isFirstPage = false;
var isLastPage = false;

var loadingText = document.getElementById("loadingText");

var articlesDiv = document.getElementById("content");

var previousPageButton = document.getElementById("pre");
var nextPageButton = document.getElementById("post");

previousPageButton.addEventListener("click", previousPage);
nextPageButton.addEventListener("click", nextPage);

var lastID;

var db = firebase.firestore();
var articleRef = db.collection("articles");

function pushArticles(callback, startIndex){
    let isFirst = true;
    let firstId;
    let lastId;

    function treatData(querySnapshot) {
        querySnapshot.forEach(pushArticle);
        ids.push({
            first: firstId,
            last: lastId
        });
        if(firstId == bounds[0]){
            isFirstPage = true;
        }
        if(lastId == bounds[1]){
            isLastPage = true;
        }
        isLoading = false;
        updateStyle();
    }

    function pushArticle(doc) {
        let id = doc.data().id;
        let title = doc.data().title;
        let categorie = doc.data().categorie;
        let date = doc.data().date;

        if(id != 0) {
            let div = document.createElement("div");
            div.classList.add("part");
            div.innerHTML = `<div class="partContent">
                                <h1>${title}</h1>
                                <p style="font-style: italic">${doc.data().content}</p>
                            </div>`;

            articlesDiv.insertBefore(div, previousPageButton);
        }

        if(isFirst){
            isFirst = false;
            callback(id);
            firstId = id;
        }
        lastId = id;
    }

    if(startIndex)
        articleRef.where("id", "<=", startIndex).orderBy("id", "desc").limit(5).get().then(treatData);
    else
        articleRef.orderBy("id", "desc").limit(5).get().then(treatData);
}

function updateStyle(){
    if(isFirstPage)
        previousPageButton.classList.add("disabled");
    else if(previousPageButton.classList.contains("disabled"))
        previousPageButton.classList.remove("disabled");

    if(isLastPage)
        nextPageButton.classList.add("disabled");
    else if(nextPageButton.classList.contains("disabled"))
        nextPageButton.classList.remove("disabled");
}

function previousPage(){
    if(isFirstPage || isLoading)
        return;
    isLoading = true;
    isLastPage = false;
    pageIndex--;
    removeCurrentArticles();
    ids.pop();
    let first = ids[ids.length-1].first;
    pushArticles(function(){}, first);
}

function nextPage(){
    if(isLastPage || isLoading)
        return;
    isLoading = true;
    isFirstPage = false;
    pageIndex++;
    removeCurrentArticles();
    let lastId = ids[ids.length-1].last;
    pushArticles(function(){}, lastId-1);
}

var bounds = [, 0];
var ids = [];

pushArticles(function(id){
    bounds[0] = id;
    lastID = id;
    loadingText.style.display = "none";
});