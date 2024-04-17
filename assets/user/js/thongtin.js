window.onload = function () {
  var filmId = localStorage.getItem("selectedFilmId");
  renderFilmDetails(filmId);
};

function renderFilmDetails(filmId) {
  var selectedFilm = JSON.parse(localStorage.getItem("listAll")).find(
    (film) => film.id === filmId
  );

  var modalBody = document.getElementById("filmDetailsModalBody");
  modalBody.innerHTML = `
  <div class="box">
    <img src="${selectedFilm.img1}" alt="Film Image" style="max-width: 30%;">
    
    <div>
        <h5>${selectedFilm.name}</h5>
        <p>Đạo diễn: ${selectedFilm.daodien}</p>
        <p>Diễn viên: ${selectedFilm.dienvien}</p>
        <p>Năm: ${selectedFilm.nam}</p>
        <p>Quốc gia: ${selectedFilm.nation}</p>
         <p>Thể loại: ${selectedFilm.type}</p>
          <p>Thời lượng: ${selectedFilm.time}</p>

        <hr />
        <button>Trailer</button>
        <button>Xem phim</button>

        <hr />
        <p>Nội Dung: ${selectedFilm.noidung}</p>
    </div>
  
 </div>
    
   

  `;

  $("#filmDetailsModal").modal("show");
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
