var icon = document.querySelector(".icon");
var dropdownContent = document.querySelector(".dropdown-content");

// Toggle the dropdown content on click
icon.onclick = function () {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
};

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".icon")) {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }
  }
};
const films = [
  {
    id: "film1",
    img1: "https://phimmoiiii.net/wp-content/uploads/2023/04/Bua-Hinh-Nhan.jpg",
    name: "Bùa Hình Nhân",
    type: "kinhdi",
  },

  {
    id: "film2",
    img1: "https://phimmoiiii.net/wp-content/uploads/2022/11/ma-so-truc-quy.jpg",
    name: "Ma Sơ Trục Quỷ",
    type: "kinhdi",
  },

  {
    id: "film3",
    img1: "https://phimmoiiii.net/wp-content/uploads/2023/04/ta-chu-cam.jpg",
    name: "Tà Chú Cấm",
    type: "kinhdi",
  },

  {
    id: "film4",
    img1: "https://upload.wikimedia.org/wikipedia/vi/thumb/b/b7/5_centimet_tr%C3%AAn_gi%C3%A2y.jpg/275px-5_centimet_tr%C3%AAn_gi%C3%A2y.jpg",
    name: "5 Centimet trên giây",
    type: "anime",
  },
  {
    id: "film5",
    img1: "https://upload.wikimedia.org/wikipedia/vi/f/f6/Kotono_no_Niwa_poster.jpg",
    name: "Khu vườn ngôn từ",
    type: "anime",

    id: "film5",
    img1: "https://kenh14cdn.com/thumb_w/650/2017/anh-9-1484260065293.jpg",
    name: "Your name",
    type: "anime",
  },
];

localStorage.setItem("listAll", JSON.stringify(films));

window.onload = function () {
  load();
};

function load() {
  var out = "";
  let filmALL = JSON.parse(localStorage.getItem("listAll")) || [];
  for (let i = 0; i < filmALL.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
      <div class="card rounded-lg" style="width: 18rem;">
        <img src="${filmALL[i].img1}" class="card-img-top" alt="Product Image" style="height: 400px;">
        <div class="card-body">
          <h5 class="card-title">${filmALL[i].name}</h5>
        </div>
      </div>
    </div>`;
  }
  document.getElementById("load").innerHTML = out;
}

function loadFilms(filmList, containerId) {
  var out = "";
  for (let i = 0; i < filmList.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
      <div class="card rounded-lg" style="width: 18rem;">
        <img src="${filmList[i].img1}" class="card-img-top" alt="Product Image" style="height: 400px;">
        <div class="card-body">
          <h5 class="card-title">${filmList[i].name}</h5>
        </div>
      </div>
    </div>`;
  }
  document.getElementById(containerId).innerHTML = out;
}
function locKinhDi() {
  let kinhDi = JSON.parse(localStorage.getItem("listAll"));
  const listKinhdi = [];
  for (let i = 0; i < kinhDi.length; i++) {
    if (kinhDi[i].type == "kinhdi") {
      listKinhdi.push(kinhDi[i]);
    }
  }
  localStorage.setItem("listKinhDi", JSON.stringify(listKinhdi));
}

function locAnime() {
  let anime = JSON.parse(localStorage.getItem("listAll"));
  const listAnime = [];
  for (let i = 0; i < anime.length; i++) {
    if (anime[i].type == "anime") {
      listAnime.push(anime[i]);
    }
  }
  localStorage.setItem("listAnime", JSON.stringify(listAnime));
}
function renderKinhDi() {
  locKinhDi();
  let listKinhDi = JSON.parse(localStorage.getItem("listKinhDi")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listKinhDi, "loadH");
}

function renderAnime() {
  locAnime();
  let listAnime = JSON.parse(localStorage.getItem("listAnime")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listAnime, "loadT");
}
