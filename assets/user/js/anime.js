window.onload = function () {
  renderBestViewAnime();
  renderAnime();
};
// Hàm xử lý tìm kiếm
function searchMovies() {
  var searchQuery = document.querySelector(".form-control").value.toLowerCase();

  var allMovies = JSON.parse(localStorage.getItem("listAnime")) || [];

  var filteredMovies = allMovies.filter(function (movie) {
    return movie.name.toLowerCase().includes(searchQuery);
  });

  loadFilms(filteredMovies, "loadT");

  if (filteredMovies.length === 0) {
    document.getElementById("loadT").innerHTML = "<p>Không tìm thấy phim</p>";
  }
}
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  searchMovies();
});

function showAllMovies() {
  var allMovies = JSON.parse(localStorage.getItem("listAnime")) || [];
  loadFilms(allMovies, "loadT");
}

document.getElementById("clearSearch").addEventListener("click", function () {
  document.querySelector(".form-control").value = "";
  showAllMovies();
});
