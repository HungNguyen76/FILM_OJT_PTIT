function logout() {
  localStorage.removeItem("checkLogin");

  localStorage.removeItem("favoriteFilms");

  window.location.href = "/pages/pageLogin/trangchu.html";
}

function renderFavoriteFilms() {
  var adminFilms = JSON.parse(localStorage.getItem("listAll")) || [];
  var out = "";

  for (let i = 0; i < adminFilms.length; i++) {
    out += `
        <div class="admin-film col-md-3 mb-4 d-flex justify-content-center">
          <div class="admin-card rounded-lg" style="width: 18rem;">
            <img src="${adminFilms[i].img1}" class="card-img" alt="Product Image" style="height: 100px;">
          </div>
          <div class="card-body">
              <p > Tên: ${adminFilms[i].name}</p>
              <p>ID: ${adminFilms[i].id}</p>
              <p>Quốc gia: ${adminFilms[i].nation}</p>
              <p>Thời lượng: ${adminFilms[i].time}</p>
            </div>
            <div class="nut">
              <button data-id="${adminFilms[i].id}">Xóa</button>
            <button onclick="editFilm('${adminFilms[i].id}')">Sửa</button>


            </div>
        </div>
        <hr />
        `;
  }
  document.getElementById("admin").innerHTML = `  ${out}`;
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

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  searchMovies();
});

function showAllMovies() {
  var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];
  loadFilms(allMovies, "admin");
}

function loadFilms(filmList, containerId) {
  var out = "";
  for (let i = 0; i < filmList.length; i++) {
    out += `
        <div class="admin-film col-md-3 mb-4 d-flex justify-content-center">
          <div class="admin-card rounded-lg" style="width: 18rem;">
            <img src="${filmList[i].img1}" class="card-img" alt="Product Image" style="height: 100px;">
          </div>
          <div class="card-body">
              <p > Tên: ${filmList[i].name}</p>
              <p>ID: ${filmList[i].id}</p>
              <p>Quốc gia: ${filmList[i].nation}</p>
              <p>Thời lượng: ${filmList[i].time}</p>
            </div>
            <div class="nut">
            <button data-id="${filmList[i].id}">Xóa</button>

            <button >Sửa</button>

            </div>
      
        </div>
        <br />
        `;
  }
  document.getElementById(
    containerId
  ).innerHTML = `  <div class="row">${out}</div> <br /> `;
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
     <label for="editNation">Quốc gia:</label>
    <input type="text" id="editNation" value="${filmToEdit.nation}" required><br>
  </div>
    
<div>
  <label for="editTime">Thời lượng:</label>
    <input type="text" id="editTime" value="${filmToEdit.time}" required><br>
   
    <label for="editTime">Đạo diễn:</label>
    <input type="text" id="daodien" value="${filmToEdit.daodien}" required><br>

   <label for="editTime">Năm</label>
    <input type="text" id="nam" value="${filmToEdit.nam}" required><br>

     <label for="editTime">Diễn Viên:</label>
    <input type="text" id="dienvien" value="${filmToEdit.dienvien}" required><br>

    <label for="noidung">Noi Dung:</label>
      <textarea id="noidung" name="editDescription">${filmToEdit.noidung}</textarea><br />
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

  // Lưu lại danh sách phim vào localStorage
  localStorage.setItem("listAll", JSON.stringify(allMovies));

  // Hiển thị lại danh sách phim
  renderFavoriteFilms();

  // Xóa form chỉnh sửa
  document.getElementById("editForm").innerHTML = "";
}
