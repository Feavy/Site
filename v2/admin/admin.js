
//////////////////////////

// FIREBASE Articles///

var config = {
    apiKey: "AIzaSyBakUQDSo38juqasSQoatakDodCIP6gQQI",
    authDomain: "sniikzy-200717.firebaseapp.com",
    projectId: "sniikzy-200717"
};
firebase.initializeApp(config);

var newArticleButton = document.getElementById("newArticleButton");
newArticleButton.addEventListener("click", writeNewArticle);

var isLoading = true;

var pageIndex = 0;
var isFirstPage = false;
var isLastPage = false;

var loadingText = document.getElementById("loadingText");

var articlesDiv = document.getElementById("articles");

var previousPageButton = document.getElementById("pre");
var nextPageButton = document.getElementById("post");

previousPageButton.addEventListener("click", previousPage);
nextPageButton.addEventListener("click", nextPage);

var lastID;

var db = firebase.firestore();
var articleRef = db.collection("articles");

function uploadArticle(title, categorie, content){
    articleRef.doc().set({
        "id": ++lastID,
        "title": title,
        "categorie": categorie,
        "date": (new Date()).toLocaleDateString("Fr-fr"),
        "content": content
    })
    .then(function() {
        alert("L'article a bien été envoyé.");
        document.location.reload(true);
    })
    .catch(function(error) {
        alert("Echec de l'envoi : "+error.message);
    });
}

var isModifyingArticle = false;
var selectedArticleID;

function writeNewArticle(){
    isModifyingArticle = false;
    categorieSelector.value = "article";
    editor.content.innerHTML = "";
    titleField.value = "";
    setEditorVisisble(true);
}

function modifyArticle(id){
    isModifyingArticle = true;
    selectedArticleID = id;
    articleRef.doc(id).get().then(doc => {
        categorieSelector.value = doc.data().categorie;
        titleField.value = doc.data().title;
        editor.content.innerHTML = doc.data().content;
    });
    setEditorVisisble(true);
    console.log("Modification : "+id);
}

function finishModifications(){
    if(titleField.value.length == 0){
        alert("Echec de l'envoi : L'article n'a pas de titre.")
        return;
    }else if(editor.content.innerHTML.length == 0){
        alert("Echec de l'envoi : L'article n'a pas de contenu.")
        return;
    }
    if(!isModifyingArticle)
        uploadArticle(titleField.value, categorieSelector.value, editor.content.innerHTML);
    else{
        articleRef.doc(selectedArticleID).update({
            title: titleField.value,
            categorie: categorieSelector.value,
            content: editor.content.innerHTML
        }).then(function(){
            alert("L'article a bien été modifié.");
            document.location.reload(true);
        });
    }
}

function deleteArticle(id, title){
    if(confirm("Voulez-vous vraiment supprimer l'article \""+title+"\" ?")){
        articleRef.doc(id).delete().then(() => {
            alert("L'article a bien été supprimé.");
            document.location.reload(true);
        }).catch((error) => {
            alert("Echec de la suppression : "+error.message);
        })
        console.log("Suppression : "+id);
    }
}

function removeCurrentArticles(){
    while(!articlesDiv.childNodes[1].classList.contains("new"))
        articlesDiv.childNodes[1].remove();
}

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

        let separator = document.createElement("div");
        separator.classList.add("separator");

        if(id != 0) {
            let div = document.createElement("div");
            div.classList.add("article");
            div.innerHTML = `<span class="articleHeader">${id}</span>
            <span class="articleHeader">${title}</span>
            <span class="articleHeader">${date}</span>
            <div>
                <span class="button2" onclick="modifyArticle('${doc.id}')">Modifier</span>
                <span class="button2 red" onclick="deleteArticle('${doc.id}','${title}')">Supprimer</span>
            </div>`;

            articlesDiv.insertBefore(div, articlesDiv.childNodes[articlesDiv.childNodes.length-2]);
            articlesDiv.insertBefore(separator, articlesDiv.childNodes[articlesDiv.childNodes.length-2]);
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

//////////////////////////

//CONNECTION//

var emailField = document.getElementById("mail");
var passwordField = document.getElementById("password");
var loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", () => {

    let email = emailField.value;
    let password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function error(){
        alert("Erreur : Identifiants invalides.")
    });
    return false;
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        connected();
    } else {
        loadingText.style.display = "none";
        disconnected();
    }
});

var bounds = [, 0];
var ids = [];

function connected(){
    pushArticles(function(id){
        bounds[0] = id;
        lastID = id;
        loadingText.style.display = "none";
        document.getElementById("connectionPanel").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
    });
}

function disconnected(){
    document.getElementById("connectionPanel").style.display = "block";
    document.getElementById("adminPanel").style.display = "none";
}

////////////////////////

//ARTICLE EDITOR//

var categorieSelector = document.getElementById("categorieSelector");
var titleField = document.getElementById("articleTitle");
var uploadButton = document.getElementById("uploadButton");
var cancelButton = document.getElementById("cancelButton");

const editor = pell.init({

    element: document.getElementById('editor'),

    onChange: html => {}, //Sauvegarde ici ?
    
    defaultParagraphSeparator: 'div',
    
    styleWithCSS: true,
    
    actions: [
        {
            name: "left",
            icon: "&#8592;",
            title: "Left align",
            result: () => document.execCommand("justifyLeft")
        },
        {
            name: 'center',
            icon: '&#8452;',
            title: 'Center align',
            result: () => document.execCommand("justifyCenter")
        },
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'heading1',
        'heading2',
        'paragraph',
        'quote',
        'olist',
        'ulist',
        'code',
        'line',
        'link',
        'image'
    ],

    classes: {
        actionbar: 'pell-actionbar',
        button: 'pell-button',
        content: 'pell-content',
        selected: 'pell-button-selected'
    }
});

var editorFields = document.querySelectorAll(".editor");
var articlesFields = document.querySelectorAll(".articles");

function setEditorVisisble(visible){
    for(var e of editorFields){
        e.style.display = visible ? "block" : "none";
    }
    for(var a of articlesFields){
        a.style.display = visible ? "none" : "block";
    }
}

uploadButton.addEventListener("click", finishModifications);
cancelButton.addEventListener("click", () => setEditorVisisble(false));