//Afspil video ved klik af play-knap//
    /* document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("videoPlayer");
    var playKnap = document.getElementById("playKnap");
  
    playKnap.addEventListener("click", function() {
      if (video.paused) {
        video.play();
        playKnap.style.display = "none";
      } else {
        video.pause();
      }
    });
  
    video.addEventListener("play", function() {
      playKnap.style.display = "none";
    });
  
    video.addEventListener("pause", function() {
      playKnap.style.display = "block";
    });
  }); */
  
//Intro tekst fader ud, ved aktivering af play knap)
    /* document.getElementById('playKnap').addEventListener('click', function() {
    var introTekst = document.querySelector('.intro-tekst');
    introTekst.classList.add('fade-out');
  }); */

  //Velkomst tekst fader ind, når play aktiveres//
  /* document.getElementById('videoPlayer').addEventListener('play', function() {
  var introText = document.querySelector('.velkomst-tekst');
  introText.classList.add('fade-in');
}); */


//Typewriting effekt på velkomst tekst//
/* var i = 0;
var txt = 'Hej med dig!! Jeg vil tage dig med på en rejse gennem tiden og vise dig alt fra fyldige former i renæssancen til slanke silhuetter i 1990erne.';
var speed = 60;
var paragraph = document.getElementById("demo");

function typeWriter(callback) {
  if (i < txt.length) {
    paragraph.textContent += txt.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(callback);
    }, speed);
  } else {
    if (callback) {
      callback();
    }
  }
  document.getElementById("demo2").style.display = "none";
}  */

//Gemmer den første del af teksten, så den resterende velkomst tekst kommer frem
/* document.getElementById("playKnap").addEventListener("click", function() {
  typeWriter(function() {
    document.getElementById("demo").style.display = "none";
    txt = "Så træd ind i en verden af skønhed, form og kultur og undersøg, sammen med mig, hvordan fortidens idealer møder nutidens realiteter.";
    i = 0;
    document.getElementById("demo2").style.display = "block";
    typeWriter();
  });
}); */


//AFSTEMNINGSBOKS
// Vi finder knappen, der skal starte afstemningen
var svarKnap = document.getElementById("knap_svar"); 
// Vi finder afstemningsboks 1
var afstemningFoer = document.getElementById("afstemning_foer");
// Vi finder afstemningsboks 2, der skal erstatte afstemningsboks 1
var afstemningEfter = document.getElementById("afstemning_efter"); 

//Funktion der skal erstatte afstemningsboks 1 med afstemningsboks 2
svarKnap.onclick = visAfstemning; 
function visAfstemning () {
    afstemningFoer.style.display = "none";
    afstemningEfter.style.display = "flex";
}

//AFSTEMNINGSBOKS - MODAL
//Dette ønsker vi skal ske: Diagram modal - Modalen skal åbnes ved tryk på vilkårlig knap i afstemningEfter. Her skal funktionen både åbne modalen og reset afstemningsboksen til afstemningFoer. Modalen skal lukkes ved tryk udenfor modalen eller ved tryk på 'X'.

// Her finder vi modalen
var modalAfstemning = document.getElementById("modal_afstemning");
// Her finder vi alle knapper med classen 'knap_valg'
var knapValg = document.getElementsByClassName("knap_valg");
// Her tager vi fat i 'X' til lukkeknappen
var modalLuk = document.getElementById("modal_luk");

// Da der er flere knapper med classen "knap_valg", skal vi loop igennem dem alle og sætte en eventListener på dem alle.
for (var i = 0; i < knapValg.length; i++) {
    knapValg[i].addEventListener("click", visModal);
}
// Når brugeren klikker en vilkårlig svarmulighed vises modalen med diagrammet
    function visModal () {
        modalAfstemning.style.display = "block";
    }

// Funktion til at lukke modalen 
function lukModal () {
modalAfstemning.style.display = "none";
}

// Når brugeren klikker 'X' lukkes modalen
modalLuk.onclick = lukModal;

// Når brugeren klikker andre steder end modalets indhold (modal_indhold) lukkes modalen.
 window.onclick = function(event) { // Når man trykker alle steder i vinduet (window.onclick) starter en funktion: function(event). Funktionen lukker modalen (lukModal). Function(event) fortæller handleren, at funktionen skal eksekveres, men at der er et 'event', der står uden for funktionen. Med event.target fortæller vi, hvad det er der skal stå uden for funktionen og dermed ikke resultere i lukning af modalen, hvis man trykker på det. 
  if (event.target == modalAfstemning) {
    lukModal();
  }
}

