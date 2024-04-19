window.onload = function () {
  var filmId = localStorage.getItem("selectedFilmId");
  renderFilmDetails(filmId);

  renderRelatedFilms(filmId);
  // renderTrailers(filmId);
};

function renderFilmDetails(filmId) {
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var selectedFilm = allFilms.find((film) => film.id === filmId);
  console.log("selectedFilm", selectedFilm);
  var modalBody = document.getElementById("filmDetailsModalBody");
  modalBody.innerHTML = `
      <div class="box">
        <img src="${selectedFilm.img1}" alt="Film Image" style="max-width: 20%;">
        <div>
          <h5>${selectedFilm.name}</h5>
          <p>Đạo diễn: ${selectedFilm.daodien}</p>
          <p>Diễn viên: ${selectedFilm.dienvien}</p>
          <p>Năm: ${selectedFilm.nam}</p>
          <p>Quốc gia: ${selectedFilm.nation}</p>
          <p>Thể loại: ${selectedFilm.type}</p>
          <p>Thời lượng: ${selectedFilm.time}</p>
          <hr />
          <button onclick="renderTrailers('${selectedFilm.id}')" data-toggle="modal" data-target="#exampleModalCenter">Trailer</button>
          <button>Xem phim</button>
          <hr />
          <p>Nội Dung: ${selectedFilm.noidung}</p>
        </div>
      </div>
    `;
}
function renderTrailers(filmId) {
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var selectedFilm = allFilms.find((film) => film.id === filmId);

  var modal = document.getElementById("detailFIlm");
  console.log("modal", modal);

  // modal.style.display = "block";
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

function renderRelatedFilms(filmId) {
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var selectedFilm = allFilms.find((film) => film.id == filmId);

  // Lấy loại của phim đã chọn
  var selectedFilmType = selectedFilm.type;

  // Tìm các phim có cùng loại, loại bỏ phim đã chọn
  var relatedFilms = allFilms.filter(
    (film) => film.type == selectedFilmType && film.id !== filmId
  );

  // Kiểm tra xem danh sách phim liên quan có phim nào có cùng ID với phim đã render không
  var renderedFilm = allFilms.find((film) => film.id == filmId);

  // Loại bỏ phim đã render khỏi danh sách phim liên quan nếu có
  if (renderedFilm) {
    relatedFilms = relatedFilms.filter((film) => film.id !== filmId);
  }

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

function viewDetails(filmId) {
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var selectedFilm = allFilms.find((film) => film.id === filmId);
  var selectedFilmType = selectedFilm.type;

  // Tìm một phim khác có cùng thể loại trong danh sách phim
  var similarFilm = allFilms.find(
    (film) => film.type === selectedFilmType && film.id !== filmId
  );

  // Hiển thị thông tin của phim liên quan dựa trên ID
  renderFilmDetails(filmId);

  // Nếu tìm thấy phim cùng thể loại, cập nhật lại danh sách phim liên quan
  if (similarFilm) {
    renderRelatedFilms(similarFilm.id);
  } else {
    // Nếu không tìm thấy phim cùng thể loại, hiển thị danh sách phim liên quan không bao gồm phim đã chọn
    renderRelatedFilms(filmId);
  }
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

function logout() {
  localStorage.removeItem("checkLogin");
  localStorage.removeItem("favoriteFilms");
  window.location.href = "/pages/pageLogin/trangchu.html";
}
