window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrolled = window.scrollY > 550;
  if (scrolled) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
var icon = document.querySelector(".icon");
var dropdownContent = document.querySelector(".dropdown-content");

icon.onclick = function () {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
};

window.onclick = function (event) {
  if (!event.target.matches(".icon")) {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }
  }
};


window.onload = function () {
  renderSapChieu();
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
    if (kinhDi[i].type == "Kinh Dị") {
      listKinhdi.push(kinhDi[i]);
    }
  }
  localStorage.setItem("listKinhDi", JSON.stringify(listKinhdi));
}

function locAnime() {
  let anime = JSON.parse(localStorage.getItem("listAll"));
  const listAnime = [];
  for (let i = 0; i < anime.length; i++) {
    if (anime[i].type == "Anime") {
      listAnime.push(anime[i]);
    }
  }
  localStorage.setItem("listAnime", JSON.stringify(listAnime));
}
function locHanhDong() {
  let hanhDong = JSON.parse(localStorage.getItem("listAll"));
  const listHanhDong = [];
  for (let i = 0; i < hanhDong.length; i++) {
    if (hanhDong[i].type == "Hành Động") {
      listHanhDong.push(hanhDong[i]);
    }
  }
  localStorage.setItem("listHanhDong", JSON.stringify(listHanhDong));
}
function locNhatBan() {
  let nhatBan = JSON.parse(localStorage.getItem("listAll"));
  const listNhatBan = [];
  for (let i = 0; i < nhatBan.length; i++) {
    if (nhatBan[i].nation == "Nhật Bản") {
      listNhatBan.push(nhatBan[i]);
    }
  }
  localStorage.setItem("listNhatBan", JSON.stringify(listNhatBan));
}
function locThai() {
  let thai = JSON.parse(localStorage.getItem("listAll"));
  const listThai = [];
  for (let i = 0; i < thai.length; i++) {
    if (thai[i].nation == "Thái") {
      listThai.push(thai[i]);
    }
  }
  localStorage.setItem("listThai", JSON.stringify(listThai));
}
function locKorea() {
  let korea = JSON.parse(localStorage.getItem("listAll"));
  const listKorea = [];
  for (let i = 0; i < korea.length; i++) {
    if (korea[i].nation == "Korea") {
      listKorea.push(korea[i]);
    }
  }
  localStorage.setItem("listKorea", JSON.stringify(listKorea));
}
function locUSA() {
  let USA = JSON.parse(localStorage.getItem("listAll"));
  const listUSA = [];
  for (let i = 0; i < USA.length; i++) {
    if (USA[i].nation == "USA") {
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
      bestViewKinhDi[i].type == "Kinh Dị"
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
    if (bestViewAnime[i].rate == "best" && bestViewAnime[i].type == "Anime") {
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
      bestViewHanhDong[i].type == "Hành Động"
    ) {
      listBestViewHanhDong.push(bestViewHanhDong[i]);
    }
  }
  localStorage.setItem(
    "listBestViewHanhDong",
    JSON.stringify(listBestViewHanhDong)
  );
}

function locSapChieu() {
  let sapChieu = JSON.parse(localStorage.getItem("listAll"));
  const listSapChieu = [];
  for (let i = 0; i < sapChieu.length; i++) {
    if (sapChieu[i].period == "sắp chiếu") {
      listSapChieu.push(sapChieu[i]);
    }
  }
  localStorage.setItem("listSapChieu", JSON.stringify(listSapChieu));
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
function renderKorea() {
  locKorea();
  let listKorea = JSON.parse(localStorage.getItem("listKorea")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listKorea, "loadKorea");
}
function renderUSA() {
  locUSA();
  let listUSA = JSON.parse(localStorage.getItem("listUSA")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listUSA, "loadUSA");
}
function renderSapChieu() {
  locSapChieu();
  let listSapChieu = JSON.parse(localStorage.getItem("listSapChieu")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listSapChieu, "loadSCh");
}

// Hàm xử lý tìm kiếm
function searchMovies() {
  var searchQuery = document.querySelector(".form-control").value.toLowerCase();

  var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];

  var filteredMovies = allMovies.filter(function (movie) {
    return movie.name.toLowerCase().includes(searchQuery);
  });

  loadFilms(filteredMovies, "search");

  if (filteredMovies.length === 0) {
    document.getElementById("search").innerHTML = "<p>Không tìm thấy phim</p>";
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
  localStorage.removeItem("nameLogin");
  localStorage.removeItem("checkLogin");
  localStorage.removeItem("favoriteFilms");
}
// Sau khi người dùng đăng nhập thành công
localStorage.setItem("checkLogin", "true");

function checkLoggedIn() {
  const userEmail = localStorage.getItem("checkLogin");
  if (userEmail) {
    return true;
  } else {
    return false;
  }
}

function favoriteMovie(btn) {
  var isLoggedIn = checkLoggedIn();
  if (!isLoggedIn) {
    alert("Vui lòng đăng nhập để thêm phim vào danh sách yêu thích.");
    return;
  }

  var filmId = btn.closest(".film").getAttribute("data-id");

  var selectedFilm = films.find((film) => film.id === filmId);
  var favoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms")) || [];
  var isFilmInFavorites = favoriteFilms.some((film) => film.id === filmId);
  if (!isFilmInFavorites) {
    favoriteFilms.push(selectedFilm);
    localStorage.setItem("favoriteFilms", JSON.stringify(favoriteFilms));
    alert("Đã thêm phim vào danh sách yêu thích.");
  } else {
    alert("Phim đã có trong danh sách yêu thích.");
  }
}
function viewDetails(btn) {
  const isLoggedIn = localStorage.getItem("checkLogin");
  if (!isLoggedIn) {
    var filmId = btn.closest(".film").getAttribute("data-id");
    localStorage.setItem("selectedFilmId", filmId);
    window.location.href = "/pages/pageLogin/thongtin.html";
  } else {
    var filmId = btn.closest(".film").getAttribute("data-id");
    localStorage.setItem("selectedFilmId", filmId);
    window.location.href = "/pages/pageOut/thongtin.html";
  }
}
