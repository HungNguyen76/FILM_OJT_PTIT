window.onload = function () {
  renderBestViewKinhDi();
  renderKinhDi();
};
// Hàm xử lý tìm kiếm
function searchMovies() {
  var searchQuery = document.querySelector(".form-control").value.toLowerCase();

  var allMovies = JSON.parse(localStorage.getItem("listKinhDi")) || [];

  var filteredMovies = allMovies.filter(function (movie) {
    return movie.name.toLowerCase().includes(searchQuery);
  });

  // Hiển thị tiêu đề "Phim mà bạn tìm"

  if (filteredMovies.length > 0) {
    // Nếu có kết quả tìm kiếm, cập nhật danh sách phim tìm kiếm
    loadFilms(filteredMovies, "loadTK");
  } else {
    // Nếu không có kết quả tìm kiếm, hiển thị thông báo "Không tìm thấy phim"
    document.getElementById("loadTK").innerHTML =
      " <hr /> <p>Không tìm thấy phim</p>";
  }
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  searchMovies();
});

function showAllMovies() {
  // Lấy danh sách tất cả các bộ phim từ localStorage, nếu không có thì trả về một mảng rỗng
  var allMovies = JSON.parse(localStorage.getItem("listKinhDi")) || [];
  // Hiển thị tiêu đề danh sách phim

  // Hiển thị tất cả các bộ phim
  loadFilms(allMovies, "loadTK");
}

document.getElementById("clearSearch").addEventListener("click", function () {
  document.querySelector(".form-control").value = "";
  showAllMovies();
});
