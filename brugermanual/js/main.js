var video = document.getElementById('video');
var source = document.createElement('source');
var infobox = document.getElementById("infobox");
var POIS = document.querySelectorAll(".POI");

source.setAttribute('src', 'video/default-stance.mp4');

video.appendChild(source);
video.play();


// Shows Points Of Interests when video is done playing
window.onload = function () {
    setTimeout(function () {
        showPOI()
    }, 2800);
};


// Function that removes the hidden class from POI's
function showPOI() {
    for (i = 0; i < POIS.length; i++) {
        POIS[i].classList.remove("hidden");
    }


}

// Function that hides POI's
function hidePOI() {
    for (i = 0; i < POIS.length; i++) {
        POIS[i].classList.add("hidden");
    }
}

// Show infobox with text about the selected POI
function showInfo() {
    infobox.classList.add("active");

    hidePOI()
}

// Hide infobox with text
function hideInfo() {
    infobox.classList.remove("active");

    setTimeout(function () {
        showPOI()
    }, 3000); // Delay all videoes so far are 3000ms
}



// Cross exits infobox and sets video to it's default stance
function defaultStance() {

    var replaceSource = source.src;

    source.setAttribute('src', replaceSource.replace(".mp4", "-reverse.mp4"));
    video.load();
    video.play();

    hideInfo()
}




function dropdownMainMenu() {

    var dropdownArea = document.querySelectorAll(".info-dropdown-header");
    var dropdownArrow = document.querySelectorAll(".info-dropdown-header .dropdown-arrow");
    var dropdownContent = document.querySelectorAll(".info-dropdown-content");

    for (i = 0; i < dropdownArea.length; i++) {
        dropdownContent[i].classList.toggle("active");

        dropdownArea[i].addEventListener("click", console.log(this));

        dropdownArrow[i].classList.toggle("active");
    }


}


function dropDown(elem) {
    
    event.target.getElementsByClassName("dropdown-arrow")[0].classList.toggle("active");
    event.target.nextElementSibling.classList.toggle("active");
}


// Load video section


var infoTitle = document.getElementById("info-title");
var infoText = document.getElementById("info-text");



// Runs video about the monitor
function runVid1() {

    infoTitle.innerHTML = "<span>01</span> Infoskærm";

    infoText.innerHTML = `

    <div onclick="dropDown()" class="info-dropdown-header">Hovedmenuen:<img class="dropdown-arrow" src="img/arrow-white.svg"></div>
    <div class="info-dropdown-content">
        <img src='img/display-interface.png'>
        <ol class="two-columns">
            <li>Start og stop af funktion</li>
            <li>Aktuel Temperatur på bunden</li>
            <li>Aktuel madtemperatur</li>
            <li>Aktuel varmetrin</li>
            <li>Røremønster</li>
            <li>Mønster</li>
            <li>Omdrejnings tal</li>
            <li>Manuel vandpåfyldning</li>
            <li>Forvalgt mængde</li>
            <li>Akkumuleret mængde</li>
            <li>Tid</li>
            <li>Klokkeslet</li>
            <li>Akkumuleret tid</li>
            <li>Menu</li>
            <li>Klokken</li>
            <li>Taster for kip af gryde</li>
        </ol>
    </div>

<div onclick="dropDown()" class="info-dropdown-header">Programering af kipgryden:<img class="dropdown-arrow" src="img/arrow-white.svg"></div>

    <div class="info-dropdown-content">
<p>Programoversigt
Det valgte program vises med grøn ring. 
Programmet startes med start/stop knappen.
Et evt. igangværende program stoppes med samme knap</p>
<br>
        <img src='img/program-interface.png'>
        <ol class="two-columns">
            <li>Opvarmning</li>
            <li>Røre</li>
            <li>Vandpåfyldning</li>
            <li>Tider / klokkeslæt</li>
            <li>Køling</li>
            <li>Buzzer</li>
        </ol>
<p>Der kan vælges 10 forskellige programmer / sekvenser med hver 15 trin
(funktioner).
Der kan frit vælges rækkefølge af funktionerne. Man taster en af ovennævnte
funktioner og kommer derved ind i standardmenuen for funktionen, hvor de
forskellige variable vælges.
I gryder uden omrører mangler også funktionen køling og opvarmning efter
madtemperaturen.</p>
    </div>

<div onclick="dropDown()" class="info-dropdown-header">Svinebøf:<img class="dropdown-arrow" src="img/arrow-white.svg"></div>
    <div class="info-dropdown-content">
        
        
    </div>

<br>

<div class='alert-box'><img src='img/alert.png'>

        <p>Der må ikke anvendes skarpe genstande, gafler, knive etc., for at betjene den trykfølsomme skærm.<br>Der må kun anvendes fingrene!</p>

    </div>
`;

    source.setAttribute('src', 'video/monitor.mp4');
    video.load();
    video.play();

    showInfo();
}


// Runs video to POI #2

function runVid2() {

    infoTitle.innerHTML = "<span>02</span> Knappelader";

    source.setAttribute('src', 'video/buttons.mp4');
    video.load();
    video.play();

    showInfo();
}


// Runs video to POI #3

function runVid3() {

    infoTitle.innerHTML = "<span>03</span> Induktionsgryde";

    source.setAttribute('src', 'video/inside.mp4');
    video.load();
    video.play();

    showInfo();
}


// Runs video to POI #4

function runVid4() {

    infoTitle.innerHTML = "<span>04</span> Bagpanel til kontrol";

    source.setAttribute('src', 'video/default-stance-reverse.mp4');
    video.load();
    video.play();

    showInfo();
}


// Runs video to POI #5

function runVid5() {

    infoTitle.innerHTML = "<span>05</span> Sikring";

    source.setAttribute('src', 'video/default-stance-reverse.mp4');
    video.load();
    video.play();

    showInfo();
}






/*
var vid1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");

var vidSrc = document.querySelector("#video-container SOURCE");

function runVid1() {
    vidSrc.source = "asd"
    console.log("asd")
}

function runVid2() {
    
}*/

// Klik på vid - skift video og fremvis info

// Klik på luk - reverser video og lukker info fane

// Burger menu

// Modal





// SEO
