function renderWatchHistory(userId) {
  // Lấy lịch sử xem phim từ local storage dựa trên userId
  var allHistory = JSON.parse(localStorage.getItem("watchHistory")) || {};
  var films = allHistory[userId] || []; // Lấy lịch sử xem phim của người dùng cụ thể
  var out = "";

  for (let i = 0; i < films.length; i++) {
    var film = films[i];
    out += `
    <h1>heeeeeee</h1>
            <div class="film-card">
                <img src="${film.img1}" alt="${
      film.name
    }" class="film-history-image">
                <div class="film-info">
                    <h5>${film.name}</h5>
                    <p>Đạo diễn: ${film.daodien}</p>
                    <p>Diễn viên: ${film.dienvien}</p>
                    <p>Năm: ${film.nam}</p>
                    <p>Quốc gia: ${film.nation}</p>
                    <p>Thể loại: ${film.type}</p>
                    <p>Thời lượng: ${film.time}</p>
                    <p>Xem vào: ${new Date(film.watchedOn).toLocaleString()}</p>
                </div>
            </div>`;
  }
  document.getElementById(
    "watchHistory"
  ).innerHTML = `<h1>Lịch sử xem phim của bạn</h1> <div class="row">${out}</div>`;
}

// Gọi hàm này với ID người dùng hiện tại khi cần render lịch sử xem

window.onload = function () {
  var currentUserId = "178716907"; // Thay thế bằng ID người dùng thực tế
  renderWatchHistory(currentUserId);
};
