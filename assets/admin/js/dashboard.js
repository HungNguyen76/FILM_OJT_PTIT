window.onload = function () {
  renderFilmsByViews();
};
function renderFilmsByViews() {
  // Lấy danh sách tất cả phim từ local storage
  var allFilms = JSON.parse(localStorage.getItem("listAll"));

  // Sắp xếp danh sách phim theo lượt xem giảm dần
  allFilms.sort(function (a, b) {
    return b.views - a.views;
  });

  // Render danh sách phim
  var filmsContainer = document.getElementById("filmsContainer");
  filmsContainer.innerHTML = ""; // Xóa nội dung hiện có của container trước khi render lại

  allFilms.forEach(function (film) {
    filmsContainer.innerHTML += `
      <div class="film col-md-3 mb-4 d-flex justify-content-center">
        <div class="card rounded-lg" >
          <img src="${film.img1}" class="card-img-top" alt="Product Image"  style="height: 400px; width: 300px">
          <div class="card-body">
            <h5 class="card-title">${film.name}</h5>
            <p class="card-text">Lượt xem: ${film.views}</p> <!-- Hiển thị số lượt xem -->
          </div>
        </div>
      </div>
    `;
  });
}
