function renderFavoriteFilms() {
  var favoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms")) || [];
  var out = "";
  console.log(favoriteFilms);
  for (let i = 0; i < favoriteFilms.length; i++) {
    out += `
      <div class="film col-md-3 mb-4 d-flex justify-content-center" data-id="${favoriteFilms[i].id}">
    <div class="card rounded-lg" style="width: 15rem;">
      <img src="${favoriteFilms[i].img1}" class="card-img-top" alt="Product Image" style="height: 270px;">
      <div class="card-body">
        <h5 class="card-title">${favoriteFilms[i].name}</h5>
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
  renderFavoriteFilms(); // Render lại danh sách phim yêu thích sau khi xóa
}
