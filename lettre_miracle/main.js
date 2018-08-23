var missionTypes = ["M'aider", "Trouver un Pokémon", "Me mener à un Pokémon", "Trouver un objet", "Livrer un objet"];
var rewardTypes = ["Argent", "Argent + ?", "Objet", "Objet + ?", "", "Argent", "Argent + ?", "Objet", "Objet + ?", "Zone d'accueil"]

var newPositions = [12, 20, 9, 17, 4, 15, 1, 23, 3, 7, 19, 14, 0, 5, 21, 6, 8, 18, 11, 2, 10, 13, 22, 16];
var values={"!" : 26,
            "♂" : 30,
            "♀" : 27,
            "+" : 10,
            "-" : 22,
            "…" : 11,
            "0" : 9,
            "1" : 24,
            "2" : 25,
            "3" : 28,
            "4" : 16,
            "5" : 17,
            "6" : 1,
            "7" : 2,
            "8" : 6,
            "9" : 7,
            "?" : 0,
            "C" : 19,
            "F" : 8,
            "H" : 20,
            "J" : 21,
            "K" : 23,
            "M" : 18,
            "N" : 3,
            "P" : 4,
            "Q" : 29,
            "R" : 5,
            "S" : 12,
            "T" : 13,
            "W" : 31,
            "X" : 14,
            "Y" : 15};

var contentPane = document.getElementById("content");

function decodeWonderMail() {
    var textarea = document.getElementById("textarea");
    var content = textarea.value.replace(new RegExp("\n", 'g'), "").replace(new RegExp(" ", 'g'), "").split("");
    var contentBackup = content.slice(0);
    for(var i = 0; i < 24; i++)
        content[newPositions[i]] = contentBackup[i]; // CHANGEMENT DES CARACTERES DE PLACE
    for(var i = 0; i < 24; i++)
        content[i] = values[content[i]];             // PASSAGE DES CARACTERES A LEUR VALEUR NUMERIQUE RESPECTIVE

    // BIT PACKING //

    var contentByteArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var pos = 0;
    var currentNumberBitsAvailable = 5;
    var currentSize;
    for(var i = 0; i < 15; i++) {
        currentSize = 0;
        while(currentSize < 8) {        
            contentByteArray[i] |= (content[pos] >> 5-currentNumberBitsAvailable) << currentSize;
            contentByteArray[i] &= 0xFF;
            currentSize += currentNumberBitsAvailable;
            currentNumberBitsAvailable = currentSize-8;
            if(currentNumberBitsAvailable <= 0){
                pos++;
                currentNumberBitsAvailable = 5;
            }
        }
    }

    //////////////////////////

    // VERIFICATION DU CODE //

    var sum = 0;
    for(var i = 1; i < 15; i++){
        sum += contentByteArray[i]+i;
        sum &= 0xFF;
    }

    if(sum != contentByteArray[0])
        alert("Code invalide");

    //////////////////////////

    var pos = 0;

    function unpack(amount) { // FONCTION D'UNPACKING DES BITS
        var result = 0;
        for(var i = 0; i < amount; i++)
            result |= (contentByteArray[Math.floor((pos+i)/8)+1] >> (pos+i)%8 & 0b1) << i;
        pos += amount;
        return result;
    }

    if(contentPane.innerHTML.includes("<p>Type"))
        contentPane.innerHTML = contentPane.innerHTML.split("<p>Type")[0];

    // RECUPERATION DES DONNEES //

    unpack(4)

    var missionType = unpack(3);
    contentPane.innerHTML += "<p>Type de mission : \""+missionTypes[missionType]+"\"</p>";

    unpack(4);

    contentPane.innerHTML += "Client : \""+pokemon[unpack(9)]+"\"<br>";
    contentPane.innerHTML += "Cible : \""+pokemon[unpack(9)]+"\"";

    var item = unpack(8);
    if(missionType > 2)
        contentPane.innerHTML += "<p>Objet à trouver/livrer : \""+items[item]+"\"</p>";

    var rewardTxt = rewardTypes[unpack(4)];
    rewardTxt = rewardTxt.replace("Objet", items[unpack(8)]);
    rewardTxt = rewardTxt.replace("Zone d'accueil", "Zone d'accueil : "+friendareas[unpack(6)]);
    contentPane.innerHTML += "<p>Récompense : \""+rewardTxt+"\"</p>";

    unpack(24);

    contentPane.innerHTML += "Donjon : \""+dungeons[unpack(7)]+"\"<br>";
    contentPane.innerHTML += "Etage : \"-"+unpack(7)+"\"</p>";

    //////////////////////////
}