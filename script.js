//Afspil video ved klik af play-knap//
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
      playKnap.style.display = "none";
    });
  
    video.addEventListener("pause", function() {
      playKnap.style.display = "block";
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
var i = 0;
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
}

//Gemmer den første del af teksten, så den resterende velkomst tekst kommer frem
document.getElementById("playKnap").addEventListener("click", function() {
  typeWriter(function() {
    document.getElementById("demo").style.display = "none";
    txt = "Så træd ind i en verden af skønhed, form og kultur og undersøg, sammen med mig, hvordan fortidens idealer møder nutidens realiteter.";
    i = 0;
    document.getElementById("demo2").style.display = "block";
    typeWriter();
  });
});



  //Afstemningsboks
  var svarKnap = document.getElementById("knap_svar");
  var afstemningFoer = document.getElementById("afstemning_svar");
  var afstemningEfter = document.getElementById("afstemning_valg");

  svarKnap.addEventListener("click", function() {
        afstemningFoer.style.display = "none";
        afstemningEfter.style.display = "flex";
  });


