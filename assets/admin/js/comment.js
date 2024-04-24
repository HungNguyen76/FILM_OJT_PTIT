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
  filmComments.forEach(function (comment, index) {
    var username = comment.username || "Ẩn danh";
    var commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML =
      "<strong>" + username + ":</strong> " + comment.text;

    // Tạo nút "Xoá" và xử lý sự kiện khi được nhấn
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Xoá";
    deleteButton.addEventListener("click", function () {
      // Xoá bình luận khỏi mảng và cập nhật lại localStorage
      filmComments.splice(index, 1);
      comments[filmId] = filmComments;
      localStorage.setItem("comments", JSON.stringify(comments));

      // Xoá bình luận khỏi giao diện người dùng
      commentsContainer.removeChild(commentElement);
    });

    // Thêm nút "Xoá" vào bình luận
    commentElement.appendChild(deleteButton);

    // Thêm bình luận vào giao diện người dùng
    commentsContainer.appendChild(commentElement);
  });
}
function logout() {
  localStorage.removeItem("checkLogin");

  localStorage.removeItem("favoriteFilms");

  window.location.href = "/pages/pageLogin/trangchu.html";
}
