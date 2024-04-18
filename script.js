//Afspil video ved klik af play-knap///*
document.addEventListener("DOMContentLoaded", function() {
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

  
//Intro tekst fader ud, ved aktivering af play knap)
    document.getElementById('playKnap').addEventListener('click', function() {
    var introTekst = document.querySelector('.intro-tekst');
    introTekst.classList.add('fade-out');
  });

  //Velkomst tekst fader ind, når play aktiveres//
  document.getElementById('videoPlayer').addEventListener('play', function() {
  var introText = document.querySelector('.velkomst-tekst');
  introText.classList.add('fade-in');
});


//Typewriting effekt på velkomst tekst//
var initialTxt = 'Hej med dig!! Jeg vil tage dig med på en rejse gennem tiden og vise dig alt fra fyldige former i renæssancen til slanke silhuetter i 1990erne.';
var replacementTxt = 'Så træd ind i en verden af skønhed, form og kultur og undersøg, sammen med mig, hvordan fortidens idealer møder nutidens realiteter.';
var speed = 50;
var pauseDuration = 2000;
var i = 0;

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
  typeWriter(function() {
    console.log("Text replacement is complete.");
  });
}

// Autoplay typewriting effekt når siden indlæses
window.onload = function() {
  typeWriter(replaceText);
};

/*
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

//Diagram modal - Modalen skal åbnes ved tryk på vilkårlig knap i afstemningEfter. Her skal funktionen både åbne modalen og reset afstemningsboksen til afstemningFoer.



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