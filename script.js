// declare a variable to change the title 
const musicTitle = document.querySelector(".title");

// declare variables for buttons
const prev_btn = document.querySelector(".previous-btn");
const play_pause = document.querySelector(".play-pause-btn");
const next_btn = document.querySelector(".next-btn");

//for time config
let currentTime = document.querySelector(".current-time");
let musicSlider = document.querySelector(".music-slider");
let endTime = document.querySelector(".total-duration");

//for volume
let volumeSlider = document.querySelector(".volume-slider");

let isPlaying = false;

// create new music audio and set this music to my default music

let musicObj = document.createElement("audio");
musicObj.src = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3";

// update the music slider 
// The setInterval() method calls a function at specified intervals (in milliseconds).

setInterval(updateMusicSlider, 500);

//update color for prev and next button
changePrevNextColor();

//Event Listener from various events
play_pause.addEventListener("click", ()=>
{
    // console.log(musicObj, duration);
    playPauseTrack();
});

// event listener from next button 
next_btn.addEventListener("click", ()=>{
    isPlaying = false;
    const resultObj = dll.traverse(1);

    // doubt 
    if(resultObj != 0)
    {
        musicObj.src = resultObj.path;
        playPauseTrack();
    }
    changeMusicTitle(resultObj.name);
    changePrevNextColor();
});

prev_btn.addEventListener("click", ()=>{
    isPlaying = false;
    const resultObj = dll.traverse(-1);

    if(resultObj != 0)
    {
        musicObj.src = resultObj.path;
        playPauseTrack();
    }
    changeMusicTitle(resultObj.name);
    changePrevNextColor();
});


// event listener for changing volume of music
volumeSlider.addEventListener("change", () => {
    musicObj.volume = volumeSlider.value / 100;
  });
  
  // event listener for changing position of music
  musicSlider.addEventListener("change", () => {
    changeMusicPos();
  });

document.body.onkeyup = function(e) {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32      ) {
        playPauseTrack();
    }
    else if(e.key == "ArrowLeft")
    {
        isPlaying = false;
        const resultObj = dll.traverse(-1);

        if(resultObj != 0)
        {
            musicObj.src = resultObj.path;
            playPauseTrack();
        }
        changeMusicTitle(resultObj.name);
        changePrevNextColor();
    }
    else if(e.key == "ArrowRight")
    {
        isPlaying = false;
        const resultObj = dll.traverse(1);

        // doubt 
        if(resultObj != 0)
        {
            musicObj.src = resultObj.path;
            playPauseTrack();
        }
        changeMusicTitle(resultObj.name);
        changePrevNextColor();
    }
  }
