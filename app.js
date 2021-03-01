window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.querySelector('.logo').style.fontSize = "6vh";
    document.querySelector('.logo').innerHTML = "SB";
    document.querySelector('.logo').style.color = "#449ba1";
    document.querySelector('.header').style.height = "65px";
  } else {
    document.querySelector('.logo').style.fontSize = "8vh";
    document.querySelector('.logo').innerHTML = "SOUND BOX";
    document.querySelector('.header').style.height = "110px";
    document.querySelector('.logo').style.color = "rgb(224, 224, 224)";
  }
}

// SCROLLING EFFECT FOR THE HEADER

const pads = document.querySelectorAll('.box');
const audios = document.querySelectorAll('.sound');



pads.forEach((pad, indexp) => {

    let isPlaying = false;

    pad.addEventListener('click', function(){

        const audio = audios[indexp];
        if (!isPlaying)
        {
            audio.play();
            pad.setAttribute("id", "playing");
            isPlaying = true;
        }
        else 
        {
            audio.pause();
            audio.currentTime = 0;
            pad.setAttribute("id", null);
            isPlaying = false;
        }
        audio.addEventListener('ended', function(){
            isPlaying = false;
            pad.setAttribute("id", null);
        })
    })

})