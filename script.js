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
/*   document.getElementById('playKnap').addEventListener('click', function() {
    var introTekst = document.querySelector('.intro-tekst');
    introTekst.classList.add('fade-out');
  });
   */

  //Afstemningsboks
  var svarKnap = document.getElementById("knap_svar");
  var afstemningFoer = document.getElementById("afstemning_svar");
  var afstemningEfter = document.getElementById("afstemning_valg");

  svarKnap.addEventListener("click", function() {
        afstemningFoer.style.display = "none";
        afstemningEfter.style.display = "flex";
  });


