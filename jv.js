const videos = [
    {
        title: "Video Pendek",
        src: "video3.mp4",
        thumbnail: "https://via.placeholder.com/300x200?text=Film",
        kategori: "film"
    }
];

const videoList = document.getElementById("videoList");
const mainVideo = document.getElementById("mainVideo");
const search = document.getElementById("search");

/* TAMPILKAN VIDEO */
function tampilkanVideo(list) {
    videoList.innerHTML = "";
    list.forEach(video => {
        const div = document.createElement("div");
        div.classList.add("video-item");

        div.innerHTML = `
            <img src="${video.thumbnail}">
            <p>${video.title}</p>
        `;

        div.onclick = () => {
            mainVideo.src = video.src;
            mainVideo.play();
        };

        videoList.appendChild(div);
    });
}

/* SEARCH */
search.addEventListener("input", () => {
    const keyword = search.value.toLowerCase();
    const hasil = videos.filter(v =>
        v.title.toLowerCase().includes(keyword)
    );
    tampilkanVideo(hasil);
});

/* FILTER KATEGORI */
function filterKategori(kategori) {
    if (kategori === "semua") {
        tampilkanVideo(videos);
    } else {
        const hasil = videos.filter(v => v.kategori === kategori);
        tampilkanVideo(hasil);
    }
}

/* LOAD AWAL */
tampilkanVideo(videos);