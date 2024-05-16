const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const wrapper = document.querySelector(".wrapper");
const playBtnToggle = document.getElementById("play-btn-toggle");
const changeVolume = document.getElementById("changeVolume");

audio.volume = changeVolume.value;

const tracks = ["elmurodhaqnazarov", "konsta-odamla-nimadeydi"];
let currentTrack = 0;

const changeTrack = (index) => {
    audio.src = `./music/${tracks[index]}.m4a`;
    cover.src = `./img/${tracks[index]}.jpeg`;
}

changeTrack(currentTrack)

playBtn.addEventListener("click", () => {
    if(wrapper.classList.contains("play")){
        wrapper.classList.remove("play");
        playBtnToggle.classList = "fa-solid fa-circle-play";
        audio.paused()
    }else{
        wrapper.classList.add("play");
        playBtnToggle.classList = "fa-solid fa-pause";
        audio.play();
    }
    audio.play();
})
changeVolume.addEventListener("input", (e) => {
    audio.volume = e.target.value;
})