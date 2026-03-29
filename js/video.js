const videoContainer = document.querySelector("#video-player-container");
const loadVideoButton = document.querySelector("#load-video-button");

function loadVideo() {
    videoContainer.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/GSjGeDYJ5Nk?autoplay=1" title="Student internship experience video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}

loadVideoButton.addEventListener("click", loadVideo);