var video = document.querySelector("#player1")

window.addEventListener("load", function() {
    console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    document.querySelector('#volume').innerHTML = video.volume * 100 + "%"

});


document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down the Video");
    video.playbackRate = video.playbackRate * .95;
    console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up the Video");
    video.playbackRate = video.playbackRate / .95;
    console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    video.currentTime += 15;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0
    }
    console.log(video.currentTime)

});

document.querySelector("#mute").addEventListener("click", function() {
    // console.log("Mute the Video");
    if (video.muted == false) {
        video.muted = true;
        document.getElementById('mute').innerHTML = 'Unmute'
        console.log("Mute the Video")
    } else {
        video.muted = false;
        document.getElementById('mute').innerHTML = 'Mute'
        console.log("Unmute the Video")
    }

});

document.querySelector("#slider").addEventListener("click", function() {
    console.log("In Slider");
    console.log(this.value);
    video.volume = this.value / 100;
    document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Change to Black and White");
    video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Change to Regular Video");
    video.classList.remove('oldSchool')
});