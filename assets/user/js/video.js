window.onload = function () {
  var filmId = localStorage.getItem("selectedFilmId");
  video(filmId);
};
function video(filmId) {
  renderRelatedFilms(filmId);
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var video = allFilms.find((film) => film.id === filmId);

  var modal = document.getElementById("video");

  modal.innerHTML = "";

  modal.innerHTML += `
        <div class="name"> 
         <h5>${video.name} </h5>
        </div>
        <div class="video">
            <iframe
            width="800"
             height="400"
            src="${video.video}"
            title="YouTube video player"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
             allowfullscreen
                ></iframe>
       </div>
        <div class="sever">
          <h5>Chọn sever</h5>
          <hr />
          <br />
        
          <div class="vietsub-buttons"> 
          <button class="vietsub-btn"><a href="#">Sever #1</a></button>
          <button class="vietsub-btn"><a href="#">Sever #2</a></button>
        </div>
        <br />
        <hr />
        
        <div>
          <h5>Tóm tắt: </h5>
          <span>${video.noidung}</span>
        </div>
        <br />
          <hr />
          <div class="share">
          <h5>Chia sẻ: </h5>


         <div class="social-icons">
            <a href="https://www.facebook.com" class="social-icon facebook">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" class="social-icon twitter">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="https://www.pinterest.com" class="social-icon pinterest">
               <i class="fa fa-pinterest"></i>
           </a>
           <a href="https://www.whatsapp.com" class="social-icon whatsapp">
              <i class="fa fa-whatsapp"></i>
           </a>
      </div>
          <br />
          <hr />

    
       
          
          
          </div>
        </div>
    `;
  // Lấy thông tin phim từ danh sách tất cả phim
  localStorage.setItem("selectedFilmId", filmId);
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var selectedFilm = allFilms.find((film) => film.id === filmId);

  // Kiểm tra xem người dùng đã đăng nhập hay chưa và lấy ID người dùng
  var userId = localStorage.getItem("checkLogin"); // Giả sử bạn lưu ID người dùng khi đăng nhập
  if (!userId) {
    window.location.href = "/pages/pageLogin/video.html";
    return;
  }

  // Lấy lịch sử xem phim từ local storage hoặc khởi tạo đối tượng rỗng nếu chưa có
  var history = JSON.parse(localStorage.getItem("watchHistory")) || {};

  // Lấy thời gian hiện tại
  var watchDate = new Date().toISOString();

  // Tạo một mục lịch sử mới với tất cả thông tin của phim
  var newHistoryEntry = {
    ...selectedFilm,
    watchedOn: watchDate,
  };

  // Kiểm tra xem lịch sử của người dùng hiện tại đã tồn tại chưa
  if (!history[userId]) {
    history[userId] = []; // Nếu chưa, khởi tạo mảng lịch sử cho người dùng
  }

  // Thêm mục mới vào mảng lịch sử của người dùng
  history[userId].push(newHistoryEntry);

  // Lưu lịch sử đã cập nhật vào local storage
  localStorage.setItem("watchHistory", JSON.stringify(history));

  renderComments(filmId);
}

var nameLogin = JSON.parse(localStorage.getItem("nameLogin")) || {};
function renderComments(filmId) {
  var comments = JSON.parse(localStorage.getItem("comments")) || {};
  var filmComments = comments[filmId] || [];

  // Tạo hoặc cập nhật phần tử commentsContainer
  var commentsContainer = document.getElementById("commentsContainer");
  if (!commentsContainer) {
    var modal = document.getElementById("video");
    modal.innerHTML += `
      <div id="commentSection">
        <h3>Bình luận:</h3>
        <div id="commentsContainer"></div>
        <form id="commentForm">
          <textarea id="commentText" placeholder="Bình luận..." required></textarea>
            <div>
          <button class="but" type="submit">Submit</button>
            </div>
        </form>
       
        
      </div>
    `;
    commentsContainer = document.getElementById("commentsContainer");
  }

  // Cập nhật nội dung của commentsContainer với các bình luận mới
  commentsContainer.innerHTML = filmComments
    .map(function (comment) {
      // Sử dụng tên người dùng đã lưu trong mỗi bình luận
      var username = comment.username || "Ẩn danh";
      return (
        '<div class="comment"><strong>' +
        username +
        ":</strong> " +
        comment.text +
        "</div>"
      );
    })
    .join("");

  // Đăng ký event listener cho form submit nếu chưa có
  var commentForm = document.getElementById("commentForm");
  if (!commentForm.getAttribute("listener")) {
    commentForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var commentText = document.getElementById("commentText").value;
      var username = nameLogin.username || "Ẩn danh";

      if (commentText.trim() !== "") {
        // Thêm bình luận mới vào danh sách bình luận của phim
        filmComments.push({ username: username, text: commentText }); // Lưu tên người dùng cùng với bình luận
        comments[filmId] = filmComments;
        localStorage.setItem("comments", JSON.stringify(comments));

        // Hiển thị lại bình luận
        renderComments(filmId);

        // Xóa nội dung trong textarea
        document.getElementById("commentText").value = "";
      }
    });
    commentForm.setAttribute("listener", "true");
  }
}

function renderRelatedFilms(filmId) {
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var selectedFilm = allFilms.find((film) => film.id === filmId);
  var relatedFilms = allFilms.filter(
    (film) => film.type === selectedFilm.type && film.id !== filmId
  );

  var relatedFilmsContainer = document.getElementById("relatedFilms");
  relatedFilmsContainer.innerHTML = "<h3>Đề xuất: </h3>";

  var filmContainer = document.createElement("div");
  filmContainer.classList.add("relatedFilmsContainer");

  relatedFilms.forEach((film) => {
    filmContainer.innerHTML += `
      <div class="film col-md-3 mb-4 d-flex justify-content-center">

        <div class="card rounded-lg" >

        
         <img src="${film.img1}" class="card-img-top" alt="Product Image"  >

          <div class="card-body">
            <h5 class="card-title">${film.name}</h5>
          </div>
          
          <div class="film-actions">
            <button class="btn btn-outline-info info-btn" onclick="viewDetails('${film.id}')">Xem film </button>
          </div>
        </div>
      </div>
    `;
  });

  relatedFilmsContainer.appendChild(filmContainer);
}

function viewDetails(filmId) {
  video(filmId);
  renderRelatedFilms(filmId);
}
