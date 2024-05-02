window.onload = function () {
  var filmId = localStorage.getItem("selectedFilmId");
  renderFilmDetails(filmId);
  renderRelatedFilms(filmId);
};
function renderFilmDetails(filmId) {
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var selectedFilm = allFilms.find((film) => film.id === filmId);

  var modalBody = document.getElementById("filmDetailsModalBody");
  modalBody.innerHTML = `

      <div class="box">
   
        <img src="${selectedFilm.img1}" alt="Film Image" class="film-image">
        
        <div class="box-right">
          <h5>${selectedFilm.name}</h5>

          <div class="box-right__under">
            <div class="title">
              <p>Đạo diễn</p>
              <p>Diễn viên</p>
              <p>Năm</p>
              <p>Quốc gia</p>
              <p>Thể loại</p>
              <p>Thời lượng</p>
          
            </div>
            <div class="colon">
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            
            </div>
            <div class="infor">
              <p>${selectedFilm.daodien}</p>
              <p>${selectedFilm.dienvien}</p>
              <p>${selectedFilm.nam}</p>
              <p>${selectedFilm.nation}</p>
              <p>${selectedFilm.type}</p>
              <p>${selectedFilm.time}</p>
              
            </div>
          </div>
        
        <hr>
        <button onclick="renderTrailers('${selectedFilm.id}')" data-toggle="modal" data-target="#exampleModalCenter">Trailer</button>
        <button onclick="watchFilm('${selectedFilm.id}')">Xem phim</button>
          <hr />
          <p>Nội Dung: ${selectedFilm.noidung}</p>
          </div>
        </div>
      </div>
    `;
}
function renderTrailers(filmId) {
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var selectedFilm = allFilms.find((film) => film.id === filmId);

  var modal = document.getElementById("detailFIlm");
  console.log("modal", modal);
  modal.innerHTML += `
        <iframe
        width="560"
        height="315"
        src="${selectedFilm.trailerUrl}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    `;
}
function viewDetails(filmId) {
  renderFilmDetails(filmId);

  renderRelatedFilms(filmId);
}
function renderRelatedFilms(filmId) {
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var selectedFilm = allFilms.find((film) => film.id == filmId);
  var selectedFilmType = selectedFilm.type;

  var relatedFilms = allFilms.filter(
    (film) => film.type == selectedFilmType && film.id !== filmId
  );
  var relatedFilmsContainer = document.getElementById("relatedFilmsContainer");
  relatedFilmsContainer.innerHTML = "";
  relatedFilms.forEach((film) => {
    var filmCard = document.createElement("div");
    filmCard.classList.add("film-card");

    filmCard.innerHTML = `
      <div class="film col-md-3 mb-4 d-flex justify-content-center">
        <div class="card rounded-lg" style="width: 15rem;">
          <img src="${film.img1}" class="card-img-top" alt="Product Image" style="height: 270px;">
          <div class="card-body">
            <h5 class="card-title">${film.name}</h5>
          </div>
          <div class="film-actions">
            <button class="btn btn-outline-info info-btn" onclick="viewDetails('${film.id}')">Xem thông tin</button>
          </div>
        </div>
      </div>
    `;
    relatedFilmsContainer.appendChild(filmCard);
  });
}
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
localStorage.setItem("selectedFilmId", filmId);

function watchFilm(filmId) {
  // Lấy thông tin phim từ danh sách tất cả phim
  localStorage.setItem("selectedFilmId", filmId);
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var selectedFilm = allFilms.find((film) => film.id === filmId);
  // Tăng số lượt xem cho phim được chọn và chuyển đổi sang số nguyên
  if (selectedFilm) {
    selectedFilm.views = (selectedFilm.views || 0) + 1; // Đảm bảo rằng views là một số và tăng nó lên
    localStorage.setItem("listAll", JSON.stringify(allFilms)); // Cập nhật lại danh sách phim với số lượt xem mới
  }

  // Kiểm tra xem người dùng đã đăng nhập hay chưa và lấy ID người dùng
  var userId = localStorage.getItem("checkLogin"); // Giả sử bạn lưu ID người dùng khi đăng nhập

  // Lấy lịch sử xem phim từ local storage hoặc khởi tạo đối tượng rỗng nếu chưa có
  var history = JSON.parse(localStorage.getItem("watchHistory")) || {};

  // Lấy thời gian hiện tại
  var watchDate = new Date().toISOString();

  // Tạo một mục lịch sử mới với tất cả thông tin của phim
  var newHistoryEntry = {
    ...selectedFilm,
    watchedOn: watchDate,
  };

  // Kiểm tra xem lịch sử của người dùng hiện tại đã tồn tại chưa
  if (!history[userId]) {
    history[userId] = []; // Nếu chưa, khởi tạo mảng lịch sử cho người dùng
  }

  // Thêm mục mới vào mảng lịch sử của người dùng
  history[userId].push(newHistoryEntry);

  // Lưu danh sách phim đã cập nhật vào local storage
  localStorage.setItem("listAll", JSON.stringify(allFilms));

  // Lưu lịch sử đã cập nhật vào local storage
  localStorage.setItem("watchHistory", JSON.stringify(history));
  // Lưu danh sách phim đã cập nhật vào local storage
  localStorage.setItem("listAll", JSON.stringify(allFilms));

  // Chuyển hướng đến trang xem phim
  var userId = localStorage.getItem("checkLogin");

  // Nếu người dùng đã đăng nhập (userId khác null), chuyển hướng đến trang "dashboard.html"
  if (userId) {
    window.location.href = "/pages/pageOut/video.html";
  } else {
    // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang "login.html"
    window.location.href = "/pages/pageLogin/video.html";
  }
}

function logout() {
  localStorage.removeItem("nameLogin");
  localStorage.removeItem("checkLogin");
  localStorage.removeItem("favoriteFilms");
  window.location.href = "/pages/pageLogin/trangchu.html";
}
