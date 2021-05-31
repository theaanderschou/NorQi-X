const navslide = () => {
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('NAV');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });

}

navslide();



// Alt i indrykket kører så snart hjemmesiden er loaded

// Manual subpage JS starts here ::

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

function hideInfo() {
    infobox.classList.remove("active");

    setTimeout(function () {
        showPOI()
    }, 3000);
}



// Cross exits infobox and sets video to it's default stance

function defaultStance() {
    var replaceSource = source.src;

    if (infobox.classList.contains("faq")) {

        hideInfo()
        infobox.classList.remove("faq");

    } else {
        source.setAttribute('src', replaceSource.replace(".mp4", "-reverse.mp4"));
        video.load();
        video.play();

        hideInfo()
    }


}



/* Tidligere dropdown funktion som ikke virkede som den skulle
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
*/

function dropDown(elem) {

    event.target.getElementsByClassName("dropdown-arrow")[0].classList.toggle("active");
    event.target.nextElementSibling.classList.toggle("active");
}


// Load video section


var infoTitle = document.getElementById("info-title");
var infoText = document.getElementById("info-text");
var infoCross = document.querySelector("img.cross");



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

    infoTitle.innerHTML = "<span>02</span> Trykknappanel";

    infoText.innerHTML = `

    <div onclick="dropDown()" class="info-dropdown-header">Startknap:<img class="dropdown-arrow" src="img/arrow-white.svg"></div>
    <div class="info-dropdown-content">
        <p>Startknap. Starter gryden. Der skal komme hvidt lys i startknappen når gyden er tændt.<br>
Der går ca. 30 sekunder før systemet og dermed skærmen er klar til drift.</p>
    </div>

<div onclick="dropDown()" class="info-dropdown-header">Stopknap:<img class="dropdown-arrow" src="img/arrow-white.svg"></div>
    <div class="info-dropdown-content">
        <p>Slukker for alt i gryden.</p>
    </div>

<div onclick="dropDown()" class="info-dropdown-header">Slowmixknap. (Ekstraudstyr):<img class="dropdown-arrow" src="img/arrow-white.svg"></div>
    <div class="info-dropdown-content">
        <p>Betjening af omrører med begrænset hastighed, når låget er åbent. Omrøreren kører så længe, der holdes på knappen.</p>
    </div>

`;

    source.setAttribute('src', 'video/buttons.mp4');
    video.load();
    video.play();

    showInfo();
}


// Runs video to POI #3

function runVid3() {

    infoTitle.innerHTML = "<span>03</span> Kipsystem";

    infoText.innerHTML = `

<div onclick="dropDown()" class="info-dropdown-header">Smørepunkt:<img class="dropdown-arrow" src="img/arrow-white.svg"></div>
    <div class="info-dropdown-content">
        <p>Kontroller motoren kører jævnt og uden mislyde. Kom lidt fedt på glidefladerne.</p>
<img src="img/smoerepunkt.png">
<p>Smørepunkt på begge sider af kiparmen.</p>
    </div>

<div onclick="dropDown()" class="info-dropdown-header">Frekvensomformer:<img class="dropdown-arrow" src="img/arrow-white.svg"></div>
    <div class="info-dropdown-content">
        <p>Bank let på omformeren og observer løse dele.
Check for korrosion på terminaler EMC plade etc.<br>
Check for aflejringer af snavs. Rengør Kontroller moment på forbindelser. Se el-diagram Overvågning af SlowMix hastighed. Kontrolleres via servicemenu i PLC.<br>
Frekvensomformeren skal gå i fejltilstand og vise ’SAFE’ i displayet. For nulstilling
afbryd forsyning til omformer på automatsikringen eller forsyningsadskiller.</p>
    </div>

<div onclick="dropDown()" class="info-dropdown-header">Vandtilslutning:<img class="dropdown-arrow" src="img/arrow-white.svg"></div>
    <div class="info-dropdown-content">
        <p>Kontroller for lækage. Korriger i givet fald.<br>
Hvis gryden er forsynet med spulepistol kontrolleres rørafbryder i den faste installation.</p>
    </div>

<div onclick="dropDown()" class="info-dropdown-header">Hvert andet år:<img class="dropdown-arrow" src="img/arrow-white.svg"></div>
    <div class="info-dropdown-content">
        <p>Udskift batteri i PLC<br>
Batteritype: Panasonic BR2032<br>
Batteriet benyttes kun til back up for det indbyggede ur.</p>

    </div>


`;

    source.setAttribute('src', 'video/inside.mp4');
    video.load();
    video.play();

    showInfo();
}


// Shows FAQ when clicked
function showFAQ() {

    infobox.classList.toggle("faq");

    infoCross.innerHTML != '<img onclick="hideInfo()" class="cross" src="img/cross.svg">'

    infoTitle.innerHTML = "<span>FAQ</span> Symbolforklaring";

    infoText.innerHTML = `

<div class='alert-box'><img src='img/betjeningsvejledning.png'>

        <p>Læs betjeningsvejledning</p>

    </div>

<div class='alert-box'><img src='img/genbrug.png'>

        <p>Apparatet er klassificeret iht. det europæiske
direktiv 2002/95/EF
(WEEE) om affald af elektrisk-og elektronisk
udstyr. Gryden må ikke skrottes som almindeligt
affald, men skal afleveres til genbrug.</p>

    </div>

<div class='alert-box'><img src='img/elektrisk.png'>

        <p>Farlig elektrisk spænding.
Symbolet er placeret på dæksler på apparatet,
der ikke umiddelbart ser ud til at indeholde farlig
elektrisk udstyr. Samt i brugsanvisningen
ifm. elektriske farer.</p>

    </div>

<div class='alert-box'><img src='img/giv-agt.png'>

        <p>Giv agt.
Symbolet er på steder i brugsanvisningen der
kræver særlig opmærksomhed.</p>

    </div>

<div class='alert-box'><img src='img/potentialudligning.png'>

        <p>Symbolet er anbragt på bagsiden af apparatet ved
tilslutningsklemmen for potentialeudligning.</p>

    </div>

<div class='alert-box'><img src='img/elektromagnetisk.png'>

        <p>Ikke ioniserende elektromagnetisk stråling.
Symbolet betyder forhøjet niveau af potentiel
farlig elektromagnetisk udstråling.</p>

    </div>

<div class='alert-box'><img src='img/eksplosionsfare.png'>

        <p>Eksplosionsfare.
Symbolet advarer om eksplosionsfare, hvis
man hælder vand i varm olie</p>

    </div>

`;

    showInfo();

}
