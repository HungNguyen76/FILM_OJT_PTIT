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
    img1: "https://cdn.moveek.com/storage/media/cache/tall/64632cfada23e592561053.jpeg",
    name: "Bùa Hình Nhân",
    type: "kinhdi",
    rate: "normal",
    nation: "thai",
  },

  {
    id: "film2",
    img1: "https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/6/30/ofelia2-1630x2048-1688082839824462511532.jpg",
    name: "Ma Sơ Trục Quỷ",
    type: "kinhdi",
    rate: "best",
    nation: "taybannha",
  },

  {
    id: "film3",
    img1: "https://cdn.moveek.com/storage/media/cache/tall/64911e47debc6625573774.jpeg",
    name: "Tà Chú Cấm",
    type: "kinhdi",
    rate: "best",
    nation: "thai",
  },
  {
    id: "film4",
    img1: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
    name: "The Conjuring (2013)",
    type: "kinhdi",
    rate: "best",
    nation: "usa",
  },
  {
    id: "film4",
    img1: "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_.jpg",
    name: "The Conjuring 2 - Experience Enfield (2016)",
    type: "kinhdi",
    rate: "normal",
    nation: "usa",
  },
  {
    id: "film4",
    img1: "https://ss-images.saostar.vn/wp700/2019/10/18/6268864/the-conjuring-3.jpg",
    name: "The Conjuring 3: The Devil Made Me Do It (2021)",
    type: "kinhdi",
    rate: "normal",
    nation: "usa",
  },

  {
    id: "film4",
    img1: "https://upload.wikimedia.org/wikipedia/vi/thumb/b/b7/5_centimet_tr%C3%AAn_gi%C3%A2y.jpg/275px-5_centimet_tr%C3%AAn_gi%C3%A2y.jpg",
    name: "5 Centimet trên giây",
    type: "anime",
    rate: "normal",
    nation: "nhat ban",
  },
  {
    id: "film5",
    img1: "https://kenh14cdn.com/thumb_w/650/2017/anh-9-1484260065293.jpg",
    name: "Your name",
    type: "anime",
    rate: "normal",
    nation: "nhatban",
  },
  {
    id: "film6",
    img1: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    name: "Naruto Shippuden",
    type: "anime",
    rate: "normal",
    nation: "nhatban",
  },
  {
    id: "film7",
    img1: "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
    name: "Jujutsu Kaisen",
    type: "anime",
    rate: "best",
    nation: "nhatban",
  },
  {
    id: "film8",
    img1: "https://resize.cdn.otakumode.com/full/u/30e154b109b744939ce2ac9b3c31d524.jpg",
    name: "Haikyuu: To the top",
    type: "anime",
    rate: "best",
    nation: "nhatban",
  },
  {
    id: "film8",
    img1: "https://upload.wikimedia.org/wikipedia/vi/7/70/Ironmanposter.JPG",
    name: "IRON MAN (2018)",
    type: "hanhdong",
    rate: "best",
    nation: "usa",
  },
  {
    id: "film8",
    img1: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg",
    name: "The Incredible Hulk (2008)",
    type: "hanhdong",
    rate: "normal",
    nation: "usa",
  },
  {
    id: "film8",
    img1: "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
    name: "Iron Man 2 (2010)",
    type: "hanhdong",
    rate: "normal",
    nation: "usa",
  },
  {
    id: "film8",
    img1: "https://pics.filmaffinity.com/Thor-223512549-large.jpg",
    name: "Thor (2011)",
    type: "hanhdong",
    rate: "normal",
    nation: "usa",
  },
  {
    id: "film8",
    img1: "https://m.media-amazon.com/images/M/MV5BNzAxMjg0NjYtNjNlOS00NTdlLThkMGEtMjAwYjk3NmNkOGFhXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
    name: "Captain America: The First Avenger (2011)",
    type: "hanhdong",
    rate: "best",
    nation: "usa",
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
    out += `
      <div class="film col-md-3 mb-4 d-flex justify-content-center" data-id="${filmALL[i].id}">
    <div class="card rounded-lg" style="width: 18rem;">
      <img src="${filmALL[i].img1}" class="card-img-top" alt="Product Image" style="height: 400px;">
      <div class="card-body">
        <h5 class="card-title">${filmALL[i].name}</h5>
      </div>
      <!-- Container chứa nút yêu thích và xem thông tin -->
      <div class="film-actions">
       <button class="btn btn-outline-primary favorite-btn" onclick="favoriteMovie(this)">Yêu thích</button>

       <button class="btn btn-outline-info info-btn" onclick="viewDetails(this)">Xem thông tin</button>

      </div>
    </div>
  </div>`;
  }
  document.getElementById("load").innerHTML = `<div class="row">${out}</div>`;
}
function favoriteMovie(btn) {
  var filmId = btn.closest(".film").getAttribute("data-id");
  console.log("Yêu thích phim với id: ", filmId);
}

function viewDetails(btn) {
  var filmId = btn.closest(".film").getAttribute("data-id");
  console.log("Xem thông tin của phim với id: ", filmId);
}

function loadFilms(filmList, containerId) {
  var out = "";
  for (let i = 0; i < filmList.length; i++) {
    out += `
      <div class="film col-md-3 mb-4 d-flex justify-content-center" data-id="${filmList[i].id}">
        <div class="card rounded-lg" style="width: 18rem;">
          <img src="${filmList[i].img1}" class="card-img-top" alt="Product Image" style="height: 400px;">
          <div class="card-body">
            <h5 class="card-title">${filmList[i].name}</h5>
          </div>
          <!-- Container chứa nút yêu thích và xem thông tin -->
          <div class="film-actions">
            <button class="btn btn-outline-primary favorite-btn" onclick="favoriteMovie(this)">Yêu thích</button>

       <button class="btn btn-outline-info info-btn" onclick="viewDetails(this)">Xem thông tin</button>
          </div>
        </div>
      </div>`;
  }
  document.getElementById(
    containerId
  ).innerHTML = `<div class="row">${out}</div>`;
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
function locHanhDong() {
  let hanhDong = JSON.parse(localStorage.getItem("listAll"));
  const listHanhDong = [];
  for (let i = 0; i < hanhDong.length; i++) {
    if (hanhDong[i].type == "hanhdong") {
      listHanhDong.push(hanhDong[i]);
    }
  }
  localStorage.setItem("listHanhDong", JSON.stringify(listHanhDong));
}
function locNhatBan() {
  let nhatBan = JSON.parse(localStorage.getItem("listAll"));
  const listNhatBan = [];
  for (let i = 0; i < nhatBan.length; i++) {
    if (nhatBan[i].nation == "nhatban") {
      listNhatBan.push(nhatBan[i]);
    }
  }
  localStorage.setItem("listNhatBan", JSON.stringify(listNhatBan));
}
function locThai() {
  let thai = JSON.parse(localStorage.getItem("listAll"));
  const listThai = [];
  for (let i = 0; i < thai.length; i++) {
    if (thai[i].nation == "thai") {
      listThai.push(thai[i]);
    }
  }
  localStorage.setItem("listThai", JSON.stringify(listThai));
}
function locTBN() {
  let tbn = JSON.parse(localStorage.getItem("listAll"));
  const listTBN = [];
  for (let i = 0; i < tbn.length; i++) {
    if (tbn[i].nation == "taybannha") {
      listTBN.push(tbn[i]);
    }
  }
  localStorage.setItem("listTBN", JSON.stringify(listTBN));
}
function locUSA() {
  let USA = JSON.parse(localStorage.getItem("listAll"));
  const listUSA = [];
  for (let i = 0; i < USA.length; i++) {
    if (USA[i].nation == "usa") {
      listUSA.push(USA[i]);
    }
  }
  localStorage.setItem("listUSA", JSON.stringify(listUSA));
}
function locBestViewKinhDi() {
  let bestViewKinhDi = JSON.parse(localStorage.getItem("listAll"));
  const listBestViewKinhDi = [];
  for (let i = 0; i < bestViewKinhDi.length; i++) {
    if (
      bestViewKinhDi[i].rate == "best" &&
      bestViewKinhDi[i].type == "kinhdi"
    ) {
      listBestViewKinhDi.push(bestViewKinhDi[i]);
    }
  }
  localStorage.setItem(
    "listBestViewKinhDi",
    JSON.stringify(listBestViewKinhDi)
  );
}
function locBestViewAnime() {
  let bestViewAnime = JSON.parse(localStorage.getItem("listAll"));
  const listBestViewAnime = [];
  for (let i = 0; i < bestViewAnime.length; i++) {
    if (bestViewAnime[i].rate == "best" && bestViewAnime[i].type == "anime") {
      listBestViewAnime.push(bestViewAnime[i]);
    }
  }
  localStorage.setItem("listBestViewAnime", JSON.stringify(listBestViewAnime));
}
function locBestViewHanhDong() {
  let bestViewHanhDong = JSON.parse(localStorage.getItem("listAll"));
  const listBestViewHanhDong = [];
  for (let i = 0; i < bestViewHanhDong.length; i++) {
    if (
      bestViewHanhDong[i].rate == "best" &&
      bestViewHanhDong[i].type == "hanhdong"
    ) {
      listBestViewHanhDong.push(bestViewHanhDong[i]);
    }
  }
  localStorage.setItem(
    "listBestViewHanhDong",
    JSON.stringify(listBestViewHanhDong)
  );
}

function renderKinhDi() {
  locKinhDi();
  let listKinhDi = JSON.parse(localStorage.getItem("listKinhDi")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listKinhDi, "loadH");
}

function renderAnime() {
  locAnime();
  let listAnime = JSON.parse(localStorage.getItem("listAnime")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listAnime, "loadA");
}

function renderHanhDong() {
  locHanhDong();
  let listHanhDong = JSON.parse(localStorage.getItem("listHanhDong")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listHanhDong, "loadH");
}

function renderBestViewKinhDi() {
  locBestViewKinhDi();
  let listBestViewKinhDi =
    JSON.parse(localStorage.getItem("listBestViewKinhDi")) || [];
  loadFilms(listBestViewKinhDi, "loadBK");
}

function renderBestViewAnime() {
  locBestViewAnime();
  let listBestViewAnime =
    JSON.parse(localStorage.getItem("listBestViewAnime")) || [];
  loadFilms(listBestViewAnime, "loadBA");
}
function renderBestViewHanhDong() {
  locBestViewHanhDong();
  let listBestViewHanhDong =
    JSON.parse(localStorage.getItem("listBestViewHanhDong")) || [];
  loadFilms(listBestViewHanhDong, "loadBACTION");
}
function renderNhatBan() {
  locNhatBan();
  let listNhatBan = JSON.parse(localStorage.getItem("listNhatBan")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listNhatBan, "loadJ");
}
function renderThai() {
  locThai();
  let listThai = JSON.parse(localStorage.getItem("listThai")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listThai, "loadThai");
}
function renderTBN() {
  locTBN();
  let listTBN = JSON.parse(localStorage.getItem("listTBN")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listTBN, "loadTBN");
}
function renderUSA() {
  locUSA();
  let listUSA = JSON.parse(localStorage.getItem("listUSA")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listUSA, "loadUSA");
}

// Hàm xử lý tìm kiếm
function searchMovies() {
  var searchQuery = document.querySelector(".form-control").value.toLowerCase();

  var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];

  var filteredMovies = allMovies.filter(function (movie) {
    return movie.name.toLowerCase().includes(searchQuery);
  });

  loadFilms(filteredMovies, "load");

  if (filteredMovies.length === 0) {
    document.getElementById("load").innerHTML = "<p>Không tìm thấy phim</p>";
  }
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  searchMovies();
});

function showAllMovies() {
  var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];
  loadFilms(allMovies, "load");
}

document.getElementById("clearSearch").addEventListener("click", function () {
  document.querySelector(".form-control").value = "";
  showAllMovies();
});

function logout() {
  localStorage.removeItem("checkLogin");
}
