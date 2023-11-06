const song = document.getElementById("song");
const slider = document.getElementById("slider");
const playPause = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    slider.max = song.duration;
    slider.value = song.currentTime;
}

function togglePlayPause() {
    if (playPause.classList.contains("fa-pause")) {
        song.pause();
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
    } 
    else {
        song.play();
        playPause.classList.add("fa-pause");
        playPause.classList.remove("fa-play");
        
       
        setInterval(() => {
            slider.value = song.currentTime;
        }, 500);
    }
}

slider.onchange = function () {
    song.currentTime = slider.value;
}


song.ontimeupdate = function () {
    slider.value = song.currentTime;
}

window.addEventListener("load", function () {
    song.play();
    playPause.classList.add("fa-pause");
    playPause.classList.remove("fa-play");
});
