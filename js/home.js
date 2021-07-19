//controlling home tabs
const arrow1 = document.querySelector(".arrow"),
    arrow2 = document.querySelector(".second"),
    primaryHome = document.querySelector(".primary"),
    secondaryHome = document.querySelector(".secondary");

arrow1.addEventListener("click", () => {
    toggleSlide();
    arrow1.style.display = "none";
    arrow2.style.display = "flex";
});
arrow2.addEventListener("click", () => {
    toggleSlide();
    arrow2.style.display = "none";
    arrow1.style.display = "flex";
});

function toggleSlide() {
    primaryHome.classList.toggle("video-slide");
    secondaryHome.classList.toggle("video-slide-close");
}

const videoBtn = document.querySelector(".video-play-btn"),
    video = document.querySelector(".video"),
    videoClose = document.querySelector(".video-close-btn");
videoBtn.addEventListener("click", () => {
    videoOn();
});
videoClose.addEventListener("click", () => {
    closeVideo();
});

function videoOn() {
    video.classList.add("fade-in");
    document.body.classList.add("hidden-scrolling");
}

function closeVideo() {
    video.classList.remove("fade-in");
    document.body.classList.remove("hidden-scrolling");
}
//Controlling video btn