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
const films = [
  {
    id: "film1",
    img1: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/437876857_1007098554112821_2529601479420935111_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eR8xzzfrD3cAb7-7X50&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfB-X703l_JV5Kof7eDb3fRANG4xISlh0u4YFCscOHWaCA&oe=6622F660",
    name: "Bùa Hình Nhân",
    nation: "my",
    nam: "2022",
    daodien: "ta",
    time: "1 tiếng 30p",
    noidung:
      "Hoon Payon: Bùa Hình Nhân Hoon Payon 2023 Tham đi một đoạn đường dài để gặp anh trai của mình, Tee, người là một vị sư. Tại chùa trên đảo Koh Donsingtham, anh gặp Jate, một nhà điêu khắc sử dụng phép thuật cho những con búp bê payon của mình. Tham đã nghe đồn rằng sư trưởng Tee đã bỏ trốn sau khi giết chết vị trưởng lão trước đó, nhưng Tham không tin rằng anh trai mình có thể giết ai đó. Anh cũng nghi ngờ lòng tin tôn giáo của người dân trong Búp bê của Ông Cụ Singtham. Anh coi đó là mù quáng mê tín chứ không phải là sự bảo vệ tâm linh. Sau đó, một loạt sự kiện tàn ác gieo rắc nỗi kinh hoàng cho làng. Một người phụ nữ mất tích. Xác chết chồng chất. Nghiêm trọng hơn, Bùa Hình Nhân của Ông Cụ Singtham bị phá hủy. Người dân trong làng tức giận và chuẩn bị một nghi thức để nguyền rủa và truy tìm tội phạm cầm dao.",
    dienvien:
      "Phuwin Tangsakyuen, Up Poompat Iam-samang, Nick Kunatip Pinpradab,",
    type: "kinhdi",
    rate: "normal",
    nation: "thai",
  },
];

// localStorage.setItem("listAll", JSON.stringify(films));

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
  console.log("Yêu thích phim với id: ", filmId);
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
