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

  if (userHistory.length === 0) {
    // Nếu không có phim trong lịch sử xem
    filmList.innerHTML = "<p>Không có phim trong lịch sử xem.</p>";
  } else {
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
}

function clearWatchHistory(userId) {
  // Lấy lịch sử xem phim từ local storage hoặc khởi tạo đối tượng rỗng nếu chưa có
  var history = JSON.parse(localStorage.getItem("watchHistory")) || {};

  // Xóa lịch sử của người dùng
  delete history[userId];

  // Lưu lịch sử đã cập nhật vào local storage
  localStorage.setItem("watchHistory", JSON.stringify(history));

  // Render lại lịch sử xem phim (nếu cần)
  renderWatchHistory(userId);

  // Thông báo cho người dùng biết rằng lịch sử đã được xóa thành công (nếu cần)
  alert("Lịch sử xem phim đã được xóa thành công!");
}
document.addEventListener("DOMContentLoaded", function () {
  var userId = localStorage.getItem("checkLogin"); // Lấy ID người dùng từ localStorage
  if (userId) {
    renderWatchHistory(userId);
    document
      .getElementById("clearHistoryBtn")
      .addEventListener("click", function () {
        clearWatchHistory(userId);
      });
  }
});
