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

  loadFilms(filteredMovies, "loadH");

  if (filteredMovies.length === 0) {
    document.getElementById("loadH").innerHTML = "<p>Không tìm thấy phim</p>";
  }
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  searchMovies();
});

function showAllMovies() {
  var allMovies = JSON.parse(localStorage.getItem("listKinhDi")) || [];
  loadFilms(allMovies, "loadH");
}

document.getElementById("clearSearch").addEventListener("click", function () {
  document.querySelector(".form-control").value = "";
  showAllMovies();
});
