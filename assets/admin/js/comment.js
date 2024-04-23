var nameLogin = JSON.parse(localStorage.getItem("nameLogin")) || {};
var comments = JSON.parse(localStorage.getItem("comments")) || {};

// Lấy tất cả các phim đã được bình luận
var commentedFilms = Object.keys(comments);

// Hiển thị tất cả các bình luận
commentedFilms.forEach(function (filmId) {
  renderComments(filmId);
});

function renderComments(filmId) {
  var filmComments = comments[filmId] || [];

  var commentsContainer = document.getElementById("commentsContainer");

  // Cập nhật nội dung của commentsContainer với các bình luận mới
  filmComments.forEach(function (comment) {
    var username = comment.username || "Ẩn danh";
    var commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML =
      "<strong>" + username + ":</strong> " + comment.text;
    commentsContainer.appendChild(commentElement);
  });
}
function logout() {
  localStorage.removeItem("checkLogin");

  localStorage.removeItem("favoriteFilms");

  window.location.href = "/pages/pageLogin/trangchu.html";
}
