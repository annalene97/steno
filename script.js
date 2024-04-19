//Afspil video ved klik af play-knap///*
/*document.addEventListener("DOMContentLoaded", function() {
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
    playKnap.style.display = "none"; // Gem play knap, når videoen starter
  });

  video.addEventListener("pause", function() {
    playKnap.style.display = "none"; // Pause knappen forbliver gemt væk når videoen stoppes
  });
});

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
var initialTxt = 'Hej med dig!! Jeg vil tage dig med på en rejse gennem tiden og vise dig alt fra fyldige former i renæssancen til slanke silhuetter i 1990erne.';
var replacementTxt = 'Så træd ind i en verden af skønhed, form og kultur og undersøg, sammen med mig, hvordan fortidens idealer møder nutidens realiteter.';
var speed = 50;
var pauseDuration = 2000;
var i = 0;
/* var i = 0;
var txt = 'Hej med dig!! Jeg vil tage dig med på en rejse gennem tiden og vise dig alt fra fyldige former i renæssancen til slanke silhuetter i 1990erne.';
var speed = 60;
var paragraph = document.getElementById("demo");

// Function til typewriting effekt
function typeWriter(callback) {
  if (i < initialTxt.length) {
    document.getElementById("demo").innerHTML += initialTxt.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(callback);
    }, speed);
  } else {
    setTimeout(callback, pauseDuration); // Pause mellem hver tekst del (hvor tiden er angivet i øverste del med pauseDuration)
  }
}

//Indsæt ny tekst, når den første del er skrevet op, med id nr. 2
function replaceText() {
  document.getElementById("demo").innerHTML = '';
  initialTxt = replacementTxt;
  i = 0;
  document.getElementById("demo2").style.display = "none";
}  */

//Gemmer den første del af teksten, så den resterende velkomst tekst kommer frem
/* document.getElementById("playKnap").addEventListener("click", function() {
  typeWriter(function() {
    console.log("Text replacement is complete.");
  });
}
}); */

// Autoplay typewriting effekt når siden indlæses
/*window.onload = function() {
  typeWriter(replaceText);
};

<<<<<<< Updated upstream
/*
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
//Afstemningsboks
var svarKnap = document.getElementById("knap_svar");
var afstemningFoer = document.getElementById("afstemning_svar");
var afstemningEfter = document.getElementById("afstemning_valg");

svarKnap.addEventListener("click", function() {
  //Afstemningsboks
  var svarKnap = document.getElementById("knap_svar");
  var afstemningFoer = document.getElementById("afstemning_svar");
  var afstemningEfter = document.getElementById("afstemning_valg");

  svarKnap.addEventListener("click", function() {
        afstemningFoer.style.display = "none";
        afstemningEfter.style.display = "flex";
});
//AFSTEMNINGSBOKS
// Vi finder knappen, der skal starte afstemningen
var svarKnap = document.getElementById("knap_svar"); 
// Vi finder afstemningsboks 1
var afstemningFoer = document.getElementById("afstemning_foer");
// Vi finder afstemningsboks 2, der skal erstatte afstemningsboks 1
var afstemningEfter = document.getElementById("afstemning_efter"); 


<<<<<<< Updated upstream
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



//Autoplay med forsinkelse på outro video
const myTimeout = setTimeout(playVideo, 19000);

function playVideo() {
  var video = document.getElementById("videoPlayer-outro");
  video.play();
}


//Typewriting effekt på outro tekst
var initialTxt = 'Nu er vi kommet til rejsens slutning, og du ved nu lidt mere om kropsidealer gennem tiden og hvilke samfundsmæssige faktorer, som kan spille ind i vores tanker og syn på kroppen.';
var replacementTxt = 'Som du kan se har kropsidealer ændret sig meget gennem tiden. De er altid formet af, hvordan samfundet ser ud i den pågældende tid. Alle kroppe er unikke og sammensat af forskellige gener, størrelser og former.';
var speed = 50;
var pauseDuration = 3000;
var i = 0;

// Function til typewriting effekt
function typeWriter(callback) {
  if (i < initialTxt.length) {
    document.getElementById("demo_outro").innerHTML += initialTxt.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(callback);
    }, speed);
  } else {
    setTimeout(callback, pauseDuration); // Pause mellem hver tekst del (hvor tiden er angivet i øverste del med pauseDuration)
  }
}

//Indsæt ny tekst, når den første del er skrevet op, med id nr. 2
function replaceText() {
  document.getElementById("demo_outro").innerHTML = '';
  initialTxt = replacementTxt;
  i = 0;
  typeWriter(function() {
    console.log("Text replacement is complete.");
  });
}

// Autoplay typewriting effekt når siden indlæses
window.onload = function() {
  typeWriter(replaceText);
};

*/
=======

>>>>>>> Stashed changes




