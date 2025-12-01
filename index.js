const bgVideo = document.getElementById("bgVideo");
const audioVideo = document.getElementById("audioVideo");


const delay = 3000;

bgVideo.addEventListener('ended', () => {
    setTimeout(() => {
        bgVideo.play();
    }, delay);
});

audioVideo.addEventListener('ended', () => {
    setTimeout(() => {
        audioVideo.play();
    }, delay);
});

document.addEventListener("click", () => {
    video.muted = false ;
    video.play();
});
