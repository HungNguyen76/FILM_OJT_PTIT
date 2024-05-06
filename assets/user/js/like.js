function renderFavoriteFilms() {
  var userId = localStorage.getItem("checkLogin");
  if (!userId) {
    // Nếu không có người dùng đăng nhập, không có phim yêu thích để hiển thị
    document.getElementById("favoriteFilms").innerHTML =
      "<p>Vui lòng đăng nhập để xem phim yêu thích.</p>";
    return;
  }

  var favoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms")) || [];
  var userFavoriteFilms = favoriteFilms.filter(
    (film) => film.userId === userId
  );
  var out = "";

  for (let i = 0; i < userFavoriteFilms.length; i++) {
    out += `
      <div class="film col-md-3 mb-4 d-flex justify-content-center" data-id="${userFavoriteFilms[i].id}">
        <div class="card rounded-lg" style="width: 15rem;">
          <img src="${userFavoriteFilms[i].img1}" class="card-img-top" alt="Product Image" style="height: 270px;">
          <div class="card-body">
            <h5 class="card-title">${userFavoriteFilms[i].name}</h5>
          </div>
          <!-- Container chứa nút yêu thích và xem thông tin -->
          <div class="film-actions">
            <button class="btn btn-outline-info info-btn" onclick="viewDetails(this)">Xem thông tin</button>
            <button class="btn btn-outline-primary favorite-btn" onclick="removeMovieFromFavorites(this)">Xoá</button>
          </div>
        </div>
      </div>`;
  }
  document.getElementById(
    "favoriteFilms"
  ).innerHTML = `<h1>Film yêu thích của bạn</h1> <div class="row">${out}</div>`;
}

function removeMovieFromFavorites(button) {
  var filmId = button.closest(".film").getAttribute("data-id");
  var favoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms")) || [];
  var updatedList = favoriteFilms.filter((film) => film.id !== filmId);
  localStorage.setItem("favoriteFilms", JSON.stringify(updatedList));
  renderFavoriteFilms();
}
function viewDetails(btn) {
  var filmId = btn.closest(".film").getAttribute("data-id");
  localStorage.setItem("selectedFilmId", filmId);
  window.location.href = "/pages/pageOut/thongtin.html";
}
