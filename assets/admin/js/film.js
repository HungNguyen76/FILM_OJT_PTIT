function logout() {
  localStorage.removeItem("checkLogin");

  localStorage.removeItem("favoriteFilms");

  window.location.href = "/pages/pageLogin/trangchu.html";
}

function renderFavoriteFilms() {
  var adminFilms = JSON.parse(localStorage.getItem("listAll")) || [];
  var out = "";
  console.log(adminFilms);
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
           <button>Sửa</button>
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

           <button>Sửa</button>
          </div>
    
      </div>
      <br />
      `;
  }
  document.getElementById(
    containerId
  ).innerHTML = `  <div class="row">${out}</div> <br /> `;
}
// document.getElementById("clearSearch").addEventListener("click", function () {
//   document.querySelector(".form-control").value = "";
//   showAllMovies();
//   window.location.reload();
// });
// Xử lý sự kiện click cho nút "Xóa"

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
function renderFavoriteFilms() {
  var adminFilms = JSON.parse(localStorage.getItem("listAll")) || [];
  var out = "";
  console.log(adminFilms);
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
          <button>Sửa</button>
        </div>
      </div>
      <hr />
    `;
  }
  document.getElementById("admin").innerHTML = out;
}
