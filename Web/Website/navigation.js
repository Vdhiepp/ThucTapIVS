const video_thumbs = document.querySelectorAll(".thumb-video");

video_thumbs.forEach((video_thumbs) => {
    video_thumbs.addEventListener("mouseover", function () {
        this.style.opacity = 1;
        this.play();
        this.playbackRate = 2.0;
    });
});

video_thumbs.forEach((video_thumbs) => {
    video_thumbs.addEventListener("mouseleave", function () {
        this.style.opacity = 0;
    });
});

const video_modalScreens = document.querySelectorAll(".video-modal-screen");
const video_cards = document.querySelectorAll(".video-card-body");
const modal_closeBtns = document.querySelectorAll(".vid-modal-close-btn");

var videoModal = function (modalClick) {
    video_modalScreens[modalClick].classList.add("active");
}

video_cards.forEach((video_cards, i) => {
    video_cards.addEventListener("click", () => {
        videoModal(i);
    });
});

modal_closeBtns.forEach((modal_closeBtns) => {
    modal_closeBtns.addEventListener("click", () => {
        video_modalScreens.forEach((video_modalScreens) => {
            video_modalScreens.classList.remove("active");
        });
    });
});