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
            <button>Xóa</button>
           <button>Sửa</button>
          </div>
        

        
      </div>
      <hr />`;
  }
  document.getElementById("admin").innerHTML = `  ${out}`;
}
