Utilisation avec Cloud storage :

//////////////////////////

// FIREBASE Article share///

var config = {
    apiKey: "AIzaSyBakUQDSo38juqasSQoatakDodCIP6gQQI",
    authDomain: "sniikzy-200717.firebaseapp.com",
    storageBucket: "sniikzy-200717.appspot.com",
    messagingSenderId: "4ebff061-feef-4b66-aa35-4a9878412fc0",
};
firebase.initializeApp(config);

var storageRef = firebase.storage().ref();
var articleStorage = storageRef.child("articles/");

articleStorage.child("latest").getDownloadURL().then(function(url){
    fetch(url).then(response => {
        return response.text();
    }).then(txt => {
        ready(parseInt(txt));
    });
});


function ready(currentID){
    console.log("Article en cours d'édition : id="+(currentID+1));
    
    var currentArticle = articleStorage.child(toString(currentID+1));
}

function getArticleContent(id){
    let article = articleStorage.child(id);
    article.getDownloadURL().then(function(url){
        fetch(url).then(function(response){
            response.text().then(txt => {
                console.log("Content : "+txt);
            });
        }).catch(error => {
            alert("Impossible de récupérer l'article n°"+id+". Raison : "+error.message);
        });
    });
}

//Problème : Suppression d'article