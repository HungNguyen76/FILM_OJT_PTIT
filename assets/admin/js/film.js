function logout() {
  localStorage.removeItem("checkLogin");

  window.location.href = "/pages/pageLogin/trangchu.html";
}

function renderFavoriteFilms() {
  var adminFilms = JSON.parse(localStorage.getItem("listAll")) || [];
  var out =
    "<table class='table' style='border-collapse: separate; border-spacing: 0px 30px;'>"; // Bắt đầu bảng

  out += `
    <tr>
      <th>Hình Ảnh</th>
      <th>Tên Phim</th>
      <th>ID</th>
      <th>Quốc Gia</th>
      <th>Thời Lượng</th>
      <th>Hành Động</th>
    </tr>
  `;

  for (let i = 0; i < adminFilms.length; i++) {
    out += `
      <tr>
        <td style="border-bottom: 1px solid #ddd;"><img src="${adminFilms[i].img1}" alt="Product Image" style="height: 100px;"></td>
        <td style="border-bottom: 1px solid #ddd;">${adminFilms[i].name}</td>
        <td style="border-bottom: 1px solid #ddd;">${adminFilms[i].id}</td>
        <td style="border-bottom: 1px solid #ddd;">${adminFilms[i].nation}</td>
        <td style="border-bottom: 1px solid #ddd;">${adminFilms[i].time}</td>
        <td style="border-bottom: 1px solid #ddd;">
       <button data-id="${adminFilms[i].id}"><i class="fa-solid fa-trash"></i></button>

          <button onclick="editFilm('${adminFilms[i].id}')"><i class="fa-solid fa-wrench"></i></button>
        </td>
      </tr>
    `;
  }

  out += "</table>"; // Kết thúc bảng
  document.getElementById("admin").innerHTML = out;
}

function searchMovies() {
  var searchQuery = document.querySelector(".form-control").value.toLowerCase();

  var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];

  var filteredMovies = allMovies.filter(function (movie) {
    return movie.name.toLowerCase().includes(searchQuery);
  });

  loadFilms(filteredMovies, "admin");

  if (filteredMovies.length === 0) {
    document.getElementById("admin").innerHTML = "<p>Không tìm thấy phim</p>";
  }
}

document.querySelector("form").addEventListener("input", function (event) {
  event.preventDefault();
  searchMovies();
});

function showAllMovies() {
  var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];
  loadFilms(allMovies, "admin");
}

function loadFilms(filmList, containerId) {
  var out =
    "<table class='table' style='border-collapse: separate; border-spacing: 0px 30px;'>"; // Bắt đầu bảng

  out += `
    <tr>
      <th>Hình Ảnh</th>
      <th>Tên Phim</th>
      <th>ID</th>
      <th>Quốc Gia</th>
      <th>Thời Lượng</th>
      <th>Hành Động</th>
    </tr>
  `;

  for (let i = 0; i < filmList.length; i++) {
    out += `
      <tr>
        <td style="border-bottom: 1px solid #ddd;"><img src="${filmList[i].img1}" alt="Product Image" style="height: 100px;"></td>
        <td style="border-bottom: 1px solid #ddd;">${filmList[i].name}</td>
        <td style="border-bottom: 1px solid #ddd;">${filmList[i].id}</td>
        <td style="border-bottom: 1px solid #ddd;">${filmList[i].nation}</td>
        <td style="border-bottom: 1px solid #ddd;">${filmList[i].time}</td>
        <td style="border-bottom: 1px solid #ddd;">
          <button data-id="${adminFilms[i].id}"><i class="fa-solid fa-trash"></i></button>

          <button onclick="editFilm('${filmList[i].id}')"><i class="fa-solid fa-wrench"></i></button>
        </td>
      </tr>
    `;
  }

  out += "</table>"; // Kết thúc bảng
  document.getElementById(containerId).innerHTML = out;
}

document.getElementById("admin").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON" && event.target.textContent === "Xóa") {
    // Lấy ID của phim cần xóa từ thuộc tính data-id
    var filmId = event.target.dataset.id;

    // Lấy danh sách phim từ localStorage
    var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];

    // Lọc ra phim có ID không trùng với ID cần xóa
    var updatedMovies = allMovies.filter(function (movie) {
      return movie.id !== filmId;
    });

    // Cập nhật lại danh sách phim trong localStorage
    localStorage.setItem("listAll", JSON.stringify(updatedMovies));

    // Xóa phim khỏi giao diện người dùng
    event.target.parentElement.parentElement.remove();

    // Cập nhật lại giao diện
    renderFavoriteFilms();
  }
});
function editFilm(filmId) {
  var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];

  // Tìm kiếm phim cần chỉnh sửa trong danh sách
  var filmToEdit = allMovies.find(function (movie) {
    return movie.id === filmId;
  });

  // Hiển thị form chỉnh sửa thông tin phim
  document.getElementById("editForm").innerHTML = `
  <div class="editAll">
  <div>
    <label for="editName">Tên phim:</label>
    <input type="text" id="editName" value="${filmToEdit.name}" required><br>
     <label for="id">ID:</label>
    <input type="text" id="id" value="${filmToEdit.id}" required><br>
     <label for="editTime">Thể Loại:</label>
    <input type="text" id="type" value="${filmToEdit.type}" required><br>
      <label for="editNation">Poster:</label>
    <input type="text" id="img" value="${filmToEdit.img1}" required><br>
     
  </div>
    
<div>
  
   
    <label for="editTime">Đạo diễn:</label>
    <input type="text" id="daodien" value="${filmToEdit.daodien}" required><br>

   <label for="editTime">Năm</label>
    <input type="text" id="nam" value="${filmToEdit.nam}" required><br>

     <label for="editTime">Diễn Viên:</label>
    <input type="text" id="dienvien" value="${filmToEdit.dienvien}" required><br>

    <label for="noidung">Noi Dung:</label>
      <textarea id="noidung" name="editDescription">${filmToEdit.noidung}</textarea><br />
</div>
<div>
    <label for="editTime">Thời lượng:</label>
    <input type="text" id="editTime" value="${filmToEdit.time}" required><br>
    <label for="editNation">Quốc gia:</label>
    <input type="text" id="editNation" value="${filmToEdit.nation}" required><br>
      <label for="trailer">Trailer:</label>
    <input type="text" id="trailer" value="${filmToEdit.trailerUrl}" required><br>
    <label for="video">video:</label>
    <input type="text" id="video" value="${filmToEdit.video}" required><br>
    


</div>
  </div>

    <button onclick="saveEditedFilm('${filmId}')">Lưu</button>
  `;
}

function saveEditedFilm(filmId) {
  var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];

  // Tìm kiếm phim cần chỉnh sửa trong danh sách
  var filmToEditIndex = allMovies.findIndex(function (movie) {
    return movie.id === filmId;
  });

  // Lấy thông tin mới từ form
  var editedName = document.getElementById("editName").value;
  var editedNation = document.getElementById("editNation").value;
  var editedTime = document.getElementById("editTime").value;

  var id = document.getElementById("id").value;
  var img = document.getElementById("img").value;
  var daodien = document.getElementById("daodien").value;

  var nam = document.getElementById("nam").value;
  var type = document.getElementById("type").value;
  var dienvien = document.getElementById("dienvien").value;
  var noidung = document.getElementById("noidung").value;
  var trailer = document.getElementById("trailer").value;
  var video = document.getElementById("video").value;

  // Cập nhật thông tin phim
  allMovies[filmToEditIndex].name = editedName;
  allMovies[filmToEditIndex].nation = editedNation;
  allMovies[filmToEditIndex].time = editedTime;

  allMovies[filmToEditIndex].id = id;
  allMovies[filmToEditIndex].img1 = img;
  allMovies[filmToEditIndex].daodien = daodien;

  allMovies[filmToEditIndex].nam = nam;
  allMovies[filmToEditIndex].type = type;
  allMovies[filmToEditIndex].dienvien = dienvien;

  allMovies[filmToEditIndex].noidung = noidung;
  allMovies[filmToEditIndex].trailerUrl = trailer;

  allMovies[filmToEditIndex].video = video;

  // Lưu lại danh sách phim vào localStorage
  localStorage.setItem("listAll", JSON.stringify(allMovies));

  // Hiển thị lại danh sách phim
  renderFavoriteFilms();

  // Xóa form chỉnh sửa
  document.getElementById("editForm").innerHTML = "";
}
document.getElementById("admin").addEventListener("click", function (event) {
  if (
    event.target.tagName === "BUTTON" &&
    event.target.querySelector("i").classList.contains("fa-trash")
  ) {
    // Lấy ID của phim cần xóa từ thuộc tính data-id
    var filmId = event.target.dataset.id;

    // Lấy danh sách phim từ localStorage
    var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];

    // Lọc ra phim có ID không trùng với ID cần xóa
    var updatedMovies = allMovies.filter(function (movie) {
      return movie.id !== filmId;
    });

    // Cập nhật lại danh sách phim trong localStorage
    localStorage.setItem("listAll", JSON.stringify(updatedMovies));

    // Xóa phim khỏi giao diện người dùng
    event.target.parentElement.parentElement.remove();

    // Cập nhật lại giao diện
    renderFavoriteFilms();
  }
});
