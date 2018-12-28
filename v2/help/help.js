var config = {
    apiKey: "AIzaSyBakUQDSo38juqasSQoatakDodCIP6gQQI",
    authDomain: "sniikzy-200717.firebaseapp.com",
    projectId: "sniikzy-200717"
};
firebase.initializeApp(config);

var db = firebase.firestore();
var ref = db.collection("conseils");

var uploadButton = document.getElementById("uploadButton");
var textarea = document.getElementById("txtarea");

var isSending = false;

uploadButton.addEventListener("click", function(e){
    if(isSending)
        return;
    isSending = true;
    ref.doc().set({
        "msg": textarea.value
    })
    .then(function() {
        alert("Le message a bien été envoyé, merci.");
        document.location.replace("feavy.tk");
    })
    .catch(function(error) {
        alert("Echec de l'envoi : "+error.message);
        document.location.reload(true);
    });
});