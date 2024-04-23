document.addEventListener("DOMContentLoaded", function () {
  var userId = localStorage.getItem("checkLogin"); // Lấy ID người dùng từ localStorage
  if (userId) {
    renderWatchHistory(userId);
  }
});

function renderWatchHistory(userId) {
  var history = JSON.parse(localStorage.getItem("watchHistory")) || {};
  var userHistory = history[userId] || [];
  var filmList = document.getElementById("filmList");
  filmList.innerHTML = ""; // Xóa danh sách hiện tại

  userHistory.forEach(function (film) {
    var filmCard = document.createElement("div");
    filmCard.className = "film-card";
    filmCard.innerHTML = `
          <img src="${film.img1}" alt="${film.name}" class="film-image">
          <div class="film-info">
            <h3>${film.name}</h3>
            
            <p>Năm sản xuất: ${film.nam}</p>
            <p>Thể loại: ${film.type}</p>
            <p>Thời lượng: ${film.time}</p>
            <p>Xem vào: ${new Date(film.watchedOn).toLocaleString()}</p>
          </div>
        `;
    filmList.appendChild(filmCard);
  });
}
