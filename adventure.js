var win = false;
var lose = false;

var game = document.getElementById("game-container");
var title = document.getElementById("title");
var desc = document.getElementById("description");
var knoppen = document.getElementById("game-buttons");
var knop1 = document.getElementById("button1");
var knop2 = document.getElementById("button2");
var knop3 = document.getElementById("button3");
var item = document.getElementById("inventoryItem");
const randomcash = Math.floor(Math.random()* 25);
const wassengeluk = Math.floor(Math.random()* 10);
var poster = false;
var steen = false;
var openla = 0;
var werkenpoints = 0;
var werkenpointsvereist = Math.floor(Math.random() * 30);
console.log(randomcash);
console.log("wasgeluk = " + wassengeluk);

lobby();

function lobby(){
    game.style.backgroundImage = "url(images/bus.jpg)";
    
    title.innerHTML = "Shawshank Redemption 2";
    desc.innerHTML = "Je arriveerd in Shawshank prison.";

    knop1.style.display = "none";

    knop2.style.display = "initial";
    knop2.innerHTML = "Naar je cell";
    knop2.onclick = cell;

    knop3.style.display = "none";

    item.style.display = "none";
}

function cell(){
    game.style.backgroundImage = "url(images/cell.png)";

    desc.innerHTML = "Dit is je cell, hij stinkt.";

    knop1.style.display = "initial";
    knop1.innerHTML = "Kijk in je la";
    knop1.onclick = la;

    knop2.innerHTML = "Ga naar de kantine";
    knop2.onclick = kantine;
}

function la(){
    //console.log(openla)
    openla++;
    if(openla == 2){    
        alert("Je hebt al in je la gekeken, hij is nu leeg.");
        knop1.style.display = "none";
    }else{
        if(randomcash != 0){
            alert("Je opent je la en ziet dat er " + randomcash + " euro in ligt.");
        }else{
            alert("Je opent je la en ziet dat er niks in ligt.")
        }
    }

}

function kantine(){
    game.style.backgroundImage = "url(images/cantine.jpg)";

    desc.innerHTML = "Dit is de kantine, hier word kattenvoer geserveerd.";

    knop1.style.display = "initial";
    knop1.innerHTML = "Terug naar je cell";
    knop1.onclick = cell;

    knop2.innerHTML = "Ga zitten met je voedsel";
    knop2.onclick = zitten;
}

function zitten(){
    game.style.backgroundImage = "url(images/zitten.jpg)";

    desc.innerHTML = "Je gaat zitten, je zit HELEMAAL alleen.";

    knop1.innerHTML = "Eet je voedsel op en ga naar buiten";
    knop1.onclick = buiten;

    knop2.innerHTML = "Eet je voedsel niet op"
    knop2.onclick = vechten;
}

function vechten(){
    game.style.backgroundImage = "url(images/nubenjedelul.jpg)";

    desc.innerHTML = "Uh oh!";
    alert("Je hoort een luide stem, hij zegt: Hey! Eet op! WAT DOE JE?");

    knop1.innerHTML = "Zeg dat je sorry bent";
    knop1.onclick = solitair;


    knop2.innerHTML = "Probeer hem te vechten";
    knop2.onclick = solitair;
}

function solitair(){
    game.style.backgroundImage = "url(images/solitary.gif)";

    desc.innerHTML = "Hier ga je dood";

    alert("Boem! Je word zo in permanent solitair gegooid!");

    knop1.style.display = "initial";
    knop1.innerHTML = "Speel opnieuw?";
    knop1.onclick = lobby;

    knop2.style.display = "none";
    knop3.style.display = "none";
}

function buiten(){
    game.style.backgroundImage = "url(images/buiten.jpg)";

    desc.innerHTML = "Tijd om hard te werken.";

    item.style.backgroundImage = "url(images/invitem.jpg)";

    knop1.style.display = "none";

    knop2.innerHTML = "Werken";
    knop2.onclick = werken;

    knop3.style.display = "initial";
    knop3.innerHTML = "Niet gaan werken!";
    knop3.onclick = solitair
}

function werken(){
    werkenpoints++

    desc.innerHTML = "Werk-punten = " + werkenpoints + " van de " + werkenpointsvereist + " punten";

    if(werkenpoints == werkenpointsvereist){
        knop2.style.display = "none";
        alert("Punten behaald je mag gaan douchen.");
        knop1.innerHTML = "Naar douches.";
        knop1.style.display = "initial";
        knop1.onclick = douchen;
        knop3.innerHTML = "Nog even buiten blijven.";
        knop3.onclick = veld;
    }
}

function douchen(){
    game.style.backgroundImage = "url(images/wassen.jpg)";

    desc.innerHTML = "Tijd om te douchen!";

    knop1.style.display = "initial";
    knop1.innerHTML = "jezelf wassen";
    knop1.onclick = wassen;

    knop2.style.display = "none";
    knop3.style.display = "none";
}

function wassen(){
    desc.innerHTML = "alle eendjes zwemmen in de douches";

    if(wassengeluk > 5){
        alert("Je laat de zeep vallen. GAME OVER");
        desc.innerHTML = "Bah! BAh!";
        knop1.innerHTML = "speel opnieuw?";
        knop1.onclick = lobby;
    }else{
        alert("Lekker wassen en klaar!");
        knop1.innerHTML = "naar cell";
        knop1.onclick = celleinde;
    }
}

function veld(){
    game.style.backgroundImage = "url(images/veld.jpg)"

    desc.innerHTML = "Je blijft langer buiten, je loopt rond in het veld als een kip zonder kop.";

    item.style.display = "initial";
    item.src = "images/invitem.jpg";
    item.onclick = inventoryvol;

    knop1.innerHTML = "Loop naar een groepje sterke bodybuilders toe";
    knop1.onclick = mannen;

    knop3.innerHTML = "Naar de 'winkel' gaan";
    knop3.onclick = winkel;
}

function inventoryvol(){
    alert("Je hebt een poster opgepakt. Deze is waarschijnlijk handig voor de toekomst");
    item.style.display = "none";
    poster = true;
}

function mannen(){
    item.style.display = "none";

    game.style.backgroundImage = "url(images/mannen.jpg)";

    desc.innerHTML = "De mannen zeggen, oprotten homo anders roep ik de agent!"

    knop1.innerHTML = "Ren snel terug naar het veld";
    knop1.onclick = veld;

    knop3.innerHTML = "Ga het groepje meppen";
    knop3.onclick = solitair;
}

function winkel(){
    item.style.display = "none"

    game.style.backgroundImage = "url(images/winkel.jpg)";

    desc.innerHTML = "Je staat nu voor een man die dingen verkoopt enzo.";

    knop1.innerHTML = "Koop een steen voor 5 euro";
    knop1.onclick = gekochtsteen;

    knop2.style.display = "initial";
    knop2.innerHTML = "Ga douchen";
    knop2.onclick = douchen;

    knop3.style.display = "initial";
    knop3.innerHTML = "Koop crack voor 10 euro";
    knop3.onclick = gekochtcrack;
}

function gekochtsteen(){
    if(randomcash >= 5){
        steen = true;
        alert("Je hebt de steen gekocht.");
    }else{
        alert("Je hebt niet genoeg geld.");
    }
}

function gekochtcrack(){
    if(randomcash >= 10){
        crack = true;
        alert("Je hebt de crack gekocht, en je gebruikt het gelijk.");
        game.style.backgroundImage = "url(images/dood.png)";
        desc.innerHTML = "Je bent dood.";
        knop1.style.display = "none";
        knop3.style.display = "none";
        knop2.innerHTML = "speel opnieuw?";
        knop2.onclick = lobby;
    }else{
        alert("Je hebt niet genoeg geld.");
    }
}

function celleinde(){
    game.style.backgroundImage = "url(images/cell.png)";

    desc.innerHTML = "Je gaat escapen! Je hebt alles wat je nodig had bij elkaar gehaald! ~hopelijk~";

    knop1.innerHTML = "probeer door de muur te slaan.";
    knop1.onclick = muurslaan;
}

function muurslaan(){
    if(steen == true){
        knop1.innerHTML = "gebruik de steen om door de muur te slaan!";
        knop1.onclick = steenminigame;
    }else{
        alert("Je hebt niks om door de muur te slaan... Tja, GAME OVER");
        knop1.innerHTML = "speel opnieuw?";
        knop1.onclick = lobby;
    }
}

function steenminigame(){
    alert("Je slaat tegen de muur met de steen, de muur is super zacht en je kan al door het gat kruipen");

    game.style.backgroundImage = "url(images/kruipen.jpeg)";
    desc.innerHTML = "Verloren!"

    knop1.innerHTML = "kruip door";
    knop1.onclick = gepakt;

    if(poster = true){
        knop2.style.display = "initial";
        knop2.innerHTML = "hang de poster voor het gat";
        knop2.onclick = victory;
    }
}

function gepakt(){
    alert("1 van de agenten zag het gat in de muur! GAME OVER");

    knop1.innerHTML = "speel opnieuw?";
    knop1.onclick = lobby;
}

function victory(){
    game.style.backgroundImage = "url(images/victory.jpg)";

    desc.innerHTML = "JE HEBT GEWONNEN!";

    knop1.innerHTML = "speel opnieuw?";
    knop1.onclick = lobby;

    knop2.style.display = "none";
}